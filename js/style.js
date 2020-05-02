

$(window).on('load resize',function(){
  let pfList = $("#pf-list"),
      pfContent = $(".pf-content"),
      pfContent2 = $(".pf-content2"),
      pfListWidth = pfList.width(),
      pfListHeight = pfListWidth * 1.68 ,
      pfListheight2 = pfListWidth / 1.618  ,
      pfContentHeight = pfContent.height(),
      pfContent2Height = pfContent2.height();

  // pf area のサイズ指定
  $(".pf-list").css("height",pfListHeight),
  pfContent.css("padding-top", (pfListHeight - pfContentHeight) / 2),
  pfContent.css("padding-bottom", (pfListHeight - pfContentHeight) / 2),
  pfContent2.css("padding-top", (pfListHeight - pfContent2Height) / 2),
  pfContent2.css("padding-bottom", (pfListHeight - pfContent2Height) / 2);
  $(".content3").css("height",pfListheight2);


});

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
