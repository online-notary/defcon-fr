'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"



export default function Header1({ scroll, handleMobileMenu, handleSidebar }) {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    
    return (
        <>

        {/* main header */}

        <header className={`main-header style-one ${scroll ? "fixed-header" : ""}`}>

            <div className="page-header-mobile-info">
                <div className={isActive.key == 1 ? "page-header-mobile-info-content current" : "page-header-mobile-info-content"}>
                    <div className="header-top">
                        <div className="auto-container">
                            <div className="top-inner clearfix">
                                <ul className="info clearfix pull-left">
                                    <li><i className="icon-hour"></i>9.00 to 7.00 (Mon_Sat)</li>
                                    <li><i className="icon-placeholder"></i>246 Old York Rd, NY</li>
                                    <li><Link href="/contact">View On Map<i className="icon-right-arrow"></i></Link></li>
                                </ul>
                                <ul className="info clearfix pull-right">
                                    <li><i className="icon-home"></i><Link href="/">Residential</Link></li>
                                    <li><i className="icon-store"></i><Link href="/">Commercial</Link></li>
                                    <li className="search-box-outer" onClick={handleSidebar}><i className="icon-search"></i><span>Search</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header-upper">
                        <div className="auto-container">
                            <div className="upper-inner clearfix">
                                <div className="logo-box pull-left">
                                    <figure className="logo"><Link href="/"><img src="assets/images/logo.png" alt=""/></Link></figure>
                                </div>
                                <ul className="info-list clearfix pull-right">
                                    <li>
                                        <i className="icon-email"></i>
                                        <p>Mail Us On</p>
                                        <h5><Link href="mailto:info@example.com">info@example.com</Link></h5>
                                    </li>
                                    <li>
                                        <i className="icon-smartphone"></i>
                                        <p>Make a Call</p>
                                        <h5><Link href="tel:15417543010">+1-541-754-3010</Link></h5>
                                    </li>
                                    <li className="btn-box">
                                        <Link href="/" className="theme-btn style-one">Request Demo</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="toggle-box clearfix">
                    <div className={isActive.key == 1 ? "page-header-mobile-info-toggle active" : "page-header-mobile-info-toggle"} onClick={() => handleToggle(1)}></div>
                    <div className="btn-box">
                        <Link href="/" className="theme-btn style-one">Request Demo</Link>
                    </div>
                </div>
            </div>
            
            <div className="header-top auto-hidden">
                <div className="auto-container">
                    <div className="top-inner clearfix">
                        <ul className="info clearfix pull-left">
                            <li><i className="icon-hour"></i>9.00 to 7.00 (Mon_Sat)</li>
                            <li><i className="icon-placeholder"></i>246 Old York Rd, NY</li>
                            <li><Link href="/contact">View On Map<i className="icon-right-arrow"></i></Link></li>
                        </ul>
                        <ul className="info clearfix pull-right">
                            <li><i className="icon-home"></i><Link href="/">Residential</Link></li>
                            <li><i className="icon-store"></i><Link href="/">Commercial</Link></li>
                            <li className="search-box-outer" onClick={handleSidebar}><i className="icon-search"></i><span>Search</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="header-upper auto-hidden">
                <div className="auto-container">
                    <div className="upper-inner clearfix">
                        <div className="logo-box pull-left">
                            <figure className="logo"><Link href="/"><img src="assets/images/logo.png" alt=""/></Link></figure>
                        </div>
                        <ul className="info-list clearfix pull-right">
                            <li>
                                <i className="icon-email"></i>
                                <p>Mail Us On</p>
                                <h5><Link href="mailto:info@example.com">info@example.com</Link></h5>
                            </li>
                            <li>
                                <i className="icon-smartphone"></i>
                                <p>Make a Call</p>
                                <h5><Link href="tel:15417543010">+1-541-754-3010</Link></h5>
                            </li>
                            <li className="btn-box">
                                <Link href="/" className="theme-btn style-one">Request Demo</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="header-lower">
                <div className="auto-container">
                    <div className="outer-box clearfix">
                        <div className="menu-area clearfix pull-left">
                            
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <div className="menu-right-content clearfix pull-right">
                            <ul className="social-style-one clearfix">
                                <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link href="/"><i className="fab fa-linkedin-in"></i></Link></li>
                            </ul>
                            <div className="cart-box"><Link href="/shop"><i className="icon-shopping-cart"></i><span>[0]</span></Link></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                <div className="auto-container">
                    <div className="outer-box clearfix">
                        <div className="menu-area pull-left">
                            <nav className="main-menu clearfix">
                                <Menu />
                            </nav>
                        </div>
                        <div className="menu-right-content clearfix pull-right">
                            <ul className="social-style-one clearfix">
                                <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link href="/"><i className="fab fa-linkedin-in"></i></Link></li>
                            </ul>
                            <div className="cart-box"><Link href="/shop"><i className="icon-shopping-cart"></i><span>[0]</span></Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </header>

        </>
    )
}
