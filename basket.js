const basket = {
    AllProduct:[
    {
        id_product: 1,
        product_name: "Шуба",
        price: 20000,
        quantity: 45,
        coli: Math.round(Math.random()*10)

    },
    {
        id_product: 2,
        product_name: "Трусы",
        price: 950,
        quantity: 4,
        coli: Math.round(Math.random()*10),
    },
    {
        id_product: 3,
        product_name: "Рубашки",
        price: 1890,
        quantity: 9,
        coli: Math.round(Math.random()*10),
    }
    ],
    cart_total: function () {
    return this.AllProduct.reduce((c, cartItem) => c += (cartItem.price)*(cartItem.coli), 0);
    },
    coli_all: function () {
    return this.AllProduct.reduce((b,carItem)=> b+=(carItem.coli),0);
    }

};

const product = {
    AllProduct:[
        {
            id_product: 1,
            product_name: "Шуба",
            price: 20000,
            quantity: 45,
            coli: Math.round(Math.random()*10),
            photo: '088A7016.jpg'

        },
        {
            id_product: 2,
            product_name: "Трусы",
            price: 950,
            quantity: 4,
            coli: Math.round(Math.random()*10),
            photo: 'b2ad17d0-0a29-4a4b-9963-307ed1a685ec.jpeg'

        },
        {
            id_product: 3,
            product_name: "Рубашки",
            price: 1890,
            quantity: 9,
            coli: Math.round(Math.random()*10),
            photo: '088A7222.jpg'
        }
    ],

};

for (let i = 0; i<product.AllProduct.length;i++){
var img__div = document.createElement('div');
img__div.className = 'all__style';
let img__furs = document.createElement('img');
img__furs.className = 'img__furs';
img__furs.src = product.AllProduct[i].photo;
document.querySelector('body').appendChild(img__div);
img__div.appendChild(img__furs);

let p__furs = document.createElement('p');
p__furs.textContent = 'Укажите количество товара';
img__div.appendChild(p__furs);



    let col_furs = document.createElement('input');

    const PRODUCT_ID_KEY = 'data-product-id-key';

    col_furs.setAttribute(PRODUCT_ID_KEY, product.AllProduct[i].id_product);
    col_furs.onkeydown = function(e) {
        const item = product.AllProduct[i];
        item.coli = e.target.value;
    };
    col_furs.className = 'input_furs';
    img__div.appendChild(col_furs);


}


let button_furs = document.createElement('button');
button_furs.className = 'button__furs';
button_furs.textContent = 'Посчитать';
img__div.appendChild(button_furs);

button_furs.onclick = function() {
    product.AllProduct.forEach((e) => {
        console.log(e)
    });
};



const bas = document.createElement('div');
for(let i=0;i<=basket.AllProduct.length;i++) {
if (basket.AllProduct.length===0){
    bas.textContent = ' Корзина пуста';
}
else
bas.textContent = ' В вашей корзине ' + basket.coli_all() + ' товаров на сумму '  + basket.cart_total() + ' рублей ' ;
}
document.querySelector('body').appendChild(bas);



// console.log(basket.cart_total() + ' рублей');





// empty_basket = document.createElement('div');
//
// empty_basket.className = 'empty_basket';
//
// Allbasket.appendChild('empty_basket');



