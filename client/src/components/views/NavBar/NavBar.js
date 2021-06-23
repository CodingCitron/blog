import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import '../NavBar/NavBar.css'
import axios from 'axios'
import React from 'react'
import { useSelector } from "react-redux"

function Left(){
    return (
        <div className='logo'>
            <a href='/' >Blog</a>
        </div>
    )
}

function Center(){

    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          </Menu.Item>
          <Menu.Item icon={<DownOutlined />} disabled>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          </Menu.Item>
          <Menu.Item disabled>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item (disabled)
            </a>
          </Menu.Item>
          <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
      );

    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Hover me <DownOutlined />
            </a>
        </Dropdown>
    )
}

function Right(props) {
    const user = useSelector(state => state.user)
    console.log(user)

    const onClickHandler = () => {
        axios.get('api/user/logout')
        .then(response => {
            if(response.status === 200) return props.history.push('/')
            return alert('Log Out Failed')
        })
    }

    if (user.userData && !user.userData.isAuth) {
        return (
            <div className='right'>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
        )
    } else {
        return (
            <div className='right'>
                <a onClick={onClickHandler}>Logout</a>
            </div>
            )
    }
}

function NavBar(props){
    return (
        <nav className='navbar'>
            <div className='inner'>
                <Left />
                <Center />
                <Right />
            </div>
        </nav>
    )
}

export default NavBar