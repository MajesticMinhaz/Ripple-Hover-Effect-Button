$(function() {
    $(".subscribe > a").on('mouseenter', function(e){
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find("span").css({
            top: y,
            left: x
        });
    });

    $(".subscribe > a").on('mouseout', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find("span").css({
            top: y,
            left: x
        });
      });
});