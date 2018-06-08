### Running PHP Fast-cgi on windows

Lots of examples are available for running php using fast-cgi on linux, this example shows how to do it on Windows.

The Caddyfile includes the line to start a php fastcgi server on startup

>  on startup c:\path\to\php\php-cgi.exe -b 6545 &

This starts a fastcgi server on localhost port 6545.  The & ensures that the command doesn't block caddy from continuing.

The php-cgi process will be shutdown automatically when caddy stops.

