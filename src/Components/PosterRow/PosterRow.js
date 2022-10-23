import React, { useEffect, useState } from 'react'
import "./PosterRow.css"
import axios from '../../axios'
import { API_Key, imageUrl } from '../../Constants/Constants'
import ReactPlayer from 'react-player/youtube'


function PosterRow(props) {
 

  const[movies,setMovies]=useState([])
  const[videoKey,setVideoKey]=useState("")

  useEffect(()=>
  {
     axios.get(`${props.imgAddress}`).then((res)=>
     {
        
        setMovies(res.data.results)
      
       
     })
  },[])
  function handleVideo(id)
  {
    axios.get(`/movie/${id}/videos?api_key=371dc52bf2d78c284f130e307aef0dac&language=en-US`).then((res)=>
    {
      console.log(res.data.results[0].key)
      setVideoKey(res.data.results[0].key)


    })
  }
  
  return (
    <div className=''>
        <h3 className={`${props.titleClass}`}>{props.title}</h3>
        <div className='posters'>
          {
            movies.map((movie)=>
            {
              let imgAddress=imageUrl+movie.backdrop_path
              
              return(
                <>
                 <img onClick={()=>handleVideo(movie.id)}  className={`${props.imgSize}`} src={`${imgAddress}`} alt='poster'></img>
                </>
              )
            })
          }
          
          
        </div>
        
       
       
      
      { videoKey && <ReactPlayer  playing='true' onPause={()=>
      {
        setVideoKey(null)
      }} className="reactPlayer" url={`https://www.youtube.com/watch?v=${videoKey}`}  width='100%'  />}
       
       
       
       
     
      
    </div>
  )
}

export default PosterRow
