import $ from 'jquery'
import Swiper from 'swiper'

import 'swiper/css'

export default function activeSlider() {
  'use strict'

  // Marquee Active

  if (document.querySelector('.si-marquee-active')) {
    new Swiper('.si-marquee-active', {
      loop: true,

      freeMode: true,

      slidesPerView: 'auto',

      spaceBetween: 165,

      centeredSlides: true,

      allowTouchMove: false,

      speed: 5000,

      autoplay: {
        delay: 1,

        disableOnInteraction: true,
      },
    })
  }

  // Project

  if (document.querySelector('.si-project')) {
    new Swiper('.si-project', {
      slidesPerView: 1,

      spaceBetween: 30,

      loop: true,

      navigation: {
        prevEl: '.si-button-prev',

        nextEl: '.si-button-next',
      },

      breakpoints: {
        1920: {
          slidesPerView: 2,
        },

        1400: {
          slidesPerView: 2,
        },

        992: {
          slidesPerView: 2,
        },

        768: {
          slidesPerView: 1,
        },

        0: {
          slidesPerView: 1,
        },
      },
    })
  }

  // Testimonial

  if (document.querySelector('.card-testimonial')) {
    new Swiper('.card-testimonial', {
      slidesPerView: 1,

      spaceBetween: 30,

      scrollbar: {
        el: '.si-swiper-scrollbar',
      },
    })
  }

  // Testimonial 3

  if (document.querySelector('.swiper-testimonial-3')) {
    new Swiper('.swiper-testimonial-3', {
      spaceBetween: 30,

      loop: true,

      navigation: {
        nextEl: '.si-button-next',

        prevEl: '.si-button-prev',
      },

      breakpoints: {
        1920: {
          slidesPerView: 2,
        },

        1400: {
          slidesPerView: 2,
        },

        992: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 1,
        },

        0: {
          slidesPerView: 1,
        },
      },
    })
  }

  // Testimonial com thumb

  if (document.querySelector('.si-testimonial-bottom-thumb-active')) {
    const thumbSwiper = new Swiper('.si-testimonial-bottom-thumb-active', {
      direction: 'vertical',

      spaceBetween: 30,

      centeredSlides: true,

      slidesPerView: 3,

      loop: true,
    })

    const mainSwiper = new Swiper('.si-testimonial-content-active', {
      spaceBetween: 24,

      slidesPerView: 1,

      loop: true,

      loopedSlides: 4,

      autoplay: {
        delay: 6000,

        disableOnInteraction: false,
      },
    })

    const authorSwiper = new Swiper('.si-testimonial-bottom-author-active', {
      spaceBetween: 24,

      slidesPerView: 1,

      loop: true,

      loopedSlides: 4,

      autoplay: {
        delay: 6000,

        disableOnInteraction: false,
      },
    })

    mainSwiper.on('slideChange', () => {
      thumbSwiper.slideToLoop(mainSwiper.realIndex)

      authorSwiper.slideToLoop(mainSwiper.realIndex)
    })

    thumbSwiper.on('click', () => {
      let index =
        thumbSwiper.slides[thumbSwiper.clickedIndex]?.getAttribute('data-swiper-slide-index')

      if (index !== undefined) {
        mainSwiper.slideToLoop(parseInt(index))

        authorSwiper.slideToLoop(parseInt(index))
      }
    })

    authorSwiper.on('click', () => {
      let index =
        authorSwiper.slides[authorSwiper.clickedIndex]?.getAttribute('data-swiper-slide-index')

      if (index !== undefined) {
        mainSwiper.slideToLoop(parseInt(index))

        thumbSwiper.slideToLoop(parseInt(index))
      }
    })

    const nextBtn = document.querySelector('.si-testimonial-next')

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        mainSwiper.slideNext()
      })
    }
  }

  // Interactive gallery

  $('.interactive-gallery-list-wrap .interactive-gallery-list-item').on('mouseenter', function () {
    $('#interactive-gallery-thumb').removeClass().addClass($(this).attr('rel'))

    $(this).addClass('active').siblings().removeClass('active')
  })
}
