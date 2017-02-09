### Running PHP Fast-cgi on windows

Lots of examples are available for running php using fast-cgi on linux, this example shows how to do it on Windows.

The caddyfile includes the line to start a php fastcgi server on startup

>  startup c:\path\to\php\php-cgi.exe -b 6545 &

This starts a fastcgi server on localhost port 6545.  The & ensures that the command doesnt block caddy from continuing

Combine this with some scripts to restart caddy and the php fastcgi on regular intervals and you have a very robust setup for windows.