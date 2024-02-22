'use strict'
import { products } from "../data/product.js"
import { card } from "../component/card.js"
let renderArea = document.querySelector('#render-area')
products.map((product)=> {
    renderArea.innerHTML += card(product);
})