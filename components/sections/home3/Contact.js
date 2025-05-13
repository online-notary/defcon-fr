'use client';
import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <section className="contact-section sec-pad">
        <div className="bg-layer"></div>
        <div
          className="pattern-layer"
          style={{ backgroundImage: 'url(assets/images/shape/shape-9.png)' }}
        ></div>
        <figure
          className="image-layer wow slideInUp animated"
          data-wow-delay="00ms"
          data-wow-duration="1500ms"
        >
          <img src="assets/images/resource/contact-1.png" alt="" />
        </figure>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-12 col-sm-12 content-column">
              <div className="content_block_7">
                <div className="content-box">
                  <div className="sec-title light">
                    <div className="icon-box">
                      <i className="icon-police"></i>
                      <div className="shape-box">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                      </div>
                    </div>
                    <h2>We’d love to here for you.</h2>
                  </div>
                  <div className="text">
                    <p>
                      Must explain to you how all this mistaken idea of
                      denouncing pleasure & praising.
                    </p>
                  </div>
                  <div className="support-box">
                    <i className="icon-dial-pad"></i>
                    <p>Make a Call</p>
                    <h3>
                      <Link href="tel:15417543010">(972) 499-4130</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
              <div className="content_block_8">
                <div className="content-box">
                  <form
                    action="/contact"
                    method="post"
                    className="default-form"
                  >
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required=""
                          />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            required=""
                          />
                        </div>
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone num"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="form-group">
                          <label>Message</label>
                          <textarea
                            name="message"
                            placeholder="Write someting ..."
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 column">
                        <div className="form-group message-btn">
                          <button type="submit" className="theme-btn">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
