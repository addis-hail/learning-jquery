// $("#lead-banner").click(function(){
//     alert("you clicked me");
// });
// $("#lead-banner").dblclick(function(){
//     alert("you  double clicked me");
// });
// $("#lead-banner").on("dblclick", function(){
//     alert("you  double clicked me");
// });
$("#lead-banner").dblclick(function(){
    alert("you  double clicked me");
    $("#lead-banner").off("dblclick");
});