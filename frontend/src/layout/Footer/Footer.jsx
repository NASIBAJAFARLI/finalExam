import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__top">
            <div className="footer__top__data">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
            <div className="footer__top__data">
                <h2>Newsletter</h2>
                <input type="text" name="" id="" placeholder='email' />
            </div>
            <div className="footer__top__data">
                <h2>Instragram Feed</h2>
                <div style={{display:'flex', gap:'10px'}}>
                <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" />
                <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" />
                <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" />
                    <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" />
                </div>
            </div>
            <div className="footer__top__data">
                <h2>Follow Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
        </div>
        <div className="footer__bottom">Copyright ©2024 All rights reserved | This template is made with  by Colorlib </div>
    </div>
  )
}

export default Footer