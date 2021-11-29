import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

import FormLogin from '../../components/FormLogin';
import logo from '../../public/assets/logo.svg'

export default function CreateAccount() {

    return (
        <React.Fragment>
                    <Row>
                        <Col lg={6} className="text-center bg__login--primary">
                        <p>
                            <Link href="/">
                                <Image
                                    src={logo}
                                    alt="Picture of the author"
                                    // width={120} automatically provided
                                    // height={20} automatically provided
                                    // blurDataURL="data:..." automatically provided
                                    // placeholder="blur" // Optional blur-up while loading
                                /> 
                            </Link>
                        </p>
                        <h1>A plataforma que reúne profissionais do setor têxtil às melhores oportunidades do mercado.</h1>
                        </Col>
                        <Col lg={6} className="text-center form__login">
                        <FormLogin/>
                        </Col>
                    </Row>
        </React.Fragment>
    )
}