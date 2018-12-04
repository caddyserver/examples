# Discourse

Running [Discourse](https://www.discourse.org/) with Caddy is very easy. After you've installed Discourse, you need to adjust the container's configuration slightly.

`cd /var/discourse`

`sudo nano containers/app.yml`

Find the line that says `expose:` and change that section to:

```yaml
expose:
  - "8080:80"   # http
# - "443:443"   # https
```

These lines map host ports to container ports. So, we set the 'real' port 8080 to map to the container's port 80. You can change `8080` to be any high port number you want. Then we disable the 443 mapping since Caddy terminates the TLS for us.

Also comment the lines dealing with certificates, as now Caddy will take care of that. 

```
#  - "templates/web.ssl.template.yml"
#  - "templates/web.letsencrypt.ssl.template.yml"
```

See enclosed Caddyfile for how to reverse-proxy into Discourse. Very simple, as you would expect.

After you've changed app.yml and started Caddy, restart your container:

`sudo ./launcher rebuild app`

After a few minutes your Discourse installation should be online with Caddy.
