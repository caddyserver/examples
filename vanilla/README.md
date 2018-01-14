# [Vanilla](https://open.vanillaforums.com/)

**Considerations:**
- You may need to change the `fastcgi` endpoint to the listen address of your `php-fpm` instance
- Make sure that the user that Caddy is running under has permissions to to `php-fpm`
- Make sure that the user that `php-fpm` is running under has permissions to the `root` directory
