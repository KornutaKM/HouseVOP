'use strict'
document.addEventListener('DOMContentLoaded', () => {
  function removeClassActive() {
    menuList.forEach((item) => {
      item.classList.remove('menu__link_active')
    })
  }

  let burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    menuList = document.querySelectorAll('.menu__link')

  console.log(burger)

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active')
    menu.classList.toggle('menu_active')
  })

  menuList.forEach((link) => {
    link.addEventListener('click', (e) => {
      removeClassActive()
      e.target.classList.add('menu__link_active')

      if (burger.classList.contains('burger_active')) {
        burger.classList.toggle('burger_active')
        menu.classList.toggle('menu_active')
      }
    })
  })
})
