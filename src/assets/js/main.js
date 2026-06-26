import $ from 'jquery'

export default function initMain() {
  'use strict'

  const windowOn = $(window)

  // 01. PreLoader Js
  // $(window).on('load', function () {
  $('#preloader').fadeOut(500)
  // })

  //$(window).on('load', function () {
  $('#loading').fadeOut(500)
  //})

  // 02. Mobile Menu Js
  let siMenuWrap = $('.si-mobile-menu-active > ul').clone()
  let siSideMenu = $('.si-offcanvas-menu nav')

  siSideMenu.append(siMenuWrap)

  if ($(siSideMenu).find('.submenu, .mega-menu').length !== 0) {
    $(siSideMenu)
      .find('.submenu, .mega-menu')
      .parent()
      .append('<button class="si-menu-close"><i class="fa-solid fa-plus"></i></button>')
  }

  let sideMenuList = $(
    '.si-offcanvas-menu nav > ul > li button.si-menu-close, .si-offcanvas-menu nav > ul li.has-dropdown > a',
  )

  $(sideMenuList).on('click', function (e) {
    e.preventDefault()

    $(this).parent().toggleClass('active')

    $(this).siblings('.submenu, .mega-menu').slideToggle()
  })

  // 03. Common Js

  $('[data-bg-color]').each(function () {
    $(this).css('background-color', $(this).attr('data-bg-color'))
  })

  $('[data-background]').each(function () {
    $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')')
  })

  $('[data-width]').each(function () {
    $(this).css('width', $(this).attr('data-width'))
  })

  $('[data-text-color]').each(function () {
    $(this).css('color', $(this).attr('data-text-color'))
  })

  // 04 Nice Select

  if ($('.si-select select').length) {
    $('.si-select select').niceSelect()
  }

  // 08 Back to top

  function back_to_top() {
    let btn = $('#back_to_top')

    let wrapper = $('.back-to-top-wrapper')

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 300) {
        wrapper.addClass('back-to-top-btn-show')
      } else {
        wrapper.removeClass('back-to-top-btn-show')
      }
    })

    btn.on('click', function (e) {
      e.preventDefault()

      $('html, body').animate(
        {
          scrollTop: 0,
        },
        300,
      )
    })
  }

  back_to_top()

  // 10 Sticky Header

  $(window).on('scroll', function () {
    let scroll = $(window).scrollTop()

    if (scroll < 20) {
      $('#header-sticky').removeClass('header-sticky')
    } else {
      $('#header-sticky').addClass('header-sticky')
    }
  })

  // 11 Open Handlers

  $('.si-offcanvas-open-btn').on('click', function () {
    $('.si-offcanvas-area,.body-overlay').addClass('opened')
  })

  // 12 Close

  $('.si-offcanvas-close-btn,.body-overlay').on('click', function () {
    $('.si-offcanvas-area').removeClass('opened')

    $('.body-overlay').removeClass('opened')
  })

  // GSAP

  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)

    if ($('#smooth-wrapper').length) {
      ScrollSmoother.create({
        smooth: 1.35,

        effects: true,
      })
    }
  }

  // Button animation

  $('.si-circle-btn').on('mouseenter', function (e) {
    let x = e.pageX - $(this).offset().left

    let y = e.pageY - $(this).offset().top

    $(this).find('.si-circle-btn-dot').css({
      top: y,

      left: x,
    })
  })
}
