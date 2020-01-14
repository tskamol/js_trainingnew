// корзина
const basket = {
    AllProduct:[

    ],
    // метод подсчета суммы товара в корзине
    cart_total: function () {
    return this.AllProduct.reduce((c, cartItem) => c += (cartItem.price)*(cartItem.coli), 0);
    },

    // метод подсчета общего количества товара
    coli_all: function () {
    return this.AllProduct.reduce((b,carItem)=> b+=(+carItem.coli),0);
    },
    // метод подсчета и вывода количества товара
    renderTotal: function() {
        const bas = document.createElement('div');
        bas.className = 'basket__total';
        if (this.AllProduct.length===0)
            bas.textContent = ' Корзина пуста';
        else
            bas.textContent = ' В вашей корзине ' +   this.coli_all() + ' товаров на сумму '  + this.cart_total() + ' рублей ' ;

        const basketTotalContainer = document.querySelector('.basket__total');
        if(!basketTotalContainer) {
            document.querySelector('body').appendChild(bas);
        } else {
            basketTotalContainer.parentNode.removeChild(basketTotalContainer);
            document.querySelector('body').appendChild(bas);
        }
    },
    // метод отвечающий за рендеринг корзины
    basket__rendering: function () {
        const {AllProduct} = this;
        let img__div__basket = document.querySelector('.all__style2');
        if(!img__div__basket) {
            img__div__basket = document.createElement('div');
            img__div__basket.className = 'all__style2';
        }else {
            img__div__basket.innerHTML = '';
        }
        for (let i = 0; i<this.AllProduct.length;i++) {e.target.parentNode.ParentNode
            let img__furs__basket = document.createElement('img');
            img__furs__basket.className = 'img__furs';
            img__furs__basket.src = this.AllProduct[i].photo;
            img__div__basket.appendChild(img__furs__basket);
            document.querySelector('body').appendChild(img__div__basket);

            let col_furs__basket = document.createElement('input');
            const PRODUCT_ID_KEY = 'data-product-id-key';
            col_furs__basket.setAttribute(PRODUCT_ID_KEY, this.AllProduct[i].id_product);
            col_furs__basket.onclick = function(e) {
                const item = this.AllProduct[i];
                item.coli = e.target.value;
            };
            col_furs__basket.className = 'input_furs';
            img__div__basket.appendChild(col_furs__basket);

            let cancel__buy = document.createElement('button');
            cancel__buy.textContent = 'Удалить товар';
            cancel__buy.className = 'button_style';
            cancel__buy.setAttribute('data-index', i);
            cancel__buy.setAttribute(PRODUCT_ID_KEY, this.AllProduct[i].id_product);
            img__div__basket.appendChild(cancel__buy);
            cancel__buy.onclick = function(e) {
                const parent = e.target.parentNode.parentNode;
                const index = e.target.getAttribute('data-index');
                AllProduct.splice(index, 1);
                parent.removeChild(e.target.parentNode);
                basket.cart_total();
                basket.renderTotal();
            };

        }

 }
};
// каталог
const product = {
    AllProduct:[
        {
            id_product: 1,
            product_name: "Шуба",
            price: 20000,
            quantity: 45,
            coli: 0,
            photo: '088A7016.jpg',
            photo1: 'Image326492.jpg'

        },
        {
            id_product: 2,
            product_name: "Трусы",
            price: 950,
            quantity: 4,
            coli: 0,
            photo: 'b2ad17d0-0a29-4a4b-9963-307ed1a685ec.jpeg'

        },
        {
            id_product: 3,
            product_name: "Рубашки",
            price: 1890,
            quantity: 9,
            coli: 0,
            photo: '088A7222.jpg'
        }
    ]

};

// цикл который создает товары из каталога
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

// инпут количество
    let col_furs = document.createElement('input');

    const PRODUCT_ID_KEY = 'data-product-id-key';

    col_furs.setAttribute(PRODUCT_ID_KEY, product.AllProduct[i].id_product);
    col_furs.onkeydown = function(e) {
        const item = product.AllProduct[i];
        item.coli = e.target.value;
    };
    col_furs.className = 'input_furs';
    img__div.appendChild(col_furs);

//кнопка купить
    let button_buy = document.createElement('button');
    button_buy.textContent = 'купить';
    button_buy.className = 'button_style';
    button_buy.setAttribute(PRODUCT_ID_KEY, product.AllProduct[i].id_product);
    img__div.appendChild(button_buy);
    button_buy.onclick = function(e) {
        const parent = e.target.parentNode;
        const value = parent.querySelector('input').value;
        const productId = e.target.getAttribute(PRODUCT_ID_KEY);
        const cartItem = basket.AllProduct.find((cartItem) => productId == cartItem.id_product);
        if(!cartItem) {
            const prod = { ...product.AllProduct[i], coli: +value, };
            basket.AllProduct.push(prod);
        } else {
            cartItem.coli += +value;
        }

        basket.cart_total();
        basket.renderTotal();
        basket.basket__rendering();

        // console.log(basket.AllProduct);

        // console.log(basket.AllProduct[i].product_name);
    }
}
// basket.renderTotal();



