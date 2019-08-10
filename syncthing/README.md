# Syncthing

An example configuration for setting up Caddy proxy for [Syncthing](https://syncthing.net/) to proxy from your localhost.

For security reasons and to prevent DNS rebinding attacks syncthing doesn't allow access to GUI from proxies when bound to localhost. When accessing it via a proxy it throws the error *host check error*. To avoid this make sure you disable this check by either going to Settings > Advanced > and selecting the *insecureSkipHost* to True or editing the config.xml file and adding the below node to the *gui* section.
```
<gui enabled="true" tls="false">
    <insecureSkipHostcheck>true</insecureSkipHostcheck> # ADD THIS
</gui>
```
Make sure you add authentication to your web GUI when doing so. Please refer the [Syncthing FAQ](https://docs.syncthing.net/users/faq.html?highlight=host%20check%20error#why-do-i-get-host-check-error-in-the-gui-api) for more details.

Please update the Caddyfile with the actual *webserver address* and *listen port* for the syncthing process on your host machine.
