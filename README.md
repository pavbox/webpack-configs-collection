# webpack-configs-collection

This repository contains all my webpack's configs: basic build, advanced, angular, react, gulp, etc.
The repository uses for my interests and can't be updated faster. I add newly preset by my intention or demand.


### Description folders

- [x] default_preset:   simple config (js, css, html)
- [ ] modern_preset:    simple modern frontend config (es6, systemjs, stylus + raw css)
- [ ] modern_advanced:  image/fonts optimization, flexibility
- [x] angular_preset:   default angular2 config (simple app with TS and preprocessors)
- [ ] angular_advanced: using new angular2 features (i18n with lazy load)
- [ ] react_preset:     default react (redux) config (simple app)
- [ ] react_advanced:   ...
- [ ] features_preset:  using lazy-load, optimizations, etc. (?)
- [ ] deploy_preset:    integrations with CI, git hooks, separate bundles (/en/,/ru/)
- [ ] realwold_app:     [any real world application example]

feature priority:
- react base app
- react/redux app
- other

### Installation

```shell
npm install webpack
```

### Usage

```shell
./node_modules/.bin/webpack [--config]
# way in package.json
# "start": "webpack --config webpack.config.js"
```
