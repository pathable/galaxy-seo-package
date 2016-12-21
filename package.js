Package.describe({
  name: 'mdg:seo',
  version: '1.1.0',
  // Brief, one-line summary of the package.
  summary: 'Provide SEO support for enabled apps.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/meteor/galaxy-seo-package',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.imply('dferber:prerender@2.2.2_3');
});
