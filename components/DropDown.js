import React from 'react'
import { Dropdown } from 'antd';

const DropDown = ({submenu, children, click}) => {

    return (
        <Dropdown overlay={submenu} trigger={click}>
            {children}
        </Dropdown>
    )
}

export default DropDown;