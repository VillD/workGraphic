var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	freeMode: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		968: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

const navbarEl = document.querySelector('.navBar')
const mainContainer = document.querySelector('.main-container')

window.addEventListener('scroll', () => {
	if (window.scrollY > 120) {
		navbarEl.classList.add('active-nav')
	} else {
		navbarEl.classList.remove('active-nav')
	}
})
