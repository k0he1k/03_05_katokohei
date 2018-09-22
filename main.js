$(document).ready(function(){

    var countUpValue = 0;

    $("#a").on("click",function(){
        event.preventDefault();
        $(this).addClass('active');
        $("#b").removeClass('active');
        $("#c").removeClass('active');
        var random = Math.floor(Math.random()*3+1);
        console.log(random);

     if(random==1){
         $("#aa").html('<img src="img/cho.jpg" height="380px" width="500px">')
         $("#ab").html("draw").css("color","white");}
     else if(random==2){
         $("#aa").html('<img src="img/gu.jpg" height="380px" width="500px">')
         $("#ab").html("lose").css("color","blue");}
     else if(random==3){
         $("#aa").html('<img src="img/pa.jpg" height="380px" width="500px">')
         $("#ab").html("win").css("color","red")
         countUpValue++;}
    });

    $("#b").on("click",function(){
        event.preventDefault();
        $(this).addClass('active');
        $("#a").removeClass('active');
        $("#c").removeClass('active');
        var random = Math.floor(Math.random()*3+1);
        console.log(random);

     if(random==1){
        $("#aa").html('<img src="img/cho.jpg" height="380px" width="500px">')
        $("#ab").html("win").css("color","red")
        countUpValue++;}
    else if(random==2){
        $("#aa").html('<img src="img/gu.jpg" height="380px" width="500px">')
        $("#ab").html("draw").css("color","white");}
    else if(random==3){
        $("#aa").html('<img src="img/pa.jpg" height="380px" width="500px">')
        $("#ab").html("lose").css("color","blue");}   
    });

    $("#c").on("click",function(){
        event.preventDefault();
        $(this).addClass('active');
        $("#a").removeClass('active');
        $("#b").removeClass('active');
        var random = Math.floor(Math.random()*3+1);
        console.log(random);

     if(random==1){
        $("#aa").html('<img src="img/cho.jpg" height="380px" width="500px">')
        $("#ab").html("lose").css("color","blue");}
    else if(random==2){
        $("#aa").html('<img src="img/gu.jpg" height="380px" width="500px">')
        $("#ab").html("win").css("color","red")
        countUpValue++;}
    else if(random==3){
        $("#aa").html('<img src="img/pa.jpg" height="380px" width="500px">')
        $("#ab").html("draw").css("color","white");}   
    });        $(self).toggleClass('active');

    $(self).toggleClass('active');

    $("#a,#b,#c").on("click",function(){
        $("#point_me").text(countUpValue);
    });
    });
;

  $("#a").hover(function(){
      $(this).addClass('hover');
   },function(){
     $(this).removeClass('hover');
     $("#a").removeClass('active');
     $("#b").removeClass('active');
     $("#c").removeClass('active');
    });

   $("#b").hover(function(){
      $(this).addClass('hover');
   },function(){
     $(this).removeClass('hover');
     $("#a").removeClass('active');
     $("#b").removeClass('active');
     $("#c").removeClass('active');
    });

    $("#c").hover(function(){
       $(this).addClass('hover');
    },function(){
        $(this).removeClass('hover');
        $("#a").removeClass('active');
        $("#b").removeClass('active');
        $("#c").removeClass('active');
     });
 

     $(function() {
        $("#aa")
        .css({opacity: 0})
        .each(function(i){
            $(this).delay(100 * i).animate({opacity:1}, 1500);
        });
});
