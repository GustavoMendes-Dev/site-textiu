import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import HeaderAccount from '../../../components/HeaderAccount';
import FormProfessional from '../../../components/FormProfessional';

export default function CreateProfessional() {

    return (
        <React.Fragment>
            <HeaderAccount/>
            <Container>
            <Row className="text-center m-auto form__register">
                        <Col className="text-center m-auto" lg={5}>
                        <h6>Precisamos de alguns dados básicos pessoais.</h6>
                       <FormProfessional/>
                        </Col>
                    </Row>
            </Container>
        </React.Fragment>
    )
}