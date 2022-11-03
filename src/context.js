import React, { useContext, useEffect, useState } from 'react'

export const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}`;

const AppContext = React.createContext();


let AppProvider = ({children}) => {
    let [isLoading , setisLoading]=useState(true)
    let [movie , setmovie]=useState([])
    let [error1 , seterror1]=useState({show : false , error : ""})
    let [query, setquery]=useState("stranger things")
    
     const getMovies = async(myUrl)=>{
        setisLoading(true);
        try {
            const res = await fetch(myUrl);
            const data = await res.json()
            console.log(data)
            if (data.Response==='True') {
                setisLoading(false)
                setmovie(data.Search)
            }
            else{
                seterror1({
                    show : true,
                    error : data.Error
                })
    
            }
        } catch (error) {
            console.log(error)
        }

     }
     useEffect(()=>{
        let tmer=setTimeout(()=>{
            getMovies(`${url}&s=${query}`);
            
        },2000)
        return () => {
            clearTimeout(tmer);
            console.log("clear");
          };
        
     },[query])
    
    
    
    return( <AppContext.Provider value={{movie,error1,query, setquery}}>{children}</AppContext.Provider>);
  
}

const useGlobalContext=()=>{
  return  useContext(AppContext)
}




export {AppContext,AppProvider,useGlobalContext};
