# Stikked

Stikked is a fully featured pastebin clone.

This is an example configuration on how to handle the rewrites [Stikked](https://github.com/claudehohl/Stikked) with Caddy.

The configuration takes following assumptions:

1. Stikked is located in `/var/www/paste.yourdomain.com`,
2. You use the domain name `paste.yourdomain.com`,
3. PHP-FPM socket is `php7.0-fpm.sock`

Follow the [additional simple instructions](https://github.com/claudehohl/Stikked/blob/master/README.md) on how to setup, maintain and update Pasthis.

##Additional Things to Note

I did not handle any of the security stuff (restricting access to directories and handling error pages) since that seemed relatively simple to copy from the various .htaccess files [found here.](https://github.com/claudehohl/Stikked/tree/master/htdocs)

I used [this](https://github.com/caddyserver/examples/blob/master/pasthis/README.md) as a template for this README. Credit to the people who have contributed to that example.
