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
    }
})

```

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
    }
}
```

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
```

---

```
git push -u origin master
```