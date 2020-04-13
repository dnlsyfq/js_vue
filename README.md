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
// html 


```