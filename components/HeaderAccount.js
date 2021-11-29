import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

export default function HeaderAccount() {

    return (
        <React.Fragment>
            <div className="header__account">
                <Container>
                    <Row>
                        <Col lg={6} className="header__register">
                            <Link href="/">
                                    textiu
                            </Link>
                        </Col>
                        <Col lg={6} className="header__register--right btn__round">
                            <Link href="/conta/entrar">Já sou cadastrado</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}