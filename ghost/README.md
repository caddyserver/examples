# Ghost

This is an example configuration on how to use [Ghost](https://ghost.org/) with Caddy.

## Prerequisites

The [officially recommended stack](https://docs.ghost.org/v1.0.0/docs/hosting#section-recommended-stack) for Ghost is:
- Ubuntu 16.04
- MySQL
- Systemd
- Node v6 installed via NodeSource

Every step in the installation bellow must be run as a non-root, sudoer user.

On Ubuntu, we can install the required dependencies using the following commands:
````
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install nginx
sudo apt-get install mysql-server
````

The Ghost-CLI requires to set a root password for MySQL. Failling to do so will result in a [ER_NOT_SUPPORTED_AUTH_MODE](https://docs.ghost.org/docs/troubleshooting#section-error-with-mysql-er_not_supported_auth_mode) error.

Running the hardening setup is the easiest way to install (and secure) MySQL:
````
sudo mysql_secure_installation
````

Next, we need to add the NodeSource APT repository for Node 6:
````
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash
````

And install Node.js:
````
sudo apt-get install -y nodejs
````

Note that Node.js must be installed **system wide**. NVM is *not* recommended because it often result in a **local** installation of node, which doesn't work well (if at all) with Ghost.

## Install Ghost-CLI

Ghost comes with a very handy CLI that we can install with the following command:
````
sudo npm i -g ghost-cli
````

You can check that the installation went through by typing `ghost help`.

## Install Ghost via the CLI

Thanks to the Ghost-CLI, installing Ghost is just a three steps actions:
1. Create the folder for your site
2. Change permission
3. Install Ghost

Let's create a new folder:
````
sudo mkdir -p /var/www/ghost
````

Be sure to own the directory and set the correct permissions:
````
sudo chown [user]:[user] /var/www/ghost
sudo chmod 775 /var/www/ghost
````

(Replace [user] with your non-root, sudoer user name.)

Then, navigate to the folder and install Ghost:
````
cd /var/www/ghost
ghost install
````

Ghost will ask you [a series of questions](https://docs.ghost.org/docs/cli-install#section-prompts). For most of them, you can press enter to use default. Prompts that require your attention are detailled bellow.
1. Enter your blog Url:
2. Enter your MySQL hostname [localhost]:
3. Enter your MySQL username:
    * If you have not setup a MySQL user for Ghost, use `root`. Ghost-CLI will setup a MySQL user for Ghost later.
4. Enter your MySQL password: [hidden]
5. Ghost database name:
6. Do you wish to set up a ghost MySQL user?
    * Yes (y), this is recommended and Ghost-CLI takes care of the setup for you.
7. Do you wish to set up nginx?
    * No (n), we want to use Caddy, don't we?
8. Do you wish to set up ssl?
    * No (n), Caddy will take care of that.
10. Do you wish to set up systemd?
11. Do you want to start Ghost?

Boom! Ghost is ready! Now we need to edit our Caddyfile. Use the one provided in this example for guidance.

Updating Ghost is really easy: just run `ghost update` in your Ghost folder.

## Troubleshooting

If for one reason or another, the installation stopped midway, you can use the command `ghost setup` to resume.

If you don't know what seems to be the problem, running `ghost doctor` will make Ghost-CLI run tests to identify problems in your installation. With the error code, take a look at the [troubleshooting page](https://docs.ghost.org/v1.0.0/docs/troubleshooting) of Ghost official documentation.

For fatal error, you will probably need to wipe out the folder (not just what's inside but the whole folder) and start again at the folder creation.

Sometimes you will need to manually setup systemd. Run the following command to do so:
````
ghost setup systemd
````

Another common mistake is to mess up the file permission. As a non-root, sudoer user, run the following command to get back on track:
````
sudo find /var/www/ghost/* -type d -exec chmod 775 {} \;
sudo find /var/www/ghost/* -type f -exec chmod 664 {} \;
````

For other troubleshooting, please refer to the well-documented, easy to understand [official Ghost Docs](https://docs.ghost.org/docs).