# Security Header

Get an **A+** on [security header](https://securityheaders.com/) out of the box. These settings are well tested on websites in PROD.

Before I was using CloudFlare worker (5$ per month) to get the same result. I asked myself, how does the ‘real server’ are configured to manage the security-header? This is how.

# Warning

Test those default values locally as they could prevent your website functioning normally.

- **Content Security Policy** is an effective measure to protect your site from XSS attacks. By whitelisting sources of approved content, you can prevent the browser from loading malicious assets. Analyse this policy in more detail. You can sign up for a free account on Report URI to collect reports about problems on your site.
- **Feature Policy** is a new header that allows a site to control which features and APIs can be used in the browser.
- **Referrer Policy** is a new header that allows a site to control how much information the browser includes with navigations away from a document and should be set by all sites.
- **HTTP Strict Transport Security** is an excellent feature to support on your site and strengthens your implementation of TLS by getting the User Agent to enforce the use of HTTPS.
- **X-Content-Type-Options** stops a browser from trying to MIME-sniff the content type and forces it to stick with the declared content-type. The only valid value for this header is "X-Content-Type-Options: nosniff".
- **X-Frame-Options** tells the browser whether you want to allow your site to be framed or not. By preventing a browser from framing your site you can defend against attacks like clickjacking.
- **X-XSS-Protection** sets the configuration for the cross-site scripting filters built into most browsers. The best configuration is "X-XSS-Protection: 1; mode=block".
- **Expect-CT**	Expect-CT allows a site to determine if they are ready for the upcoming Chrome requirements and/or enforce their CT policy.
- **Server** Typically you will see values like "Microsoft-IIS/8.0" or "nginx 1.7.2".

**Screenshot**:

![screen shot 2018-12-06 at 7 48 19 pm](https://user-images.githubusercontent.com/6694151/49621138-e574a080-f991-11e8-8a8e-d9a2b2a4a974.jpg)

This is part of my project:
[📦 A smaller Caddy docker image 14MB + (security header, gzip, cache, healthcheck)](https://github.com/pascalandy/caddy-securityheader)

Cheers!
https://twitter.com/askpascalandy
