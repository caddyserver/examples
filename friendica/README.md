# Friendica

This Caddyfile is tested to be working with Friendica 3.5.2.

It also should work with Friendica 3.x versions and **maybe** lower.

## Replaceable things

To get this configuration working you should only replace ``server_name``
in the beginning of Caddyfile, path (or IP) to PHP socket and root/*_log
parameters.

For FastCGI it is recommended to use network socket instead of
filesystem one, PHP can be unpredictable about filesystem socket.
See [documentation](https://caddyserver.com/docs/fastcgi) on how to
specify FastCGI socket.
