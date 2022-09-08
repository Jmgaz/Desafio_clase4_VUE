Vue.component('filas-componente',{
    props:{
        product: Object
    },
    template: `
                <tr>
                    <td>{{product.name}}</td>
                    <td>{{product.cantidad}}</td>
                    <td>{{product.precio}}</td>
                </tr>
    `
})

Vue.component('product-card',{
    props:{
        product: Object
    },
    template:`
            <div align="center">
                <img class="card-img-top" :src="product.img" :alt="product.titulo">
                <h3> {{product.name}} </h3>
                <p>$ {{product.precio}}  </p>
            </div>`
    
})

var app = new Vue({
    el: '#app',
    data:{


        combosList:[
            {
                id: 1,
                name: 'Combo 10',
                cantidad: 10,
                precio: 1200,
                img: "./img/Combo_10.jpg" 
            },
            {
                id: 2,
                name: 'Combo 20',
                cantidad: 20,
                precio: 2200,
                img: "./img/Combo_20.jpg" 
            },
            {
                id: 3,
                name: 'Combo 30',
                cantidad: 30,
                precio: 3200,
                img: "./img/Combo_30.jpg"
            }

        ]
    }

})