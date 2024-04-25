import React, {useState} from "react";
import propTypes from "prop-types";
import AppContext from "./appContext";
import Header from "../components/Header/header";
import Products from "../components/Products/products";

export default function Provider({children}) {

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
  }

  Provider.propTypes = {
    children: propTypes.any,
  }.isRequired;

  return(
    <div>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </div>
  )

}