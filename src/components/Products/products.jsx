import React, { useState, useEffect, useContext } from "react"
import './products.css'
import fetchProducts from "../../api/fetchProducts"
import ProductCard from "../ProductCard/productCard"
import Loading from "../Loading/loading"
import AppContext from "../../context/appContext"

export default function Products() {
  
  const {products, setProducts} = useContext(AppContext)

  const {loading, setLoading} = useContext(AppContext)

  useEffect(() => {

    fetchProducts('iphone').then((response) => { // fazendo requisição da api, pelo produto digitado na função entre parentese ('iphone'), e emitindo uma resposta = response por meio do .then() utilizando setProducts(response) 

      setProducts(response)
      setLoading(false)
    });

  }, [])


  return (

    (loading && <Loading />) || (
      <section className="products container">
        {
          products.map((product) => <ProductCard key={product.id} data={product} />)
        }
      </section>
    )

  )
}

// {products.map((product) => <p key={product.title}>{product.title}</p>)} <<<= fazendo um map em products para listar os itens de product.title (OBRIGATORIO PASSAR A KEY)
