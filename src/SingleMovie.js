import React ,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import {url} from './context'
import { NavLink } from 'react-router-dom'
const SingleMovie = () => {
  const {id} = useParams()
  let [isLoading , setisLoading]=useState(true)
    let [movie , setmovie]=useState("")
   
  
    
     const getMovies = async(myUrl)=>{
        try {
            const res = await fetch(myUrl);
            const data = await res.json()
            console.log(data)
            if (data.Response==='True') {
                setisLoading(false)
                setmovie(data)
            }
            
        } catch (error) {
            console.log(error)
        }

     }
     useEffect(()=>{
        let tmer=setTimeout(()=>{
            getMovies(`${url}&i=${id}`);
            
        },800)
        return () => {
            clearTimeout(tmer);
            console.log("clear");
          };
        
     },[id])
     if (isLoading) {
      return (
        <section className="movie-section ">
          <div className="loading">Loading....</div>;
        </section>
      );
    }
  return (
    
    <div>
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
    </div>
    
  )
}

export default SingleMovie
