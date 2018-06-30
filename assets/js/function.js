/*Scripts starts*/
$(document).on('ready', function () {
  'use strict'

  $('.hamburger').on('click', function () {
    if ($('.navbar-fixed-left').css('right') == '-100px') {
      $('.navbar-fixed-left').animate({right: '0px'}, 'slow')
    }
    else {
      if ($('.navbar-fixed-left').css('overflow-y') == 'scroll') {
        $('.navbar-fixed-left').animate({right: '-100px'}, 'slow')
      }
    }

  })

  $(document).on('click', function (evt) {

    if ($('.resonsive-tab').css('display') == 'block') {
      if (evt.target.class == 'hamburger') {
        return
      }
      if ($(evt.target).closest('.hamburger').length) {
        return
      }
      else {
        if ($('.navbar-fixed-left').css('overflow-y') == 'scroll') {
          $('.navbar-fixed-left').animate({right: '-100px'}, 'slow')
        }
      }
    }

  })


  //Vertical icon-menu active script
  $('.vertical_iconmenu li').on('click', function () {
    $('.page-top').removeClass('display_none')
    $('.wow').attr('style', 'visibility: hidden; animation-name: none; -webkit-transform:translateY(20px); -moz-transform:translateY(20px); -ms-transform:translateY(20px); -o-transform:translateY(20px); transform:translateY(20px); -webkit-animation-duration: 2s; -moz-animation-duration: 2s; -ms-animation-duration: 2s; -o-animation-duration: 2s; animation-duration: 2s;')

    $('.vertical_iconmenu li').find('a').removeClass('active')
    $('.vertical_iconmenu li').removeClass('active')
    $(this).find('a').addClass('active')
    $(this).addClass('active')

    setTimeout(function () {
      $('.wow').each(function () {

        $(this).attr('style', 'visibility: visible; animation-name: ' + $(this).attr('data-class') + '; -webkit-transform:translateY(0px); -moz-transform:translateY(0px); -ms-transform:translateY(0px); -o-transform:translateY(0px); transform:translateY(0px); -webkit-animation-duration: 2s; -moz-animation-duration: 2s; -ms-animation-duration: 2s; -o-animation-duration: 2s; animation-duration: 2s;')
      })
    }, 200)
  })

  $('.hover-menu li, .hover-menu-2 li').on('click', function () {
    $('.other-menu').addClass('active')
    $('.other-menu a').addClass('active selected')
  })

  $('.other-menu').on('mouseenter', function () {
    $('.hover-menu').animate({
      '-moz-transform': 'translate3d(399px, 0px, 0px)',
      '-webkit-transform': 'translate3d(399px, 0px, 0px)',
      '-ms-transform': 'translate3d(399px, 0px, 0px)',
      '-o-transform': 'translate3d(399px, 0px, 0px)',
      'transform': 'translate3d(399px, 0px, 0px)'
    }, 'fast')
    setTimeout(function () {
      $('.hover-menu').css('-moz-transform', 'translate3d(399px, 0px, 0px)').css('-webkit-transform', 'translate3d(399px, 0px, 0px)').css('-ms-transform', 'translate3d(399px, 0px, 0px)').css('-o-transform', 'translate3d(399px, 0px, 0px)').css('transform', 'translate3d(399px, 0px, 0px)')
      $('.other-menu').addClass('active')
      $('.other-menu a').addClass('active selected')
    }, 200)
  }).on('mouseleave', function () {
    $('.hover-menu').animate({
      '-moz-transform': 'translate3d(0px, 0px, 0px)',
      '-webkit-transform': 'translate3d(0px, 0px, 0px)',
      '-ms-transform': 'translate3d(0px, 0px, 0px)',
      '-o-transform': 'translate3d(0px, 0px, 0px)',
      'transform': 'translate3d(0px, 0px, 0px)'
    }, 'fast')
    setTimeout(function () {
      $('.other-menu').removeClass('active')
      $('.other-menu a').removeClass('active selected')
      $('.hover-menu').css('-moz-transform', 'translate3d(0px, 0px, 0px)').css('-webkit-transform', 'translate3d(0px, 0px, 0px)').css('-ms-transform', 'translate3d(0px, 0px, 0px)').css('-o-transform', 'translate3d(0px, 0px, 0px)').css('transform', 'translate3d(0px, 0px, 0px)')
    }, 200)
  })

  $('.other-menu').on('mouseenter', function () {
    $('.hover-menu-2').animate({
      '-moz-transform': 'translate3d(451px, 0px, 0px)',
      '-webkit-transform': 'translate3d(451px, 0px, 0px)',
      '-ms-transform': 'translate3d(451px, 0px, 0px)',
      '-o-transform': 'translate3d(451px, 0px, 0px)',
      'transform': 'translate3d(451px, 0px, 0px)'
    }, 'fast')
    setTimeout(function () {
      $('.hover-menu-2').css('-moz-transform', 'translate3d(451px, 0px, 0px)').css('-webkit-transform', 'translate3d(451px, 0px, 0px)').css('-ms-transform', 'translate3d(451px, 0px, 0px)').css('-o-transform', 'translate3d(451px, 0px, 0px)').css('transform', 'translate3d(451px, 0px, 0px)')
      $('.other-menu').addClass('active')
      $('.other-menu a').addClass('active selected')
    }, 200)
  }).on('mouseleave', function () {
    $('.hover-menu-2').animate({
      '-moz-transform': 'translate3d(0px, 0px, 0px)',
      '-webkit-transform': 'translate3d(0px, 0px, 0px)',
      '-ms-transform': 'translate3d(0px, 0px, 0px)',
      '-o-transform': 'translate3d(0px, 0px, 0px)',
      'transform': 'translate3d(0px, 0px, 0px)'
    }, 'fast')
    setTimeout(function () {
      $('.hover-menu-2').css('-moz-transform', 'translate3d(0px, 0px, 0px)').css('-webkit-transform', 'translate3d(0px, 0px, 0px)').css('-ms-transform', 'translate3d(0px, 0px, 0px)').css('-o-transform', 'translate3d(0px, 0px, 0px)').css('transform', 'translate3d(0px, 0px, 0px)')
      $('.other-menu').removeClass('active')
      $('.other-menu a').removeClass('active selected')

    }, 200)
  })

  // JavaScript Document
  var date1 = new Date('2018-04-29 16:00:00')
  var date2 = new Date()
  console.log('date1', date1, 'date2', date2)
  var today = date2 - date1,
    year = date2.getFullYear() - date1.getFullYear(),
    month = Math.round(today / 1000 / 60 / 60 / 24 / 30),
    days = ( today / 1000 / 60 / 60 / 24) % 30

  $('#count_years').html(year)
  $('#count_months').html(month)
  $('#count_days').html(Math.round(days))


  $(window).load(function () {
    if ($.find('.gridlayout').length) {
      $('.gridlayout').isotope({
        itemSelector: '.grid-item',
        masonry: {
          columnWidth: '.grid-item'
        }
      })
    }
  })

  /*Timer for wedding page*/
  if ($.find('#example').length) {
    $('#example').countdown({
      date: '04/29/2018 15:00:00', //Enter Target date & time - MM/DD/YYYY hh:mm:ss
      offset: +5.5,
      day: 'Day',
      days: 'Days'
    }, function () {
    })
  }

  //Horizontal Tab
  if ($.find('#parentHorizontalTab').length) {
    $('#parentHorizontalTab').easyResponsiveTabs({
      type: 'default', //Types: default, vertical, accordion
      width: 'auto', //auto or any width like 600px
      fit: true, // 100% fit in a container
      tabidentify: 'hor_1', // The tab groups identifier
      activate: function (event) { // Callback function if tab is switched
        var $tab = $(this)
        var $info = $('#nested-tabInfo')
        var $name = $('span', $info)
        $name.text($tab.text())
        $info.show()
      }
    })
  }
  // Child Tab
  if ($.find('#ChildVerticalTab_1').length) {
    $('#ChildVerticalTab_1').easyResponsiveTabs({
      type: 'vertical',
      width: 'auto',
      fit: true,
      tabidentify: 'ver_1', // The tab groups identifier
      activetab_bg: null,
      inactive_bg: null,
      active_border_color: null,
      active_content_border_color: null
    })
  }
  //Vertical Tab
  if ($.find('#parentVerticalTab').length) {
    $('#parentVerticalTab').easyResponsiveTabs({
      type: 'vertical', //Types: default, vertical, accordion
      width: 'auto', //auto or any width like 600px
      fit: true, // 100% fit in a container
      closed: 'accordion', // Start closed if in accordion view
      tabidentify: 'hor_1', // The tab groups identifier
      activate: function (event) { // Callback function if tab is switched
        var $tab = $(this)
        var $info = $('#nested-tabInfo2')
        var $name = $('span', $info)
        $name.text($tab.text())
        $info.show()
      }
    })
  }

  /*------------slick slider-------------------*/

  /*-----photo gallery------------*/
  if ($.find('.fancybox').length) {
    $('.fancybox').fancybox()
  }
  //gallery 2 other
  if ($.find('.fancybox2').length) {
    $('.fancybox2').fancybox()
  }
  /*-----------------------------------people page slider------------------------*/
  if ($.find('.the-people-slider').length) {
    $('.the-people-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 981,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 361,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: 'unslick'
        // instead of a settings object
      ]
    })
  }
  if ($.find('.ceremony-slider').length) {
    $('.ceremony-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false
          }
        },
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: 'unslick'
        // instead of a settings object
      ]
    })
  }
  window.wow = new WOW({
    animateClass: 'animated',
    offset: 0,
    callback: function () {

    }
  })

  wow.init()


})
var _gaq = _gaq || []
_gaq.push(['_setAccount', 'UA-36251023-1'])
_gaq.push(['_setDomainName', 'jqueryscript.net'])
_gaq.push(['_trackPageview']);

(function () {
  var ga = document.createElement('script')
  ga.type = 'text/javascript'
  ga.async = true
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'
  var s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(ga, s)
})()


document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
  } else if (state == 'complete') {
    setTimeout(function () {
      $('#load').animate({'opacity': '0'}, 'fast')

    }, 1000)
  }
}

$(document).on('ready', function () {
  var example1 = new Vue({
    el: '#gallery',
    data: {
      items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
    }
    /*methods: {
      getArray() {
        var arr = []
        for (var i = 0; i < 100; i++) {
          arr.push(i)
        }
        console.log('arra',arr)
        return arr
      }
    }*/
  })
})
