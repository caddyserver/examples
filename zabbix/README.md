Zabbix
------

If you allready have a zabbix server, but want to switch the apache it uses for a caddyserver, the Caddyfile included may help you.

Beware, you need to turn off the apache before you can start caddy, as both are trying to bind the same ports (probably).

`apache2ctl stop`

Also, this assumes, you have the php5-fpm, which usually will be installed, still running with the default socket.
