import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul className="navigation clearfix">
                <li className="dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">CCTV</Link></li>
                        <li><Link href="/index-2">Cyber Security</Link></li>
                        <li><Link href="/index-3">Body Guard</Link></li>
                        <li><Link href="/index-4">Smart Home</Link></li>
                        <li><Link href="/index-5">Locksmiths</Link></li>
                        <li><Link href="/index-6">Energy Management</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">About</Link>
                    <ul>
                        <li><Link href="/about">Our Company</Link></li>
                        <li><Link href="/team">Professional Team</Link></li>
                        <li><Link href="/faq">Faq’s</Link></li>
                        <li><Link href="/error">404</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Services</Link>
                    <ul>
                        <li><Link href="/service">All Services</Link></li>
                        <li><Link href="/service-details">Install & Configure</Link></li>
                        <li><Link href="/service-details-2">Repair & Service</Link></li>
                        <li><Link href="/service-details-3">Maintenance</Link></li>
                        <li><Link href="/service-details-4">Video Verification</Link></li>
                        <li><Link href="/service-details-5">Video Surveillence</Link></li>
                        <li><Link href="/service-details-6">Interactive Security</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Shop</Link>
                    <ul>
                        <li><Link href="/shop">Products</Link></li>
                        <li><Link href="/shop-details">Single Product</Link></li>
                        <li><Link href="/cart">Shopping Cart</Link></li>
                        <li><Link href="/checkout">Checkout</Link></li>
                        <li><Link href="/account">My Account</Link></li>
                    </ul>
                </li> 
                <li className="dropdown"><Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="/blog">Blog Grid View</Link></li>
                        <li><Link href="/blog-2">Blog With Sidebar</Link></li>
                        <li><Link href="/blog-details">Single Post</Link></li>
                    </ul>
                </li> 
                <li className="dropdown"><Link href="#">Projects</Link>
                    <ul>
                        <li><Link href="/project">3 Columns Grid</Link></li>
                        <li><Link href="/project-2">4 Columns Grid</Link></li>
                        <li><Link href="/project-3">Title Overlay 01</Link></li>
                        <li><Link href="/project-4">Title Overlay 02</Link></li>
                        <li><Link href="/project-details">Project Details</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
