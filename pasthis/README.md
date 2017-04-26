# Drone

This is an example configuration on how to use [Pasthis](https://github.com/moulecorp/pasthis) with Caddy.

The configuration takes following assumptions:

1. Pasthis is located in `/var/www/pasthis`,
2. You use the domain name `paste.yourdomain.net`,
3. Your email address to be used for Let's Encrypt support is `admin@paste.yourdomain.net`.
4. PHP-FPM socket is `/var/run/php5-fpm.sock`

Follow the [additional simple instructions](https://github.com/moulecorp/pasthis/blob/master/README.md) on how to setup, maintain and update Pasthis.
