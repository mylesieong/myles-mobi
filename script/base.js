$( document ).ready(function() {
    init();
});

function init() {
    //Set class attribute to blockquotes
    $("blockquote").addClass("collapse");

    //Add folding button & behaviors after every blockquote element
    $("blockquote").after("<a class='reactPriorQuote'>show/hide quotes</a>");
    $(".reactPriorQuote").click(function(){
        $(this).prev().collapse("toggle");
    });


}
