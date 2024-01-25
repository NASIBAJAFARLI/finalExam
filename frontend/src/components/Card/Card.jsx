import React, { useContext } from 'react'
import MainContext from '../../context/Context'
import { Link } from 'react-router-dom'
import { GrFavorite } from "react-icons/gr";
import './Card.scss'
import '../Cards/Cards.scss'
const Card = ({item}) => {
    const {addToWishlist}=useContext(MainContext)
  return (
    <div className="card" >
        <img src={`${item.img}`} alt="" />
        <div className='card__body'>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <Link to={`/${item._id}`}>Detail</Link>
            <GrFavorite className='fav' onClick={()=>addToWishlist(item)} />
        </div>
    </div>
  )
}

export default Card