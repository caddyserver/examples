# Basic Auth HTTP proxy with Caddy server

In this document you will learn on how to set up Caddy server as a basicauth proxy in front of a http server.
For more information, see the [http.basicauth](https://caddyserver.com/docs/basicauth) and [http.proxy](https://caddyserver.com/docs/proxysection) of the documentation.

#### Prerequisites

* You have a http server running on localhost or an external resource
* You have Caddy server installed, if not follow [Getting Started with Caddy](https://caddyserver.com/docs/getting-started)

#### Start caddy server

```
$ ./caddy
Activating privacy features... done.
your.public.com:443
your.public.com:80
```