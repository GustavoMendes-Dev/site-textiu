import React, { useEffect, useState, useContext } from "react";
import { Menu } from 'antd';
import Link from 'next/link';
import { DownOutlined } from '@ant-design/icons';

import { AuthContext } from "../../contexts/AuthContext.tsx"

import DropDown from "../DropDown";
import MenuAdmin from "./MenuAdmin";
import MenuProvider from "./MenuProvider";

export default function HeaderAdmin(){
    const { user, Logout } = useContext(AuthContext);

    let menuPermission = user?.permission;
    switch ( menuPermission ) {
        case 1:
            menuPermission = "Menu 1"; 
            break;
        case 2:
            menuPermission = <MenuProvider/>; 
            break;
        case 3:
            menuPermission = <MenuAdmin/>; 
            break;
        default:
            break;
    }

    const menuUser = (
        <Menu>
            <Menu.Item>
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
            <nav className="navbar navbar-expand-lg fixed-top trans-navigation header-white header-admin">
                <div className="container">
                    <li>
                        <Link href="/">
                            <a className="navbar-brand">
                                {/* <img src="images/logo.png" alt="" className="img-fluid b-logo"> */}
                                tex.manager
                            </a>
                        </Link>
                    </li>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fa fa-bars"></i>
                        </span>
                    </button>

                    {menuPermission}

                    <div className="collapse navbar-collapse justify-content-end">
                        <DropDown submenu={menuUser}>
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
                    </div>

                </div>
            </nav>
        </React.Fragment>
    )
}