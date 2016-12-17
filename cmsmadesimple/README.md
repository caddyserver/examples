# CMS Made Simple

This is an example configuration on how to use [CMS Made Simple](https://www.cmsmadesimple.org/) with Caddy.

CMS Made Simple has [minimum requirements listed at website](https://docs.cmsmadesimple.org/installation/requirements).

This example uses

- Ubuntu 16.04 Server
- PHP version 7.0
- MariaDB

## Install Caddy

Install Caddy, change username 

Create directory for Caddy
````
mkdir ~/caddy
````

Download Caddyfile and change it to your domain.

Download caddy@.service, change it to your username where PHP files will be, and email address to yours,
and add it to /etc/systemd/system/caddy@.service .

Install Caddy. There are also other extensions like hugo and git if you'd like to use them.
Change username to your user where ~/caddy directory is.

````
curl https://getcaddy.com | bash -s ipfilter,ratelimit
sudo setcap cap_net_bind_service=+ep /usr/local/bin/caddy
sudo systemctl daemon-reload
sudo systemctl stop caddy@username
sudo systemctl start caddy@username
sudo systemctl enable caddy@username
````

## Install PHP and MariaDB

On Ubuntu Linux, we can install them using the following commands:
````
sudo apt update

sudo apt install php7.0-common php7.0-cli php7.0-curl php7.0-fpm php7.0-gd \
php7.0-gd php7.0-json php7.0-mbstring php7.0-mysql php7.0-mysql \
php7.0-opcache php7.0-readline php7.0-xml mariadb-server
````

Secure MariaDB installation and create database.
````
# 1) sudo to root
sudo su

# 2) Go through steps securing your database. Add root password for your database.
mysql_secure_installation

# 3) Start MariaDB database CLI, use root password you created at previous step
mysql -hlocalhost -uroot -p

# 4) Set your whole database to use UTF-8.
SET character_set_server = 'utf8';

# 5) Set database result ordering. Yours could be different.
SET collation_server = 'utf8_swedish_ci';

# 6) Create database for CMS Made Simple. You could name differently.
CREATE DATABASE simple;

# 7) Create user for that database, and add password. Change to your own.
CREATE USER 'simple'@'localhost' IDENTIFIED BY 'password';

# 8) Give previously created user access to datatabase
GRANT ALL PRIVILEGES ON simple.* to 'simple'@'localhost';

# 9) Take these new settings to be used immediately, and exit.
FLUSH PRIVILEGES;
exit
````

Change settings at /etc/php/7.0/fpm/php.ini to your preferred ones:
````
; Maximum upload filesize
upload_max_filesize = 2G
; Maximum post size, may contain multiple files
post_max_size = 4G
max_file_uploads = 20
max_execution_time = 120
max_input_time = 60
memory_limit = 128M
; Disable showing errors
error_reporting = E_ALL & ~E_NOTICE & ~E_DEPRECATED
````

In that php.ini file is also disabled pnctl functions, they are disabled in default Ubuntu config
for security reasons so I did not enable them yet, although some extensions may require them.
````
disable_functions = pcntl...
````

Change /etc/php/7.0/fpm/pool.d/www.conf to have username where your CMS Made Simple files are:
````
user = username
group = username
listen.owner = username
listen.group = username
````

## Install CMS Made Simple

[Download newest CMS Made Simple installer PHP file](http://www.cmsmadesimple.org/downloads/)

Add it to ~/caddy/example.com/public/cmsms-[VERSION]-install.php

Use installation wizard at https://example.com/cmsms-[VERSION]-install.php to install it.

Add URL rewriting to config:
````
cd ~/caddy/example.com/public/
sudo nano config.php
# Add this line to bottom:
$config['url_rewriting'] = 'mod_rewrite';
````

You can save this reload-caddy.sh script to textfile, change domain to your domain, and caddy@username to your username where PHP files are:
````
#!/bin/bash
sudo systemctl daemon-reload
sudo systemctl stop caddy@username
sudo systemctl stop php7.0-fpm
sudo systemctl start php7.0-fpm
sudo systemctl start caddy@username
# Delete CMS Made Simple cache files
rm ~/caddy/example.com/public/tmp/cache/*
rm ~/caddy/example.com/public/tmp/templates_c/*
````

And make it executeable:
````
chmod +x ./reload-caddy.sh
````

Then you can run it as needed
````
./reload-caddy.sh
````
