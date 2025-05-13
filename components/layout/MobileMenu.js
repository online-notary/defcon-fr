'use client'
import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
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

            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times"></i></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="assets/images/logo-4.png" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/">CCTV</Link></li>
                                        <li><Link href="/index-2">Cyber Security</Link></li>
                                        <li><Link href="/index-3">Body Guard</Link></li>
                                        <li><Link href="/index-4">Smart Home</Link></li>
                                        <li><Link href="/index-5">Locksmiths</Link></li>
                                        <li><Link href="/index-6">Energy Management</Link></li>
                                    </ul>
                                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">About</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li><Link href="/about">Our Company</Link></li>
                                        <li><Link href="/team">Professional Team</Link></li>
                                        <li><Link href="/faq">Faq’s</Link></li>
                                        <li><Link href="/error">404</Link></li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Services</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="/service">All Services</Link></li>
                                        <li><Link href="/service-details">Install & Configure</Link></li>
                                        <li><Link href="/service-details-2">Repair & Service</Link></li>
                                        <li><Link href="/service-details-3">Maintenance</Link></li>
                                        <li><Link href="/service-details-4">Video Verification</Link></li>
                                        <li><Link href="/service-details-5">Video Surveillence</Link></li>
                                        <li><Link href="/service-details-6">Interactive Security</Link></li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#">Shop</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li><Link href="/shop">Products</Link></li>
                                        <li><Link href="/shop-details">Single Product</Link></li>
                                        <li><Link href="/cart">Shopping Cart</Link></li>
                                        <li><Link href="/checkout">Checkout</Link></li>
                                        <li><Link href="/account">My Account</Link></li>
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link href="/#">Blog</Link>
                                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                        <li><Link href="/blog">Blog Grid View</Link></li>
                                        <li><Link href="/blog-2">Blog With Sidebar</Link></li>
                                        <li><Link href="/blog-details">Single Post</Link></li>
                                    </ul>
                                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 6 ? "dropdown current" : "dropdown"}><Link href="/#">Projects</Link>
                                    <ul style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                        <li><Link href="/project">3 Columns Grid</Link></li>
                                        <li><Link href="/project-2">4 Columns Grid</Link></li>
                                        <li><Link href="/project-3">Title Overlay 01</Link></li>
                                        <li><Link href="/project-4">Title Overlay 02</Link></li>
                                        <li><Link href="/project-details">Project Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(6)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>

                    </div>
                    
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>Chicago 12, Melborne City, USA</li>
                            <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                            <li><a href="mailto:info@example.com">info@example.com</a></li>
                        </ul>
                    </div>
                    <ul className="social-links centred">
                        <li><a href="index.html"><span className="fab fa-twitter"></span></a></li>
                        <li><a href="index.html"><span className="fab fa-facebook-square"></span></a></li>
                        <li><a href="index.html"><span className="fab fa-pinterest-p"></span></a></li>
                        <li><a href="index.html"><span className="fab fa-instagram"></span></a></li>
                        <li><a href="index.html"><span className="fab fa-youtube"></span></a></li>
                    </ul>
                </nav>
            </div>

            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />

        </>
    )
}
