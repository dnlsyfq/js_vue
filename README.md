#### CLI
```
npm install -g @vue/cli
vue --version
```

### CDN
defer : make sure that the page is loaded and ready to hook up to Vue before we actually load Vue.
```
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" defer></script>
```

* Create Instance

```
const app = new Vue ({
    el: '#app' // el key to the options object and made the value '#app', a CSS selector that will target an element with an ID, #, of app.
})
```

```
<div id="app">
    <h1>{{product}}</h1>
</div>

var app = new Vue({ // instance 
    // options 
})
```

```
<head>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" defer></script>
  <script src="./js/app.js" defer></script>
</head>
<body>
  <div id="app">
    <!-- Vue App HTML Code -->
  </div>
</body>
```

```
Note: We must import our Vue app code after the <script> that loads Vue.js. Otherwise, we would not yet have access to the Vue library in app.js, making it impossible to create a Vue app. This is also why we add defer to both elements — to ensure Vue has fully loaded when we go to make our Vue app.
```

### Add data to HTML
```
const app = new Vue({
  el: '#app',
  data: {
    username: 'CoderInTraining',
    newTweet: '',
    tweets: [
      'Started learning to code today. Wish me luck!', 
      'Okay, I learned HTML, CSS, and JavaScript. But, how do I combine them together?? Send help.', 
      'Today I start learning Vue. I got this.'
    ],
    bio: 'Excited future software engineer.'
  }
});
```


```
<div id="app">
  <h2>Hello, {{ username }}</h2>
</div>
```

```
git stash
git checkout <branch-name>
```

* JS expression in HTML
```
<h1>{{ product}} </h1>
<p> {{ firstName + ' ' + lastName }} </p>
<span> {{ clicked ? true: false }} </span>
```

* V Bind use case
```
<img v-bind:src="image">
<img :src="image">
<img :alt="descrition">
<a :href="url">
<div :class="isActive">
<span :style="isActive">
<span :disabled="isDisabled">

```

* Conditional rendering
```
<p v-if="inStock">In Stock</p>
<p v-else>Out of Stock</p>
```

```
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
            <p v-else>Out of Stock</p>
```


* for visibility toggling
```
<p v-show="inStock">In Stock</p>
```

```
<!DOCTYPE html>
<html>
<head>
  <title>The Vue View</title>
  <link rel="stylesheet" type="text/css" href="./css/reset.css">
  <link rel="stylesheet" type="text/css" href="./css/style.css">
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" defer></script>
  <script src="./js/app.js" defer></script>
</head>
<body>
  <div id="app">
    <h1>THE VUE VIEW</h1>
    <div class="user">
      <div class="user-information">
        <div class="image-container">
          <img src="https://content.codecademy.com/courses/what-is-vue/profile.jpeg" alt="profile picture">
        </div>
        <h3>{{ username }}</h3>
      </div>
      <div class="user-bio">
        <em>Bio: </em> {{ bio }}
      </div>
    </div>
    <div class="tweets">
      <div class="tweet">
        <h3>{{ username }}</h3>
        <p>{{ tweets[0] }}</p>
      </div>
      <div class="tweet">
        <h3>{{ username }}</h3>
        <p>{{ tweets[1] }}</p>
      </div>
      <div class="tweet">
        <h3>{{ username }}</h3>
        <p>{{ tweets[2] }}</p>
      </div>
    </div>
    <div class="settings">
      <h2>Settings</h2>
      <label for="username">Username</label>
      <input type="text" value="username" placeholder="Username" />
      <label for="bio">Bio</label>
      <textarea value="bio" placeholder="Bio"></textarea>
      <label for="tweet">New Tweet</label>
      <div class="new-tweet">
        <input type="text" value="tweet" placeholder="New Tweet" />
        <button>Add Tweet</button>
      </div>
    </div>
  </div>
</body>
</html>
```

### Directives

```
<button v-if="userIsLoggedIn">Log Out</button>
<button v-if="!userIsLoggedIn">Log In</button>
```

```
<ul>
  <li v-for="todo in todoList">{{ todo }}</li>
</ul>
```

* v-model can be added to any form field and hooked up to our Vue app’s data. Modifying the form field will then automatically modify the specified Vue app data. The above input field will display the current value of username on the Vue app’s data object and will change the value of username if the user modifies the value in the field
```
<input v-model="username" />
```

* v-if
   the bio section so that the section only displays if bio exists
```
      <div class="user-bio" v-if="bio">
        <em>Bio: </em> {{ bio }}
      </div>
```

* v-for
tweets section so that all tweets will be displayed, not just the first three
```
   <div class="tweets">
      <div class="tweet" v-for="tweet in tweets">
        <h3>{{ username }}</h3>
        <p>{{ tweet }}</p>
      </div>
    </div>
```

* v-model
```
    <div class="settings">
      <h2>Settings</h2>
      <label for="username">Username</label>
      <input type="text" value="username" placeholder="Username" v-model="username" />
      <label for="bio">Bio</label>
      <textarea value="bio" placeholder="Bio" v-model="bio"></textarea>
      <label for="tweet">New Tweet</label>
      <div class="new-tweet">
        <input type="text" value="tweet" placeholder="New Tweet" />
        <button>Add Tweet</button>
      </div>
    </div>
```

```
const app = new Vue({
  el: '#app',
  data: {
    newTweet: '',
    tweets: [
      'Started learning to code today. Wish me luck!', 
      'Okay, I learned HTML, CSS, and JavaScript. But, how do I combine them together?? Send help.', 
      'Today I start learning Vue. I got this.'
    ]
  }
});
```

```
      <label for="tweet">New Tweet</label>
      <div class="new-tweet">
        <input type="text" value="tweet" placeholder="New Tweet" v-model="newTweet"/>
        <button v-on:click="tweets.push(newTweet)">Add Tweet</button>
      </div>
```

* Components

js/components/Tweet.js
js/app.js
css/style.css
index.html
  ```
const Tweet = Vue.component('tweet', {
     props: ['message'],
     template: '<div class="tweet"><h3>CoderInTraining</h3><p>{{ message }}</p></div>'
});
  ```

* v-bind
Finally, let’s pass in the value of data‘s username to the author prop on our component using the v-bind directive.

v-bind takes a value from the Vue app’s data object and uses it as the value of the specified component prop.


```
//html
<!DOCTYPE html>
<html>
<head>
  <title>The Vue View</title>
  <link rel="stylesheet" type="text/css" href="./css/reset.css">
  <link rel="stylesheet" type="text/css" href="./css/style.css">
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" defer></script>
  <script src="./js/components/Tweet.js" defer></script>
  <script src="./js/app.js" defer></script>
</head>
<body>
  <div id="app">
    <h1>THE VUE VIEW</h1>
    <div class="user">
      <div class="user-information">
        <div class="image-container">
          <img src="https://content.codecademy.com/courses/what-is-vue/profile.jpeg" alt="profile picture">
        </div>
        <h3>{{ username }}</h3>
      </div>
      <div class="user-bio" v-if="bio">
        <em>Bio: </em> {{ bio }}
      </div>
    </div>
    <div class="tweets">
      <tweet v-for="tweet in tweets" 
             v-bind:message="tweet"
             v-bind:author="username"
             ></tweet>
    </div>
    <div class="settings">
      <h2>Settings</h2>
      <label for="username">Username</label>
      <input type="text" value="username" placeholder="Username" v-model="username" />
      <label for="bio">Bio</label>
      <textarea value="bio" placeholder="Bio" v-model="bio"></textarea>
      <label for="tweet">New Tweet</label>
      <div class="new-tweet">
        <input type="text" value="tweet" placeholder="New Tweet" v-model="newTweet" />
        <button v-on:click="tweets.push(newTweet)">Add Tweet</button>
      </div>
    </div>
  </div>
</body>
</html>

```

```
// app.js
const app = new Vue({
  el: '#app',
  data: {
    username: 'CoderInTraining',
    newTweet: '',
    tweets: [
      'Started learning to code today. Wish me luck!', 
      'Okay, I learned HTML, CSS, and JavaScript. But, how do I combine them together?? Send help.', 
      'Today I start learning Vue. I got this.'
    ],
    bio: 'Excited future front-end  engineer.'
  }
});
```

```
// Tweet.js
const Tweet = Vue.component('tweet', {
 props: ['message','author'],
 template: '<div class="tweet"><h3>{{ author }}</h3><p>{{ message }}</p></div>'
});
```

---

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
<<<<<<< HEAD
// html 
<div v-for="variant in variants" :key="variant.variantId">
    <p>{{variant.variantColor}}</p> // return green blue
</div>


//js

data : {
    variants : [
        {variantId:2334,variantColor:"green"},
        {variantId:2245,variantColor:"blue"}
    ]
}

```


---

## Event Handling

* onclick
```

//html

<button v-on:click="cart += 1">Add to Cart</button>

<div class="cart">
    <p>Cart({{cart}})</p>
</div>

//js 

({
    data:{
        cart:0
=======
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
>>>>>>> 6c473febee6ad46d4c1dc2758fd87ff7cc702a00
    }
})

```

<<<<<<< HEAD
* onclick
```

// trigger methods from within this expr 
//html
<button v-on:click="addToCart>Add to Cart</button>

<div class="cart">
    <p>Cart({{cart}})</p>
</div>

// js 

({
    data:{
        cart:0
    },
    methods:{
        addToCart : function(){
            this.cart += 1
        }
    }
})


```

*   mouseover
```

//html
<div v-for="variant in variants" :key="variant.variantId">
    <p @mouseover="updateProduct(variant.variantImage)">{{variant.variantColor}}</p>
</div>

//js

data : {
        variants:[
            {variantId:2234,variantColor:'green',variantImage:'./assets/vmSocks-green.jpg'},
            {variantId:2235,variantColor:'blue',variantImage:'./assets/vmSocks-blue.jpg'}
        ]
},
methods:{
    addToCar:function(){
        this.cart += 1
    },
    updateProduct:function(variantImage){
        this.image = variantImage
    }

    // new function style 
    addToCart(){
        this.cart +=1
    },
    updateProduct(variantImage){
        this.image = variantImage
    }

}


```

*   <button @click=""></button>
*   <div @mouseover=""></div>
*   <form @submit=""></form>
*   <input @keyup.enter="">

---

## class & style binding 

* style binding
```
<div v-for="variant in variants" 
    :key="variant.variantId"
    class="color-box"
    :style="{backgroundColor: variant.variantColor}">
    @mouseover="updateProduct(variant.variantImage)">
</div>
```

* style bindings
```
// in line style 
<h1 style="color:red"> </h1>
<h1 style="font-size:13px'></h1>


// style bindings
<h1 :style="{color:color,fontSize:fontSize}"></h1>
<h1 :style="{color:color,'font-size':fontSize}"></h1>

data :{
    color:'red',
    fontSize:'13px'
}

```

* style bindings objects 

```
//inline
<span style="color: red; font-size:13px"></span>


// style binding objects
<span :style="styleObject"></span>

data:{
    styleObject:{
        color:'red',
        fontSize:'13px'
=======
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
>>>>>>> 6c473febee6ad46d4c1dc2758fd87ff7cc702a00
    }
}
```

<<<<<<< HEAD
* style bindings arrays 
```
// style binding objects
<p :style="[styleObject,styleObject2]"></p>

data:{
    styleObject:{
        color:'red',
        fontSize:'13px'
    },
    styleObject2:{
    color:'red',
    fontSize:'13px'
    },
}

```

* disabled button greyed

```

<button v-on:click="addToCart" 
        :disabled="!inStock"
        :class="{disabledButton: !inStock}">
        Add Cart
</button>


data:{
    inStock:false
}
```
*   class bindings 
```
<div class="color-box" :class="{active: activeClass, 'text-danger':errorClass">
</div>


data:{
    activeClass:true,
    errorClass:false
}
```
*   class bindings objects 
```
<div :class="classObject">
</div>


data:{
    classObject:{
        active:true,
        'text-danger':false
    }
}
```
*   class bindings arrays 
```
<div :class="[activeClass,errorClass]">
</div>

<div :class="[isActive ? activeClass:'']">

data:{
    activeClass:'active',
    errorClass:'text-danger'
}
=======
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

### Directives

```
directive="expression"

v-if="isOpen"
v-bind:id="uniqId"
v-on:click="handleClick"
v-on:click.prevent="handleClick"
v-bind:attributeName="expression"
```
### Data 

* html
```
<div id="app">
  <p>You have been studying {{ language }} for {{ hoursStudied }} hours</p>
</div>
```

* js
```
const app = new Vue({
  el: '#app',
  data: {
    language: 'Spanish',
    hoursStudied: 274
  }
});
>>>>>>> 6c473febee6ad46d4c1dc2758fd87ff7cc702a00
```

---

<<<<<<< HEAD
```
git push -u origin master
```
=======
# Form

## Text, Textarea, and Select Bindings

```
<input type="text" v-model="username" />

const app = new Vue({ 
  el: '#app',
  data: { username: 'Michael' } 
});
```

## Radio Button Bindings

```
<legend>How was your experience?</legend>

<input type="radio" id="goodReview" value="good" v-model="experienceReview" />
<label for="goodReview">Good</label>

<input type="radio" id="neutralReview" value="neutral" v-model="experienceReview" />
<label for="neutralReview">Neutral</label>

<input type="radio" id="badReview" value="bad" v-model="experienceReview" />
<label for="badReview">Bad</label>

const app = new Vue({ 
  el: '#app', 
  data: { experienceReview: '' } 
});
```

## Array Checkbox Bindings

```
<legend>Which of the following features would you like to see added?</legend>

<input type="checkbox" id="search-bar" value="search" v-model="requestedFeatures">
<label for="search-bar">Search Bar</label>

<input type="checkbox" id="ads" value="ads" v-model="requestedFeatures">
<label for="ads">Ads</label>

<input type="checkbox" id="new-content" value="content" v-model="requestedFeatures">
<label for="new-content">New Content</label>
```

```
const app = new Vue({ 
  el: '#app', 
  data: { requestedFeatures: [] } 
});
```

## Boolean Checkbox Bindings
```
<legend>Would you recommend this site to a friend?</legend>
<input type="checkbox" v-model="wouldRecommend" />
```

```
const app = new Vue({ 
  el: '#app',
  data: { wouldRecommend: false } 
});
```

## Form Event Handlers
* Default
```
<form v-on:reset="resetForm">
  ...
  <button type="reset">Reset</button>
</form>
```
* Short Cut
```
<form @reset="resetForm">
  ...
</form>
```

```
const app = new Vue({ 
  el: '#app', 
  methods: { resetForm: function() { ... } }
});
```
>>>>>>> 6c473febee6ad46d4c1dc2758fd87ff7cc702a00
