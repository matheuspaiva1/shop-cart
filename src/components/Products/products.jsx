import React, { useState, useEffect } from "react"
import './products.css'
import fetchProducts from "../../api/fetchProducts"
import ProductCard from "../ProductCard/productCard"

export default function Products(){
  const [products, setProducts] = useState([])

  useEffect(() => {

    fetchProducts('iphone').then((response) => { // fazendo requisição da api, pelo produto digitado na função entre parentese ('iphone'), e emitindo uma resposta = response por meio do .then() utilizando setProducts(response) 

      setProducts(response)
    });

  }, [])


  return(
    <section className="products container">
      {
        products.map((product) => <ProductCard key={product.id} data={product} />)
      }
    </section>
  )
}

// {products.map((product) => <p key={product.title}>{product.title}</p>)} <<<= fazendo um map em products para listar os itens de product.title (OBRIGATORIO PASSAR A KEY)
