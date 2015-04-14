Package.describe({
  name: 'kodamirmo:parse',
  version: '1.4.3',
  summary: 'Latest version Parse JS SDK',
  git: 'https://github.com/kodamirmo/ParseMeteor.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('parse.js','server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kodamirmo:parse');
  api.addFiles('parse-tests.js');
});
