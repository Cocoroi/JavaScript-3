$(document).ready(function() {
    $('#loader').hide();
    $.ajax({
        type : 'GET',
        url : 'liste.php?liste=1',
        dataType: 'json',
        success: function(data) {
            $("#system").empty();
            console.log(data);
            $.each(data, function(index, value) {
                $("#system").append("<option>"+value+"</option>");
            });
            $("#system").change();
        }
    });

    $('#system').change(function() {
        $('#loader').show();
        $.ajax({
            type : 'GET',
            url : 'liste.php?systeme='+$(this).val(),
            dataType: 'json',
            success : function(data) {
                $("#planet").empty();
                console.log(data);
                $.each(data, function(index, value) {
                    $("#planet").append("<option>"+value+"</option>");
                });
                $('#loader').fadeOut(2000);
            }
        });

    });
    $("div").css("padding", ($( window ).height())/2.8 + "px");
});