#!/usr/bin/env bash

sed -i -e 's"file:/home/coyote3007/.emacs.d/reveal.js-master"./revealjs"g' *.html
sed -i -e 's"file:///home/ignaciobll/.reveal.js"./revealjs"g' *.html
