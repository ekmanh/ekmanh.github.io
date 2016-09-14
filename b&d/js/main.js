$(document).ready(function(){


//Bad Side

$("#dsq1").mouseover(function() {
    $("#dsa1").css("visibility", "visible");  
    $("#dsa2").css("visibility", "hidden"); 
    $("#dsa3").css("visibility", "hidden");   
});


$("#dsq2").hover(function() {
    $("#dsa2").css("visibility", "visible"); 
    $("#dsa1").css("visibility", "hidden"); 
    $("#dsa3").css("visibility", "hidden");  
});



$("#dsq3").mouseover(function() {
    $("#dsa3").css("visibility", "visible");
    $("#dsa2").css("visibility", "hidden"); 
    $("#dsa1").css("visibility", "hidden");     
});


//Good Side


$("#bsq1").mouseover(function() {
    $("#bsa1").css("visibility", "visible");  
    $("#bsa2").css("visibility", "hidden"); 
    $("#bsa3").css("visibility", "hidden");   
});


$("#bsq2").hover(function() {
    $("#bsa2").css("visibility", "visible"); 
    $("#bsa1").css("visibility", "hidden"); 
    $("#bsa3").css("visibility", "hidden");  
});



$("#bsq3").mouseover(function() {
    $("#bsa3").css("visibility", "visible");
    $("#bsa2").css("visibility", "hidden"); 
    $("#bsa1").css("visibility", "hidden");     
});


});