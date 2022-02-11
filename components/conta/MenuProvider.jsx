import React from 'react'
import Link from 'next/link';
import { Menu } from 'antd';

import DropDown from '../DropDown';
import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon';

const MenuProvider = () => {

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
        </Menu>
    );

    const subMenuOportunidades = (
        <Menu>
            <Menu.Item>
                <Link rel="noopener noreferrer" href="/conta/oportunidades">
                    Lista
                </Link>
            </Menu.Item>
        </Menu>
    );
    

    return (
        <div className="collapse navbar-collapse text-center" id="mainNav">
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <Link href="/conta">
                        <a className="nav-link smoth-scroll">
                            Visão Geral
                        </a>
                    </Link>
                </li>

                <DropDown submenu={subMenuProfissionais}>
                    <li className="nav-item dropdown">
                        {/* <Link href="#"> */}
                            <a className="nav-link smoth-scroll">
                            Candidatos <ArrowDownSLineIcon size={15}/>
                            </a>
                        {/* </Link> */}
                    </li>
                </DropDown>

                <DropDown submenu={subMenuOportunidades}>
                    <li className="nav-item dropdown">
                            <a className="nav-link smoth-scroll">
                            Minhas Vagas <ArrowDownSLineIcon size={15}/>
                            </a>
                    </li>
                </DropDown>

                <li className="nav-item">
                    <Link href="/conta/anuncios">
                        <a className="nav-link smoth-scroll">
                            Meus Anúncios
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MenuProvider;