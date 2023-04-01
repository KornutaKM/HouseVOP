'use strict'

document.addEventListener('DOMContentLoaded', () => {
  let navLink = document.querySelectorAll('.menu__link'),
    burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu')

  navLink.forEach((link) => {
    link.addEventListener('click', (el) => {
      removeActive()
      el.target.classList.toggle('menu__link_active')
    })
  })

  function removeActive() {
    navLink.forEach((item) => {
      item.classList.remove('menu__link_active')
      burger.classList.remove('burger_active')
      menu.classList.remove('menu_active')
    })
  }

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active')
	 menu.classList.toggle('menu_active')
  })

console.log(burger);
})
