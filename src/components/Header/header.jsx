import React from 'react'
import SearchBar from '../SearchBar/searchBar'
import './header.css'
import CarButton from '../CartButton/carButton'

export default function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <SearchBar />
        <CarButton/>
      </div>
    </header>
  )
}
