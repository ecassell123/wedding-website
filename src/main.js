import './styles.css'
import { weddingDate, faq, config } from './site-content.js'

// ── Initialization ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav()
  initReveal()
  initCountdown()
  initFAQ()
  initGallery()
  initRSVP()
  initScrollUtils()
  buildFAQ()
})

// ── Navigation ───────────────────────────────────────────────────────────────
function initNav() {
  const nav      = document.getElementById('main-nav')
  const burger   = document.getElementById('nav-burger')
  const menu     = document.getElementById('mobile-menu')
  const menuLinks = menu?.querySelectorAll('a') ?? []
  const closeBtn = document.getElementById('mobile-menu-close')

  // Nav is always olive green — no scroll class needed

  // Hamburger open/close
  function openMenu() {
    menu?.classList.remove('hidden')
    menu?.classList.add('open')
    burger?.classList.add('open')
    burger?.setAttribute('aria-expanded', 'true')
    document.body.style.overflow = 'hidden'
    closeBtn?.focus()
  }
  function closeMenu() {
    menu?.classList.remove('open')
    menu?.classList.add('hidden')
    burger?.classList.remove('open')
    burger?.setAttribute('aria-expanded', 'false')
    document.body.style.overflow = ''
    burger?.focus()
  }

  burger?.addEventListener('click', () => {
    const isOpen = menu?.classList.contains('open')
    isOpen ? closeMenu() : openMenu()
  })
  closeBtn?.addEventListener('click', closeMenu)

  // Close on link click
  menuLinks.forEach(link => link.addEventListener('click', closeMenu))

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu?.classList.contains('open')) closeMenu()
  })

  // Registry dropdown (desktop)
  const registryBtn      = document.getElementById('registry-btn')
  const registryDropdown = document.getElementById('registry-dropdown')
  const registryChevron  = document.getElementById('registry-chevron')

  function openRegistry() {
    registryDropdown?.classList.remove('hidden')
    registryBtn?.setAttribute('aria-expanded', 'true')
    if (registryChevron) registryChevron.style.transform = 'rotate(180deg)'
  }
  function closeRegistry() {
    registryDropdown?.classList.add('hidden')
    registryBtn?.setAttribute('aria-expanded', 'false')
    if (registryChevron) registryChevron.style.transform = ''
  }

  registryBtn?.addEventListener('click', e => {
    e.stopPropagation()
    registryDropdown?.classList.contains('hidden') ? openRegistry() : closeRegistry()
  })
  document.addEventListener('click', () => closeRegistry())
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeRegistry()
  })

  // Registry accordion (mobile)
  const mobileRegistryBtn      = document.getElementById('mobile-registry-btn')
  const mobileRegistryDropdown = document.getElementById('mobile-registry-dropdown')
  const mobileRegistryChevron  = document.getElementById('mobile-registry-chevron')

  mobileRegistryBtn?.addEventListener('click', () => {
    const isOpen = !mobileRegistryDropdown?.classList.contains('hidden')
    if (isOpen) {
      mobileRegistryDropdown?.classList.add('hidden')
      mobileRegistryDropdown?.classList.remove('flex')
      mobileRegistryBtn?.setAttribute('aria-expanded', 'false')
      if (mobileRegistryChevron) mobileRegistryChevron.style.transform = ''
    } else {
      mobileRegistryDropdown?.classList.remove('hidden')
      mobileRegistryDropdown?.classList.add('flex')
      mobileRegistryBtn?.setAttribute('aria-expanded', 'true')
      if (mobileRegistryChevron) mobileRegistryChevron.style.transform = 'rotate(180deg)'
    }
  })

  // Trap focus inside open menu (simple)
  menu?.addEventListener('keydown', e => {
    if (e.key !== 'Tab' || !menu.classList.contains('open')) return
    const focusable = [...menu.querySelectorAll('button, a, [tabindex="0"]')]
    const first = focusable[0]
    const last  = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last?.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first?.focus()
    }
  })
}

// ── Section reveal on scroll ─────────────────────────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
}

// ── Countdown timer ──────────────────────────────────────────────────────────
function initCountdown() {
  const target   = new Date(weddingDate.iso).getTime()
  const daysEl   = document.getElementById('cd-days')
  const hoursEl  = document.getElementById('cd-hours')
  const minsEl   = document.getElementById('cd-mins')
  const secsEl   = document.getElementById('cd-secs')
  const doneEl   = document.getElementById('cd-done')
  const timerEl  = document.getElementById('cd-timer')

  if (!daysEl) return

  function update() {
    const now  = Date.now()
    const diff = target - now

    if (diff <= 0) {
      timerEl && (timerEl.style.display = 'none')
      doneEl  && (doneEl.style.display  = 'block')
      return
    }

    const days  = Math.floor(diff / 86400000)
    const hours = Math.floor((diff % 86400000) / 3600000)
    const mins  = Math.floor((diff % 3600000)  / 60000)
    const secs  = Math.floor((diff % 60000)    / 1000)

    daysEl.textContent  = String(days)
    hoursEl.textContent = String(hours).padStart(2, '0')
    minsEl.textContent  = String(mins).padStart(2, '0')
    secsEl.textContent  = String(secs).padStart(2, '0')
  }

  update()
  setInterval(update, 1000)
}

// ── FAQ accordion ────────────────────────────────────────────────────────────
function buildFAQ() {
  const container = document.getElementById('faq-list')
  if (!container) return

  faq.forEach((item, i) => {
    const id = `faq-body-${i}`
    const el = document.createElement('div')
    el.className = 'faq-item'
    el.innerHTML = `
      <button
        class="faq-trigger"
        aria-expanded="false"
        aria-controls="${id}"
      >
        <span>${item.q}</span>
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-body" id="${id}" role="region">
        <div class="faq-body-inner">${item.a}</div>
      </div>
    `
    container.appendChild(el)
  })

  initFAQ()
}

function initFAQ() {
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true'
      const body = document.getElementById(trigger.getAttribute('aria-controls'))

      // Close all others
      document.querySelectorAll('.faq-trigger').forEach(t => {
        t.setAttribute('aria-expanded', 'false')
        const b = document.getElementById(t.getAttribute('aria-controls'))
        if (b) b.style.maxHeight = '0'
      })

      if (!expanded && body) {
        trigger.setAttribute('aria-expanded', 'true')
        body.style.maxHeight = body.scrollHeight + 'px'
      }
    })
  })
}

// ── Gallery lightbox ─────────────────────────────────────────────────────────
function initGallery() {
  const lightbox  = document.getElementById('lightbox')
  const lbImg     = document.getElementById('lightbox-img')
  const lbClose   = document.getElementById('lightbox-close')
  const lbPrev    = document.getElementById('lightbox-prev')
  const lbNext    = document.getElementById('lightbox-next')

  if (!lightbox) return

  const items   = [...document.querySelectorAll('.gallery-item')]
  let current   = 0

  function openAt(index) {
    current = ((index % items.length) + items.length) % items.length
    const img = items[current].querySelector('img')
    if (!img || !lbImg) return
    lbImg.src = img.src
    lbImg.alt = img.alt
    lightbox.classList.add('open')
    lightbox.removeAttribute('aria-hidden')
    document.body.style.overflow = 'hidden'
    lbClose?.focus()
  }

  function closeBox() {
    lightbox.classList.remove('open')
    lightbox.setAttribute('aria-hidden', 'true')
    document.body.style.overflow = ''
    items[current]?.focus()
  }

  items.forEach((item, i) => {
    item.setAttribute('tabindex', '0')
    item.setAttribute('role', 'button')
    item.addEventListener('click',   () => openAt(i))
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openAt(i) } })
  })

  lbClose?.addEventListener('click', closeBox)
  lbPrev?.addEventListener('click',  () => openAt(current - 1))
  lbNext?.addEventListener('click',  () => openAt(current + 1))

  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeBox() })
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return
    if (e.key === 'Escape')     closeBox()
    if (e.key === 'ArrowLeft')  openAt(current - 1)
    if (e.key === 'ArrowRight') openAt(current + 1)
  })
}

// ── RSVP form ────────────────────────────────────────────────────────────────
function initRSVP() {
  const form    = document.getElementById('rsvp-form')
  const success = document.getElementById('rsvp-success')
  if (!form) return

  function validate() {
    let valid = true

    const required = form.querySelectorAll('[required]')
    required.forEach(field => {
      const err = document.getElementById(`${field.id}-error`)
      if (!field.value.trim()) {
        field.classList.add('error')
        if (err) err.classList.add('visible')
        valid = false
      } else {
        field.classList.remove('error')
        if (err) err.classList.remove('visible')
      }
    })

    // Email format
    const email = form.querySelector('#rsvp-email')
    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add('error')
      const err = document.getElementById('rsvp-email-error')
      if (err) { err.textContent = 'Please enter a valid email address.'; err.classList.add('visible') }
      valid = false
    }

    return valid
  }

  form.addEventListener('submit', e => {
    e.preventDefault()
    if (!validate()) return

    // ⚠ RSVP FORM IS NOT CONNECTED TO A BACKEND.
    // Replace this block with your form submission logic (Formspree, Netlify Forms, etc.)
    form.style.display = 'none'
    if (success) {
      success.style.display = 'block'
      success.focus()
    }
  })

  // Live validation on blur
  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('blur', () => {
      const err = document.getElementById(`${field.id}-error`)
      if (!field.value.trim()) {
        field.classList.add('error')
        if (err) err.classList.add('visible')
      } else {
        field.classList.remove('error')
        if (err) err.classList.remove('visible')
      }
    })
  })

  // Guest count toggle
  const attendingYes = document.getElementById('attending-yes')
  const attendingNo  = document.getElementById('attending-no')
  const guestSection = document.getElementById('guest-details')

  function toggleGuests() {
    const showing = attendingYes?.checked
    if (guestSection) guestSection.style.display = showing ? 'block' : 'none'
  }

  attendingYes?.addEventListener('change', toggleGuests)
  attendingNo?.addEventListener('change',  toggleGuests)
}

// ── Scroll utilities ─────────────────────────────────────────────────────────
function initScrollUtils() {
  const rsvpFloat  = document.getElementById('rsvp-float')
  const backToTop  = document.getElementById('back-to-top')
  const rsvpSection = document.getElementById('rsvp')

  const onScroll = () => {
    const scrolled = window.scrollY > 400

    // Floating RSVP — hide once user reaches the real RSVP section
    if (rsvpFloat && rsvpSection) {
      const rsvpTop = rsvpSection.getBoundingClientRect().top
      const show = scrolled && rsvpTop > 0
      rsvpFloat.classList.toggle('hidden', !show)
    }

    // Back to top
    if (backToTop) backToTop.classList.toggle('visible', scrolled)
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}
