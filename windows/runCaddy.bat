TITLE Running Caddy Webserver
ECHO Starting CADDY .
set PHP_FCGI_MAX_REQUESTS=0
:start
 
C:\pathto\caddy\caddy.exe -version
C:\pathto\caddy\caddy.exe -quic -conf="C:\pathto\caddy\caddyfile" -log c:\pathto\logs\Caddyrunlog.log

REM loop to restart - http://stackoverflow.com/a/34458348/6244
ECHO ReStarting Caddy after shutdown 
Echo Restarting Caddy after Shutdown >> c:\pathto\logs\filerestarts.txt
 date /t >>  c:\pathto\logs\filerestarts.txt
 time /t >> c:\pathto\logs\filerestarts.txt
 date /t 
 time /t 
goto start