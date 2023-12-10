const product = document.querySelector('.product')
console.log(product)

async function fetchProduct() {
    try {
        let res = await fetch('https://dummyjson.com/products')
        let resolve = await res.json()
            // console.log(resolve)

        resolve.products.forEach(info => {
            // console.log(info)
            let card = document.createElement('div')
            card.classList.add('card')
            let img = document.createElement('img')
            img.setAttribute('src', `${info.thumbnail}`)
                // console.log(img)

            let h2 = document.createElement('h2')
            h2.innerHTML = ` Product Name: ${info.title}`
            let p = document.createElement('p')
            p.innerHTML = `description: ${info.description}`
            let h3 = document.createElement('h3')
            h3.innerHTML = `price: ${info.price} ` + '$'
            let stock = document.createElement('h5')
            stock.innerHTML = `stock: ${info.stock}` + ' шт.'
            let h4 = document.createElement('h4')
            h4.innerHTML = `category: ${info.category}`


            card.append(img)
            card.append(h2)
            card.append(h4)
            card.append(p)
            card.append(stock)
            card.append(h3)

            product.append(card)


        });
    } catch (error) {
        console.log(error)
    }
}
fetchProduct()