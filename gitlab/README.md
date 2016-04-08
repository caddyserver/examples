# GitLab

This is an example configuration of how to use [GitLab](https://gitlab.com) with caddy.

### Updating GitLab Configuration

Open `/etc/gitlab/gitlab.rb` using your favourite text editor and update the following values.

* Change `external_url` to the https protocol
* Change `gitlab_workhorse['listen_network']` from `"unix"` to `"tcp"`
* Change `gitlab_workhorse['listen_addr']` from `"000"` to `"127.0.0.1:8181"`
* Add whatever user caddy runs under to `web_server['external_users']` unless root
* Change `nginx['enable'] = "true"` to `nginx['enable'] = "false"`
* Save and exit the configuration file and run `gitlab-ctl reconfigure` to update gitlabs configuration

### Updating the Caddyfile

Simply change gitlab.example.com to point to your FQDN.
