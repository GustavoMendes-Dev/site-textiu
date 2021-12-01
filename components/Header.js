import React, { useEffect, useState, useContext } from "react";
import { Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image'


import logo from '../public/assets/logo.svg';
import { AuthContext } from '../contexts/AuthContext.tsx';
import DropDown from "./DropDown";

export default function Header(){
    const [scroll, setScroll] = useState(false);
    const { user } = useContext(AuthContext);

    function Logout() {
        console.log("logout");
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        });
    }, []);

    const submenu = (
        <Menu>  <Menu.Item>
            <Link rel="noopener noreferrer" href="/conta">
                Painel
                </Link>
            </Menu.Item>
          <Menu.Item>
            <Link rel="noopener noreferrer" href="/conta/perfil">
              Perfil
            </Link>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" onClick={Logout}>
              Sair
            </a>
          </Menu.Item>
        </Menu>
      );

    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg fixed-top trans-navigation header-white">
            {/* <nav class={scroll ? "navbar navbar-expand-lg fixed-top trans-navigation header-white" : "navbar navbar-expand-lg fixed-top trans-navigation"}> */}
                <div class="container">
                    <li>
                        <Link href="/">
                            <a class="navbar-brand">
                            <Image
                                src={logo}
                                alt="Picture of the author"
                                width={120} automatically provided
                                height={20} automatically provided
                            /> 
                            </a>
                        </Link>
                    </li>
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                            <i class="fa fa-bars"></i>
                        </span>
                    </button>

                    <div class="collapse navbar-collapse text-center justify-content-center" id="mainNav">
                        <ul class="navbar-nav text-center ">
                            <li class="nav-item">
                                <Link href="/fornecedores">
                                    <a class="nav-link smoth-scroll">
                                        Fornecedores
                                    </a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/profissionais">
                                    <a class="nav-link smoth-scroll">
                                        Profissionais
                                    </a>
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                               <Link href="/oportunidades">
                                    <a class="nav-link smoth-scroll">
                                        Vagas
                                    </a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/anuncios">
                                    <a class="nav-link smoth-scroll">
                                        Anúncios
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div class="collapse navbar-collapse justify-content-end">
                        { user ? 
                            (
                            <DropDown submenu={submenu}>
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <Link href="/conta/perfil">
                                            <a class="nav-link smoth-scroll" onClick={e => e.preventDefault()}>
                                                Olá, {user.name} <DownOutlined />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </DropDown>
                            ) : (
                                <ul class="navbar-nav">
                                    <li class="btn__round">
                                        <Link href="/conta/criar">
                                            <a>Junte-se à Textiu.</a>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link href="/conta/entrar">
                                            <a class="nav-link smoth-scroll">
                                                Entrar
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            )
                        }
                    </div>

                </div>
            </nav>
        </React.Fragment>
    )
}