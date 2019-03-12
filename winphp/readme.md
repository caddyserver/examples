### Running PHP Fast-cgi on windows

This example shows how to run PHP on Windows. The Caddyfile uses a file named php_cgi.bat to start PHP.

There's a known limitation when php-cgi.exe is executed by itself. php-cgi.exe quits after exactly 500 hits.

This issue is mentioned there:
https://stackoverflow.com/questions/12487147/php-cgi-exe-quits-after-exactly-500-hits
https://stackoverflow.com/questions/23279497/php-cgi-stops-working-randomly-without-error-log

This line in php_cgi.bat ensures this issue doesn't happen:
> SET PHP_FCGI_MAX_REQUESTS=0 

Another option if you’re worried on memory leaks in php_cgi.bat is to use php_cgi2.bat.

Using this command directly in a Caddyfile isn't recommended:
> on startup c:\path\to\php\php-cgi.exe -b 6545 &

The php-cgi process(e)s will be shutdown automatically when caddy stops.