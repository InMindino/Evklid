const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});



document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs-nav__btn').forEach(function (clickBtn) {
    clickBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path


      document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('tabs-nav__btn--active')
      })

      document.querySelectorAll('.tabs-item').forEach(function (tabsItem) {
        tabsItem.classList.remove('tabs-item--active')
      })

      document.querySelector(`.tabs-item[data-target="${path}"]`).classList.add('tabs-item--active')
      document.querySelector(`.tabs-nav__btn[data-path="${path}"]`).classList.add('tabs-nav__btn--active')
    })
  })
})


$(".accordion").accordion({
  heightStyle: 'content',
  active: 5
});


let burger = document.querySelector('.header-burger')
let menu = document.querySelector('.nav')
let menuLinks = document.querySelectorAll('.nav__link')

burger.addEventListener('click',

  function () {
    burger.classList.toggle('header-burger--active');

    menu.classList.toggle('nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('header-burger--active');

    menu.classList.remove('nav--active');

    document.body.classList.remove('stop-scroll')
  })
})



let loop = document.querySelector('.header__logo-search')
let pole = document.querySelector('.header__search')
let exit = document.querySelector('.header__search-icon-exit')

loop.addEventListener('click', function () {
  pole.classList.add('header__search--active')
});

exit.addEventListener('click', function () {
  pole.classList.toggle('header__search--active')
});


