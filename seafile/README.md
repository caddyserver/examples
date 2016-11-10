# Seafile

This is an example configuration on how to use [Seafile](https://www.seafile.com/) with Caddy.

To make Seafile work with Caddy ensure to have two separate sites configured in your Caddyfile for the host.
Combining the two proxy directives under a single site entry will cause problems when uploading and downloading
files in Seafile.

Please be sure to change with your actual values.
