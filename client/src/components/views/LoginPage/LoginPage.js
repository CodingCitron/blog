import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'
import './LoginPage.css'

function LoginPage(props) {
    const dispatch = useDispatch()
    const [message, setMessage] = useState('')
    const [isRemember, setIsRemember] = useState(false)
    const [body, setBody] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
       if(localStorage.getItem('email')){
            setBody({
                email: localStorage.getItem('email'),
                password: ''
            })
            setIsRemember(true)
       }
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target

        setBody({
            ...body, [name]: value
        })
    }

    const checked = (e) => {
        setIsRemember(e.target.checked)
        if(e.target.checked){
            localStorage.setItem('email', body.email);
        }else{
            localStorage.setItem('email', '');
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        if(!body.email && !body.password){
            return setMessage('아이디 비밀번호를 입력하세요.')
        }

        dispatch(loginUser(body))
        .then(response => {
            if(response.payload.loginSuccess){ 
                if(isRemember){
                    localStorage.setItem('email', body.email);
                }else{
                    localStorage.setItem('email', '');
                }
                return window.location.replace('/')
            }
            return setMessage('아이디 비밀번호가 일치하지 않습니다.')
        })
    }

    return (
        <div className="login-container">
            <form action="#" name="loginForm" onSubmit={onSubmitHandler}>
                <div className="row">
                    <input type="text" placeholder="Email" name="email" value={body.email} autoFocus autoComplete="on"
                    onChange={handleChange}
                    />
                    <div className="message">
                        
                    </div>
                </div>
                <div className="row">
                    <input type="password" placeholder="Password" name="password" 
                    onChange={handleChange} />
                    <div className="message">

                    </div>
                </div>
                <div className="row block">
                    <label htmlFor="remember" className="checkbox">
                        <input type="checkbox" onChange={checked} id="remember" className="input" 
                        checked={isRemember}
                        />
                        <div className="checkbox-box"></div>
                        아이디 저장하기
                    </label>
                </div>
                <div className="row">
                    <div className="message">
                        {message}
                    </div>
                    <button type="submit" className="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage
