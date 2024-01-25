import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'

const Detail = () => {
    const [data,setdata]=useState([])
    const {id}=useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8085/datalarim/${id}`).then((res)=>{
            console.log(res.data)
            setdata(res.data)
        })
    },[id])

  return (
    <div style={{display:'flex', padding:'200px 500px'}}>
        <Helmet>
            <title>
                detail
            </title>
        </Helmet>
        <img src={`${data.img}`} alt="" />
        <div>
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
        </div>
    </div>
  )
}

export default Detail