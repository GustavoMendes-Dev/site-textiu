import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import Link from 'next/link';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function OportunitiesPage() {

    return (
        <React.Fragment>
            <Header/>
            <div class="page-banner-area" id="page-banner">
                <Container>
                    <div class="row justify-content-center">
                        <div class="col-lg-12 m-auto col-sm-12 col-md-12">
                            <div class="banner-content content-padding">
                                <span>Tipo</span>
                                <Link href="/">
                                    <a>
                                        <Badge pill className="badge__filter" bg="light" text="dark">
                                            Emprego
                                        </Badge>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <Badge pill className="badge__filter" bg="light" text="dark">
                                            Diária
                                        </Badge>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <Badge pill className="badge__filter" bg="light" text="dark">
                                            Emprego
                                        </Badge>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
                <Container>
                    <Row>
                        <Col>
                            <p>Encontramos <strong>833</strong> vagas para você</p>
                        </Col>
                    </Row>

                <div class="row">
                        <div class="col-lg-3 col-sm-6 col-md-4">
                            <a href="/" class="blog-block">
                                {/* <img src="images/blog/blog-1.jpg" alt="" class="img-fluid"> */}
                                <div class="blog-text">
                                    <h6 class="author-name"><span>Emprego</span></h6>
                                    <a href="blog-single.html" class="h5 my-2 d-inline-block">
                                    Costureira Overlock
                                    </a>
                                    <p>Becomeing a best sale marketer is not easy but not impossible too.Ne</p>
                                    <h6 class="author-name">Catete - RJ</h6>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-4">
                        <a href="/" class="blog-block">
                                {/* <img src="images/blog/blog-1.jpg" alt="" class="img-fluid"> */}
                                <div class="blog-text">
                                    <h6 class="author-name"><span>Emprego</span></h6>
                                    <a href="blog-single.html" class="h5 my-2 d-inline-block">
                                    Costureira Overlock
                                    </a>
                                    <p>Becomeing a best sale marketer is not easy but not impossible too.Ne</p>
                                    <h6 class="author-name">Catete - RJ</h6>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-4">
                            <a href="/" class="blog-block">
                                {/* <img src="images/blog/blog-1.jpg" alt="" class="img-fluid"> */}
                                <div class="blog-text">
                                    <h6 class="author-name"><span>Emprego</span></h6>
                                    <a href="blog-single.html" class="h5 my-2 d-inline-block">
                                    Costureira Overlock
                                    </a>
                                    <p>Becomeing a best sale marketer is not easy but not impossible too.Ne</p>
                                    <h6 class="author-name">Catete - RJ</h6>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-4">
                            <a href="/" class="blog-block">
                                {/* <img src="images/blog/blog-1.jpg" alt="" class="img-fluid"> */}
                                <div class="blog-text">
                                    <h6 class="author-name"><span>Emprego</span></h6>
                                    <a href="blog-single.html" class="h5 my-2 d-inline-block">
                                    Costureira Overlock
                                    </a>
                                    <p>Becomeing a best sale marketer is not easy but not impossible too.Ne</p>
                                    <h6 class="author-name">Catete - RJ</h6>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-4">
                            <a href="/" class="blog-block">
                                {/* <img src="images/blog/blog-1.jpg" alt="" class="img-fluid"> */}
                                <div class="blog-text">
                                    <h6 class="author-name"><span>Emprego</span></h6>
                                    <a href="blog-single.html" class="h5 my-2 d-inline-block">
                                    Costureira Overlock
                                    </a>
                                    <p>Becomeing a best sale marketer is not easy but not impossible too.Ne</p>
                                    <h6 class="author-name">Catete - RJ</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </Container>
            


            <Footer/>
        </React.Fragment>
    )
}