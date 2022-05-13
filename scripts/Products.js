import { getProducts } from "./database.js"

const products = getProducts()


export const Products = () => {

    document.addEventListener (
        "click",
        (clickEvent) => {
            const itemClicked = clickEvent.target
            if(itemClicked.id.startsWith("product")) {
                const [ ,productId ] =itemClicked.id.split("--")
    
                for(const product of products) {
                    if(product.id === parseFloat(productId)) {
                        window.alert(`${product.name} costs $${product.price}`)
                    }
                }
            }
        }
    )

    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

