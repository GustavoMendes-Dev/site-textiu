import React from "react"
import Link from "next/link"

export default function Oportunities(){

    return(
        <React.Fragment>
            <section id="blog" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 m-auto">
                            <div className="section-heading">
                                <h4 className="section-title">Oportunidades para você.</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-4">
                            <Link href="#" className="blog-block" passHref>
                                  {/* <img src="images/blog/blog-1.jpg" alt="" className="img-fluid"> */}
                                  <div className="blog-text">
                                      <h6 className="author-name"><span>Emprego  ·  </span>
                                      <span>Costureira</span></h6>
                                      <h1 className="h2 my-2 d-inline-block">
                                      Overloquista
                                      </h1>
                                      <p>Becomeing a best sale marketer is not easy but not impossible too.Ne</p>
                                      <h6 className="author-name">IZ Têxtil Private Labelnu</h6>

                                      <h6 className="author-name">R$ 1.873,00  ·  </h6>
                                      <h6 className="author-name">Catete - RJ</h6>
                                  </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-4">
                        <Link href="#" className="blog-block" passHref>
                                {/* <img src="images/blog/blog-1.jpg" alt="" className="img-fluid"> */}
                                <div className="blog-text">
                                    <h6 className="author-name"><span>Emprego</span></h6>
                                    <a href="blog-single.html" className="h5 my-2 d-inline-block">
                                    Costureira Overlock
                                    </a>
                                    <p>Becomeing a best sale marketer is not easy but not impossible too.Ne</p>
                                    <h6 className="author-name">Catete - RJ</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-4">
                          <Link href="#" className="blog-block" passHref>
                              {/* <img src="images/blog/blog-1.jpg" alt="" className="img-fluid"> */}
                              <div className="blog-text">
                                  <h6 className="author-name"><span>Emprego</span></h6>
                                  <a href="blog-single.html" className="h5 my-2 d-inline-block">
                                  Costureira Overlock
                                  </a>
                                  <p>Becomeing a best sale marketer is not easy but not impossible too.Ne</p>
                                  <h6 className="author-name">Catete - RJ</h6>
                              </div>
                          </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-4">
                          <Link href="#" className="blog-block" passHref>
                            {/* <img src="images/blog/blog-1.jpg" alt="" className="img-fluid"> */}
                            <div className="blog-text">
                                <h6 className="author-name"><span>Emprego</span></h6>
                                <a href="blog-single.html" className="h5 my-2 d-inline-block">
                                Costureira Overlock
                                </a>
                                <p>Becomeing a best sale marketer is not easy but not impossible too.Ne</p>
                                <h6 className="author-name">Catete - RJ</h6>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-4">
                          <Link href="#" className="blog-block" passHref>
                            {/* <img src="images/blog/blog-1.jpg" alt="" className="img-fluid"> */}
                            <div className="blog-text">
                                <h6 className="author-name"><span>Emprego</span></h6>
                                <a href="blog-single.html" className="h5 my-2 d-inline-block">
                                Costureira Overlock
                                </a>
                                <p>Becomeing a best sale marketer is not easy but not impossible too.Ne</p>
                                <h6 className="author-name">Catete - RJ</h6>
                            </div>
                          </Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}