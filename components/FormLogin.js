import React, { useRef, useState, useContext } from "react";
import { FormGroup, FormLabel, Button, Row, Col, Alert } from "react-bootstrap";
import { Input } from "./Inputs";
import { Form } from "@unform/web";
import { useRouter } from 'next/router';
import Link from "next/link";
import { AuthContext } from "../contexts/AuthContext.tsx";


// import * as Yup from "yup";

const FormLogin = () => {
    const { signIn } = useContext(AuthContext);

    const [ message, setMessage ] = useState('');
    const formRef = useRef(null);
    const router = useRouter()

    async function handleSubmit(data, { reset }) {
       await signIn(data)
    }

    return (
        <Form ref={formRef} className="mt-4" onSubmit={handleSubmit} className="form__login--form">
            <h3>Acesse sua conta</h3>
        <Row>
            <Col lg={12}>
                <FormGroup className="form-group">
                    <FormLabel>Email</FormLabel>
                    <Input
                        name="email"
                        type="text"
                        placeholder="Email"
                        // onChange={(e) => {changeField(e)}}
                    />
                </FormGroup>
            </Col>
            <Col lg={12}>
                <FormGroup className="form-group">
                    <FormLabel>Senha</FormLabel>
                    <Input
                        name="password"
                        type="password"
                        placeholder="Senha"
                        // onChange={(e) => {changeField(e)}}
                    />
                </FormGroup>
            </Col>

        </Row>
        <p className='alert__message--error'>{message}</p>
        <Button type="submit">Entrar</Button>
        <Link href="/criar">
            Esqueci minha senha.
        </Link>
        <Link className="form__login--link" href="/conta/criar">
            Não tem cadastro? Experimente grátis.
        </Link>
        </Form>
    )
}

export default FormLogin;
