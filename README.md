# Stone Harbor

## An interactive story by Liza Daly

Read online: [Stone Harbor](https://stoneharborgame.com/)

A Portuguese translation has been kindly provided by José Carlos Dias.

4th place in the [2016 Interactive Fiction Competition](https://ifcomp.org)

- [Review in Rock Paper Shotgun](https://www.rockpapershotgun.com/2016/10/12/if-comp-2016-best-games/) by <a href="https://twitter.com/emshort">Emily Short</a>
- Discussion on <a href="http://www.theshortgame.net/104-more-ifcomp-2016/">The Short Game</a> podcast by <a href="https://twitter.com/laurajnash">Laura Nash</a>

![Stone Harbor cover](https://lizadaly.com/images/stoneharbor.png)

Stone Harbor is authored in [Windrift](https://github.com/lizadaly/windrift), a framework
for writing web-based interactive stories.

The story has been tested on all major modern browsers, and underwent additional evaluation by an accessibility expert. It has been verified to work with
keyboard controls and with the following screenreaders:
NVDA 2016.1 and Firefox 48.0.2 on Windows 7, (NVDA, JAWS 12) + (Firefox,
Internet Explorer 11) on Windows, and Voiceover + Safari on iOS 10.

The game text and derived images are released under a Creative Commons
Attribution 4.0 International License. The epilogue of the game includes
credit for the original images, which are either public domain or CC-BY or CC-BY-NC.

## Running locally

Stone Harbor has been developed on a Mac but should run in any
environment that support JavaScript. You may need a C compiler to
build some JS dependencies.

To set up a local copy of Stone Harbor, do the following:

```
npm install
```

To run it on a Mac or Unix-like environment, use the `runserver.sh`
script:

```
bash runserver.sh
```

This will start up a small HTTP server with Python 3. (If you have
Python 2 only, see the script for what to uncomment.)

Now the story should be available as:

http://localhost:8000/
