import React from 'react';
import { Table } from 'antd';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderAdmin from '../../../../components/conta/HeaderAdmin'

const Plans = ({plans}) => {

    const columns = [
        {
            title: 'Título',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Preço',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },

        {
            title: 'Ações',
            dataIndex: 'actions',
            key: 'actions',
        },
      ];

    return (
        <React.Fragment>
        <HeaderAdmin/>
        <section className="content">
            <Container>
                <Row>
                    <Col>
                        <h2>Planos</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table dataSource={plans.result} columns={columns} />
                    </Col>
                </Row>
            </Container>
        </section>
    </React.Fragment>
    )
}

export async function getServerSideProps() {
    const data = await fetch(`http://localhost:3333/plans`);

    const plans = await data.json();


    return { props: { plans } };
}

export default Plans;