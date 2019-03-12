import sys
import os
import logging
import traceback

from flup.server.fcgi import WSGIServer
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

def main(app):
    try:
        WSGIServer(app, bindAddress='./hello-world.sock', umask=0000).run()
    except (KeyboardInterrupt, SystemExit, SystemError):
        logging.info("Shutdown requested...exiting")
    except Exception:
        traceback.print_exc(file=sys.stdout)


if __name__ == '__main__':
    main(app)
