import React from 'react'
import { useGlobalContext } from './context'




  

const Search = () => {
  const {query, setquery,error1 } = useGlobalContext()
  
  return (
    <>
    <section className='search-section'>
      <h2>Search your favorite movie</h2>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <input type='text' placeholder='Search Here'  onChange={(e)=>setquery(e.target.value)}/>
      </form>
      <div className='card_error'>
        <p>{error1.show && error1.error}</p>
      </div>
      </section>  
    </>
  )
}

export default Search
