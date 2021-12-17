(function($) {
var windowWidth = $(window).width();
var windowWidth_1920 = $('.page-body-cntlr').width();


$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});

// __________________________________-fullwidthimgleftWidth-_________________________________
// __________________________________-fullwidthimgleftWidth-_________________________________
// __________________________________-fullwidthimgleftWidth-_________________________________
// __________________________________-fullwidthimgleftWidth-_________________________________
// __________________________________-fullwidthimgleftWidth-_________________________________
function fullwidthimgleftWidth(){
    var windowWidth =  $(window).width();
    var containerwidth =  $('.container').width();
    var leftconWidth = ((windowWidth-containerwidth)/2);
        $(".full-width-img-cntlr").css({
      "margin-left":-leftconWidth,
    });
  }
  fullwidthimgleftWidth();
  $(window).resize(function(){
    fullwidthimgleftWidth();
  });

// fullwidthimgleftWidth();



/* custom sidebar */
if( $('#customSidebar').length ){
    var windowWidth_1920 = $('.page-body-cntlr').outerWidth();
    var containerRightWidth = $('#customSidebarWrap').offset().left;
    var col2inw = $('#customSidebarWrap').innerWidth();
    //$('#customSidebar').css("left", containerRightWidth);
    $('#customSidebar').css("max-width", col2inw);
    
    function containerRightWidthCal(){
      var windowWidth_1920 = $(window).width();
      var containerWidth = $('.page-body-cntlr').outerWidth();
        var containerRightWidth = $('#customSidebarWrap').offset().left;
        var col2inw = $('#customSidebarWrap').innerWidth();
        // $('#customSidebar').css("left", containerRightWidth);
        $('#customSidebar').css("max-width", col2inw);
    }
    containerRightWidthCal();
    $(window).on('resize', function(){
      containerRightWidthCal();
    });
    
    if( windowWidth_1920 > 767 ){
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            if( $('#customSidebar').length ){

                var boxh = $('#customSidebar').height();
                var ftrtop = $(".footer-wrp").offset().top;
                var ftrx = (ftrtop - boxh) -200 ;
                if( scroll < ftrx ){
                    $('#customSidebar').css('top', scroll);
                    $('#customSidebar').addClass('customSidebar-position');
                }
                if( scroll <= 100){
                  $('#customSidebar').removeClass('customSidebar-position');
                }
            }
        });
    }
}


	
if($("ul.slick-dots li").length == 1){
   $("ul.slick-dots").hide();
}
//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};
if($('.mHc1').length){
  $('.mHc1').matchHeight();
};
if($('.mHc2').length){
  $('.mHc2').matchHeight();
};
if($('.mHc3').length){
  $('.mHc3').matchHeight();
};
if($('.mHc4').length){
  $('.mHc4').matchHeight();
};
if($('.mHc5').length){
  $('.mHc5').matchHeight();
};
if($('.mHc6').length){
  $('.mHc6').matchHeight();
};
$(window).load(function() {
//matchHeightCol
  if($('.mHc').length){
    $('.mHc').matchHeight();
  };
  if($('.mHc1').length){
    $('.mHc1').matchHeight();
  };
  if($('.mHc2').length){
    $('.mHc2').matchHeight();
  };
  if($('.mHc3').length){
    $('.mHc3').matchHeight();
  };
  if($('.mHc4').length){
    $('.mHc4').matchHeight();
  };
  if($('.mHc5').length){
    $('.mHc5').matchHeight();
  };
  if($('.mHc6').length){
    $('.mHc6').matchHeight();
  };
});

//$('[data-toggle="tooltip"]').tooltip();

//banner animation
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.page-banner-bg').css({
    '-webkit-transform' : 'scale(' + (1 + scroll/2000) + ')',
    '-moz-transform'    : 'scale(' + (1 + scroll/2000) + ')',
    '-ms-transform'     : 'scale(' + (1 + scroll/2000) + ')',
    '-o-transform'      : 'scale(' + (1 + scroll/2000) + ')',
    'transform'         : 'scale(' + (1 + scroll/2000) + ')'
  });
});


if($('.fancybox').length){
$('.fancybox').fancybox({
    //openEffect  : 'none',
    //closeEffect : 'none'
  });

}



// _____________________________________select2________________________________________________
if( $('.select2-inr').length ){
  $('.select2-inr ul li a').on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('active');
    $(this).parents('.select2-inr').find('.select2-inr ul li').removeClass('active');
    $(this).next().slideToggle(300);
  });
}



/**
Responsive on 767px
*/

// if (windowWidth <= 767) {
  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }



// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover


/**______________________________testimonialSlider_______________________________________ */

if( $('.testimonialSlider').length ){
    $('.testimonialSlider').slick({
      // dots: true,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 1200,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
}



/**_______________________________relatedarticleSlider_______________________________*/

if( $('.relatedarticleSlider').length ){
    $('.relatedarticleSlider').slick({
      // dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 700,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
}


$(document).ready(function(){
  $('.accordian_header').click(function(){
    $(this).parent().siblings().find('.accordian_body').slideUp();
    $(this).parent().siblings().find('.icon_remove').removeClass('icon_remove');
    $(this).next('.accordian_body').slideToggle('fast');
    $(this).find('span').toggleClass('icon_remove');
  });
});



/* BS form Validator*/
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// _____________________________________-fullwidthimgleftWidth-_____________________________________
// _____________________________________-fullwidthimgleftWidth-_____________________________________
// _____________________________________-fullwidthimgleftWidth-_____________________________________
// _____________________________________-fullwidthimgleftWidth-_____________________________________
// _____________________________________-fullwidthimgleftWidth-_____________________________________





    // var containerwidth = $(".container").width();
    // var leftmargin = ((windowWidth-containerwidth)/2);
  // fullwidthimgleftWidth();
  // $(window).resize(function(){
  //   leftWidth();
  // });

  //   $(".lft-grey-bg").css({
  //     "width":mradd,
  //   });



if( $('.contact-form-wrp').length ){
  $('.contact-form-wrp .wpforms-container .wpforms-form .wpforms-submit-container button').on('click', function(){
    $('.wpforms-field input[required],.wpforms-field select[required]').parents('.wpforms-field').addClass('wpforms-has-error');
    $('.wpforms-field input[required],.wpforms-field select[required]').addClass('wpforms-error');
  });
}


if( $('.wpforms-error').length ){
  $('.wpforms-error').on('click', function(){
    $(this).parents('.wpforms-field').removeClass('wpforms-has-error');
  });
}


// start jahir__________________________________
if( $('.hdr-search-icon a').length ){
  $('.hdr-search-icon a').on('click', function(){
    $('.hdr-search-icon').toggleClass('for-show-form');
  });
}

if (windowWidth <= 767){
    if( $('.nieuwsSlider').length ){
      $('.nieuwsSlider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
  }

if (windowWidth <= 767){
    if( $('.PdctPgniSlider2').length ){
      $('.PdctPgniSlider2').slick({
        dots: true,
        arrows: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
  }

// ________________________________scrollto2________________________________________
// ________________________________scrollto2________________________________________
// ________________________________scrollto2________________________________________
// ________________________________scrollto2________________________________________
if( $('.scrollto2').length ){
  $('.scrollto2').on('click', function(e){
    e.preventDefault();
    var togo = $(this).data('to');
    goToByScroll(togo, 100);
  });
}
function goToByScroll(id, offset){
  if(id){
    // Remove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    $('html,body').animate(
      {scrollTop: $(id).offset().top - offset},
      500);
  }
}

/* _____________________________custom sidebar_____________________________ */
/* _____________________________custom sidebar_____________________________ */
/* _____________________________custom sidebar_____________________________ */
/* _____________________________custom sidebar_____________________________ */
/* _____________________________custom sidebar_____________________________ */
if( $('#customSidebar').length ){
    var windowWidth_1920 = $('.page-body-cntlr').outerWidth();
    var containerRightWidth = $('#customSidebarWrap').offset().left;
    var col2inw = $('#customSidebarWrap').innerWidth();
    //$('#customSidebar').css("left", containerRightWidth);
    $('#customSidebar').css("max-width", col2inw);
    
    function containerRightWidthCal(){
      var windowWidth_1920 = $(window).width();
      var containerWidth = $('.page-body-cntlr').outerWidth();
        var containerRightWidth = $('#customSidebarWrap').offset().left;
        var col2inw = $('#customSidebarWrap').innerWidth();
        // $('#customSidebar').css("left", containerRightWidth);
        $('#customSidebar').css("max-width", col2inw);
    }
    containerRightWidthCal();
    $(window).on('resize', function(){
      containerRightWidthCal();
    });
    
    if( windowWidth_1920 > 767 ){
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            if( $('#customSidebar').length ){

                var boxh = $('#customSidebar').height();
                var ftrtop = $(".footer-wrp").offset().top;
                var ftrx = (ftrtop - boxh) -200 ;
                if( scroll < ftrx ){
                    $('#customSidebar').css('top', scroll);
                    $('#customSidebar').addClass('customSidebar-position');
                }
                if( scroll <= 100){
                  $('#customSidebar').removeClass('customSidebar-position');
                }
            }
        });
    }
}
  
  
// _____________________________header-works______________________________________
// _____________________________header-works______________________________________
// _____________________________header-works______________________________________
// _____________________________header-works______________________________________
// _____________________________header-works______________________________________
 $(window).scroll(function() { 
    var scroll = $(window).scrollTop();   
    if (scroll >= 100) {
        $('.header-sticky').addClass('fixed-hdr');
    } else {
        $('.header-sticky').removeClass('fixed-hdr');
    }  
});

 if( $('.hamburgar-cntlr').length ){
  $('.hamburgar-cntlr').click(function(){
    $('body').toggleClass('allWork');
  });
}
if(windowWidth <=1199){
    if( $('li.menu-item-has-children').length ){
      $('li.menu-item-has-children').click(function(){
       $(this).find('.sub-menu').slideToggle(300);
       $(this).toggleClass('sub-menu-arrow');
     });
    }
}



if( $('.scrollto').length ){
  $('.scrollto').on('click', function(e){
    e.preventDefault();
    var togo = $(this).data('to');
    goToByScroll(togo, 0);
  });
}
function goToByScroll(id, offset){
  if(id){
    // Remove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    $('html,body').animate(
      {scrollTop: $(id).offset().top - offset},
      500);
  }
}



// ________________________________bannerheight____________________________________
// ________________________________bannerheight____________________________________
// ________________________________bannerheight____________________________________
// ________________________________bannerheight____________________________________
// ________________________________bannerheight____________________________________
// ________________________________bannerheight____________________________________
  function bannerheight(){
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      var headerHight = $('.header').height();
      var bnrHeight = (windowHeight - headerHight);
      if (windowWidth > 1199){
        $('.hm-banner-desc-cntlr').css('height', bnrHeight);
      }
}
  bannerheight();
  $(window).resize(function(){
    bannerheight();
  });


 // if (windowWidth >= 767) {
function leftWidth(){
    var windowWidth = $(window).width();
    var containerwidth = $(".container").width();
    var lefttoconWidth = ((windowWidth-containerwidth)/2);
    var mradd = lefttoconWidth+1;
    $(".lft-grey-bg").css({
      "width":mradd,
    });
  }
  leftWidth();
  $(window).resize(function(){
    leftWidth();
  });

  if (windowWidth <= 767) {
  if( $('.hmProcessSlider').length ){
      $('.hmProcessSlider').slick({
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1200,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  }
}


$('.tv-select select').select2();
$('.select-2-cntlr').select2();




 if (windowWidth <= 767) {
  if( $('.FlProductSlider').length ){
      $('.FlProductSlider').slick({
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1200,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
      });
  }
}

 if (windowWidth <= 767) {
  if( $('.PdctPgniSlider').length ){
      $('.PdctPgniSlider').slick({
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
      });
  }
}


$(".dft-fl-btn" ).each(function( index ) {
  var color = $(this).data('color');
  var bg = $(this).data('bg');
  var border = $(this).data('border');
  $(this).css('color', color);
  $(this).css('background', bg);
  $(this).css('border-color', border);
  $(this).on('mouseenter', function(){
    if( bg != ''){
      $(this).css('background', 'transparent');
      $(this).css('color', bg);
    }
    if( bg == ''){
      $(this).css('background', border);
      $(this).css('color', '#fff');
    }
  });
  $(this).on('mouseleave', function(){
    if( bg != ''){
      $(this).css('background', bg);
      $(this).css('color', color);
    }
    if( bg == ''){
      $(this).css('background', 'transparent');
      $(this).css('color', border);
    }
  });
});

if( $('#vacature_url').length > 0 ){
  let vacURL = $('#vacature_url').data('url');
  $('body .wpforms-field.wpforms-field-hidden.vacatur_url input').val(vacURL);
}

// new WOW().init();

})(jQuery);