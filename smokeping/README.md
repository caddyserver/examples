# Smokeping

This is an example configuration on how to use [Smokeping](https://oss.oetiker.ch/smokeping/) with Caddy.

## Prerequisites

Smokeping needs the following requirments to run properly with caddy:

- fcgiwrap installed

On Ubuntu / Debian Linux, we can install them using the following commands:

````
sudo apt install fcgiwrap
````

The directories of the files that smokeping used in the Caddyfile are the default values of the smokeping installed from the package manager (e.g. apt), please be sure to change it with your actual values.
