
import React from 'react';

const { Component, PropTypes } = React;

class BlogEntry extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="blogEntry">
        <h2 className="title">
          {this.props.title}
        </h2>
        <div className="date">
          {this.props.date}
        </div>
        <div className="body">
          <a> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id erat placerat, viverra tortor eleifend, efficitur metus. Pellentesque eu neque ante. Maecenas efficitur tellus dolor, in sodales mauris pulvinar ut. Fusce risus felis, pretium at ex in, tincidunt lobortis nulla. Phasellus libero metus, mattis a ex quis, convallis dignissim augue. Aliquam non urna non nulla suscipit luctus at at ipsum. Quisque imperdiet erat sit amet purus venenatis dignissim sit amet quis nunc. Proin bibendum molestie nisl, ut ultricies eros lacinia at. Aliquam interdum elementum lacus sollicitudin consequat. Duis laoreet ante nulla, quis dapibus odio semper ac. Sed quam dolor, scelerisque vel ligula sed, facilisis tempor lacus. Nulla porttitor orci sed consequat hendrerit. Nullam ut vulputate mauris, vitae semper massa. Integer ut pharetra ligula, pellentesque ullamcorper urna. Sed id velit efficitur, venenatis neque vitae, gravida tortor.

            Maecenas lorem felis, cursus ac risus eu, faucibus fermentum ligula. Quisque sed nibh justo. Donec posuere gravida odio, eget bibendum justo pharetra quis. Duis tincidunt velit eu purus consequat, eget vestibulum tortor dignissim. In velit risus, euismod quis mollis ut, pulvinar at velit. Aliquam facilisis dignissim metus, vel commodo odio maximus quis. Vivamus arcu nulla, sagittis sed tempor vel, vehicula sit amet diam. Etiam nec turpis mollis, imperdiet est at, pharetra lorem. Cras bibendum sapien vitae ligula tincidunt semper. Phasellus mattis mauris at nulla imperdiet venenatis. Proin ac viverra justo. Ut quis interdum risus, eget feugiat erat. Sed urna mauris, fringilla nec facilisis venenatis, sollicitudin quis lectus. Ut efficitur quam ex, non tincidunt eros pulvinar ornare.

            Nam tempor vestibulum luctus. Pellentesque nec mauris et ante rhoncus consectetur non eget urna. Aliquam vitae mauris felis. Etiam efficitur nulla dolor, sit amet mollis sapien maximus eu. Sed ipsum dolor, sollicitudin sed mollis at, commodo imperdiet nulla. Proin eget felis blandit, imperdiet justo sit amet, fermentum neque. Vestibulum eu risus sodales, euismod est nec, ullamcorper ligula. Nullam ultrices fringilla diam, bibendum accumsan odio ultricies eu. Morbi posuere a ex posuere convallis. Donec volutpat justo vel ipsum malesuada tincidunt. Vivamus congue finibus nulla, nec molestie odio lobortis sed. In consectetur commodo commodo. Maecenas sagittis, enim sed commodo lobortis, quam ex viverra lacus, eget facilisis tellus odio vitae urna. Praesent a varius nibh, id condimentum sem. Maecenas posuere, felis quis ultricies finibus, lacus purus sagittis neque, a laoreet orci libero sed augue.

            In hac habitasse platea dictumst. Ut ac suscipit ipsum, eu finibus risus. Nam maximus interdum quam, nec vulputate nisl maximus ut. Vivamus cursus et nulla in scelerisque. Mauris ornare massa in lorem fermentum varius. Ut id eros sem. Donec lacinia magna ut erat elementum tempus. Curabitur vitae eros congue, varius mi sed, aliquam metus. Proin sagittis leo accumsan rutrum vulputate.

            In sollicitudin tempus faucibus. Nam commodo elit ac bibendum eleifend. Ut ac magna dolor. Praesent bibendum, arcu id maximus vehicula, enim nibh gravida eros, ac feugiat eros odio sed eros. Proin a condimentum ante. Aliquam at lacinia eros. Vestibulum non nulla cursus, fringilla dui eget, lacinia arcu. Donec fringilla, lectus at ornare egestas, dolor ipsum cursus est, sit amet sollicitudin turpis nisi et diam. Nullam tortor orci, placerat ut nisi a, blandit maximus mauris.</a>
        </div>
      </div>
    );
  }
};

BlogEntry.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};


module.exports = BlogEntry;