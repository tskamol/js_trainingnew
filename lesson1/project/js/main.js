'use strict';

const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad'},
];

const renderProduct = (item, img = 'https://place-hold.it/200', price = 'no price', title = 'no title') =>
   `<div class="product-item">
            <img src="${img}" alt="">
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;


const renderProducts = list => {
  document.querySelector('.products').insertAdjacentHTML("beforeend", list.map(item => renderProduct(item, item.img, item.price, item.title)).join(''));
  // const productList = list.map(function (product) {
  //   return renderProduct(product.title, product.price)
  // });
  // console.log(productList);
  // document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);
