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
