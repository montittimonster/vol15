function fadeAnime(){

     $('.fadeUpTrigger').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
    }else{
    $(this).removeClass('fadeUp');
    }
    });
}
  $(window).scroll(function (){
    fadeAnime();
  });


  $(window).on('load', function(){
    fadeAnime();
  });

  var arr = []
function TypingInit() {
  $('.js_typing').each(function (i) { 
    arr[i] = new ShuffleText(this);
  });
}
function TypingAnime() {
  $(".js_typing").each(function (i) {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      if(!$(this).hasClass("endAnime")){
        arr[i].start();
        arr[i].duration = 2000;
        $(this).addClass("endAnime");
      }
    }else{
      $(this).removeClass("endAnime"); 
    }
  });
}
$(window).scroll(function () {
  TypingAnime();
});
$(window).on('load', function () {
  TypingInit(); 
  TypingAnime();
});
