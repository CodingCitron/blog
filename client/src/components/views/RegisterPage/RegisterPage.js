import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import './RegisterPage.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/user_action'

function RegisterPage(props) {
    const dispatch = useDispatch()
    const [message, setMessage] = useState('')
    const [check, setCheck] = useState('')
    const [body, setBody] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if(body.name !== body.confirm) return setCheck('warning')

        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success){
                return props.history.push('/login')
            }
            return setMessage('회원가입에 실패하였습니다.')
        })
    }

    function onFocusHandler(e){
        if(e.target.nodeName !== 'INPUT') return
            e.target.parentNode.classList.add('focus')
    }
    
    function onBlurHandler(e){
        if(e.target.nodeName !== 'INPUT') return
            e.target.parentNode.classList.remove('focus')
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setBody({ ...body, [name]: value });
    }

    const onCheck = () => {
        if(body.password === '' || body.confirm === ''){
            return setCheck('')
        }

        if(body.password !== body.confirm){
            return setCheck('warning')
        }

        if(body.password === body.confirm){
            return setCheck('check')
        }
    }

    return (
        <div className="register-container">
            <form action="" name="registerForm" onFocus={onFocusHandler} onBlur={onBlurHandler} onSubmit={onSubmitHandler} onChange={onCheck}>
                <div className="row">
                    <div className="title">Name</div>
                    <label className="input-box" htmlFor="registerName">
                        <input type="text" id="registerName" name="name" required autoFocus 
                        onChange={onChangeHandler} />
                        <div className="message focus">
                            <FontAwesomeIcon icon={faCheckCircle} className="check"/>
                            <FontAwesomeIcon icon={faTimesCircle} className="warning"/>
                        </div>
                    </label>
                </div>
                <div className="row">
                    <div className="title">E-mail</div>
                    <label className="input-box" htmlFor="registerEmail">
                        <input type="email" id="registerEmail" name="email" placeholder="Used when logging in" required 
                        onChange={onChangeHandler} />
                        <div className="message check">
                            <FontAwesomeIcon icon={faCheckCircle} className="check"/>
                            <FontAwesomeIcon icon={faTimesCircle} className="warning"/>
                        </div>
                    </label>
                </div>
                <div className="row">
                    <div className="title">Password</div>
                    <label className="input-box" htmlFor="registerPassword">
                        <input type="password" id="registerPassword" name="password" required 
                        onChange={onChangeHandler} />
                        <div className="message">
                            <FontAwesomeIcon icon={faCheckCircle} className="check"/>
                            <FontAwesomeIcon icon={faTimesCircle} className="warning"/>
                        </div>
                    </label>
                </div>
                <div className="row">
                    <div className="title">Confirm Password</div>
                    <label className={'input-box ' + check} htmlFor="registerConfirmPassword">
                        <input type="password" id="registerConfirmPassword" name="confirm" required 
                        onChange={onChangeHandler} />
                        <div className={'message ' + check}>
                            <FontAwesomeIcon icon={faCheckCircle} className="check"/>
                            <FontAwesomeIcon icon={faTimesCircle} className="warning"/>
                        </div>
                    </label>
                </div>
                <div className="row">
                    <div className="help">
                        {message}
                    </div>
                    <button type="submit" className="submit">Register</button>
                </div>
            </form>
        </div>
    )
}


export default RegisterPage
