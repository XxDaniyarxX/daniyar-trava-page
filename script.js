let urlParams = new URLSearchParams(window.location.search)
let category_slug = urlParams.get("category")
const content = document.querySelector('.our-products')
let API = 'https://dummyjson.com/products'
const CATEGORY_API = "https://dummyjson.com/products/categories"
const list = document.querySelector(".list")

if(category_slug){
    API  = `https://dummyjson.com/products/category/${category_slug}`
}

async function getProducts() {
    try {
        let res = await fetch(API);
        let data = await res.json();

        console.log(data);
        showProduct(data.products)

    } catch (error) {
        console.log(error);
        
    }
}

getProducts()

function showProduct(data){
    content.innerHTML = data.map((item)=>{
        return `
        <div onclick="getpro(${item.id})" class='product'>
            <div class="discount">${item.discountPercentage}% OFF</div>
            <img src='${item.thumbnail}' alt="">
            <h5>${item.title}</h5>
            <span>${item.price}$</span>
        </div>
        `
    }).join("")
}

async function  getCategory () {
    try {
        const res = await fetch (CATEGORY_API)

        const data = await res.json()

        console.log (data);

        list.innerHTML = data.map( (item) =>{
            return `
            <li onclick="setCategory('${item.slug}')"> ${item.name}</li>
            `

        }).join("")

    } catch (error) {
        console.log (error);
    }
}
getCategory()

function setCategory(slug) {
    window.location.href = `index.html?category=${slug}`
}
function getpro(id) {
    window.location.href = `product.html?id=${id}`
}



document.querySelector('.login').addEventListener('click', () => {
    const Signup = document.querySelector('.signup')
    if (Signup.style.display === 'none') {
        Signup.style.display = 'block'
        Signup.style.position = 'fixed'
        banner.style.backgroundColor = 'rgb(229, 229, 229)';
        plants.style.backgroundColor = 'rgb(229, 229, 229)';
        Signup.style.backgroundColor = 'white';
        Signup.style.zIndex = '1';
    }
})
const plants = document.querySelector('.plants')
const banner = document.querySelector('.banner')
const xSvg = document.querySelector('.x-svg')
const signUp = document.querySelector('.signup')
const input1 = document.querySelector('.input-1')
const input2 = document.querySelector('.input-2')
const loginGreen = document.querySelector('.login-green')
    xSvg.addEventListener('click', () => {
        if (xSvg === true) {
           signUp.style.display = 'block'
        } else {
            signUp.style.display = 'none'
            if (input1.value === '') {
                alert('Веди пожалуйста почту  -_-')
                signUp.style.display = 'block'

            } else if (input2.value === '') {
                alert('а пароль -_-')
                signUp.style.display = 'block'
            } else if (loginGreen) {
                alert('Нажми на кнопку логин XD')
                signUp.style.display = 'block'

            }
            loginGreen.addEventListener('click', () => {
                signUp.style.display = 'none'
                input1.value = ''
                input2.value = ''
            })
            input1.value = ''
            input2.value = ''
            banner.style.backgroundColor = 'white';
            plants.style.backgroundColor = 'white';


        }
    })