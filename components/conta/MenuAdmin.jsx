import React from 'react'
import Link from 'next/link';
import { Menu } from 'antd';

import DropDown from '../DropDown';
import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon';

const MenuAdmin = () => {

    const subMenuFornecedores = (
        <Menu>
            <Menu.Item>
                <Link rel="noopener noreferrer" href="/conta/fornecedores">
                    Lista
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link rel="noopener noreferrer" href="/conta/fornecedores/categorias">
                    Categorias
                </Link>
            </Menu.Item>
        </Menu>
    );

    const subMenuProfissionais = (
        <Menu>
            <Menu.Item>
                <Link rel="noopener noreferrer" href="/conta/profissionais">
                    Lista
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link rel="noopener noreferrer" href="/conta/profissionais/categorias">
                    Categorias
                </Link>
            </Menu.Item>
        </Menu>
    );

    const subMenuOportunidades = (
        <Menu>
            <Menu.Item>
                <Link rel="noopener noreferrer" href="/conta/oportunidades">
                    Lista
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link rel="noopener noreferrer" href="/conta/oportunidades/tipos">
                    Tipos
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link rel="noopener noreferrer" href="/conta/oportunidades/categorias">
                    Categorias
                </Link>
            </Menu.Item>
        </Menu>
    );

    const subMenuGerenciar = (
        <Menu>
            <Menu.Item>
                <Link rel="noopener noreferrer" href="/conta/gerenciar/usuarios">
                    Usuários
                </Link>
            </Menu.Item>
        </Menu>
    );
    

    return (
        <div class="collapse navbar-collapse text-center" id="mainNav">
            <ul class="navbar-nav ">
                <li class="nav-item">
                    <Link href="/conta">
                        <a class="nav-link smoth-scroll">
                            Visão Geral
                        </a>
                    </Link>
                </li>
        
                <DropDown submenu={subMenuFornecedores}>
                    <li class="nav-item dropdown">
                        {/* <Link href="#"> */}
                            <a class="nav-link smoth-scroll">
                                Fornecedores <ArrowDownSLineIcon size={15}/>
                            </a>
                        {/* </Link> */}
                    </li>
                </DropDown>

                <DropDown submenu={subMenuProfissionais}>
                    <li class="nav-item dropdown">
                        {/* <Link href="#"> */}
                            <a class="nav-link smoth-scroll">
                            Profissionais <ArrowDownSLineIcon size={15}/>
                            </a>
                        {/* </Link> */}
                    </li>
                </DropDown>

                <DropDown submenu={subMenuOportunidades}>
                    <li class="nav-item dropdown">
                            <a class="nav-link smoth-scroll">
                            Vagas <ArrowDownSLineIcon size={15}/>
                            </a>
                    </li>
                </DropDown>

                <DropDown submenu={subMenuGerenciar}>
                    <li class="nav-item dropdown">
                            <a class="nav-link smoth-scroll">
                            Gerenciar <ArrowDownSLineIcon size={15}/>
                            </a>
                    </li>
                </DropDown>

                <li class="nav-item">
                    <Link href="/conta/anuncios">
                        <a class="nav-link smoth-scroll">
                            Anúncios
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MenuAdmin;