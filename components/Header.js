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
            <nav className="navbar navbar-expand-lg fixed-top trans-navigation header-white">
            {/* <nav className={scroll ? "navbar navbar-expand-lg fixed-top trans-navigation header-white" : "navbar navbar-expand-lg fixed-top trans-navigation"}> */}
                <div className="container">
                    <li>
                        <Link href="/">
                            <a className="navbar-brand">
                            <Image
                                src={logo}
                                alt="Picture of the author"
                                width={120} 
                                height={20} 
                                automatically provided
                            /> 
                            </a>
                        </Link>
                    </li>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fa fa-bars"></i>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse text-center justify-content-center" id="mainNav">
                        <ul className="navbar-nav text-center ">
                            <li className="nav-item">
                                <Link href="/fornecedores">
                                    <a className="nav-link smoth-scroll">
                                        Fornecedores
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/profissionais">
                                    <a className="nav-link smoth-scroll">
                                        Profissionais
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                               <Link href="/oportunidades">
                                    <a className="nav-link smoth-scroll">
                                        Vagas
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/anuncios">
                                    <a className="nav-link smoth-scroll">
                                        Anúncios
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse justify-content-end">
                        { user ? 
                            (
                            <DropDown submenu={submenu}>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/conta/perfil">
                                            <a className="nav-link smoth-scroll" onClick={e => e.preventDefault()}>
                                                Olá, {user?.name} <DownOutlined />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </DropDown>
                            ) : (
                                <ul className="navbar-nav">
                                    <li className="btn__round">
                                        <Link href="/conta/criar">
                                            <a>Junte-se à Textiu.</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/conta/entrar">
                                            <a className="nav-link smoth-scroll">
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