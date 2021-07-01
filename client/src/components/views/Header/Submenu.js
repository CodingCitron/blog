import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../_actions/user_action'
import { withRouter } from 'react-router-dom';

function Submenu(props){
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    
    const logout = () => {
        dispatch(logoutUser())
        .then(response => {
            if(response) return window.location.replace('/')
            return alert('Log Out Failed')
        })
    }

    if(user.userData && !user.userData.isAuth){ //user.userData undefined 방지
        return (
            <ul className="submenu">
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="#">GuestBook</a></li>
            </ul>
        )
    }else{
        if(user.userData && user.userData.isAdmin){
            return (
                <ul className="submenu">
                    <li><a onClick={logout}>Logout</a></li>
                    <li><a href="/post/insert">Writing</a></li>
                    <li><a href="#">GuestBook</a></li>
                    <li><a href="#">Dashboard</a></li>
                </ul>
            )
        }else{
            return (
                <ul className="submenu">
                    <li><a onClick={logout}>Logout</a></li>
                    <li><a href="#">GuestBook</a></li>
                </ul>
            )
        }
    }
}

export default withRouter(Submenu)