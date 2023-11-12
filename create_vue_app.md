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

