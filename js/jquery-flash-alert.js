/**
* taken from: http://roshanbh.com.np/2008/07/animated-alert-message-box-using-jquery.html
**/

$(document).ready(function()
{
  //first slide down and blink the message box
  $("#flash-alert").animate({
    top: "0px"
  }, 2000 ).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  //close the message box when cross red image is clicked
  $("#close_message").click(function(){
     $("#flash-alert").fadeOut("slow");
  });
});