$(document).ready(function () {

    $("#button").click(function(){

        showInfo();

    })

});


var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;


function getInfo() {
  
    box1 = $("#box1").val();
    box2 = $("#box2").val();
    box3 = $("#box3").val();
    box4 = $("#box4").val();
    box5 = $("#box5").val();
    box6 = $("#box6").val();
    box7 = $("#box7").val();
    box8 = $("#box8").val();
    box9 = $("#box9").val();
    box10 = $("#box10").val();
    box11 = $("#box11").val();
    box12 = $("#box12").val();
    box13 = $("#box13").val();
    box14 = $("#box14").val();

}

function showInfo() {

    getInfo();
    var message = "The Care "+ box1 +" live in a "+ box2 +" high in the clouds, where they have a lot of fun together. But they also do care for the "+ box3 +" children on Earth, who they watch through huge "+ box4 +" from the sky, and come to help whenever there is need. Nikolas, a "+ box5 +"'s apprentice, is in danger of "+ box6 +" under the influence of an "+ box7 +" "+ box8 +" which resides in an "+ box9 +" spell book. The siblings Kim and Jason don`t trust "+ box10 +" anymore after being "+ box11 +" once too often. The Care "+ box1 +" take them into their wonderland where they experience exciting and "+ box12 +" adventures together and "+ box13 +" become good "+ box14 +".";

    $("#output").text(message).show().animate({'opacity':' 1'}, 'slow');
}