A blog website with a simple CMS for uploading photos, referencing videos from youtube, and making blog posts.


Contributors:
- Steven Garcia


Dependencies:
- Node >= 4.*
- Npm >= 2.*


To build:
1. Run NPM install
2. Bundle javascript with 'gulp browersify'
3. Open up index.html to see front-end (Note: backend server to serve up html has not been built yet)


Testing:
Tests are written using jest and jasmine with additional tools specified in jestSetup.js (i.e. sinon, chai, ReactTestUtils, etc.).
To run tests, run 'gulp test'.
To match on test names, run 'gulp test -s <substring-in-name>'


File Watching:
For development, you might not want to have to run browserify to rebuild after every JS change. To watch for file changes and bundle on the fly, run gulp default or 'gulp watchify'


Debug Mode:
To see the source code when debugging in the browser, you need to generate a sourcemap and not minify the code. To run in debug mode, add the '-d' flag when running browserify, watchify, or gulp default.
