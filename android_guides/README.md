### Android Guides

[CodePath](https://github.com/codepath) have been hosting publicly editable, open source Android Cliffnotes for a while now, and with `caddy`, you can get them in a searchable format, _offline_

This `Caddyfile` only assumes that the `git` and `search` plugins are installed. If not, use this : `curl -fsSL https://getcaddy.com/ | bash -s git,search` to get a version of caddy with the needed plugins

If you go the the URL you configured the Caddyfile to point to, you'll see a 404 since there's no index.* file. Just add /search and use the awesome search engine :)
