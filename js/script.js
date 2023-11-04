
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
    const sectionArticle = document.querySelector('.article')
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
        const sectionArticle = document.querySelector(".article__container")
        sectionArticle.style.height = '60vh'
        sectionArticle.style.display='grid'
        sectionArticle.style.marginTop = "300px"
        sectionArticle.style.gridTemplateColumns='repeat(3,1fr)'
        sectionArticle.style.gridTemplateRows='repeat(1,33px)'
        console.log(getComputedStyle(sectionArticle).display)
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
    //Recuperation et Stylisation des lien de la 
    const linkpa = document.querySelector('.list')
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
        console.log(e.currentTarget.parentElement.querySelector('.active').classList.remove('active'));
        e.currentTarget.classList.add('active')
    })
    //Systeme de geolocalization
    
    /**
     * creation des annimation et les transions
     */
    const transition1 = document.querySelector(".buttonclik1")
    transition1.addEventListener('click',function(e){
        const parrent = document.querySelector('.div1')
        console.log(parrent.classList.add('cacherGauche'))
        
    })
    const dotSpan3 = document.querySelector('.dotSpan3')
    dotSpan3.addEventListener('click',(e)=>{
        console.log(e.currentTarget.classList.add('activeDot'))

    })
    const transition = document.querySelector(".buttonclik1")
    transition.addEventListener('click',function(e){
        const parrent2 = document.querySelector('.div2')
        parrent2.style.display = 'block'
        parrent2.style.transitionProperty = 'all'
        parrent2.style.transitionTimingFunction ='ease'
        parrent2.style.transitionDuration ='0.1s'
        parrent2.style.transform = "translate(-5%)"
        console.log(getComputedStyle(parrent2).display)
        console.log(getComputedStyle(parrent2).transitionTimingFunction)
        console.log(getComputedStyle(parrent2).transform)

        
    })
    const transition2 = document.querySelector(".buttonclik2")
    transition2.addEventListener('click',function(e){
        const parrent = document.querySelector('.satisfaction__container')
        console.log(parrent.classList.add('vi'))
        const color = parrent.styles.display
        console.log(color)
    })




}
recuperation()