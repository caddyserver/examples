# [Symfony](https://symfony.com/)

**Considerations:**
- To change from `prod` the `dev` environment, change all instances of `app.php` to `app_dev.php`
- You may need to change the `fastcgi` endpoint to the listen address of your `php-fpm` instance
- Make sure that the user that Caddy is running under has permissions to to `php-fpm`
- Make sure that the user that `php-fpm` is running under has permissions to the `root` directory
