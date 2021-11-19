import React from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function oportunidade() {
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
                                        {/* <Badge pill className="badge__filter" bg="light" text="dark">
                                            Emprego
                                        </Badge> */}
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        {/* <Badge pill className="badge__filter" bg="light" text="dark">
                                            Diária
                                        </Badge> */}
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        {/* <Badge pill className="badge__filter" bg="light" text="dark">
                                            Emprego
                                        </Badge> */}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div>
                Oportunidade
            </div>
            <Footer/>
        </React.Fragment>
    )
}
