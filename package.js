Package.describe({
  name: 'pathable:seo',
  summary: 'Provide SEO support for enabled apps.',
  version: '3.2.1_1',
  git: 'https://github.com/meteor/galaxy-seo-package',
});

Npm.depends({
  'prerender-node': '3.2.1',
});

Package.onUse(function packageConfiguration(api) {
  api.use('modules');
  api.use(['static-html'], 'client');
  api.use(['webapp'], 'server');
  api.export(['PrerenderIO'], 'server');
  api.versionsFrom('1.4');  // prerender-node requires Node 4
  api.mainModule('server/prerender.js', 'server');
  api.addFiles('client/prerender.html', 'client');
});
