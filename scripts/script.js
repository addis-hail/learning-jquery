$(document).ready(function(){

    $("section > h2").on("click", function(){
        // $(this).fadeOut(2000).fadeIn(500);
        $(this).fadeTo(200, 0.2)
               .fadeTo(200, 0.8)
               .fadeTo(200, 0.2)
               .fadeTo(200, 0.8)
               .fadeTo(200, 0.2)
               .fadeTo(200, 0.8);
    });

});
