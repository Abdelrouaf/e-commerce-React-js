import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import profileUserImg from '../../images/profile-user.png'
import userIcon from '../../images/user.png'
import orderIcon from '../../images/bag.png'
import cancelIcon from '../../images/cancel.png'
import reviewIcon from '../../images/star.png'
import logoutIcon from '../../images/logout.png'
import style from './Header.module.scss'

export default function Header() {

    const [userProfile, setUserProfile] = useState(false);

    const userRef = useRef(null)

    useEffect( () => {
        
    },[] )

    return (
    
        <>
        
            <header className={style.upperHeader}>

                <div className="container">

                    <div className="d-flex justify-content-end align-items-center">

                        <div className={`d-flex justify-content-between align-items-center ${style.upperHeaderWidth}`}>

                            <p>Summer sale for all swim suits and free express delivery - OFF 50%! <Link to='shop'>shop now</Link></p>

                            <div>

                                <select className={style.select} aria-label="Default select example">

                                    <option value="en">English</option>

                                    <option value="ar">Arabic</option>

                                    <option value="sp">Spanish</option>

                                </select>

                            </div>

                        </div>

                    </div>

                </div>

            </header>

            <header className={style.lowerHeader}>

                <div className="container">

                    <nav className={`navbar navbar-expand-lg ${style.navbar}`}>
                    
                        <div className="container">
                        
                            <div className="d-flex align-items-center justify-content-between w-75">

                                <div className={style.logo}>

                                    <Link to='/' className='navbar-brand'>Exclusive</Link>

                                </div>
                            
                                <div className={`collapse navbar-collapse justify-content-center ${style.navbarCollapse}`} id="navbarSupportedContent">
                            
                                    <ul className="navbar-nav mb-2 mb-lg-0">
                                    
                                        <li className={`nav-item ${style.navItem}`}>
                                        
                                            <NavLink className={({isActive}) => ( isActive ? `nav-link ${style.link} ${style.activeLink}` : `nav-link ${style.link}` ) } to="/">Home</NavLink>
                                        
                                        </li>
                                    
                                        <li className={`nav-item ${style.navItem}`}>
                                        
                                            <NavLink className={({isActive}) => ( isActive ? `nav-link ${style.link} ${style.activeLink}` : `nav-link ${style.link}` ) } to="contact">Contact</NavLink>
                                        
                                        </li>

                                        <li className={`nav-item ${style.navItem}`}>
                                        
                                            <NavLink className={({isActive}) => ( isActive ? `nav-link ${style.link} ${style.activeLink}` : `nav-link ${style.link}` ) } to="about">About</NavLink>
                                        
                                        </li>

                                        <li className={`nav-item ${style.navItem}`}>
                                        
                                            <NavLink className={({isActive}) => ( isActive ? `nav-link ${style.link} ${style.activeLink}` : `nav-link ${style.link}` ) } to="sign-up">Sign up</NavLink>
                                        
                                        </li>
                                    
                                    </ul>
                            
                                </div>

                            </div>
                        
                            <div className={style.right}>

                                <div className={style.input}>

                                    <input className="form-control" type="text" placeholder="What are you looking for?" aria-label="Search" />

                                    <span><i className="fa-solid fa-magnifying-glass"></i></span>

                                </div>

                                <span className={style.wishlistIcon}><i className="fa-regular fa-heart"></i></span>

                                <span className={style.cartIcon}><i className="fa-solid fa-cart-shopping"></i></span>

                                <div className={style.profileUser} onClick={ () => setUserProfile(!userProfile) } ref={userRef}>

                                    <div className={style.image}>

                                        <img src={profileUserImg} width={25} alt="profile-user-image" loading='lazy' />

                                    </div>

                                    <ul>

                                        <li><Link to='user/account'><img src={userIcon} width={15} alt="user-icon" loading='lazy' />Manage My Account</Link></li>

                                        <li><Link to='user/my-orders'><img src={orderIcon} width={15} alt="order-icon" loading='lazy' />My Order</Link></li>

                                        <li><Link to='user/cancellation-list'><img src={cancelIcon} width={15} alt="cancel-icon" loading='lazy' />My Cancellation</Link></li>

                                        <li><Link to='user/reviews'><img src={reviewIcon} width={15} alt="review-icon" loading='lazy' />My Reviews</Link></li>

                                        <li><Link ><img src={logoutIcon} width={15} alt="logout-icon" loading='lazy' />Logout</Link></li>

                                    </ul>

                                </div>

                            </div>
                        
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            
                                <span className="navbar-toggler-icon"></span>
                            
                            </button>
                        
                        </div>
                    
                    </nav>

                </div>

            </header>

        </>
    
    )
}