# HHVM & Caddy #

HHVM is an open-source virtual machine designed for executing programs written
in Hack and PHP. HHVM uses a just-in-time (JIT) compilation approach to achieve
superior performance while maintaining the development flexibility that PHP
provides.

This document is a step-by-step instructions to install [HHVM](http://hhvm.com/)
and make it work with Caddy

## HHVM installation ##

(Based on [this](https://www.digitalocean.com/community/tutorials/how-to-install-hhvm-with-nginx-on-ubuntu-14-04) article from DigitalOcean)

### Ubuntu 14.04 ###

First of all, lets add an official repository with HHVM, these three commands will
import the required GnuPG public keys, add the repository to the system and update
the list of available packages to install.

```
sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0x5a16e7281be7a449
sudo add-apt-repository "deb http://dl.hhvm.com/ubuntu $(lsb_release -sc) main"
sudo apt-get update
```

After this, we will be able to install HHVM with this command:

```
sudo apt-get install hhvm
```

Then, to make it run when the system reboots, use this command:

```
sudo update-rc.d hhvm defaults
```

## HHVM configuration ##

Now we have HHVM running by default on localhost:9000, but we want it to run
in an UNIX socket, because the performance is better this way and. And we can do it
because we're running HHVM and Caddy in the same server.

Let's edit the HHVM configuration file with any text editor (nano for example):

```
sudo nano /etc/hhvm/server.ini
```

We'll see a line with `hhvm.server.port = 9000`, we must change this line with
`hhvm.server.file_socket = /var/run/hhvm/sock`, so the configuration file should
be something like this:

```
; php options

pid = /var/run/hhvm/pid

; hhvm specific

hhvm.server.file_socket = /var/run/hhvm/sock
hhvm.server.type = fastcgi
hhvm.server.default_document = index.php
hhvm.log.use_log_file = true
hhvm.log.file = /var/log/hhvm/error.log
hhvm.repo.central.path = /var/run/hhvm/hhvm.hhbc
```

After editing the file, restart HHVM:

```
sudo /etc/init.d/hhvm restart
```

And now we have HHVM working on UNIX socket.

## Caddy configuration ##

Let's create a typical Caddyfile for a webpage using PHP, something like this:

```
localhost:8080
fastcgi / unix:/var/run/hhvm/sock php
```

And with this Caddyfile (in the same folder) create a file called `index.php`
with this content:

```php
<?php php_info(); ?>
```

Run caddy in the folder, open `localhost:8080` in the web browser, and if
you see something like this, you have HHVM running with Caddy.

# FAQ #

#### I get a 'Bad Gateway' error ####
Try running Caddy with sudo: `sudo caddy`. If the problem gets solved, probably
it's because you are using a user without permission to access the HHVM socket,
which by default is owned by www-data user/group, you can fix this using root
user, running caddy with user www-data, or adding your user to the www-data
group using this command:

```
sudo usermod -a -G www-data youruser
```
To see the changes of this command, you need to logout and login again. After
that you should be able to run Caddy and access the HHVM socket without sudo.

#### Just installed a CMS to use with HHVM and Caddy, but the page keeps loading forever ####
If the page loads nicely when using just one or two .php files, maybe the
problem is that HHVM is taking too much time to return a response. HHVM's JIT
compilation can take some time to process all the PHP files that will receive
from a CMS like Wordpress/Joomla/Drupal/etc. Keep reloading until the page
finally loads, be patient.

#### I get any other error and don't know why ####
Remember to add an error log output file to your Caddyfile using the errors
directive, this way you can check what exactly happened.

```
localhost:8080
fastcgi / unix:/var/run/hhvm/sock php
errors errors.log
```

If the file isn't updated with new errors, the error should be in the HHVM side,
so, check the HHVM error log, which by default is in `/var/log/hhvm/error.log`
