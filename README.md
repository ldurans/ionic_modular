# Ionic Modular

This is an addon starter template for the Ionic Framework built by [Podmedics](http://www.podmedics.org/). It is based on our [ionic_starter](https://github.com/Podmedics/ionic_starter) project which outlines our modular workflow in Ionic.

## How to use this template

This template does not work on its own. It is missing the Ionic library, and AngularJS.

To use this, either create a new ionic project using the ionic node.js utility, or copy and paste this into an existing Cordova project and download a release of Ionic separately.

## With the Ionic tool:

Copy the Github url, and pass it as an arguement to the ionic start command below:

```
$ sudo npm install -g ionic cordova
$ ionic start myApp https://github.com/Podmedics/ionic_modular
```
Then, to run it, cd into myApp and run:

```
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

Substitute ios for android if not on a Mac, but if you can, the ios development toolchain is a lot easier to work with until you need to do anything custom to Android.

## Demo

Coming soon.

## Issues & Contributions

Pull requests and suggestions very welcome. Simply create an issue to begin the discussion.

## Team
1. Aidan Quilligan - Developer
2. Ed Wallitt - Developer
2. Jamie Peak - Designer