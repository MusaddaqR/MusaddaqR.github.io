
        let webstore = new Vue({
            el: '#app',
            data: {
                sitename: 'Web app with Vue.js',
                products: products,
                cart: [],
                showProduct: true,
                order: {
                    firstName: '',
                    phoneNumber: '',    
                },       
            },
     
            methods: {
                addToCart(product) {
                    this.cart.push(product.id);
               
                },
                showCheckout() {
             
                    this.showProduct = this.showProduct ? false : true;
                },
                submitForm() {
                    alert('Order submitted!')
                },
                canAddToCart(product) {
                    return product.availableInventory > this.cartCount(product.id);
                },
                cartCount(id) {
                    let count = 0;
                    for (let i = 0; i < this.cart.length; i++) {
                        if (this.cart[i] === id) {
                            count++;
                        }
                    }
                    return count;
                }
            },
            computed: {
                cartItemCount() {
                    return this.cart.length;
                },
    

                sortedProducts() {
                    let productsArray = this.products.slice(0);
                    function compare(a, b) {
                        if (a.price > b.price)
                            return 1;
                        if (a.price < b.price)
                            return -1;
                        return 0;
                    }
                    return productsArray.sort(compare);
                }
            },
        });
