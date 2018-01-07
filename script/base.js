$( document ).ready(function() {
    init();
});

function init() {
    //Add folding button & behaviors after every blockquote element
    $("blockquote").after("<a class='reactPriorQuote'>show/hide</a>");
    $(".reactPriorQuote").click(function(){
        $(this).prev().collapse("toggle");
    });

    //Set attributes
    $("section").addClass("font-yahei");
    $("h1").addClass("font-medium");
    $("div.container").children("p").addClass("font-small");
    $("blockquote").addClass("collapse");
    $("blockquote").find("p").addClass("font-xs")
                                .addClass("font-italic")
                                .addClass("font-lobster")
                                .addClass("align-center")
                                .addClass("fix-width-80")
                                .addClass("margin-lr-auto")
                                .addClass("color-ct-grey");
}
