# Nextcloud

This is an example configuration of how to use [Nextcloud](https://nextcloud.com/) with caddy.

The configuration is based on [this](https://caddyserver.com/blog/caddy_and_owncloud) blog post.

## Notes
* PHP-FPM requests are accepted on a TCP sockets instead of a Unix socket for optimal integration with caddy. To achieve this replace `listen = /run/php/php7.0-fpm.soc` to `listen = 127.0.0.1:9000` in `/etc/php/7.0/fpm/pool.d/www.conf` on Ubuntu 14.04.