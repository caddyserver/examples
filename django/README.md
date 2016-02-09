# Django

This is an example configuration for a django project, running with gunicorn.
At the moment, caddy doesn't support uwsgi protocol, and the best option, 
is to proxy the requests to the app server.

1. Install gunicorn in your app environment: `pip install gunicorn`
2. Launch gunicorn: `gunicorn -b "127.0.0.1:8000" project.wsgi`
    Usually, you will have your gunicorn script on a supervisor, or 
    something else


3. Proxy requests from caddy to gunicorn.
4. Take care of your statics and medias
