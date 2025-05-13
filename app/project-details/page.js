'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Project_details() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project Details">
                <section className="project-details sec-pad">
                    <div className="auto-container">
                        <div className="project-details-content">
                            <h3>Project Description</h3>
                            <ul className="info-list clearfix">
                                <li>
                                    <i className="icon-manager"></i>
                                    <h5>Client</h5>
                                    <p>Stanford University</p>
                                </li>
                                <li>
                                    <i className="icon-event"></i>
                                    <h5>Date</h5>
                                    <p>Sep 28, 2020</p>
                                </li>
                                <li>
                                    <i className="icon-settings-1"></i>
                                    <h5>Category</h5>
                                    <p>Outdoor Wiring</p>
                                </li>
                                <li>
                                    <i className="icon-map"></i>
                                    <h5>Location</h5>
                                    <p>California, USA</p>
                                </li>
                            </ul>
                            <div className="text">
                                <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through of will, which is the same as saying shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power off choice is when nothing prevents. Our being able too do what we like best, every pleasures is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently.</p>
                            </div>
                            <div className="image-box">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                        <figure className="image"><img src="assets/images/gallery/project-35.jpg" alt=""/></figure>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                        <figure className="image"><img src="assets/images/gallery/project-36.jpg" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="related-project">
                            <h3>Related Projects</h3>
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 project-block">
                                    <div className="project-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/gallery/project-1.jpg" alt=""/></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <p>Outdoor Wiring</p>
                                                    <h4><Link href="/project-details">Night Vision Cameras</Link></h4>
                                                </div>
                                                <ul className="link-box">
                                                    <li>
                                                        <Link href="assets/images/gallery/project-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 project-block">
                                    <div className="project-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/gallery/project-2.jpg" alt=""/></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <p>Outdoor Wiring</p>
                                                    <h4><Link href="/project-details">Night Vision Cameras</Link></h4>
                                                </div>
                                                <ul className="link-box">
                                                    <li>
                                                        <Link href="assets/images/gallery/project-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/project-details"><i className="icon-link"></i><span>More Details</span></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 project-block">
                                    <div className="project-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/gallery/project-3.jpg" alt=""/></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <p>Outdoor Wiring</p>
                                                    <h4><Link href="/project-details">Night Vision Cameras</Link></h4>
                                                </div>
                                                <ul className="link-box">
                                                    <li>
                                                        <Link href="assets/images/gallery/project-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-zoom-in"></i><span>Full View</span></Link>
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
            </Layout>
        </div>
    )
}
