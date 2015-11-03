# A simple blog using the markdown feature

This is an example on how to use the [markdown](https://caddyserver.com/docs/markdown) feature of Caddy:

> markdown serves Markdown files as HTML pages on demand

### Caddyfile

In our *Caddyfile*, we're using the *markdown* directive with the basepath set to `/`. This instructs Caddy to look for `*.md` files in our root directory for every new request.

Inside the markdown block, we define the custom templates we want to use. The syntax for this is `template name path`. Our templates are stored in the *templates* directory.

### Markdown files

Each Markdown file starts with some Metadata, called *Front Matter*. In this metadata, we define which template to use, the title of the document and the name of our site.

The file `index.md` has a special role as it holds no content, but acts as the landing page of our blog. Caddy will look for index files if there is no filename present in the URL.

## Running Caddy

To start Caddy with this example, simply execute `caddy` from this folder.
