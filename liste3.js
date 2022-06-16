var currentscrollHeight = 0;
var count = 0;

jQuery(document).ready(function ($) {
    for (var i = 0; i < 13; i++) {
        callData(count);
        count++;
    }
});

$(window).on("scroll", function () {
    const scrollHeight = $(document).height();
    const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
    const isBottom = scrollHeight - 100 < scrollPos;

    if (isBottom && currentscrollHeight < scrollHeight) {
        for (var i = 0; i < 1; i++) {
            callData(count);
            count++;
        }
        currentscrollHeight = scrollHeight;
    }
});


function callData(counter) {
    $.ajax({
        type: "GET",
        url: "https://random-word.ryanrk.com/api/en/word/random",
        dataType: "json",
        success: function (result) {
            $('<div class="card my-4 py-3"><h4 class="card-title">' + result[0] + '</h4><p>' + counter + '</p></div>').appendTo('.list');
        },
    });
}