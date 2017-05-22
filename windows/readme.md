### Caddy Run Scripts on Windows

I use these 2 scripts successfully in production.

###Startup

Run `runCaddy.bat` which will execute your statement to start caddy.  This script will restart caddy whenever it is shut down.

**Issues to be solved**

PHP FastCGI by default will terminate after 500 requests unless 

    set PHP_FCGI_MAX_REQUESTS=0

is called which prevents this.  However the 500 limit is set for good reason to prevent memory leaks etc.  However it leaves it up to the user to figure out the best way to restart the fast-cgi server.  So even if you set the above you should also find a way to restart your php fast-cgi server reguarily.

**Shutdown Script**

I have solved this in my production environment (not very heavy usage) by 

- Running caddy in a `.bat` file with a loop, which restarts caddy whenever it is shutdown. 
- A second script runs which kills the caddy task and all its sub tasks (php-cgi.exe).
- A scheduled task that runs reguarily and calls the shutdown script (in my case 5 hours but could be much more frequently)


**Warning**

The script calls `taskkill` with the `/f` flag which forces a shutdown (there is no simply way of sending a ctrl-c programatically on windows).  This prevents caddy from doing a graceful shutdown and it is possible that a request may be lost.  It also prevents any `shutdown` directives in your caddy file from running.  

Other than that I have had it running perfectly for several months now.

