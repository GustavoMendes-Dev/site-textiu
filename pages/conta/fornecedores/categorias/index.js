import React from 'react';
import { Table } from 'antd';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { parseCookies } from 'nookies';

import HeaderAdmin from '../../../../components/conta/HeaderAdmin';

const Categories = ({categories}) => {

    const columns = [
        {
            title: 'Nome',
            dataIndex: 'name',
            key: 'name',
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
            // render: (text, record) => (
            //     <>
            //       <Link href={`/conta/fornecedores/${record._id}`}>Visualizar</Link>
            //       <a>Delete</a>
            //     </>
            //   ),
        },
      ];

    return (
        <React.Fragment>
            <HeaderAdmin/>
            <section className="content">
                <Container>
                    <Row>
                        <Col>
                            <h3>Categorias</h3>
                        </Col>
                        <Col lg={4}>
                            <Link href="/conta/fornecedores/criar" passHref>
                                <p className="btn btn-primary" >Adicionar Categoria</p>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table dataSource={categories.categories} columns={columns} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export const getServerSideProps = async (ctx) => {
    const { [ 'sitetextiu.token' ] : token } = parseCookies(ctx);

    const data = await fetch(`http://localhost:3333/providers/categories`);
    const categories = await data.json();

    // if (!token)  {
    //     return {
    //         redirect: {
    //             destination: "/conta/entrar",
    //             permanent: false,
    //         }
    //     }
    // }

    return { props: { categories } };
}

export default Categories;