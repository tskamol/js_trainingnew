const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    basketUrl: '/getBasket.json',
    products: [],
    goodsList: [],
    imgCatalog: 'https://placehold.it/200x150',
    searchLine: '',
    isVisibleCart: true,
  },
  methods: {
    getJson(url) {
      return fetch(url)
          .then(result => result.json())
          .catch(error => {
            console.log(error);
          });
    },
    addProduct(product) {
      this.getJson(`${API}/addToBasket.json`)
          .then(data =>{
            if(data.result === 1){
              let productId = +product.dataset['id'];
              let find = this.products.find(product => product.id_product === productId);
              if(find) {
                find.quantity++;
              } else {
                let product = {
                  id_product: productId,
                  price: +product.dataset['price'],
                  product_name: product.dataset['name'],
                  quantity: 0
                }
              }
            }
          });
      this.goodsList = [product];
              // this.goodsList.push({
      //   product: product,
      //   quantity: 1,
      //   product_name: '',
      // });
    },
    FilterGoods(){

    },
    result() {
      return this.goodsList > [] ? 'Товар ниже' : 'Нет данных';
    },
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
    this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          for (let el of data) {
            this.products.push(el);
          }
        });
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
});
