import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  return (
    <div className="navigation">
        <div className="nav">
        <div className="nav__left">
            <img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
        </div>
        <div className="nav__right">
        
<TiThMenu className='menu' />
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/add'}>Add</Link>
                </li>
                <li>
                    <Link to={'/basket'}>Basket</Link>
                </li>
                <li>
                    <Link to={'/wishlist'}>Wishlist</Link>
                </li>
            </ul>

        </div>
        
    </div>
    </div>
  )
}

export default Header