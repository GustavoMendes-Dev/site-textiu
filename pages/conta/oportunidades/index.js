import React from 'react';
import { Table } from 'antd'
import { Container, Row, Col } from 'react-bootstrap';
import HeaderAdmin from '../../../components/conta/HeaderAdmin';


const ListOpportunities = ({opportunities}) => {
      
      const columns = [
        {
            title: 'Título',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Categoria',
            dataIndex: 'categories',
            key: 'categories',
        },
        {
            title: 'Tipo',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Empresa',
            dataIndex: 'created_by',
            key: 'created_by',
        },
        {
            title: 'Contrato',
            dataIndex: 'hiring',
            key: 'hiring',
        },
        {
            title: 'Vagas',
            dataIndex: 'vacancies',
            key: 'vacancies',
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
                            <h2>Vagas</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table dataSource={opportunities.result} columns={columns} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export async function getServerSideProps() {
    const data = await fetch(`http://localhost:3333/opportunities`);

    const opportunities = await data.json();


    return { props: { opportunities } };
}

export default ListOpportunities;