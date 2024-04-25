import React, {useState} from 'react'
import { BsSearch } from 'react-icons/bs'
import './searchBar.css'

export default function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <form action="" className='search-bar'>
      <input
        type="search" 
        value={searchValue}
        placeholder="Buscar produtos" className='search__input' 
        onChange={({target}) => setSearchValue(target.value)} // setSearchValue esta atualizando o valor que é digitado (target)
        required 
      />
        {searchValue}
      <button
        type='submit' className='search__button'><BsSearch /></button>
    </form>
  )
}
