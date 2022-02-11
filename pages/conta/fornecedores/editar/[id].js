import React, { useContext, useRef, useState } from "react";
import { FormGroup, FormLabel, Container, Button, Row, Col, Alert } from "react-bootstrap";
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import { Input, TextArea, SelectEstado, Select } from "../../../../components/Inputs";
import { Form } from "@unform/web";

import HeaderAdmin from '../../../../components/conta/HeaderAdmin';
// import { AuthContext } from '../../../contexts/AuthContext.tsx'


const EditProviders = ({fornecedores, categories}) => {
    const { [ 'sitetextiu.token' ] : token } = parseCookies();
    const formRef = useRef(null);
    const { query } = useRouter();
    const router = useRouter();

    const [ message, setMessage ] = useState('');
    // const { user } = useContext(AuthContext);
 
    const fornecedor = fornecedores.result.filter(f => f._id == query.id)

    async function handleSubmit(values, { reset }) {
        console.log(values)
        try {
            const create = await fetch(`http://localhost:3333/providers/edit/${query.id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': token,
            },
            body: JSON.stringify(values),
          })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                router.push("/conta/fornecedores")
            });
        }catch (error) {
            setMessage("Estabelecendo conexão com servidor.");
        }
    }

    const [ status, setStatus ] = useState(fornecedor[0].status)

    function onChange(checked) {
        console.log(`switch to ${checked}`);
        checked ? setStatus(1) : setStatus(0);
    }


    return (
        <React.Fragment>
            <HeaderAdmin/>
            <section className="content">
                <Container>
                    <Row>
                        <Col>
                            <h3>Editar Fornecedor</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form ref={formRef} className="mt-4" onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Switch checkedChildren="Ativo" unCheckedChildren="Inativo" onChange={onChange}/>
                                <FormGroup className="form-group">
                                    <Input
                                        name="status"
                                        type="hidden"
                                        value={status}
                                        defaultValue={status}
                                        // onChange={(e) => {changeField(e)}}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <FormGroup className="form-group">
                                    <FormLabel>CNPJ</FormLabel>
                                        <Input
                                            readOnly
                                            name="cnpj"
                                            type="text"
                                            placeholder="CNPJ"
                                            defaultValue={fornecedor[0].cnpj}
                                            // onChange={(e) => {changeField(e)}}
                                        />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup className="form-group">
                                    <FormLabel>Nome da Empresa</FormLabel>
                                        <Input
                                            name="company_name"
                                            type="text"
                                            placeholder="Nome da Empresa"
                                            defaultValue={fornecedor[0].company_name}
                                            // onChange={(e) => {changeField(e)}}
                                        />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup className="form-group">
                                    <FormLabel>Razão Social</FormLabel>
                                        <Input
                                            name="corporate_name"
                                            type="text"
                                            placeholder="Razão Social"
                                            defaultValue={fornecedor[0].corporate_name}
                                            // onChange={(e) => {changeField(e)}}
                                        />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <FormGroup className="form-group">
                                    <FormLabel>Categoria</FormLabel>
                                        <Select
                                            name="categories"
                                            type="text"
                                            placeholder="Categoria"
                                            defaultValue={fornecedor[0].categories}
                                            // onChange={(e) => {changeField(e)}}
                                        >
                                                {categories.categories.map(function(category) {
                                                    return (
                                                        <option key={category} value={category}>{category}</option>
                                                    )
                                                })}
                                        </Select>
                                </FormGroup>
                            </Col>
                            <Col lg={6}>
                                <FormGroup className="form-group">
                                    <FormLabel>Produtos</FormLabel>
                                        <Input
                                            name="products"
                                            type="text"
                                            placeholder="Produtos"
                                            defaultValue={fornecedor[0].products}

                                            // onChange={(e) => {changeField(e)}}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                            <FormGroup className="form-group">
                                <FormLabel>Descrição</FormLabel>
                                    <TextArea
                                        name="description"
                                        type="text"
                                        rows={5}
                                        placeholder="Descrição"
                                        defaultValue={fornecedor[0].description}
                                        // onChange={(e) => {changeField(e)}}
                                    />
                            </FormGroup>
                          
                        <Row>
                            <Col lg={4}>
                                <FormGroup className="form-group">
                                    <FormLabel>Site</FormLabel>
                                        <Input
                                            name="site"
                                            type="text"
                                            placeholder="Site"
                                            defaultValue={fornecedor[0].site}

                                            // onChange={(e) => {changeField(e)}}
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={4}>
                                    <FormGroup className="form-group">
                                        <FormLabel>Facebook</FormLabel>
                                            <Input
                                                name="facebook"
                                                type="text"
                                                placeholder="Facebook"
                                                defaultValue={fornecedor[0].facebook}

                                                // onChange={(e) => {changeField(e)}}
                                        />
                                    </FormGroup>
                            </Col>
                            <Col lg={4}>
                                <FormGroup className="form-group">
                                    <FormLabel>Instagram</FormLabel>
                                        <Input
                                            name="instagram"
                                            type="text"
                                            placeholder="Instagram"
                                            defaultValue={fornecedor[0].instagram}

                                            // onChange={(e) => {changeField(e)}}
                                        />
                                </FormGroup>
                            </Col>
                        </Row>
                            <FormGroup className="form-group">
                                <FormLabel>Telefone</FormLabel>
                                    <Input
                                        name="phone"
                                        type="text"
                                        placeholder="Telefone"
                                        defaultValue={fornecedor[0].phone}

                                        // onChange={(e) => {changeField(e)}}
                                    />
                            </FormGroup>
                            <Row>
                                <Col lg={3}>
                                    <FormGroup className="form-group">
                                    <FormLabel>CEP</FormLabel>
                                        <Input
                                            name="cep"
                                            type="text"
                                            placeholder="CEP"
                                            defaultValue={fornecedor[0].cep}

                                            // onChange={(e) => {changeField(e)}}
                                        />
                                </FormGroup>
                                </Col>
                                <Col lg={9}>
                                    <FormGroup className="form-group">
                                        <FormLabel>Endereço</FormLabel>
                                            <Input
                                                name="street"
                                                type="text"
                                                placeholder="Endereço"
                                                defaultValue={fornecedor[0].street}

                                                // onChange={(e) => {changeField(e)}}
                                            />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup className="form-group">
                                    <FormLabel>Número</FormLabel>
                                        <Input
                                            name="number"
                                            type="text"
                                            placeholder="Número"
                                            defaultValue={fornecedor[0].number}

                                            // onChange={(e) => {changeField(e)}}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup className="form-group">
                                    <FormLabel>Complemento</FormLabel>
                                        <Input
                                            name="complement"
                                            type="text"
                                            placeholder="Complemento"
                                            defaultValue={fornecedor[0].complement}

                                            // onChange={(e) => {changeField(e)}}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup className="form-group">
                                    <FormLabel>Bairro</FormLabel>
                                        <Input
                                            name="neighborhood"
                                            type="text"
                                            placeholder="Bairro"
                                            defaultValue={fornecedor[0].neighborhood}
                                            // onChange={(e) => {changeField(e)}}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup className="form-group">
                                    <FormLabel>Cidade</FormLabel>
                                        <Input
                                            name="city"
                                            type="text"
                                            placeholder="Cidade"
                                            defaultValue={fornecedor[0].city}

                                            // onChange={(e) => {changeField(e)}}
                                        />   
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup className="form-group">
                                        <FormLabel>Estado</FormLabel>
                                        <SelectEstado
                                            name="state"
                                            // type="text"
                                            placeholder="Estado"
                                            defaultValue={fornecedor[0].state}

                                            // onChange={(e) => {changeField(e)}}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <p className='alert__message--error'>{message}</p>
                            <Button className="mt-4" type="submit">Salvar</Button>
                            </Form>
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
    const dataCategories = await fetch(`http://localhost:3333/providers/categories`);
    const fornecedores = await data.json();
    const categories = await dataCategories.json();

    // if (!token)  {
    //     return {
    //         redirect: {
    //             destination: "/conta/entrar",
    //             permanent: false,
    //         }
    //     }
    // }

    return { props: { fornecedores, categories } };
}

export default EditProviders;