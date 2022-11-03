import React from 'react'
import { NavLink } from 'react-router-dom'
// import {AppContext} from './context'
// import { useContext } from 'react'
import { useGlobalContext } from './context'



const Movies = () => {
  const { movie } = useGlobalContext()
  return (
    <>
      <section className='movie-page'>
        <div className='grid grid-4-col'>
          {movie.map((curval) => {
            
            const {imdbID , Title , Poster}=curval;
            const movieName = Title.substring(0,15);
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className='card'> 
              <div className='card-info'>
                <h2>{movieName.length>=15? `${movieName}...`: movieName}</h2>
                <img src={Poster} alt={imdbID}/>
                </div>
              </div>
              </NavLink>
            )
          })}
        </div>
      </section>

    </>
  )
}

export default Movies
