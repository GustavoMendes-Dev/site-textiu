import React from 'react';
import { Table, Tag } from 'antd';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

import HeaderAdmin from '../../../../components/conta/HeaderAdmin'

const Users = ({users}) => {

    const columns = [
        {
            title: 'Título',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Contrato',
            dataIndex: 'permission_id',
            key: 'permission_id',
            render: (text, record) => (
                <>
                    {
                        record.permission_id == 0 ? <Tag color="#2db7f5">Usuário</Tag> :
                        record.permission_id == 1 ? <Tag color="#87d068">Profissional</Tag> :
                        record.permission_id == 2 ? <Tag color="#108ee9">Fornecedor</Tag> :
                        record.permission_id == 3 ? <Tag color="purple">Admin</Tag> :
                        <Tag color="#dddddd">Sem Permissão</Tag>
                    }
                </>
            ),
        },
        {
            title: 'Plano',
            dataIndex: 'plan',
            key: 'plan',
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
            render: (text, record) => (
                <>
                  <Link href={`/conta/gerenciar/usuario/${record._id}`}>Visualizar</Link>
                  <a>Delete</a>
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
                        <h2>Usuários</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table dataSource={users.result} columns={columns} />
                    </Col>
                </Row>
            </Container>
        </section>
    </React.Fragment>
    )
}

export async function getServerSideProps() {
    const data = await fetch(`http://localhost:3333/admin/list-users-site`);

    const users = await data.json();


    return { props: { users } };
}

export default Users;