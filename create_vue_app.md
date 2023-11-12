* index.html
```
  <head>
    <meta charset="UTF-8" />
    <title>Vue Mastery</title>
    <!-- Import Styles -->
    <link rel="stylesheet" href="./assets/styles.css" />
    <!-- Import Vue.js -->
    <!-- <script src="https://unpkg.com/vue@3.0.0-beta.12/dist/vue.global.js"></script> -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>{{ product }}</h1>
      <p>{{ desc }}</p>
    </div>

    <!-- Import Js -->
    <script src="./main.js"></script>

    <!-- Mounted App -->
    <script>
      const mountedApp = app.mount('#app')
    </script>
```

* main.js
```
const app = Vue.createApp({

    // data: function(){
    //     return {
    //         product:'Socks'
    //     }
    // }

    // ES6 ShortHands
    data(){
        return {
            product:'Socks',
            desc:'Something where on the feet'
        }
    }

})

```

---

```
 <body>
    <div id="app">
      <div class="nav-bar"></div>
      
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <!-- image goes here -->
            <!-- <img v-bind:src="image"> -->
            <img :src ="image"><br>
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

  </body>
```

```
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            url:'https://github.com/',
            image:'./assets/images/socks_green.jpg'
        }
    }
})

```
---
* index.html
  ```
    <body>
    <div id="app">
      <div class="nav-bar"></div>
      
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img v-bind:src="image">
          </div>
          <div class="product-info">
            <h1>{{ product }}</h1>
            <!-- <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p> -->

            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
            <p v-else>Out of Stock</p>

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
  </body>
  ```

  * main.js
  ```
  const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inventory: 8
        }
    }
})

  ```

---

```
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
```

```
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    }
})

```

---

```
  <body>
    <div id="app">
      <div class="nav-bar"></div>
      
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img v-bind:src="image">
          </div>
          <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
          </div>
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
          <ul>
            <li v-for="variant in variants">{{ variant.color }}</li>
          </ul>

          <ul>
            <li v-for="variant in variants" :key="variant.id">{{ variant.color }}</li>
          </ul>


          
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
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {id:2234,color:'green'},
                {id:2235,color:'blue'}
            ]
        }
    }
})

```

---


