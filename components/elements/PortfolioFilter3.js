'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter3() {

    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")



    return (
        <>
            <section className="project-page-section title-over-one">
                <div className="auto-container">
                    <div className="sortable-masonry">
                        <div className="filters centred">
                            <ul className="filter-tabs filter-btns clearfix">
                                <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>View All<span>9</span></li>
                                <li className={activeBtn("alaram")} onClick={handleFilterKeyChange("alaram")}>Alaram</li>
                                <li className={activeBtn("installation")} onClick={handleFilterKeyChange("installation")}>Installation</li>
                                <li className={activeBtn("outdoor")} onClick={handleFilterKeyChange("outdoor")}>Outdoor</li>
                                <li className={activeBtn("wireless")} onClick={handleFilterKeyChange("wireless")}>Wireless</li>
                            </ul>
                        </div>
                        <div className="items-container row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 masonry-item small-column all outdoor alaram installation">
                                <div className="project-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/gallery/project-29.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <div className="text">
                                                <p>Outdoor Wiring</p>
                                                <h5><Link href="/project-details">Night Vision Cameras</Link></h5>
                                            </div>
                                            <ul className="link-box">
                                                <li>
                                                    <Link href="assets/images/gallery/project-29.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 masonry-item small-column all alaram outdoor wireless">
                                <div className="project-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/gallery/project-30.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <div className="text">
                                                <p>Installation</p>
                                                <h5><Link href="/project-details">Work in Safe Cities</Link></h5>
                                            </div>
                                            <ul className="link-box">
                                                <li>
                                                    <Link href="assets/images/gallery/project-30.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 masonry-item small-column all outdoor installation">
                                <div className="project-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/gallery/project-31.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <div className="text">
                                                <p>Alaram</p>
                                                <h5><Link href="/project-details">Empowers the CCAD</Link></h5>
                                            </div>
                                            <ul className="link-box">
                                                <li>
                                                    <Link href="assets/images/gallery/project-31.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 masonry-item small-column all alaram installation wireless">
                                <div className="project-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/gallery/project-32.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <div className="text">
                                                <p>Outdoor Wiring</p>
                                                <h5><Link href="/project-details">Drive Safety & Empower</Link></h5>
                                            </div>
                                            <ul className="link-box">
                                                <li>
                                                    <Link href="assets/images/gallery/project-32.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 masonry-item small-column all outdoor alaram installation">
                                <div className="project-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/gallery/project-33.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <div className="text">
                                                <p>Wireless</p>
                                                <h5><Link href="/project-details">Helping Increase Security</Link></h5>
                                            </div>
                                            <ul className="link-box">
                                                <li>
                                                    <Link href="assets/images/gallery/project-33.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 masonry-item small-column all alaram outdoor wireless">
                                <div className="project-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/gallery/project-34.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <div className="text">
                                                <p>Alaram</p>
                                                <h5><Link href="/project-details">US International Airport</Link></h5>
                                            </div>
                                            <ul className="link-box">
                                                <li>
                                                    <Link href="assets/images/gallery/project-34.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
