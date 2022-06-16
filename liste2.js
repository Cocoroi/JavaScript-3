/*$( function() {
    $( "#autocomplete" ).autocomplete({
        source: function( request, response ) {
            $.ajax({
                url: "script.php",
                type: 'post',
                dataType: "json",
                data: {
                    search: request.term
                },
                success: function( data ) {
                    response( data );
                }
            });
        },
    });
});*/

//on('keypress focus', function() ...

$(document).ready(function() {
    $('#complete').hide();
    $('#autocomplete').on('keypress keyup focus',function() {
        $("#complete").empty();
        $('#complete').show();
        $.ajax({
            type : 'POST',
            url : 'script.php?search',
            data: {"search" : $(this).val()},
            dataType: 'json',
            success : function(data) {
                console.log(data);
                $.each(data, function(index, value) {
                    $("#complete").append("<li class=\"ui-menu-item\">"+value+"</li>");
                });
            }
        });
    });
    $('#complete').on('click','li', function(){
        $('#autocomplete').val($( this ).text());
        $('#complete').hide();
    });
});