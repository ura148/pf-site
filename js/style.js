$(function(){
  $("#footer").load("footer.html");
});

$(window).on('load resize',function(){
  hoverToggle();
  let deviceW = 768,
      windowW = $(window).width(),
      pfItem = $(".portfolio__item"),
      pfContent = $(".portfolio__item-content"),
      pfContent2 = $(".portfolio__item-content2"),
      pfItemWidth = pfItem.width(),
      pfItemHeight = pfItemWidth * 1.7786 ,
      pfItemheight2 = pfItemWidth / 1.618 ,
      pfContentHeight = pfContent.height(),
      pfContent2Height = pfContent2.height();

      // pf area のサイズ指定
      $(".portfolio__item").css("height",pfItemHeight),
      pfContent.css("padding-top", (pfItemHeight - pfContentHeight) / 2),
      pfContent.css("padding-bottom", (pfItemHeight - pfContentHeight) / 2),
      pfContent2.css("padding-top", (pfItemHeight - pfContent2Height) / 2),
      pfContent2.css("padding-bottom", (pfItemHeight - pfContent2Height) / 2);
      $(".content3").css("height",pfItemheight2);

      if(windowW <= deviceW){
        let blogItem = $(".blog-item"),
            blogItemWidth = blogItem.width(),
            blogItemHeight = blogItemWidth * 0.2163;

        $(".blog-item").css("height",blogItemHeight);

      }
});

let hoverToggle = function(){
  let ua = navigator.userAgent.toLowerCase();
      winW = $(window).width();
      devW = 768;
      hover = ".portfolio__background-image,.portfolio__item-content";

  if (ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0 || ua.indexOf('ipod') > 0 || ua.indexOf('mobile') > 0 ) {
      $(hover).removeClass('hover');

  } else{
      $(hover).addClass('hover');
  }
}

$(function(){
  $(window).scroll(function(){
    let scrollTop = $(window).scrollTop(),
        windowHeight = $(window).height(),
        scrollBottom = scrollTop + windowHeight;

    $(".fade-animation").each(function(){
      let itemTop = $(this).offset().top,
          itemHeight =$(this).height(),
          fadeStart = itemTop + (itemHeight / 2);

          if (scrollTop > fadeStart - windowHeight){
            $(this).addClass('fade-in');
          }
    });
  });
});

// ==============================
// メニューボタンの設定
//
$(".btn-trigger").on("click",function(){
  $(this).toggleClass("active");
  $(".header-nav").toggleClass("slide-in");
  $(".header-nav").addClass("slide-out")
});
//
//
// ===============================
