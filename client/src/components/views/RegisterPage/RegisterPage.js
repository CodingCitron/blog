import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import './RegisterPage.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/user_action'

function RegisterPage(props) {
    const dispatch = useDispatch()
    const [Message, setMessage] = useState('')
    const [Confirm, setConfirm] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if(document.registerForm.password.value !== document.registerForm.confirm.value) return setConfirm('warning')

        const body = {
            name: document.registerForm.name.value,
            email: document.registerForm.email.value,
            password: document.registerForm.password.value
        }

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

    function onChangeHandler(e){
        if(e.target.nodeName !== 'INPUT') return

        if(e.target.name === 'confirm' || e.target.name === 'password'){
            if(document.registerForm.confirm.value === '' && document.registerForm.password.value === '') return setConfirm('')
            if(document.registerForm.confirm.value === '') return setConfirm('')
            if(document.registerForm.password.value !== document.registerForm.confirm.value){
                return setConfirm('warning')
            }else{
                return setConfirm('check')
            }
        }

        if(e.target.name === 'email'){
            
        }
    }

    return (
        <div className="register-container">
            <form action="" name="registerForm" onFocus={onFocusHandler} onBlur={onBlurHandler} onSubmit={onSubmitHandler} onChange={onChangeHandler}>
                <div className="row">
                    <div className="title">Name</div>
                    <label className="input-box" htmlFor="registerName">
                        <input type="text" id="registerName" name="name" required autoFocus />
                        <div className="message focus">
                            <FontAwesomeIcon icon={faCheckCircle} className="check"/>
                            <FontAwesomeIcon icon={faTimesCircle} className="warning"/>
                        </div>
                    </label>
                </div>
                <div className="row">
                    <div className="title">E-mail</div>
                    <label className="input-box" htmlFor="registerEmail">
                        <input type="email" id="registerEmail" name="email" placeholder="Used when logging in" required />
                        <div className="message check">
                            <FontAwesomeIcon icon={faCheckCircle} className="check"/>
                            <FontAwesomeIcon icon={faTimesCircle} className="warning"/>
                        </div>
                    </label>
                </div>
                <div className="row">
                    <div className="title">Password</div>
                    <label className="input-box" htmlFor="registerPassword">
                        <input type="password" id="registerPassword" name="password" required />
                        <div className="message">
                            <FontAwesomeIcon icon={faCheckCircle} className="check"/>
                            <FontAwesomeIcon icon={faTimesCircle} className="warning"/>
                        </div>
                    </label>
                </div>
                <div className="row">
                    <div className="title">Confirm Password</div>
                    <label className={'input-box ' + Confirm} htmlFor="registerConfirmPassword">
                        <input type="password" id="registerConfirmPassword" name="confirm" required />
                        <div className={'message ' + Confirm}>
                            <FontAwesomeIcon icon={faCheckCircle} className="check"/>
                            <FontAwesomeIcon icon={faTimesCircle} className="warning"/>
                        </div>
                    </label>
                </div>
                <div className="row">
                    <div className="help">
                        {Message}
                    </div>
                    <button type="submit" className="submit">Register</button>
                </div>
            </form>
        </div>
    )
}


export default RegisterPage
