ECHO Shuting down CADDY and subprocesses (fastcgi).  
REM /f forces shutdown so prevents graceful shutdown. This has  a small chance of losing a request. 
REM Shutdown scripts set in caddyfile will NOT run. 
REM Should be used in conjunction with a runCaddy.bat which will immediately restart caddy 
REM /t terminates child processes eg. php-cgi fastcgi instances
taskkill /IM caddy.exe /f /t
