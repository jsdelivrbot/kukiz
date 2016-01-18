/**************************************/
/* Custom JavaScript files supervisor */
/**************************************/

$(document).ready(function() {

    /* Custom */

 /*    //= ./common/material-init.js */
 /*    //= ./common/google-analytics.js */
 var isPopUp = false;
 $(".pop-up").click(function(){
    isPopUp = true;
    $(".kkz-pop-up").show().click(function(event){
      if(event.target == this){
        $(this).hide();
      }
      isPopUp = false;
    });
 });
});

