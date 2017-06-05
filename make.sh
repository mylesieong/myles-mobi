#!/bin/bash

## Clean 
rm -f index.html

## Print header
cat static/header > index.html

## Print content
#for f in content/*.md
for f in $(find content/*.md -type f | sort -r)
do
    cat static/subheader >> index.html
    perl bin/markdown.pl --html4tags $f >> index.html
    cat static/subfooter >> index.html
done

## Print footer 
cat static/footer >> index.html
