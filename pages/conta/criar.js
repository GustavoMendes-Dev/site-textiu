import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

import HeaderAccount from '../../components/HeaderAccount';

export default function CreateAccount() {

    return (
        <React.Fragment>
            <HeaderAccount/>
            <Container>
                    <Row>
                        <Col lg={5} className="create__account">
                        <h6>A conta é...</h6>
                        <div className="create__account--btn btn__round">
                            <Link href="/conta/criar/profissional">
                                    para você.
                            </Link>
                        </div>
                        <div className="create__account--btn btn__round">
                            <Link href="/conta/criar/fornecedor">
                                    para sua empresa.
                            </Link>
                        </div>
                        </Col>
                    </Row>
            </Container>
        </React.Fragment>
    )
}