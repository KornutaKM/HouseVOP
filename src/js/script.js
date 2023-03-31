'use strict'

document.addEventListener('DOMContentLoaded', () => {
  let navLink = document.querySelectorAll('.menu__link')

  navLink.forEach((link) => {
    link.addEventListener('click', (el) => {
      navLink.forEach((item) => {
        item.classList.remove('menu__link_active')
      })
      el.target.classList.toggle('menu__link_active')
    })
  })
})
