'use client';
import React from 'react';
import Link from 'next/link';

export default function Work() {
  return (
    <>
      <section className="work-style-two home-5 sec-pad centred">
        <div className="auto-container">
          <div
            className="sec-title-two centred wow fadeInDown animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <p>How it’s Work</p>
            <h2>Our simple working process</h2>
          </div>
          <div
            className="inner-container wow fadeInUp animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 work-block">
                <div className="work-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-calculator"></i>
                    </div>
                    <span>Step 01</span>
                    <h4>Get a Quotes</h4>
                    <p>
                      Business it will get frequently occurs that some
                      pleasures.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 work-block">
                <div className="work-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-calendar"></i>
                    </div>
                    <span>Step 02</span>
                    <h4>Appiontment</h4>
                    <p>
                      Wise man therefore always holds in these matters this
                      principle
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 work-block">
                <div className="work-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-done"></i>
                    </div>
                    <span>Step 03</span>
                    <h4>Buy a Device</h4>
                    <p>
                      Trouble that bound too ensue and equaly blame fail in
                      their duty.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 work-block">
                <div className="work-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-camera"></i>
                    </div>
                    <span>Step 04</span>
                    <h4>Install the Device</h4>
                    <p>
                      Desire that they cannot foresees the pain off bound to
                      ensue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="more-text">
              <h4>
                <i className="icon-chat"></i>Interested? Consult with our expert
                team. <Link href="tel:15417543010">(972) 499-4130</Link>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
