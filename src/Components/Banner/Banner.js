import React, { useEffect, useState } from 'react'
import './Banner.css'
import { API_Key, imageUrl } from '../../Constants/Constants'
import axios from '../../axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlay } from '@fortawesome/free-solid-svg-icons'

function Banner() {

    const[trendMovie,setTrendMovie]=useState()

    useEffect(()=>
    {
       axios.get(`/trending/all/week?api_key=${API_Key}&language=en-US`).then((res)=>
       {
       let x= Math.floor(Math.random() * 10) +1;
        
        setTrendMovie(res.data.results[x])
       })
    },[])
  return (
    <div style={{ backgroundImage:`url(${trendMovie ? imageUrl+trendMovie.backdrop_path :""})`}} className='banner'>
        
        <div className='contents'>+
            <div className='title'>
                <h1>{trendMovie? trendMovie.title || trendMovie.name: ""}</h1>
            </div>
            <div className='description'>
                <h5>{trendMovie? trendMovie.overview: ""}</h5>
            </div>
            <div className='content-buttons'>
                <button className='play-button'><FontAwesomeIcon style={{color:'black'}} icon={faPlay } /> Play</button>
                
                <button className='info-button'>More info</button>

            </div>
        </div>
        <div className='fade-bottom '>

        </div>
       
      
    </div>
  )
}

export default Banner
