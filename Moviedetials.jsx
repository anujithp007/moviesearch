import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './nav.css'

const Moviedetials = () => {

const {id}=useParams()
const [data,setData]=useState('')
useEffect(()=>{
    let fetchData= async ()=>{
        let response=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`)
        setData(response.data)
        console.log(response);
    }
    fetchData()
},[])


  return (
    <div className='detail-main'>
      <img src={data.Poster} alt="" />
      <h1>Name:{data.Title}</h1>
      <h3>Realesed on:{data.Year}</h3>
      <h3>Actors:{data.Actors}</h3>
    </div>
  )
}

export default Moviedetials
