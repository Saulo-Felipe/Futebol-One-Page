var menu = document.querySelector("nav")
var logo = document.querySelector(".navbar-brand")
var navLink = document.querySelectorAll(".alternativas")
var navItem = document.querySelectorAll(".nav-item")



//Verificar o tamanho da tela - NavBar config
if (window.matchMedia("(max-width: 990px)").matches) {
	menu.classList.add("navbar-dark")
	menu.classList.add("bg-dark")
} else {
	window.addEventListener("scroll", () => {

		if (window.scrollY > 70) {
			menu.classList.add("navbar-light")
			menu.classList.add("bg-light")
			logo.style.fontSize = "1.25rem"
			menu.classList.add("box-shadow")
		}
		if (window.scrollY < 70) {
			menu.classList.remove("navbar-light")
			menu.classList.remove("bg-light")
			logo.style.fontSize = "1.40rem"
			menu.classList.remove("box-shadow")
		}

		// Redimensionar itens do navBar dinamicamente
		for (let c=0; c < navLink.length; c++) {
			if (window.scrollY > 70) {
				navLink[c].style.fontSize = "0.8rem"
				navLink[c].style.color = "black"
			}
			if (window.scrollY < 70) {
				navLink[c].style.fontSize = "0.85rem"
				navLink[c].style.color = "white"
			}
		}
	})
}
//Verificar o tamanho da tela - NavBar config ^






//efeito opções navbar dinâmica
var home = document.querySelector(".home")
var sobre = document.querySelector(".caracteristicas")
var app = document.querySelector(".aplicativo")

var homeElement = document.querySelector(".one-body")
var sobreInicio = document.querySelector(".Three-body")
var sobreMeio = document.querySelector(".four-body")
var sobreFim = document.querySelector(".five-body")
var AlturaTotal = sobreInicio.getBoundingClientRect().height + sobreMeio.getBoundingClientRect().height + sobreFim.getBoundingClientRect().height
var aplicativo = document.querySelector(".six-body")
if (window.matchMedia("(max-width: 990px)").matches) {
	for (let c=0; c < navItem.length; c++) {
		navItem[c].style.paddingTop = "0"
		navItem[c].style.paddingBottom = "0"
	}
} else {
	window.addEventListener("scroll", () => {
		if ((homeElement.getBoundingClientRect().height - homeElement.getBoundingClientRect().height * 2) < (homeElement.getBoundingClientRect().y + homeElement.getBoundingClientRect().y / 3)) {
			
			home.style.borderColor = "#ff9900"
			sobre.style.borderColor = "transparent"
			app.style.borderColor = "transparent"

		} else if ((AlturaTotal - AlturaTotal - sobreFim.getBoundingClientRect().height) < (sobreFim.getBoundingClientRect().y + sobreFim.getBoundingClientRect().y / 3)) {
			
			sobre.style.borderColor = "#ff9900"
			home.style.borderColor = "transparent"
			app.style.borderColor = "transparent"

		} else if ((aplicativo.getBoundingClientRect().height - aplicativo.getBoundingClientRect().height * 2) < (aplicativo.getBoundingClientRect().y)) {
			
			sobre.style.borderColor = "transparent"
			home.style.borderColor = "transparent"
			app.style.borderColor = "#ff9900"

		}
	})
}

//efeito opções navbar dinâmica ^






//Animação ao mostrar elementos
var container = document.querySelector(".container01")
var itens = document.querySelectorAll(".item-icon")

var containerTwo = document.querySelector(".container02")
var itensTwo = document.querySelectorAll(".item-icon-two")

var time = 100
var timeTwo = 100
if (container.getBoundingClientRect().y - window.innerHeight < (window.innerHeight / 4) - (window.innerHeight / 4 * 2) - 1) {
	for (let c=0; c < itens.length; c++) {
		setTimeout(() => {
			itens[c].style.opacity = "1"
			itens[c].style.transform = "scale(1)"
		}, time += 300)
	}
} else {
	window.addEventListener("scroll", () => {
		if (container.getBoundingClientRect().y - window.innerHeight < (window.innerHeight / 4) - (window.innerHeight / 4 * 2) ) {
			for (let c=0; c < itens.length; c++) {
				setTimeout(() => {
					itens[c].style.opacity = "1"
					itens[c].style.transform = "scale(1)"
				}, time += 300)
			}
		}
	})
}
if (containerTwo.getBoundingClientRect().y - window.innerHeight < (window.innerHeight / 4) - (window.innerHeight / 4 * 2) -1) {
	for (let c=0; c < itensTwo.length; c++) {
		setTimeout(() => {
			itensTwo[c].style.opacity = "1"
			itensTwo[c].style.transform = "scale(1)"
		}, timeTwo += 300)
	}
} else {
	window.addEventListener("scroll", () => {
		if (containerTwo.getBoundingClientRect().y - window.innerHeight < (window.innerHeight / 4) - (window.innerHeight / 4 * 2) ) {
			for (let c=0; c < itensTwo.length; c++) {
				setTimeout(() => {
					itensTwo[c].style.opacity = "1"
					itensTwo[c].style.transform = "scale(1)"
				}, timeTwo += 300)
			}
		}
	})
}
//Animação ao mostrar elementos ^







//Animação center section 
var centerBody = document.querySelector(".efect-paralax")
var subTitleParalax = document.querySelector(".efect-paralax > p")
var TitleParalax = document.querySelector(".efect-paralax > h1")

window.addEventListener("scroll", () => {
	if ((centerBody.getBoundingClientRect().y - window.innerHeight + centerBody.getBoundingClientRect().y - window.innerHeight / 3) < 0) {
		subTitleParalax.style.top = "30%"
		TitleParalax.style.left = "0%"
	}
})

window.addEventListener("load", () => {
	if ((centerBody.getBoundingClientRect().y - window.innerHeight + centerBody.getBoundingClientRect().y - window.innerHeight / 3) < 0) {
		subTitleParalax.style.top = "30%"
		TitleParalax.style.left = "0%"
	}
})
//Animação center section ^







//Ações dos botões
var btn_initial_one = document.querySelector(".btn-info-one")
var btn_initial_two = document.querySelector(".btn-info-two")

var ScrollToInit = document.querySelector(".Two-body")
var ScrollToFooter = document.querySelector("footer")

btn_initial_one.addEventListener("click", () => {
	ScrollToInit.scrollIntoView()
})

btn_initial_two.addEventListener("click", () => {
	ScrollToFooter.scrollIntoView()
})
//Ações dos botões ^


//Icone - Ir para o topo
var topo = document.querySelector(".fa-chevron-circle-down")

topo.addEventListener("click", () => {
	scroll(0, 0)
})
//Icone - Ir para o topo ^



// página de loading
window.addEventListener("load", () => {
	var loading = document.querySelector(".loading")
	var animation01 = document.querySelector(".buttons")
	var animation02 = document.querySelector(".slogan")
	var animation03 = document.querySelector(".title_")
	var body = document.querySelector("body")

	loading.style.display = "none"
	animation01.style.animationName = "buttons_animated"
	animation02.style.animationName = "slogan_animated"
	animation03.style.animationName = "title_animated"
	body.style.overflowY = "scroll"

})
// página de loading ^

home.addEventListener("click", () => {
	window.scroll(0, 0)
})

sobre.addEventListener("click", () => {
	window.scrollBy(0, sobreInicio.getBoundingClientRect().y - menu.getBoundingClientRect().height)
})

app.addEventListener("click", () => {
	window.scrollBy(0, aplicativo.getBoundingClientRect().y - menu.getBoundingClientRect().height)
})

// Função de clique nos botões do navbar




//Animação Android App
var smartphone = document.querySelector(".itens-design > img") 


window.addEventListener("scroll", () => {
	if ((aplicativo.getBoundingClientRect().height - aplicativo.getBoundingClientRect().height * 2) < (aplicativo.getBoundingClientRect().y)) {
		console.log("entrou")
	}
})