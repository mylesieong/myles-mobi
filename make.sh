#!/bin/bash

## Clean 
rm -f index.html

## Print header
cat static/header > index.html

## Print content
perl bin/markdown.pl --html4tags content.md >> index.html

## Print footer 
cat static/footer >> index.html
