import React, { useContext, useRef, useState } from "react";
import { parseCookies } from 'nookies';
import { FormGroup, FormLabel, Container, Button, Row, Col, Alert } from "react-bootstrap";
import { Input, TextArea, Select } from "../../../components/Inputs";
import { Form } from "@unform/web";

import HeaderAdmin from '../../../components/conta/HeaderAdmin';
import { AuthContext } from '../../../contexts/AuthContext.tsx'


const AddOpportunity = ({categoriesData, typesData, token}) => {
    const formRef = useRef(null);
    const [ message, setMessage ] = useState('');
    const { user } = useContext(AuthContext);
 
    async function handleSubmit(values, { reset }) {
        console.log()
        try {
            const create = await fetch('http://localhost:3333/opportunities', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': token,
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
                            <h2>Nova vaga</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form ref={formRef} className="mt-4" onSubmit={handleSubmit}>
                            <input type="hidden" name="vacancies" value="1"/>
                            {/* <Row>
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
                        </Row> */}
                            <FormGroup className="form-group">
                                <FormLabel>Título</FormLabel>
                                    <Input
                                        name="title"
                                        type="text"
                                        placeholder="Título da Vaga"
                                        // onChange={(e) => {changeField(e)}}
                                    />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <FormLabel>Descrição</FormLabel>
                                    <TextArea
                                        name="description"
                                        rows={5}
                                        type="text"
                                        placeholder="Escreva uma berve descrição sobre a vaga..."
                                        // onChange={(e) => {changeField(e)}}
                                    />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <FormLabel>Requisitos</FormLabel>
                                    <TextArea
                                        name="requirements"
                                        type="text"
                                        rows={5}
                                        placeholder="Requisitos mínimos para a vaga.."
                                        // onChange={(e) => {changeField(e)}}
                                    />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <FormLabel>Desejável</FormLabel>
                                    <TextArea
                                        name="desirable"
                                        type="text"
                                        placeholder="Desejável"
                                        // onChange={(e) => {changeField(e)}}
                                />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <FormLabel>Valor</FormLabel>
                                    <Input
                                        name="salary_range"
                                        type="text"
                                        placeholder="Valor"
                                        // onChange={(e) => {changeField(e)}}
                                    />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <FormLabel>Categoria</FormLabel>
                                <Select
                                    name="categories"
                                    type="text"
                                    placeholder="Categoria"
                                    // onChange={(e) => {changeField(e)}}
                                >
                                    {categoriesData.categories.map(category => {
                                        return (
                                            <option key={category} value={category}>{category}</option>
                                        )
                                    })}
                                </Select>
                            </FormGroup>
                            <FormGroup className="form-group">
                                <FormLabel>Contrato</FormLabel>
                                    <Input
                                        name="hiring"
                                        type="text"
                                        placeholder="Contrato"
                                        // onChange={(e) => {changeField(e)}}
                                />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <FormLabel>Tipo</FormLabel>
                                    <Select
                                        name="type"
                                        type="text"
                                        placeholder="Tipo de Vaga"
                                        // onChange={(e) => {changeField(e)}}
                                    >
                                        {typesData.types.map(category => {
                                            return (
                                                <option key={category} value={category}>{category}</option>
                                            )
                                        })}
                                    </Select>
                            </FormGroup>
                           
                         
                            {/* <Row>
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
                            </Row> */}
                            <p className='alert__message--error'>{message}</p>
                            <Button className="mt-4" type="submit">Criar vaga</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export async function getServerSideProps(ctx) {
    const { [ 'sitetextiu.token' ] : token } = parseCookies(ctx);

    const categories = await fetch(`http://localhost:3333/opportunities/categories`);
    const types = await fetch(`http://localhost:3333/opportunities/types`);

    const categoriesData = await categories.json();
    const typesData = await types.json();


    return { props: { categoriesData, typesData, token } };
}

export default AddOpportunity; 

