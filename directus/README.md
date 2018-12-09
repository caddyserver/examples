# Directus

This is an example configuration on how to use [Directus](https://directus.io) with Caddy.

## Prerequisites

Directus has the following [requirements](https://docs.directus.io/getting-started/installation.html#requirements):

- PHP version 5.6 or greater
- MySQL version 5.5 or greater

On Ubuntu Linux, we can install them using the following commands:

```
sudo apt-get update
sudo apt-get install mysql-server php5-mysql php5-fpm
```

During the installation, MySQL will ask you to set a root password.

To finish the installation, we need to activate MySQL and secure the installation:

```
sudo mysql_install_db
sudo /usr/bin/mysql_secure_installation
```

## Create Directus Database

With all the prerequisites in place, we can go ahead and create a new MySQL database and user for Directus.

First, log into the MySQL Shell:

````
mysql -u root -p
````

Now, create the database and user:

````
CREATE DATABASE directus;
CREATE USER directususer@localhost;
SET PASSWORD FOR directususer@localhost= PASSWORD("password");
GRANT ALL PRIVILEGES ON directus.* TO directususer@localhost IDENTIFIED BY 'password';
FLUSH PRIVILEGES;
exit
````

A couple of things are going on here:
1. Create the actual `directus` database.
2. Create the user `directususer`.
3. Set a password for this user.
4. Grant all privileges of the `directus` database to this user.
5. Reload the new user settings.

Feel free to name you database or user differently.

## Download & install Directus

We can get the latest version of Directus directly from GitHub:

```
git clone https://github.com/directus/directus
```

Use the Caddyfile in this example and make sure that fastcgi is listening on port 9000.

Now, we can finally run `caddy`. If everything went right, you'll be greeted by Directus once you visit `http://localhost:4000/admin`. From here on, Directus will guide you through the rest of the setup.

