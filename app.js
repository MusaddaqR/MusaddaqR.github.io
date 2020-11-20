
        let lessonApp = new Vue({
        el: '#app',
        data () {
        return {
        sitename: 'Web App with Vue.js',
        products: products,
        cart: [],
        showProduct: true,
        filters: ['subject', 'location', 'price', 'availableInventory'],
        orderBy: ['Ascend', 'Descend'],
        attributeFilter: 'subject',
        attributeOrder: 'Ascend',   
        order: {
        firstName: null,
        phoneNumber: null,    
        }

        }
        },




        computed: {

        nameIsValid () {
        return !!this.order.Name
        },

        phoneIsValid () {
        return typeof this.order.phoneNumber === 
        'number' && this.order.phoneNumber > 01111111111

        },

        formIsValid() {
        return this.nameIsValid && this.phoneIsValid

        },

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
        },

        sortedProducts() {
        let productsArray = this.products.slice(0); 
        let that = this;
        function compare(a, b) {
        if (a[that.attributeFilter] > b[that.attributeFilter]) {
        return that.attributeOrder == 'Ascend' ? 1 : -1;
        }
        if (a[that.attributeFilter] < b[that.attributeFilter]) {
        return that.attributeOrder == 'Ascend' ? -1 : 1;
        }
        return 0; 
        }
        return productsArray.sort(compare); 
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
        const formIsValid = this.nameIsValid && this.phoneIsValid
        if (formIsValid) {
        alert('The order has been succesful!',this.order)
        }else {
        alert('invalid form')
        }
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
        },

        availableInventory(product) {
        return product.availableInventory - this.cartCount(product);
        },

        isattributeFilter(filter) {
        return filter == this.attributeFilter ? true : false;
        },
        isattributeOrder(order) {
        return order == this.attributeOrder ? true : false;
        },


        },

        });
