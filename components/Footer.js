import React from "react";

export default function Footer(){

    return (
        <React.Fragment>
            <section id="footer" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-sm-8 col-md-8">
                            <div className="footer-widget footer-link">
                                <h4>We concern about you to grow business rapidly.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam hic non sunt recusandae atque unde saepe nihil earum voluptatibus aliquid optio suscipit nobis quia excepturi vel quod, iure quae.</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-4 col-md-4">
                            <div className="footer-widget footer-link">
                                <h4>About</h4>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Service</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-6 col-md-6">
                            <div className="footer-widget footer-link">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href="#">How it Works</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Report Bug</a></li>
                                    <li><a href="#">License</a></li>
                                    <li><a href="#">Terms e Condition</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="footer-widget footer-text">
                                <h4>Our location</h4>
                                <p className="mail"><span>Mail:</span> promdise@gmail.com</p>
                                <p><span>Phone :</span>+202-277-3894</p>
                                <p><span>Location:</span> 455 West Orchard Street Kings Mountain, NC 28086,NOC building</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="footer-copy">
                                ?? Copyright 2021 - Textiu Inc.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}