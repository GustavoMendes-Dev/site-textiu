import React from 'react';
import { Table, Tag } from 'antd';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import { Container, Row, Col } from 'react-bootstrap';

import Actions from '../../../components/Actions';

import HeaderAdmin from '../../../components/conta/HeaderAdmin';

const ListProviders = ({fornecedores}) => {
      
      const columns = [
        {
            title: 'Nome',
            dataIndex: 'company_name',
            key: 'company_name',
            render: (text, record) => <Link href={`/conta/fornecedores/${record._id}`}>{text}</Link>,
        },
        {
            title: 'Categoria',
            dataIndex: 'categories',
            key: 'categories',
        },
        {
            title: 'CNPJ',
            dataIndex: 'cnpj',
            key: 'cnpj',
        },
        {
            title: 'Telefone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => (
                <>
                 {
                     record.status >= 1 ?
                     <Tag color="success">Ativo</Tag>
                    :
                    <Tag color="default">Inativo</Tag> 
                 } 
                 
                </>
            ),
        },
        {
            title: 'Ações',
            dataIndex: 'actions',
            key: 'actions',
            render: (text, record) => (
                <>
                    <Actions id={record.id} view={"Visualizar"} edit={"Editar"} delete={"Excluir"}>
                        <div>Menu</div>
                    </Actions>

                    {/* <Link href={`/conta/fornecedores/${record._id}`}>Visualizar</Link>
                    <Link href={`/conta/fornecedores/editar/${record._id}`}>Editar</Link>
                    <a>Delete</a> */}
              
                </>
              ),
        },
      ];

    return (
        <React.Fragment>
            <HeaderAdmin/>
            <section className="content">
                <Container>
                    <Row>
                        <Col>
                            <h3>Fornecedores</h3>
                        </Col>
                        <Col lg={3}>
                            <Link href="/conta/fornecedores/criar" passHref>
                                <p className="btn btn-primary" >Novo Fornecedor</p>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table dataSource={fornecedores.result} columns={columns} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export const getServerSideProps = async (ctx) => {
    const { [ 'sitetextiu.token' ] : token } = parseCookies(ctx);

    const data = await fetch(`http://localhost:3333/providers`);
    const fornecedores = await data.json();

    // if (!token)  {
    //     return {
    //         redirect: {
    //             destination: "/conta/entrar",
    //             permanent: false,
    //         }
    //     }
    // }

    return { props: { fornecedores } };
}

export default ListProviders;