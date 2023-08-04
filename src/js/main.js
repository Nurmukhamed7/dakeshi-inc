import '../scss/style.scss'

// Функционал для меню
const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.onclick = () => {
	if (nav.classList.toggle('open')) {
		navBtnImg.src = '/images/x-btn.svg'
	} else {
		navBtnImg.src = '/images/nav-button.svg'
	}
}

// Функционал для 2 секции
gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.matchMedia({
	'(min-width: 1200px)': function () {
		const tl = gsap.timeline()
		tl.to('.wrapper', 4, { x: -window.innerWidth * 1.2 })

		ScrollTrigger.create({
			animation: tl,
			trigger: '.wrapper',
			start: 'center center',
			end: '+=3000',
			scrub: true,
			pin: true,
		})
	},

	'(min-width: 992px) and (max-width: 1200px)': function () {
		const tl = gsap.timeline()
		tl.to('.wrapper', 4, { x: -window.innerWidth * 1.8 })

		ScrollTrigger.create({
			animation: tl,
			trigger: '.wrapper',
			start: 'center center',
			end: '+=3000',
			scrub: true,
			pin: true,
		})
	},

	'(min-width: 768px) and (max-width: 992px)': function () {
		const tl = gsap.timeline()
		tl.to('.wrapper', 4, { x: -window.innerWidth * 2.3 })

		ScrollTrigger.create({
			animation: tl,
			trigger: '.wrapper',
			start: 'center center',
			end: '+=3000',
			scrub: true,
			pin: true,
		})
	},

	'(min-width: 590px) and (max-width: 700px)': function () {
		const tl = gsap.timeline()
		tl.to('.wrapper', 4, { x: -window.innerWidth * 2.1 })

		ScrollTrigger.create({
			animation: tl,
			trigger: '.wrapper',
			start: 'center center',
			end: '+=3000',
			scrub: true,
			pin: true,
		})
	},

	'(min-width: 480px) and (max-width: 590px)': function () {
		const tl = gsap.timeline()
		tl.to('.wrapper', 4, { x: -window.innerWidth * 2.65 })

		ScrollTrigger.create({
			animation: tl,
			trigger: '.wrapper',
			start: 'center center',
			end: '+=3000',
			scrub: true,
			pin: true,
		})
	},

	'(min-width: 320px) and (max-width: 480px)': function () {
		const tl = gsap.timeline()
		tl.to('.wrapper', 4, { x: -window.innerWidth * 2.7 })

		ScrollTrigger.create({
			animation: tl,
			trigger: '.wrapper',
			start: 'center center',
			end: '+=3000',
			scrub: true,
			pin: true,
		})
	},
})
