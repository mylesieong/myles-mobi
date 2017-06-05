#!/bin/bash

## Clean 
rm -f index.html

## Print header
cat static/header > index.html

## Print content
perl bin/mylesmarkdown.pl --html4tags content/content.md >> index.html

## Print footer 
cat static/footer >> index.html
