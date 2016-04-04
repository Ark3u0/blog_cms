
describe('jsonRequest', () => {
  const fetchStub = sinon.stub();
  jest.setMock("../fetch_api.js", fetchStub);

  const jsonRequest = require('../json_request');

  beforeEach(() => {
    fetchStub.reset();
  });

  describe('fetching local files', () => {
    pit('should resolve with data and success', () => {
      const data = {id: 'some_id'};
      fetchStub.returns(Promise.resolve({success: true, json: () => {return Promise.resolve(data)}}));
      return jsonRequest("a json source with an id").then((response) => {
        expect(response.json.id).to.eql('some_id');
        expect(response.success).to.eql(true);
      });
    });

    pit('should reject on fetch error with message', () => {
      const data = {};
      fetchStub.returns(Promise.reject({}));
      return jsonRequest("an invalid source").then(() => {throw "Request should have rejected."}).catch((response) => {
        expect(response.json).to.eql({});
        expect(response.success).to.eql(false);
        expect(response.message).to.eql("Error in fetch.");
      });
    });

    pit('should reject on invalid json', () => {
      const data = {};
      fetchStub.returns(Promise.resolve({success: true, json: () => {return Promise.reject({})}}));
      return jsonRequest("a valid source with invalid json").then(() => {throw "Request should have rejected."}).catch((response) => {
        expect(response.json).to.eql({});
        expect(response.success).to.eql(false);
        expect(response.message).to.eql("Error in response json.");
      });
    });
  });
});