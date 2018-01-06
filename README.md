# Myles Mobi Site 

## My personal blog

I build this website as my personal blog site. Contents about literature and my work will be presented on and on.

## The building of the site

Blogs in this site will be writen in markdown language and be converted to html5 with mylesmarkdown.pl (a perl script customized from John Gruber's Markdownv1.0.1)

## How to parse

`perl mylesmarkdown.pl --html4tags _target.md_ > _target.html_`

## Dependencies

* Bootstrap 4 embedded in html header 
* Perl 5.6 + 

## Todo
1. Adjust the font size
1. remove the border of the quote area
1. center-align the text in quote area
1. set the padding/margin between each quote
1. set the font to a smaller size in quote
1. set the grey color to qutoes and italic
1. adjust the font of the open/fold button
1. Update the wording of the open/fold button
1. adjust the padding/margin between the titile and content
1. Make sure the width of a quote is slightly thinner than the content paragraph
1. Use a font family that give a more handsome feeling
1. Center the open/font button
1. Revoke the change on perl program
1. Add JQuery to add classes to elms(replace the static subheader/subfooter)

## Bonus
1. Use different font according to each books' style (use sentiment analyse)
1. Use keyword extraction from the quote to form the tag for the book title