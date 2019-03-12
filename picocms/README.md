# PicoCMS Caddyfile

This example meets basic url rewriting for [PicoCMS](https://picocms.org) using PHP-FPM.

## Rewrite rules explained

1. If the client asks for unwanted files or directories, we send a 404 error response
2. Rewrite all others

Note that I've enabled Pico's url rewriting awarness by adding the ENV variable.
