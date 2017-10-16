# Flask

This is an example configuration for a Flask project, running with [Gunicorn](http://gunicorn.org/).
At the moment, Caddy doesn't support the uwsgi protocol, however check [this issue](https://github.com/mholt/caddy/issues/176) for updates. Presently the best option is to proxy the requests to the app server. 

1. Install Gunicorn in your app environment:

    `pip install gunicorn`

2. Launch Gunicorn:

    `gunicorn -b "127.0.0.1:8000" project.wsgi`

    Usually, you will have your Gunicorn script on a supervisor, or 
    something else

3. Proxy requests from Caddy to Gunicorn.
