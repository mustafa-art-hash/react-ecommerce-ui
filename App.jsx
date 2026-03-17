import { useEffect, useState } from "react"
import ProductCard from "./components/ProductCard"

function App(){

const [products,setProducts] = useState([])

useEffect(()=>{

fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>setProducts(data))

},[])

return(

<div className="container">

<h1>متجر الكتروني</h1>

<div className="products">

{products.map(product => (

<ProductCard key={product.id} product={product} />

))}

</div>

</div>

)

}

export default App