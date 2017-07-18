# Minio Object storage with Caddy server

[Minio](https://www.minio.io) is an Open Source object storage. If you want to inherit webserver features like load balancing, IP filtering and monitoring you can use Caddy in front of Minio. 

In this document you will learn on how to set up Caddy server as a proxy in front of Minio.

#### Prerequisites

* You have Minio Client installed, if not follow [mc install instructions](https://docs.minio.io/docs/minio-client-quick-start-guide)
* You have a Minio Server configured & running, if not follow [Minio Server install instructions](https://docs.minio.io/docs/minio)
* You have Caddy server inatalled, if not follow [Getting Started with Caddy](https://caddyserver.com/docs/getting-started)

#### Start Minio server

```sh
$ ./minio --address localhost:9000 server <your_export_dir>
```

#### Start caddy server

```sh
$ ./caddy
Activating privacy features... done.
your.public.com:443
your.public.com:80
```

You'll need to have caddy 0.9 installed for this to work
