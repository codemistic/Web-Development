$(document).ready(function(){

   $('#menu').click(function(){
       $(this).toggleClass('fa-times');
       $('.navbar').toggleClass('nav-toggle');
   });

//    $(window).on('load scroll',function(){

//        $('#menu').removeClass('fa-times');
//        $('.navbar').removeClass('nav-toggle');
//    });

});
