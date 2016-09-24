HTTPS an existing website
------------------------

Setting up a very simple proxy to serve your existing site over **HTTPS** without changing your existing installation *(other than the port its served on)*.

The caddyfile shows how you can use caddy to listen on 80 & 443 and sit infront of another webserver such as apache which is serving on differnt port (3333 in caddyfile) .

Instant HTTPS for an existing website without rewrite.
