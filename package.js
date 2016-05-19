Package.describe({
  name: 'tmeasday:publish-release-test',
  version: '0.0.4',
  summary: 'testing versions',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.addFiles('publish-release-test.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('tmeasday:publish-release-test');
  api.addFiles('publish-release-test-tests.js');
});
