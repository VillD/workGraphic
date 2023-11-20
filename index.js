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

const portfolios = [
	{
		id: 0,
		titulo: 'Titulo realizado',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 1,
		titulo: 'Titulo realizado',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 2,
		titulo: 'Titulo realizado',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 3,
		titulo: 'Titulo realizado',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 4,
		titulo: 'Titulo realizado',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 5,
		titulo: 'Titulo realizado',
		image: './assets/images/image-portafolio01.png',
	},
	{
		id: 6,
		titulo: 'Titulo realizado',
		image: './assets/images/image-portafolio01.png',
	},
]

const btnVerMas = document.getElementById('verMasPortafolio')
const sectionPortafolio = document.querySelector('.portfolio')
const ultimo = document.querySelector('.ultimo')
const trabajos = document.querySelector('.container-trabajos')

btnVerMas.addEventListener('click', () => {
	let addPortafolio = document.createElement('div')
	addPortafolio.setAttribute('class', 'row justify-content-center gap-4')

	trabajos.appendChild(addPortafolio).innerHTML = 'Hola'
	// for (const portfolio in portfolios) {
	// 	;`<article
	// 		class='card d-flex justify-content-center align-items-center col-3 p-0 position-relative'
	// 			style='
	// 				width: 18rem;
	// 				height: 18rem;
	// 				background-image: url(${portfolio.image});
	// 				background-repeat: no-repeat;
	// 				background-size: cover;
	// 				background-position: center;
	// 			'
	// 	>
	// 		<div class='d-flex flex-column justify-content-center align-items-center bs-blue-alpha w-100 h-100'>
	// 			<h5 class='card-title text-green-400 h3'>${portfolio.titulo}</h5>
	// 			<a
	// 				href='#'
	// 				class='btn btn-green-400 px-3 fs-5 font-secundary border-1 border-green-900'
	// 			>
	// 				Cotiza
	// 			</a>
	// 		</div>

	// 		<div class='position-absolute border-card border border-1 border-green-400'></div>
	// 	</article>`
	// }
})
