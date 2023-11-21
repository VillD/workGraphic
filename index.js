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
const secondDrop = document.querySelector('.drop-hover')

window.addEventListener('scroll', () => {
	if (window.scrollY > 120) {
		navbarEl.classList.add('active-nav')
		secondDrop.classList.add('active-nav')
		secondDrop.classList.remove('header-nav')
	} else {
		navbarEl.classList.remove('active-nav')
		secondDrop.classList.remove('active-nav')
		secondDrop.classList.add('header-nav')
	}
})

const portfolios = [
	{
		id: 0,
		titulo: 'Titulo realizado 0',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 1,
		titulo: 'Titulo realizado 1',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 2,
		titulo: 'Titulo realizado 2',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 3,
		titulo: 'Titulo realizado 3',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 4,
		titulo: 'Titulo realizado 4',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 5,
		titulo: 'Titulo realizado 5',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 6,
		titulo: 'Titulo realizado 6',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 7,
		titulo: 'Titulo realizado 7',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 8,
		titulo: 'Titulo realizado 8',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 9,
		titulo: 'Titulo realizado 9',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 10,
		titulo: 'Titulo realizado 10',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 11,
		titulo: 'Titulo realizado 11',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 12,
		titulo: 'Titulo realizado 12',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 13,
		titulo: 'Titulo realizado 13',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 14,
		titulo: 'Titulo realizado 14',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 15,
		titulo: 'Titulo realizado 15',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 16,
		titulo: 'Titulo realizado 16',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 17,
		titulo: 'Titulo realizado 17',
		image: './assets/images/image-portafolio01.png',
	},
]

const btnVerMas = document.getElementById('verMasPortafolio')
const trabajos = document.querySelector('.container-trabajos')

let start = 0
let end = 4
btnVerMas.addEventListener('click', () => {
	let addPortafolio = document.createElement('div')
	addPortafolio.setAttribute('class', 'row justify-content-center gap-4')
	trabajos.appendChild(addPortafolio)

	for (let i = start; i < end; i++) {
		let articlePortfolio = document.createElement('article')
		articlePortfolio.setAttribute(
			'class',
			'card d-flex justify-content-center align-items-center col-3 p-0 position-relative trabajosRealizados'
		)
		articlePortfolio.style.backgroundImage = `url(${portfolios[i].image})`
		articlePortfolio.innerHTML = `<div class='d-flex flex-column justify-content-center align-items-center bs-blue-alpha w-100 h-100'>
			<h5 class='card-title text-green-400 h3'>${portfolios[i].titulo}</h5>
			<a
				href='#'
				class='btn btn-green-400 px-3 fs-5 font-secundary border-1 border-green-900'
			>
				Cotiza
			</a>
			</div>

			<div class='position-absolute border-card border border-1 border-green-400'></div>
		`
		addPortafolio.appendChild(articlePortfolio)
	}
	console.log('Este es start: ' + start)
	console.log('Este es end: ' + end)
	start += 4
	end += 4
	if (end > portfolios.length) {
		btnVerMas.remove()
	}
})
