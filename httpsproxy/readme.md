Add HTTPS to an existing website
------------------------

Setting up a very simple proxy to serve your existing site over **HTTPS** without changing your existing installation 
*(other than the port its served on)*.

The Caddyfile shows how you can use caddy to listen on ports 80 & 443 and sit in front of another webserver such as apache which is serving on a different port (3333 in this case; see Caddyfile).
