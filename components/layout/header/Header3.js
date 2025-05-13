'use client'
import React from 'react'
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"



export default function Header3({ scroll, handleMobileMenu, handleSidebar }) {
    
    return (
        <>

        {/* main header */}

        <header className={`main-header style-three ${scroll ? "fixed-header" : ""}`}>

            <div className="header-top bg-color-3">
                <div className="auto-container">
                    <div className="top-inner clearfix">
                        <ul className="info clearfix pull-left">
                            <li><i className="icon-placeholder"></i>246 Old York Rd, NY</li>
                            <li><i className="icon-hour"></i>9.00 to 7.00 (Mon_Sat)</li>
                        </ul>
                        <ul className="info clearfix pull-right">
                            <li><i className="icon-email-2"></i><Link href="mailto:info@example.com">info@example.com</Link></li>
                            <li><i className="icon-phone-call1"></i><Link href="tel:15417543010">+1-541-754-3010</Link></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="header-lower">
                <div className="auto-container">
                    <div className="outer-box clearfix">
                        <div className="logo-box">
                            <figure className="logo"><Link href="index-3.html"><img src="assets/images/logo-4.png" alt=""/></Link></figure>
                        </div>
                        <div className="menu-area clearfix">
                            
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
                        <ul className="other-option clearfix">
                            <li className="share-option"><Link href="index-3.html"><i className="icon-share"></i></Link></li>
                            <li className="search-box-outer" onClick={handleSidebar}><i className="icon-search"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                <div className="auto-container">
                    <div className="outer-box clearfix">
                        <div className="logo-box">
                            <figure className="logo"><Link href="/index-3"><img src="assets/images/logo-4.png" alt=""/></Link></figure>
                        </div>
                        <div className="menu-area clearfix">
                            <nav className="main-menu clearfix">
                                <Menu />
                            </nav>
                        </div>
                        <ul className="other-option clearfix">
                            <li className="share-option"><a href="index-3.html"><i className="icon-share"></i></a></li>
                            <li className="search-box-outer" onClick={handleSidebar}><i className="icon-search"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </header>

        </>
    )
}
