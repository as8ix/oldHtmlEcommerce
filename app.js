// /*-----For Search Bar--------------------*/
    //  $(document).on('click','.search',function(){
    //      $('.search-bar').addClass('search-bar-active')
    //  });  
     
    //  $(document).on('click','.search-cancel',function(){
    //      $('.search-bar').removeClass('search-bar-active')
    //  });  

     /*--login-sign-up-form-----------------------*/
     $(document).on('click','.user,.already-acount',function(){
        $('.form').addClass('login-active').removeClass('sign-up-active')
    }); 

    $(document).on('click','.sign-up-btn',function(){
        $('.form').addClass('sign-up-active').removeClass('login-active')
    }); 





    $(document).on('click','.form-cancel',function(){
        $('.form').removeClass('login-active').removeClass('sign-up-active')
    }); 

   /*---full-slider-script---------------------------*/
   $(document).ready(function() {
   $('#adaptive').lightSlider({
       adaptiveHeight:true,
       auto:true,
       item:1,
       slideMargin:0,
       loop:true
   });
});
   /*---Feature-slider--------------------------------*/
   $(document).ready(function() {
   $('#autoWidth').lightSlider({
       autoWidth:true,
       loop:true,
       onSliderLoad: function() {
           $('#autoWidth').removeClass('cS-hidden');
       } 
   });  
 });

 /*----for-fix-menu-when-scroll-------------*/
 $(window).scroll(function(){
     if($(document).scrollTop() > 50){
         $('.navigation').addClass('fix-nav');
     }
     else{
       $('.navigation').removeClass('fix-nav');
     }
 });
 /*----for-responsive-menu----------------------*/
 $(document).ready(function(){
     $('.toggle').click(function(){
         $('.toggle').toggleClass('active')
         $('.navigation').toggleClass('active')
     })
 })

 var MainImg = document.getElementById("MainImg");
 var smallImg = document.getElementsByClassName("small-img")

smallImg[0].onclick = function () {
    MainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    MainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    MainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    MainImg.src = smallImg[3].src;
}


smallImg[3].onclick = function () {
    MainImg.src = smallImg[3].src;
}
smallImg[2].onclick = function () {
    MainImg.src = smallImg[2].src;
}
smallImg[1].onclick = function () {
    MainImg.src = smallImg[1].src;
}
smallImg[0].onclick = function () {
    MainImg.src = smallImg[0].src;
}




