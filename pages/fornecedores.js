import React from "react";
import { Container } from "react-bootstrap";

import Footer from '../components/Footer';
import Header from '../components/Header';


export default function ProvidersPage(){

    return (
        <React.Fragment>
            <Header/>
            <div class="page-banner-area" id="page-banner">
                <Container>
                    <div class="row justify-content-center">
                        <div class="col-lg-8 m-auto text-center col-sm-12 col-md-12">
                            <div class="banner-content content-padding">
                                <input type="text"/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
                <Container>
                    <div>
                        resultados
                    </div>
                </Container>
            


            <Footer/>
        </React.Fragment>
    )
}