import React, { useContext } from 'react'
import MainContext from '../../context/Context'
import { Helmet } from 'react-helmet'

const Wishlist = () => {

    const {wishlistItems,removeFromWishlist}=useContext(MainContext)

  return (
    <div className="wishlist">
        <Helmet>
            <title>
                wishlist
            </title>
        </Helmet>
        <div className="wishlist__list">
            {
                wishlistItems.map((item,index)=>{
                    return <li key={index}>
                        <span>{item.title} <button onClick={()=>removeFromWishlist(item._id)}> delete</button></span>
                    </li>
                })
            }
        </div>
    </div>
  )
}

export default Wishlist