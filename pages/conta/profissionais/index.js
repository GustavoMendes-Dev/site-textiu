import React from 'react';
import { Table } from 'antd'
import { Container, Row, Col } from 'react-bootstrap';
import HeaderAdmin from '../../../components/conta/HeaderAdmin';


const ListProfessionals = ({profissionais}) => {

    const dataSource = [
        {
          key: '1',
          company_name: 'Mike',
          categories: 32,
          cnpj: '10 Downing Street',
          phone: '10 Downing Street',
        },
        {
          key: '2',
          company_name: 'John',
          categories: 42,
          cnpj: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
            title: 'Nome',
            dataIndex: 'company_name',
            key: 'company_name',
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
                            <h2>Profissionais</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table dataSource={dataSource} columns={columns} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export async function getServerSideProps() {
    const data = await fetch(`http://localhost:3333/professionals`);

    const profissionais = await data.json();


    return { props: { profissionais } };
}

export default ListProfessionals;