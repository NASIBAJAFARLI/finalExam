import React, { useContext } from 'react'
import MainContext from '../../context/Context'
import Card from '../Card/Card'
import './Cards.scss'


const Cards = () => {
    const {products}=useContext(MainContext)
  return (
    <div className="cards" style={{padding:'100px 0px'}}>
        <div style={{padding:'50px 400px'}} className="ourr">
            <h1>New realeased Products for Women</h1>
            <p>Who are in extremely love with eco friendly system</p>
        </div>

        <div className="container">
            <div className="row">
               {
                products?.map((item,index)=>(
                    <div className="col-3" key={index}>
                        <Card item={item}/>
                    </div>
                ))
               } 
            </div>
        </div>
    </div>
  )
}

export default Cards