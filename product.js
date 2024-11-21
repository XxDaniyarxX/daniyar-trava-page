const urlParams = new URLSearchParams(window.location.search)

const id = urlParams.get('id')

const api = `https://dummyjson.com/products/${id}`

const products = document.querySelector('.product');

async function getProducts() {
    try {
        const response = await fetch(api)
        const data = await response.json()

        console.log(data)
        showMeProducts(data)
    } catch (error) {
        console.log(error)
    }
}
getProducts()

function showMeProducts(data) {
    products.innerHTML = `
        <div style="display: flex; gap: 30px; padding-left: 30px">
            <div>
                <div style="width: 100px; height: 100px; margin-bottom: 16px">
                    <img width="100px" src="${data.images[0]}" alt="">
                </div>
                <div style="width: 100px; height: 100px; margin-bottom: 16px">
                    <img width="100px" src="${data.images[1]}" alt="">
                </div>
                <div style="width: 100px; height: 100px; margin-bottom: 16px">
                    <img width="100px" src="${data.images[2]}" alt="">
                </div>
                <div style="width: 100px; height: 100px;">
                    <img width="100px" src="${data.images[3]}" alt="">
                </div>
            </div>
            <div>
                <div>
                    <img src="${data.thumbnail}" alt="">
                </div>
            </div>
        </div>
        
         <div class="product_info" style=" margin-left: 55px; ">
        <h1>${data.brand}</h1>
        <div style="display: flex; gap: 300px; align-items: center">
            <h3 style="font-weight: 700; color: rgba(70, 163, 88, 1); font-size: 22px; padding-top: 10px">$${data.price}</h3>
            <div style="display: flex; gap: 5px">
                <img src="./assets/star.svg" alt="">
                <img src="./assets/star.svg" alt="">
                <img src="./assets/star.svg" alt="">
                <img src="./assets/star.svg" alt="">
                <img src="./assets/star-1.svg" alt="">
                <h4 style="padding-left: 7px">${data.reviews[0].comment}</h4>
            </div>
        </div>
            <h3 style="padding-top: 40px; font-weight: 500; padding-bottom: 10px">Short Description:</h3>
             <p style=" color: rgba(114, 114, 114, 1); font-weight: 400; font-size: 14px; width: 570px">${data.description} </p>
             <h3 style="font-weight: 500; padding-top: 20px; padding-bottom: 10px">Size:</h3>
             <div style="display: flex; gap: 10px; font-size: 10px; padding-bottom: 20px">
                 <div style="width: 28px; height: 28px; border: 1px solid rgba(70, 163, 88, 1); border-radius: 50%; justify-content: center; display: flex; align-items: center">S</div>
                 <div style="width: 28px; height: 28px; border: 1px solid rgba(234, 234, 234, 1); border-radius: 50%; justify-content: center; display: flex; align-items: center">M</div>
                 <div style="width: 28px; height: 28px; border: 1px solid rgba(234, 234, 234, 1); border-radius: 50%; justify-content: center; display: flex; align-items: center">L</div>
                 <div style="width: 28px; height: 28px; border: 1px solid rgba(234, 234, 234, 1); border-radius: 50%; justify-content: center; display: flex; align-items: center">XL</div>
             </div>
             <div style="display: flex; gap: 10px; align-items: center; padding-bottom: 20px">
                <div style="width: 33px; height: 38px; background-color: rgba(70, 163, 88, 1); border-radius: 29px; display: flex; justify-content: center"><h1 style="color: #FFFFFF">--</h1></div>
                 <h2>1</h2>
                  <div style="width: 33px; height: 38px; background-color: rgba(70, 163, 88, 1); border-radius: 29px; display: flex; justify-content: center; align-items: center"><h2 style="color: #FFFFFF">+</h2></div>
                <button style="width: 130px; height: 40px; border-radius: 6px; background-color: rgba(70, 163, 88, 1); font-weight: 700; color: #FFFFFF; border: none">BUY NOW</button>
                <button style="color: rgba(70, 163, 88, 1); border: 1px solid rgba(70, 163, 88, 1); width: 130px; height: 40px; border-radius: 6px; background-color: #FFFFFF">ADD TO CARD</button>
                <button style="width: 40px; height: 40px; border-radius: 6px; border: 1px solid rgba(70, 163, 88, 1); background-color: #FFFFFF; display: flex; justify-content: center; align-items: center"><img src="./assets/green-heart.svg" alt=""> </button>
             </div>
          <h4 style="color: rgb(165, 165, 165); padding-bottom: 5px">SKU: <span style="color: rgb(114, 114, 114)">${data.sku}</span></h4>
          <h4 style="color: rgb(165, 165, 165); padding-bottom: 5px">Categories: <span style="color: rgb(114, 114, 114)">${data.title}</span></h4>
          <h4 style="color: rgb(165, 165, 165); padding-bottom: 10px">Tags: <span style="color: rgb(114, 114, 114)">${data.tags}</span></h4>
          <h4 style="font-weight: 700; color: rgba(61, 61, 61, 1); ">Share this products: <span style="padding-left: 5px"><img src="./assets/fb.svg"> </span> <span style="padding-left: 9px;"><img src="./assets/twit.svg"> </span> <span style="padding-left: 9px"><img src="./assets/linkedin.svg"> </span> <span style="padding-left: 9px"><img src="./assets/mail.svg"> </span></h4>
    </div>
    `
}
