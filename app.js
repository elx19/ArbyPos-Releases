const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelector('#nav-links')

navToggle?.addEventListener('click', () => {
  const open = navLinks?.classList.toggle('is-open') ?? false
  navToggle.setAttribute('aria-expanded', String(open))
})

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open')
    navToggle?.setAttribute('aria-expanded', 'false')
  })
})

const year = document.querySelector('#year')
if (year) year.textContent = String(new Date().getFullYear())
