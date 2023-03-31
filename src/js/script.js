'use strict'
document.addEventListener('DOMContentLoaded', () => {
  let burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    menuList = document.querySelectorAll('.menu__link')

  console.log(burger)

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger__active')
    menu.classList.toggle('menu__active')
  })
  menuList.forEach((item) => {
    item.addEventListener('click', () => {
      if (menu.classList.contains('menu__active')) {
        burger.classList.remove('burger__active')
        menu.classList.remove('menu__active')
      }
    })
  })
})
