# Caddy as reverse-proxy for Nextcloud serving nginx as upstream-backend!

  - _Caddyfile:_ Config file for Caddy Web Server
  - _nginx.conf:_ Config file for nginx backend server

```
/var/www/html
├── nextcloud
│   ├── 3rdparty
│   ├── apps
│   ├── config
│   ├── core
│   ├── data
│   ├── lib
│   ├── ocm-provider
│   ├── ocs
│   ├── ocs-provider
│   ├── resources
│   ├── settings
│   ├── themes
│   ├── updater
│   ├── index.php
│   └── ...
├── index.html
└── info.php
```

These config examples are for the specific case, in that the user wants to put the nextcloud folder, containing all the files, into the root html directory, while still maintaining runability for PHP scripts put directly in the root html folder.

Have fun! :-)