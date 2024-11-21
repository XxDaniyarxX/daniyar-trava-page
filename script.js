let urlParams = new URLSearchParams(window.location.search)

let category_slug = urlParams.get("category")


let content = document.querySelector('.our-products')
let API = 'https://dummyjson.com/products'

let CATEGORY_API = "https://dummyjson.com/products/categories"

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