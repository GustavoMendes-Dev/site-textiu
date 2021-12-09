import React, { useContext } from 'react';
import { Table, Tag } from 'antd';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderAdmin from '../../../components/conta/HeaderAdmin';

import { AuthContext } from '../../../contexts/AuthContext.tsx'

const ListOpportunities = ({opportunities}) => {
    const { user } = useContext(AuthContext);
    console.log(user?.provider);
    // let listOpportunities = user?.permission >= 3 ? opportunities.result : opportunities.result.filter(op => op.created_by_id.includes(user?.provider))


    let listOpportunities = user?.permission;
    switch ( listOpportunities ) {
        case 3:
            listOpportunities = opportunities.result; 
            break;
        default:
            listOpportunities = opportunities.result.filter(op => op.created_by_id.includes(user?.provider))
            break;
    }
      
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
            title: 'Processo Seletivo',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => (
                <>
                 {
                     record.status >= 1 ?
                     <Tag color="success">Ativo</Tag>
                    :
                    <Tag color="default">Encerrado</Tag> 
                 } 
                 
                </>
            ),
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
                        <Col lg={3}>
                            <Link href="/conta/oportunidades/criar">
                                <p className="btn btn-primary" >Nova Vaga</p>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table dataSource={listOpportunities} columns={columns} />
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