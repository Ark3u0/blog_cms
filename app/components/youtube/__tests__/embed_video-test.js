
describe('embedVideo', () => {
  const youTubePlayerStub = sinon.stub();
  const onStub = sinon.stub();
  jest.setMock('youtube-player', youTubePlayerStub);

  const EmbedVideo = require('../embed_video');
  const config = require('../../../../config');

  beforeEach(() => {
    youTubePlayerStub.reset().returns({on: onStub});
    onStub.reset();
  });

  it('initializes YouTubePlayer on componentDidMount', () => {
    const embedVideo = renderIntoDocument(<EmbedVideo/>);
    expect(youTubePlayerStub).to.be.calledWith("player", {width: 840, height: 472, videoId: config.videoId})
    expect(onStub).to.be.calledWith('ready', sinon.match.func);
    expect(onStub).to.be.calledWith('stateChange', sinon.match.func);
    expect(embedVideo.state.player).to.be.eql({on: onStub});
  });

  it('parses event data on player state change', () => {
    const embedVideo = renderIntoDocument(<EmbedVideo/>);
    embedVideo.onPlayerStateChange({data: "{\"info\":1}"});
    expect(embedVideo.state.playerState).to.be.eql('playing');
  });

});