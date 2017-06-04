#!/bin/bash
rm -f index.html
perl mylesmarkdown.pl --html4tags content.md > index.html

