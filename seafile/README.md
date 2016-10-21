# Seafile

This is an example configuration on how to use [Seafile](https://www.seafile.com/) with Caddy.

To make Seafile work with Caddy ensure to have two separate virtual hosts configured in your Caddyfile.
Combining the two proxy directives under a single virtual host entry will cause problems when uploading
and downloading files in Seafile.

Please be sure to change with your actual values.