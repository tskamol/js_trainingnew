'use strict';
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad'},
// ];
//
// const renderProduct = (item, img = 'https://place-hold.it/200', price = 'no price', title = 'no title') =>
//    `<div class="product-item">
//             <img src="${img}" alt="">
//             <h3>${title}</h3>
//             <p>${price}</p>
//             <button class="by-btn">Добавить в корзину</button>
//           </div>`;
//
//
// const renderProducts = list => {
//   document.querySelector('.products').insertAdjacentHTML("beforeend", list.map(item => renderProduct(item, item.img, item.price, item.title)).join(''));
//   // const productList = list.map(function (product) {
//   //   return renderProduct(product.title, product.price)
//   // });
//   // console.log(productList);
//   // document.querySelector('.products').innerHTML = productList;
// };
//
// renderProducts(products);

// Переделать в ДЗ

// let getRequest = (url, cb) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         console.log('Error');
//       } else {
//         cb(xhr.responseText);
//       }
//     }
//
//   };
//   xhr.send();
// };
//
// getRequest(`${API}/catalogData.json`, cb);

// переписал на промисы

// let getRequest2 = (url) => {
//     return  fetch(url)
//         .then(res => res.json())
//         .catch(error => {
//             console.log(error)
//         })
// };
// getRequest2(`${API}/catalogData.json`);

//  еще
//
// function fetch (method, url) {
//   return new Promise(function (resolve, reject) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.onload = function () {
//       if (this.status >= 200 && this.status < 300) {
//         resolve(xhr.response);
//       } else {
//         reject({
//           status: this.status,
//           statusText: xhr.statusText
//         });
//       }
//     };
//     xhr.onerror = function () {
//       reject({
//         status: this.status,
//         statusText: xhr.statusText
//       });
//     };
//     xhr.send();
//   });
// }

fetch('GET', 'google.com')
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.error(' error!', err.statusText);
    });

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._getProducts()
        .then(data => {
          this.goods = [...data];
          this.render();
        });
    this.render();
  }

  // _fetchProducts() {
  //   this.goods = [
  //     {id: 1, title: 'Notebook', price: 20000},
  //     {id: 2, title: 'Mouse', price: 1500},
  //     {id: 3, title: 'Keyboard', price: 5000},
  //     {id: 4, title: 'Gamepad', price: 4500},
  //   ];
  // }

  _getProducts() {
    return fetch(`${API}/catalogData.json`)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        });
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
  this.product_name = product.product_name;
  this.price = product.price;
  this.id = product.id;
  this.img = img;
  }
render (){
 return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.product_name}</h3>
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
    this.Additem();
  }
  GoodsList() {
    return this.allProducts.reduce((c, cartItem) => c += (cartItem.price)*(cartItem.coli), 0);
  }
  Additem() {
     return function () {

    }
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

