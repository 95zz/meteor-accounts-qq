Package.describe({
  summary: "QQ account login for meteor",
  "version": "0.0.7",
  "git": "https://github.com/95zz/meteor-accounts-qq",
  "name": "jxtpro:accounts-qq"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.0.3");
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);

  api.use('oauth', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('http', ['server']);
  api.use('templating', 'client');
  api.use('random', 'client');
  api.use('underscore', ['client', 'server']);
  api.use('service-configuration', ['client', 'server']);

  api.addFiles('qq_client.js', 'client');
  api.addFiles('qq_server.js', 'server');
  api.addFiles("qq.js");

  api.export('Qq');

  api.addFiles('qq_login_button.css', 'client');

  api.addFiles([
    'qq_configuration.html',
    'qq_configuration.js',
  ],'client');
});
