import React from "react";
import { Container } from "react-bootstrap";

import Footer from '../../components/Footer';
import HeaderAccount from '../../components/HeaderAccount';

export default function CreateAccount() {

    return (
        <React.Fragment>
            <HeaderAccount/>
                <Container>
                    <div>
                        resultados
                    </div>
                </Container>
            <Footer/>
        </React.Fragment>
    )
}