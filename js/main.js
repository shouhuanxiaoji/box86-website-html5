$(function(){

/**
 * ================================
 * nAVIGATION                   
 * ================================
 */

$("#top-navigation-bar li").click(function(){
  $("#top-navigation-bar li.active").removeClass("active");  
  $(this).addClass("active");
})

var str=location.href.toLowerCase();
$("#top-navigation-bar li a").each(function() {
  if(str.indexOf(this.href.toLowerCase())>-1){
    $('#top-navigation-bar li.active').removeClass("active");
    $(this).parent("li").addClass("active");
  }
});



/**
 * ================================
 * FULL SCREEN VIEW                    
 * ================================
 */


$(window).on("load resize", function(){
  $(".full-height").css("height",window.innerHeight);
  })

});



