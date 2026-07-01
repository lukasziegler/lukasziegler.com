# lukasziegler.com

Personal website built with [Hugo](https://gohugo.io/) and the Avenco theme.

## Local development

Requires [Hugo](https://gohugo.io/installation/) (extended edition):

```
brew install hugo
hugo server
```

The site is served at http://localhost:1313/ with live reload.

Note: the `avenco` theme in `themes/` is currently not tracked in git and
must be present locally for the build to work.

## Build

```
hugo
```

The generated site is written to `public/` (gitignored).
