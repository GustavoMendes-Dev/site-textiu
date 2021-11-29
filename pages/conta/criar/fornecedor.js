import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormProvider from '../../../components/FormProvider';

import HeaderAccount from '../../../components/HeaderAccount';
import StepsForm from '../../../components/Steps';

export default function CreateProvider() {

    // const steps = [
    //     {
    //       title: 'First',
    //       content: <FormProvider/>,
    //     },
    //     {
    //       title: 'Second',
    //       content: 'Second-content',
    //     },
    //     {
    //       title: 'Last',
    //       content: 'Last-content',
    //     },
    // ];

    return (
        <React.Fragment>
            <HeaderAccount/>
            <Container>
                    <Row className="text-center m-auto form__register">
                        <Col className="text-center m-auto" lg={5}>
                        <h6>Precisamos de alguns dados básicos pessoais.</h6>
                        {/* <StepsForm
                            steps={steps}
                        /> */}
                        <FormProvider/>
                        </Col>
                    </Row>
            </Container>
        </React.Fragment>
    )
}