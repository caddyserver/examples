# Concrete5

This is an example configuration on how to use [Concrete5](http://www.concrete5.org/) with Caddy.

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

Install Caddy. Change username to your user where ~/caddy directory is.
````
curl https://getcaddy.com | bash -s ipfilter,ratelimit
sudo setcap cap_net_bind_service=+ep /usr/local/bin/caddy
sudo systemctl daemon-reload
sudo systemctl stop caddy@username
sudo systemctl start caddy@username
sudo systemctl enable caddy@username
````

For restarting Caddy when needed, you can save this reload-caddy.sh script
to textfile, change domain to your domain, and caddy@username to your username
where
PHP files are:
````
#!/bin/bash
sudo systemctl daemon-reload
sudo systemctl stop caddy@username
sudo systemctl stop php7.0-fpm
sudo systemctl start php7.0-fpm
sudo systemctl start caddy@username
````

And make it executeable:
````
chmod +x ./reload-caddy.sh
````

Then you can run it as needed
````
./reload-caddy.sh
````

## Install PHP and MariaDB

On Ubuntu Linux, we can install them using the following commands:
````
sudo apt update

sudo apt install php7.0-common php7.0-cli php7.0-curl php7.0-fpm php7.0-gd \
php7.0-gd php7.0-json php7.0-mbstring php7.0-mysql php7.0-mysql \
php7.0-opcache php7.0-readline php7.0-xml mariadb-server curl zip unzip
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

# 6) Create database for Concrete5. You could name differently.
CREATE DATABASE concrete5;

# 7) Create user for that database, and add password. Change to your own.
CREATE USER 'concrete5'@'localhost' IDENTIFIED BY 'password';

# 8) Give previously created user access to datatabase
GRANT ALL PRIVILEGES ON concrete5.* to 'concrete5'@'localhost';

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

Change /etc/php/7.0/fpm/pool.d/www.conf to have username where your Concrete5 files are:
````
user = username
group = username
listen.owner = username
listen.group = username
````

[Download release version of Concrete5. I used version 8.x](http://www.concrete5.org/download)

For development, you can also clone repo, instructions below.

[Download admin interface translation for your language.
I downloaded for version Development (8.x)](http://www.concrete5.org/developers/translate/)

## Install Concrete5

````
# 1) Create directory for your domain
mkdir -p ~/caddy/example.com

# 2) Go to that directory
cd ~/caddy/example.com

# 3a) Unzip you Concrete5 release version
unzip ~/concrete[VERSION].zip
# Rename directory to public
mv concrete[VERSION] public

# 3b) For development version, clone repo
git clone https://github.com/concrete5/concrete5.git public

# 4) Go to public directory's concrete subdirectory
cd public/concrete

# 5) Unzip your language file
unzip ~/core-dev-[VERSION-LANGUAGE].zip
````

6) Go to https://example.com and use wizard to install.

7) On first step of install, you can select your admin interface
language. It can also be changed later in System & Settings/Basics/Languages,
if you want to first to select English and make required changes below
for Pretty URLs etc. 

8) After install, login at https://example.com/index.php/login
(or later at https://example.com/login). Admin username by default is admin .

9) Go to System & Settings/SEO & Statistics/URLs and Redirection.

10) On Pretty URLs, check "[X] Remove index.php from URLS" and click Save.

11) Go to System & Settings/Optimization/Clear Cache. Click "Clear Cache".

12) Logout. Now URLs on website should all be without index.php in URLs.
There is still index.php in URLs on admin interface, but that's not visible
to normal website visitors.
