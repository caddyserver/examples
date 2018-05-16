# Radicale

This is an example configuration on how to use
[Radicale](https://radicale.org/) CalDav and CardDav server with
Caddy.

This example assumes that Radicale is running locally and is listening
on port 5232 which is the default. The example also assumes that
Radicale will be available directly at https://dav.example.org/.

## Other use-cases

If you want Radicale to be served at a path below `/`, you need to
adjust the [`X-Script-Name`](https://radicale.org/proxy/) header in
the [CaddyFile](./Caddyfile).
