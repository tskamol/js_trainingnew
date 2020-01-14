'use strict';

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this.render();
  }
  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }
  render(){
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}
class ProductItem {
  constructor(product, img = 'http://placehold.it/200x200') {
  this.title = product.title;
  this.price = product.price;
  this.id = product.id;
  this.img = img;
  }
render (){
 return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <a href="" class="data-id="${this.id}">Купить</a>
                </div>
            </div>`;
}
}

class basket {
  constructor(product, img ='http://placehold.it/200x200' ) {
    this.allProducts = [];
    this.title = product.title;
    this.price = product.price;
    this.img = img;
    this.render();
    this.GoodsList();
  }
  GoodsList() {
    return this.allProducts.reduce((c, cartItem) => c += (cartItem.price)*(cartItem.coli), 0);
  }
}
const list = new ProductList();

// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (title, price, img ='http://placehold.it/200x200') => {
//   return `<div class="product-item">
//             <img src="${img}" alt="Some img">
//             <h3>${title}</h3>
//             <p>${price}</p>
//             <button class="by-btn">Добавить в корзину</button>
//           </div>`;
// };
//
// const renderProducts = (list, title="Значение заголовка по умолчанию", price= "Значение прайс по умолчанию 0",) => {
//   const productList = list.map(product => renderProduct(product.title, product.price)).join('');
//   // const productList = list.map(function (product) {
//   //   return renderProduct(product.title, product.price)
//   // });
//   // console.log(productList);
//   document.querySelector('.products').innerHTML = productList;
// };
//
// renderProducts(products);
