import { Input, Button, Checkbox, Space } from 'antd'
import '../LoginPage/LoginPage.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'

function LoginPage(props) {

    const dispatch = useDispatch()

    const [Message, setMessage] = useState('')

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`)
    }

    function onSubmitHandler(e){
        e.preventDefault()
        const body = {
            email : document.loginForm.email.value,
            password : document.loginForm.password.value
        }
        
        if(!body.email && !body.password){
            return setMessage('아이디 비밀번호를 입력하세요.')
        }

        dispatch(loginUser(body))
        .then(response => {
            if(response.payload.loginSuccess){
                return props.history.push('/')
            }
            return setMessage('아이디 비밀번호가 일치하지 않습니다.')
        })
    }

    return (
        <div className='login-container'>
            <div className='form'>
                <form name="loginForm" onSubmit={onSubmitHandler} >
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Input placeholder="Email" name="email" type="text" autoFocus autoComplete="on"/>
                        <Input.Password placeholder="password" name="password" type="password" />
                        <Checkbox onChange={onChange}>Remember Email</Checkbox>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Login</Button>
                        <div className='message' style={{ color: '#FF4D4F' }}>{Message}</div>
                    </Space>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
