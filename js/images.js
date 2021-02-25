
$('.image').on('click', function() {
    $(this).animate({
        width: 300,
        heigth: 300,
    }, 1000, function() {
        $(this).animate({
            width: 100,
            heigth: 100,
        });
    });
}); 

