
async function recuperation(){
const reponse = await fetch("./produits.json")
const produits = await reponse.json()

    function update(produits){
        for (let i = 0; i < produits.length; i++) {
            //recuperation du conteneur parrant
            const sectionArticle = document.querySelector(".article__container")
            const article = produits[i]
            //creation des produits
            const divContainer = document.createElement("div")
            divContainer.classList.add("article__container__row")
            const name = document.createElement('p')
            name.classList.add('name')
            name.innerText=article.name
            const price = document.createElement('p')
            price.innerText = `$${article.price} `
            const img = document.createElement('img')
            img.src = article.image 
            const bay = document.createElement('button')
            bay.classList.add('bay')
            bay.innerHTML= `<i class="fa-solid fa-cart-shopping"></i>`
            const description = document.createElement('p')
            description.innerText = article.description
            const divText = document.createElement('div')
            divText.classList.add('article-text')
            const divImg= document.createElement('div')
            divImg.classList.add('article-img')
            //ajout des articles dans le conteneur
            sectionArticle.append(divContainer)
            divContainer.append(divImg)
            divImg.append(img)
            divContainer.append(divText)
            divText.append(name)
            divText.append(description)
            divText.append(price)
            divText.append(bay)
        }
    }
    update(produits)
    //Filtarage des elements
    const All= document.querySelector('.btn1')
    All.addEventListener('click',(e)=>{
        e.currentTarget.parentElement.querySelector('.active').classList.remove('active');
        e.currentTarget.classList.add('active')
        document.querySelector(".article__container").innerHTML=""
        update(produits)
    })
    const Burger = document.querySelector('.btn2')
    Burger.addEventListener('click',(e)=>{
        e.currentTarget.parentElement.querySelector('.active').classList.remove('active');
        e.currentTarget.classList.add('active')
        const articleFilter1 = produits.filter((produit)=>{
            return produit.category ==='burger'
        })
        document.querySelector(".article__container").innerHTML=""
        update(articleFilter1)
    })
    const pizza = document.querySelector('.btn3')
    pizza.addEventListener('click',(e)=>{
        e.currentTarget.parentElement.querySelector('.active').classList.remove('active');
        e.currentTarget.classList.add('active')
        const articleFilter2 = produits.filter((produit)=>{
            return produit.category ==='pizza'
        })
        document.querySelector(".article__container").innerHTML=""
        update(articleFilter2)
    })
    const pasta = document.querySelector('.btn4')
    pasta.addEventListener('click',(e)=>{
        e.currentTarget.parentElement.querySelector('.active').classList.remove('active');
                e.currentTarget.classList.add('active')
        const articleFilter3 = produits.filter((produit)=>{
            return produit.category ==='pasta'
        })
        document.querySelector(".article__container").innerHTML=""
        update(articleFilter3)
    })
    const fries = document.querySelector('.btn5')
    fries.addEventListener('click',(e)=>{
        e.currentTarget.parentElement.querySelector('.active').classList.remove('active');
        e.currentTarget.classList.add('active')
        const articleFilter4 = produits.filter((produit)=>{
            return produit.category ==='fries'
        })
        
        document.querySelector(".article__container").innerHTML=""
        update(articleFilter4)
    })
    //Recuperation et Stylisation des lien de la navbar
    const link1 = document.querySelector('.link1')
    const link2 = document.querySelector('.link2')
    const link3 = document.querySelector('.link3')
    const link4 = document.querySelector('.link4')
    link1.addEventListener('click',(e)=>{
        e.preventDefault()
        console.log(e.currentTarget.parentElement.querySelector('.active').classList.remove('active'));
        e.currentTarget.classList.add('active')
    })
    link2.addEventListener('click',(e)=>{
        e.preventDefault()
        console.log(e.currentTarget.parentElement.querySelector('.active'));
        e.currentTarget.classList.add('active')
    })
    //Systeme de geolocalization
    const map = L.map('map').setView([51.505, -0.09], 13);







}
recuperation()