

$(window).on('load resize',function(){
  let deviceW = 768,
      windowW = $(window).width(),
      pfItem = $(".pf-item"),
      pfContent = $(".pf-content"),
      pfContent2 = $(".pf-content2"),
      pfItemWidth = pfItem.width(),
      pfItemHeight = pfItemWidth * 1.68 ,
      pfItemheight2 = pfItemWidth / 1.618  ,
      pfContentHeight = pfContent.height(),
      pfContent2Height = pfContent2.height();

      // pf area のサイズ指定
      $(".pf-item").css("height",pfItemHeight),
      pfContent.css("padding-top", (pfItemHeight - pfContentHeight) / 2),
      pfContent.css("padding-bottom", (pfItemHeight - pfContentHeight) / 2),
      pfContent2.css("padding-top", (pfItemHeight - pfContent2Height) / 2),
      pfContent2.css("padding-bottom", (pfItemHeight - pfContent2Height) / 2);
      $(".content3").css("height",pfItemheight2);

      if(windowW <= deviceW){
        let portfolioLi = $(".portfolio-list"),
            portfolioItemF = $("#portfolioItemF"),
            portfolioitemE = $("#portfolioItemE"),
            portfolioItemFTop = $("#portfolioItemF").offset().top,
            portfolioItemETop = $("#portfolioItemE").offset().top,
            portfolioItemEHeight = $("#portfolioItemE").height(),
            portfolioItemEBottom = portfolioItemETop + portfolioItemEHeight;

        portfolioLi.css("height",(portfolioItemEBottom - portfolioItemFTop));
      }

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
