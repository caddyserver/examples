# WordPress

This is an example configuration on how to use [WordPress](https://wordpress.org/) with Caddy.

## Prerequisites

WordPress has the following [requirements](https://wordpress.org/about/requirements/):

- PHP version 5.6 or greater
- MySQL version 5.5 or greater

On Ubuntu Linux, we can install them using the following commands:
````
sudo apt-get update
sudo apt-get install mysql-server php5-mysql php5-fpm
````

During the installation, MySQL will ask you to set a root password.

To finish the installation, we need to activate MySQL and secure the installation:
````
sudo mysql_install_db
sudo /usr/bin/mysql_secure_installation
````

## Create WordPress Database

With all the prerequisites in place, we can go ahead and create a new MySQL database and user for WordPress.

First, log into the MySQL Shell:
````
mysql -u root -p
````

Now, create the database and user:
````
CREATE DATABASE wordpress;
CREATE USER wordpressuser@localhost;
SET PASSWORD FOR wordpressuser@localhost= PASSWORD("password");
GRANT ALL PRIVILEGES ON wordpress.* TO wordpressuser@localhost IDENTIFIED BY 'password';
FLUSH PRIVILEGES;
exit
````

A couple of things are going on here:
1. Create the actual `wordpress` database.
2. Create the user `wordpressuser`.
3. Set a password for this user.
4. Grant all privileges of the `wordpress` database to this user.
5. Reload the new user settings.

Feel free to name you database or user differently.

## Download & install WordPress

We can get the latest version of Wordpress from their official website:
````
curl -SL http://wordpress.org/latest.tar.gz | tar --strip 1 -xzf -

````

Use the Caddyfile in this example and make sure that fastcgi is listening on port 9000

Now, we can finally run `caddy`. If everything went right, you'll be greeted by WordPress once you visit `http://localhost:8080`. From here on, WordPress will guide you through the rest of the setup.

## Troubleshooting

The most common error you might encounter is `502 Bad Gateway`. In this case, proceed as following:

- Check `/var/log/php5-fpm.log` for any errors.
- Add `errors visible` to your `Caddyfile`
- Often times, php-fpm doesn't work because of wrong permissions. Check the error logs and change the user in `/etc/php5/fpm/pool.d/www.conf`
- Switching to a Unix socket might help. Change the listen directive in `/etc/php5/fpm/pool.d/www.conf` to `listen = unix:/var/run/php5-fpm.sock` and adjust your `Caddyfile` accordingly.
- If using a unix socket, make sure Caddy has access to the socket file.

Otherwise, search for guides on how to set up `fastcgi` for Nginx. The configuration for `fastcgi` is identical for Nginx and Caddy, but Nginx has a lot more tutorials online.
