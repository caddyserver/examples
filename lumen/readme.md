Run a Lumen site on Caddy
---------

It is simply neccesary to redirect all requests to index.php

    api.mysite.ie 
    
    #rewrite all requests to index.php
    rewrite / {
     r (.*)
     to /index.php
    }
    
    fastcgi / 127.0.0.1:9876 php
    root "C:/path/tolumen/public"


