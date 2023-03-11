let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }
];

let listFigures = []
let listFrames = []

//criando duas listas separando itens por categoria
function separateItens(itens) {
    for (let i = 0; i < itens.length; i++) {
        if (itens[i].type == 'Action Figures') {
            listFigures.push(itens[i])
        }
        if (itens[i].type == 'Painting') {
            listFrames.push(itens[i])
        }
    }
}
separateItens(itens)

//criando o card de cada item
function addFigures(item) {
    let newFigure = document.createElement("li")
    newFigure.id = item.name
    newFigure.className = "item-card"

    //adicionando figura ao item
    let imgFigure = document.createElement("img")
    imgFigure.src = item.image
    imgFigure.className = "item currentItem"
    imgFigure.alt = `imagem do ${item.name}`
    newFigure.appendChild(imgFigure)

    //adicionando o nome do item
    let nameFigure = document.createElement("span")
    nameFigure.innerText = item.name
    nameFigure.className = "item-name title-medium"
    newFigure.appendChild(nameFigure)

    //adicionando valor do item
    let valueFigure = document.createElement("span")
    valueFigure.innerText = item.price
    valueFigure.className = "item-price product-value"
    newFigure.appendChild(valueFigure)

    return newFigure
}

//criando a seção carrosel
function createSection(lista, nome, id) {
    const main = document.querySelector("main");
    //criando a seção
    const section = document.createElement("section")
    section.className = "section"

    //criando o titulo da seção
    let title = document.createElement("h2")
    title.innerText = nome
    title.className = "title-regular"
    section.appendChild(title)

    //criando div container
    let container = document.createElement("div")
    container.className = "container"
    section.appendChild(container)

    // criando button left com identificador único
    let buttonLeft = document.createElement("button");
    buttonLeft.className = `arrow-left control${id}`;
    buttonLeft.setAttribute("arial-label", "Previous image");
    buttonLeft.innerText = "◀";
    container.appendChild(buttonLeft);

    // criando button right com identificador único
    let buttonRight = document.createElement("button");
    buttonRight.className = `arrow-right control${id}`;
    buttonRight.setAttribute("arial-label", "Next image");
    buttonRight.innerText = "▶";
    container.appendChild(buttonRight);

    //criando galeria-wraperr
    let gallery = document.createElement("div")
    gallery.className = "gallery-wrapper"
    container.appendChild(gallery)


    //criando uma lista não ordenada na seção
    let sectionList = document.createElement("ul")
    sectionList.className = "gallery"
    gallery.appendChild(sectionList)

    //colocando os e elementos na lista
    for (let i = 0; i < lista.length; i++) {
        let card = addFigures(lista[i])
        sectionList.appendChild(card)
    }

    //configurando botão corrossel 
    // let control = document.querySelectorAll(`.control${id}`)
    // let items = document.querySelectorAll('.item')
    // let currentItem = 0
    // let maxItems = lista.length

    // control.forEach(control => {
    //     control.addEventListener('click', () => {
    //         let isLeft = classList.contains("arrow-left")
    //         if (isLeft) {
    //             currentItem--;
    //         } else {
    //             currentItem++;
    //         }

    //         if (currentItem >= maxItems){
    //             currentItem = 0
    //         }
    //         if (currentItem < 0) {
    //             currentItem = maxItems - 1
    //         }

    //         items.forEach((item) =>
    //         item.classList.remove('current-item'))

    //         items[currentItem].scrollIntoView({
    //             inline: "center"
    //         })

    //         items[currentItem].classList.add("current-item")
    //     })
    // });
    
    main.appendChild(section)
}

createSection(listFigures, "Paintings", "1")
createSection(listFrames, "Action Figures", "2")

