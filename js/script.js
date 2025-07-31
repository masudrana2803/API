fetch('https://dummyjson.com/products')
.then(alu => alu.json())
.then((data)=>{
    data.products.map((item)=>{
        console.log(item)

        let maindiv = document.createElement('div')
        maindiv.className = 'maindiv'
        createElement('h2', maindiv, item.title)
        createElement('h3', maindiv, item.description)
        createElement('h4', maindiv, `Price: $${item.price}`)
        createElement('h5', maindiv, '', item.stock)


        maindiv.appendChild


    })
})