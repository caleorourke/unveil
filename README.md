<a href="https://travis-ci.org/caleorourke/unveil?branch=gh-pages" target="_blank"><img src="http://travis-ci.org/caleorourke/unveil.svg?branch=gh-pages"></a>
<a href="https://david-dm.org/caleorourke/unveil#info=devDependencies" target="_blank"><img src="https://david-dm.org/caleorourke/unveil/dev-status.svg?theme=shields.io"></a>
<a href="http://github.com/caleorourke/unveil/blob/gh-pages/LICENSE" target="_blank"><img src="http://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License"></a>

## Introduction
One page template designed for hosting on [GitHub Pages](http://pages.github.com) and serving locally using [Jekyll](http://jekyllrb.com).

## Prerequisites
Requires the *minimum* versions of Node.js and Ruby below.

* [Node.js 0.10.30](http://nodejs.org/download)
* [Ruby 2.0](http://www.ruby-lang.org/en/installation)

Run the commands below to determine if the versions are currently installed.

~~~bash
# each command returns a version number
$ node --version
$ ruby -v
~~~

## Installation
Clone from `gh-pages` on GitHub and go into its directory.

~~~
$ git clone -b gh-pages https://github.com/caleorourke/unveil.git
$ cd unveil
~~~

### Grunt
[Grunt](http://gruntjs.com) is scripted for installing Node and Ruby dependencies. You must install Grunt CLI, thought, first. Run the commands to install Grunt and dev dependencies for Node.js.

~~~bash
$ sudo npm install -g grunt-cli
$ sudo npm install
~~~

### Jekyll
Grunt is also scripted for installing Jekyll and other runtime dependencies.

~~~bash
$ grunt install
~~~

## Commands
Aside from scripted install types, Grunt includes a number of scripts to serve the site locally. Run any of these commands to initiate a task.

* `$ grunt build`
* `$ grunt install`
* `$ grunt serve`
* `$ grunt test`

#### $ grunt build

1. Bundles and minifies `*.less` files to `*.css`
2. Bundles and minifies `*.js` files

#### $ grunt install

1. Updates RubyGems
2. Runs `gem install github-pages`

#### $ grunt serve

1. Bundles and minifies `*.less` files to `*.css`
2. Bundles and minifies `*.js` files
3. Builds the site locally in the `_site` directory
4. Starts a local environment on `http://localhost:4000`
5. Regenerates a new `_site` directory whenever a file is modified (except `.less` and `.js` assets)

> Serve mode lasts forever. It will not timeout after a period of non-usage. In order to stop it, press `CTRL+C`.

#### $ grunt test

1. Builds the website locally in the `_site` directory
2. Spits out any errors found during the build process

## Updates
Dependencies for Node and Grunt are updated often by their original authors. To install the latest versions, browse the sections below.

### Node.js
Run `sudo npm update` to install the latest versions. Should this fail for any reason, run the commands to delete the original directory and build a new one.

~~~bash
$ sudo rm -r node_modules // deletes node_modules
$ sudo npm install // builds node_modules again
~~~

If a "SyntaxError: Use of const in strict mode" error occurs, run the commands.

~~~bash
$ sudo npm cache clean -f // clears NPM cache
$ sudo npm install -g n // installs a little helper called "n"
$ sudo n stable // installs latest stable Node.js
~~~

### Grunt
Run `grunt install` to install the latest versions.

## Customization
A number of customization options are available.

### Letter Animation
Adjust the settings for the hero's letter animation under the `textillate_options` var in `js/textillate.js`.

~~~js
var textillate_options = {
  loop:           false,
  minDisplayTime: 0,
  initialDelay:   0,
  autoStart:      false,
  inEffects:      ['fadeIn'],
  outEffects:     ['fadeOutDown'],
  'in': {
    effect:       'fadeIn',
    delayScale:   1.5,
    delay:        12,
    sync:         false,
    shuffle:      true,
    reverse:      false
  },
  out: {
    effect:       'fadeOutDown',
    delayScale:   1.5,
    delay:        8,
    sync:         false,
    shuffle:      true,
    reverse:      false
  }
};
~~~

### Scroll Speed
Adjust the settings for scroll speed under the `onePageNav` function in `js/options.js`.

~~~js
$('#nav').onePageNav({
  currentClass:     'active',
  changeHash:       false,
  scrollSpeed:      750,
  scrollThreshold:  0.5,
  filter:           ':not(.contact)',
  easing:           'swing',
  begin:            function () {},
  end:              function () {},
  scrollChange:     function () {}
});
~~~

## License
Code and documentation licensed under the MIT license.