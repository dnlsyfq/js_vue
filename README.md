#### CLI
```
npm install -g @vue/cli
vue --version
```


* Create Instance 

```
<div id="app">
    <h1>{{product}}</h1>
</div>

var app = new Vue({ // instance 
    // options 
})
```

* Instance property 
> to create relationship between main.js and html , from instance gives property like el , data 

```
({
    el:'#app' // connect to div id ,
    data:{
        product: 'Socks'
    }
})

```

* Expression reference in html 
> to produce or evalue value 
```
{{product + '?'}}

{{firstName + ' ' + lastName}}

{{clicked ? true:false}}

{{message.split(',').reverse().join('')}}

```

---
In chrome console .

app.product = 'Clocks' // will change above value to new value 


---

* attribute binding , v-bind
> automatically binds an attribute to an expression 

```
<img v-bind:src="image"/>
<img src="./assets/vmSocks-green.jpg"/>
<img v-bind:src"image" v-bind:alt="altText"/>
<img :src="image"/>
<a :href="link" target="_blank">Get Here</a>



// short hand of v-bind
:href="url"
:title="toolTip"
:class="isActive"
:style="isStyle"
:disabled="isDisabled"
```

---

* Conditional Rendering

```
<p v-if="inStock">In Stock</p>
<p v-else>Out of Stock</p>



({
    data:{
        instock:true
    }
})
```

```
<p v-show="inStock">In Stock</p>
```
> for real case 

```
<p v-if="inventory > 10">Instock </p>
<p v-else-if="inventory <= 10 && inventory > 0"> Barely Stock</p>
<p v-else>Out of Stock</p>


({
    data:{
        inventory: 8
    }
})
```
---

* List Rendering

```
// html
<ul>
    <li v-for="detail in details">{{detail}}</li>
</ul>

// js 
data : {
    details:["80% cotton","20% polyester","Gender-neutral"]
}

```

```
<div id="app">
    <div v-for="variant in variants" :key="variant.id">{{ variant.color }}</div>
</div>

    <!-- Import App -->
<script src="./main.js"></script>

    <!-- Mount App -->
    <script>
      const mountedApp = app.mount('#app')
    </script>

const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id:2234,color:'green'},
                {id:2235,color:'blue'}
            ]
        }
    }
})
```

### Event Handling
@mouseover
@click

* Event Click ( No Function )
```
 <div id="app">
      <div class="nav-bar"></div>

      <div class="cart">Cart({{ cart }})</div>
      
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img v-bind:src="image">
          </div>
          <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <div v-for="variant in variants" :key="variant.id">{{ variant.color }}</div>
            <button class="button" v-on:click="cart +=1">Add to Cart</button>


          </div>
        </div>
      </div>
    </div>

    <!-- Import App -->
    <script src="./main.js"></script>

    <!-- Mount App -->
    <script>
      const mountedApp = app.mount('#app')
    </script>
```
```
const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },

})
```

* Event Click ( with v on or short hand with @click )
```
 <div id="app">
      <div class="nav-bar"></div>

      <div class="cart">Cart({{ cart }})</div>
      
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img v-bind:src="image">
          </div>
          <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <div v-for="variant in variants" :key="variant.id">{{ variant.color }}</div>
            <button class="button" v-on:click="addToCart">Add to Cart</button>
            //<button class="button" @click="addToCart">Add to Cart</button>
            

          </div>
        </div>
      </div>
    </div>
    
    <script src="./main.js"></script>

    <!-- Mount App -->
    <script>
      const mountedApp = app.mount('#app')
    </script>
```

```
const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        }
    }
})

```
### Class & Style Binding

```
  <div id="app">
      <div class="nav-bar"></div>

      <div class="cart">Cart({{ cart }})</div>
      
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img v-bind:src="image">
          </div>
          <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div 
              v-for="variant in variants" 
              :key="variant.id" 
              @mouseover="updateImage(variant.image)" 
              class="color-circle"
              :style="{backgroundColor: variant.color}"> // camelcase
              :style="{'background-color':variant.color}"> //kebabcase
            </div>
            <button class="button" @click="addToCart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Import App -->
    <script src="./main.js"></script>

    <!-- Mount App -->
    <script>
      const mountedApp = app.mount('#app')
    </script>
```
```
const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})

```

* style binding 

```
<div :style="styles"></div>
```

```
data(){
    return {
        styles:{
            color:'red',
            fontSize:'14px'
        }
    }
}
```

### class binding Ternary operators 

```
<div :class="[isActive ? activeClass : '']"> </div>
```
```
data(){
    return {
        isActive:true
    }
}
```

---

# Vue 3

### Runs Javascript in Vue 

```
<p>{{ product }}</p>
<p>{{ firstName + ' ' + lastName }}</p>
<p>{{ clicked ? true : false }}</p>
<p>{{ message.method() }} </p>
```

### Vue Intro

* html
```
<script src="https://unpkg.com/vue@3.0.0-beta.12/dist/vue.global.js"></script>
<body>
    <div id="app">
      <h1>{{product}}</h1>
      <p>{{description}}</p>
    </div>

    <!-- Import App-->
    <script src="main.js"></script>

    <!-- Mount App-->
    <script>
      const mountApp = app.mount('#app')
      // mountApp.product = 'Sandals'
    </script>
</body>
```

* main.js
```
const app = Vue.createApp({
    data(){
        return {
            product:'Socks',
            description:'Sleeve For Feet'
        }
    }
})
```

### Attribute binding

* v-bind: // dynamicall bind an attribute to an expression
* bind is the src
* expression is the "image"

* html
```
  <div id="app">
    <div class="nav-bar"></div>

    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <!-- image goes here -->
          <img v-bind:src="image">
          <img :src="image">
        </div>
        <div class="product-info">
          <h1>{{ product }}</h1>
        </div>
      </div>
    </div>
  </div>

  <!-- Import App -->
  <script src="./main.js"></script>

  <!-- Mount App -->
  <script>
    const mountedApp = app.mount('#app')
  </script>
```

* main.js
```
const app = Vue.createApp({
    data(){
        return {
            product:'Socks',
            image:'./assets/images/socks_green.jpg',
            description:'Sleeve For Feet'
        }
    }
})
```

* shorthand 
```
          <img v-bind:src="image">
          <img :src="image">

          <img :alt="description">
          <img :href="url">
          <img :class="isActive">
          <span :style="isActive">
          <span :disabled="isActive">
```

### Conditional Rendering

* html
```
<div id="app">
  <div class="nav-bar"></div>

  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>

<!--        method 1-->
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

<!--        method 2: toggle on off -->
        <p v-show="inStock">In Stock</p>

<!--        method 3-->
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory >0">Almost Out of Stock</p>
        <p v-else>Out of Stock</p>

        <p v-if="onSale">On Sale</p>
        <p v-else>No Sale</p>

      </div>
    </div>
  </div>
</div>

<!-- Import App -->
<script src="./main.js"></script>

<!-- Mount App -->
<script>
  const mountedApp = app.mount('#app')
</script>
```

* main.js
```
const app = Vue.createApp({
    data(){
        return {
            product:'Socks',
            image:'./assets/images/socks_green.jpg',
            description:'Sleeve For Feet',
            url: 'https://www.vuemastery.com/',
            inStock:false,
            inventory: 8,
            onSale:true,
            details:['50% cotton','30% wool','20% polyester']
        }
    }
})
```

### loop list rendering

* index.html
```
        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>
        <div v-for="variant in variants" :key="variant.id">{{variant.color}}</div>
        <ul>
          <li v-for="(size,index) in sizes" :key="index">{{size}}</li>
        </ul>
```

* main.js
```
const app = Vue.createApp({
    data(){
        return {
            product:'Socks',
            image:'./assets/images/socks_green.jpg',
            description:'Sleeve For Feet',
            url: 'https://www.vuemastery.com/',
            inStock:false,
            inventory: 8,
            onSale:true,
            details:['50% cotton','30% wool','20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants:[
                {id:2234,color:'green'},
                {id:2235,color:'blue'}
            ]
        }
    }
})
```

### event handling

* index.html
```
  <div class="cart">Cart({{ cart }})</div>

    // method 1
<!--        <button class="button" v-on:click="cart += 1">Add to Cart</button>-->
    // method 2
<!--        <button class="button" v-on:click="addToCart">Add to Cart</button>-->
    // method 3
            <button class="button" @click="addToCart">Add to Cart</button>
            <button class="button" @click="removeFromCart">Remove Cart</button>

<!-- Import App -->
<script src="./main.js"></script>

<!-- Mount App -->
<script>
  const mountedApp = app.mount('#app')
</script>
```

* main.js
```
const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        removeFromCart(){
            if(this.cart >= 1) {
                this.cart -= 1
            }
        },
    }
})
```

### html class and style binding

// style binding
// method 1 via inline

* index.html 
```
        <div v-for="variant in variants" :key="variant.id"
             @mouseover="updateImage(variant.image)"
             class="color-circle"
             :style="{backgroundColor:variant.color}">
        </div>
```

* main.js
```
const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})

```
// style binding
// method 2 via data object

* index.html
```
<div style="color: red; font-size: 14px"></div>
```

* main.js
```
data(){
    return {
        styles:{
            color:'red',
            fontSize:'14px'
        }
    }
}
```

// class binding
// <img v-bind:src="image" :class="{ 'out-of-stock-img' : !inStock}">

* html
```
<button class="button" :class="{disabledButton: !inStock }" :disabled="!inStock" @click="addToCart">Add to Cart</button>
```

* css
```
.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}
```

* main.js
```
const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})

```

// multiple class binding

* html
```
<div class="color-circle" :class="{active: activeClass}"></div>

// <div class="color-circle active"></div>
```

* js
```
data(){
    return {
        activeClass:true
    }
}
```

// class binding with ternary 

* html
```
    <div :class="[isActive ? activeClass : '']"></div>
    // <div class="activeClass"></div>
```

* js
```
data(){
    return {
        isActive:true
    }
}
```

### computed properties

* index
```
<h1>{{ brand + ' ' + product }}</h1>
<h1>{{ title }}</h1>

```

* main.js
```
const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
    },
        computed: {
            title(){
                return this.brand + ' ' + this.product
            }
        }
})

```

// computed interactively with all

* indxe.html

```
<div id="app">
  <div class="nav-bar"></div>

  <div class="cart">Cart({{ cart }})</div>

  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" :class="{ 'out-of-stock-img' : !inStock}">
      </div>
      <div class="product-info">
<!--        <h1>{{ brand + ' ' + product }}</h1>-->
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div v-for="(variant,index) in variants" :key="variant.id"
             @mouseover="updateVariant(index)"
             class="color-circle"
             :style="{backgroundColor:variant.color}">
        </div>
        <button class="button" :class="{disabledButton: !inStock }" :disabled="!inStock" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</div>

<!-- Import App -->
<script src="./main.js"></script>

<!-- Mount App -->
<script>
  const mountedApp = app.mount('#app')
</script>
```


* main.js
```
const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            // image: './assets/images/socks_blue.jpg',
            selectedVariant:0,
            onSale:true,
            // inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',quantity:50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',quantity:0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
            console.log(this.selectedVariant);
        }
    },
    computed: {
        title(){
            if(this.onSale){
                return this.brand + ' ' + this.product + ' is on sale'
            } else {
                return this.brand + ' ' + this.product
            }

        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        }
    }
})

```

### Components

* index
```
<body>
<div id="app">
  <div class="nav-bar"></div>

  <div class="cart">Cart({{ cart }})</div>
  <product-display></product-display>

</div>

<!-- Import App -->
<script src="./main.js"></script>

<!-- Import Components -->
<script src="./components/ProductDisplay.js"></script>

<!-- Mount App -->
<script>
  const mountedApp = app.mount('#app')
</script>
</body>
```

* main.js
```
const app = Vue.createApp({
    data(){
        return {
            cart:0
        }
    },
    method: {}
})

```

* ProductDisplay.js
```
app.component('product-display',{
    template:
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div
                v-for="(variant, index) in variants"
                :key="variant.id"
                @mouseover="updateVariant(index)"
                class="color-circle"
                :style="{ backgroundColor: variant.color }">
        </div>

        <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>`,
    data() {
        return {
            // cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
    }
})
```

### Props , custom attribute for passing data into component

