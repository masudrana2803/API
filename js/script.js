fetch('https://dummyjson.com/products')
.then(alu => alu.json())
.then((data)=>{
    data.map((item)=>{
        console.log(item)
    })
})