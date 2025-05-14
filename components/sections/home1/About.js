'use client'
import React from 'react'
import Link from "next/link"

export default function About() {
    return (
      <>
        <section className="about-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image_block_1">
                  <div className="image-box">
                    <div className="shape-box">
                      <div
                        className="line line-1"
                        style={{
                          backgroundImage:
                            'url(assets/images/icons/line-1.png)',
                        }}
                      ></div>
                      <div
                        className="line line-2"
                        style={{
                          backgroundImage:
                            'url(assets/images/icons/line-2.png)',
                        }}
                      ></div>
                      <div
                        className="line line-3"
                        style={{
                          backgroundImage:
                            'url(assets/images/icons/line-3.png)',
                        }}
                      ></div>
                      <div
                        className="line line-4"
                        style={{
                          backgroundImage:
                            'url(assets/images/icons/line-4.png)',
                        }}
                      ></div>
                      <div className="circle"></div>
                    </div>
                    <figure className="image">
                      <img src="assets/images/resource/about-1.png" alt="" />
                    </figure>
                    <div className="content-box">
                      <figure className="curve-text">
                        <img src="assets/images/icons/curve-text.png" alt="" />
                      </figure>
                      <div className="text">
                        <h2>
                          4 <span>+</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_1">
                  <div className="content-box">
                    <div className="sec-title">
                      <div className="top-title">
                        <div className="shape">
                          <div className="line line-1"></div>
                          <div className="line line-2"></div>
                          <div className="line line-3"></div>
                          <div className="line line-4"></div>
                          <div
                            className="bg-shape"
                            style={{
                              backgroundImage:
                                'url(assets/images/icons/bg-shape.png)',
                            }}
                          ></div>
                        </div>
                        <p>About Company</p>
                      </div>
                      <h2>Defcon One Philosophy</h2>
                    </div>
                    <div className="text">
                      <h4>The professional approach to security.</h4>
                      <p>
                        Teachings of the great explorer of the truth, the
                        master-builder of human happiness. No one rejects,
                        dislikes, or avoids pleasure itself, because it is who
                        do not know how to pursue pleasure.
                      </p>
                    </div>
                    <div className="author-box">
                      <figure className="author-thumb">
                        <img src="assets/images/resource/author-1.jpg" alt="" />
                      </figure>
                      <figure className="signature">
                        <img src="assets/images/icons/signature-1.png" alt="" />
                      </figure>
                      <h5>
                        Roman Liam, <span>Ceo & Founder</span>
                      </h5>
                    </div>
                    <div className="lower-content clearfix">
                      <h4>
                        “Security is everyone's concern but <br />
                        it's our business.”
                      </h4>
                      <div className="btn-box">
                        <Link href="/about" className="theme-btn style-one">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
