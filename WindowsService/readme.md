## Running Caddy as a Windows Service


To run Caddy as a service, make sure you select the [`hook.service`](https://caddyserver.com/docs/hook.service) plugin on the [download page on caddyserver.com](https://caddyserver.com/download).

### To install Caddy Service


You need to run the caddy `-service install` command with all the parameters you need.  You cannot change these afterward, you will need to run the uninstall command and then install again.
Also you must specify the Caddyfile to use even if it is in the same dir as your executable.
eg.
```
caddy -service install -conf="C:\Caddy\Caddyfile" -log "C:\Caddy\ServiceRun.log" 
```

Once you have run this you can run the following commands



### Start a Caddy service:

```
caddy -service start [-name optionalName]
```

### Stop a Caddy service:

```
caddy -service stop [-name optionalName]
```

### Restart a Caddy service:

```
caddy -service restart [-name optionalName] 
```

### Uninstall a Caddy service:

```
caddy -service uninstall [-name optionalName]
```