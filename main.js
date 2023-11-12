var app = new Vue({
    el:'#app',
    data:{
        product:'Socks',
        image:'./assets/vmSocks-green.jpg',
        link:'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        // onSale:true,
        // inStock:50,
        inStock:true,
        details:['80% cotton','20% polyester','Gender-neutral'],
        variants:[
            {variantId:2234,variantColor:'green',variantImage:'./assets/vmSocks-green.jpg'},
            {variantId:2235,variantColor:'blue',variantImage:'./assets/vmSocks-blue.jpg'}
        ],
        sizes:[6,7,8],
        cart:0
    },
    methods:{
        addCart(){
            this.cart +=1
        },
        removeCart(){
            if(this.cart > 0){
                this.cart -=1
            } else {
                this.cart = 0
            }
        },
        updateProduct(variantImage){
            this.image=variantImage
        }
    }
})