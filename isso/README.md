# Isso

Assuming that you have [Isso](https://posativ.org/isso/) running on `127.0.0.1:8080` and want to host it on the same domain as your website.

Add this lines to your sites Caddyfile:

```
# Isso Comments
proxy /isso 127.0.0.1:8080 {
  without /isso
  transparent
  header_upstream X-Script-Name /isso
}
```
