import React, { useContext, useRef, useState } from "react";
import { FormGroup, FormLabel, Container, Button, Row, Col, Alert } from "react-bootstrap";
import { Input } from "../../../components/Inputs";
import { Form } from "@unform/web";

import HeaderAdmin from '../../../components/conta/HeaderAdmin';
import { AuthContext } from '../../../contexts/AuthContext.tsx'


const AddProviders = ({}) => {
    const formRef = useRef(null);
    const [ message, setMessage ] = useState('');
    const { user } = useContext(AuthContext);
 

    async function handleSubmit(values, { reset }) {
        console.log()
        try {
            const create = await fetch('http://localhost:3333/providers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
            .then(response => response.json())
            .then(data => console.log(data));
        }catch (error) {
            setMessage("Estabelecendo conexão com servidor.");
        }
    }


    return (
        <React.Fragment>
            <HeaderAdmin/>
            <section className="content">
                <Container>
                    <Row>
                        <Col>
                            <h2>Novo Fornecedor</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form ref={formRef} className="mt-4" onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <FormGroup className="form-group">
                                        <Input
                                            name="name"
                                            type="text"
                                            defaultValue={user?.name}
                                            // onChange={(e) => {changeField(e)}}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup className="form-group">
                                        <Input
                                            name="name"
                                            type="text"
                                            defaultValue={user?.name}
                                            // onChange={(e) => {changeField(e)}}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        <Row>
                            <Col>
                                <FormGroup className="form-group">
                                    <Input
                                        name="email"
                                        type="email"
                                        defaultValue={user?.email}
                                        // onChange={(e) => {changeField(e)}}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                            <FormGroup className="form-group">
                                <FormLabel>Nome da Empresa</FormLabel>
                                    <Input
                                        name="company_name"
                                        type="text"
                                        placeholder="Nome da Empresa"
                                        // onChange={(e) => {changeField(e)}}
                                    />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <FormLabel>Razão Social</FormLabel>
                                    <Input
                                        name="corporate_name"
                                        type="text"
                                        placeholder="Razão Social"
                                        // onChange={(e) => {changeField(e)}}
                                    />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <FormLabel>CNPJ</FormLabel>
                                    <Input
                                        name="cnpj"
                                        type="text"
                                        placeholder="CNPJ"
                                        // onChange={(e) => {changeField(e)}}
                                    />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <FormLabel>Categoria</FormLabel>
                                    <Input
                                        name="categories"
                                        type="text"
                                        placeholder="Categoria"
                                        // onChange={(e) => {changeField(e)}}
                                />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <FormLabel>Descrição</FormLabel>
                                    <Input
                                        name="description"
                                        type="text"
                                        placeholder="Descrição"
                                        // onChange={(e) => {changeField(e)}}
                                    />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <FormLabel>Produtos</FormLabel>
                                    <Input
                                        name="products"
                                        type="text"
                                        placeholder="Produtos"
                                        // onChange={(e) => {changeField(e)}}
                                />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <FormLabel>Site</FormLabel>
                                    <Input
                                        name="site"
                                        type="text"
                                        placeholder="Site"
                                        // onChange={(e) => {changeField(e)}}
                                />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <FormLabel>Facebook</FormLabel>
                                    <Input
                                        name="facebook"
                                        type="text"
                                        placeholder="Facebook"
                                        // onChange={(e) => {changeField(e)}}
                                />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <FormLabel>Instagram</FormLabel>
                                    <Input
                                        name="instagram"
                                        type="text"
                                        placeholder="Instagram"
                                        // onChange={(e) => {changeField(e)}}
                                    />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <FormLabel>Telefone</FormLabel>
                                    <Input
                                        name="phone"
                                        type="text"
                                        placeholder="Telefone"
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
                                            // onChange={(e) => {changeField(e)}}
                                        />   
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup className="form-group">
                                        <FormLabel>Estado</FormLabel>
                                        <Input
                                            name="state"
                                            type="text"
                                            placeholder="Estado"
                                            // onChange={(e) => {changeField(e)}}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <p className='alert__message--error'>{message}</p>
                            <Button className="mt-4" type="submit">Criar conta</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default AddProviders;