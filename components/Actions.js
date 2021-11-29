import React from 'react'
import Link from 'next/link';

import { Dropdown, Menu } from 'antd';

const Actions = ({children, click}) => {

    const submenu = (
        <Menu>
            <Menu.Item>
                <Link rel="noopener noreferrer" href="/conta">
                    Visualizar
                    </Link>
                </Menu.Item>
            <Menu.Item>
                <Link rel="noopener noreferrer" href="/conta/perfil">
                Editar
                </Link>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                Excluir
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={submenu} trigger={['click']}>
            {children}
        </Dropdown>
    )
}

export default Actions;