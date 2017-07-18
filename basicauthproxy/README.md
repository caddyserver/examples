# Basic Auth HTTP proxy with Caddy

In this document you will learn on how to set up Caddy as a basicauth proxy in front of a http server.
For more information, see the [http.basicauth](https://caddyserver.com/docs/basicauth) and [http.proxy](https://caddyserver.com/docs/proxy) of the documentation.

#### Prerequisites

* You have a http server running on localhost or an external resource
* You have Caddy installed, if not follow [Getting Started with Caddy](https://caddyserver.com/docs/getting-started)

#### Start Caddy

```
$ ./caddy
Activating privacy features... done.
your.public.com:443
your.public.com:80
```