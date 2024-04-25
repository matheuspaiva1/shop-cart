import React, {useState, useContext} from 'react'
import { BsSearch } from 'react-icons/bs'
import './searchBar.css'
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/appContext';

export default function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  const {setProducts, setLoading} = useContext(AppContext)

  const handleSearch = async (event) => {
    event.preventDefault();
    
    setLoading(true)
    const products = await fetchProducts(searchValue)

    setProducts(products)
    setLoading(false)
    setSearchValue('')
  }

  return (
    <form action="" className='search-bar'
    onSubmit={handleSearch}>
      <input
        type="search" 
        value={searchValue}
        placeholder="Buscar produtos" className='search__input' 
        onChange={({target}) => setSearchValue(target.value)} // setSearchValue esta atualizando o valor que é digitado (target)
        required 
      />
      <button
        type='submit' className='search__button'><BsSearch /></button>
    </form>
  )
}
