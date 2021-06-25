import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null){
    //optioin
    //null = 아무나 출입이 가능한 페이지
    //true = 로그인 한 유저만 출입이 가능한 페이지
    //false = 로그인 한 유저는 출입이 불가능한 페이지

    //adminRoute = null 
    //어드민 라우터는 어드민만 들어갈 수 있는 페이지를 구현한다.
    const dispatch = useDispatch()

    function AuthentiCationCheck(props){
        useEffect(() => {

            dispatch(auth()).then(response => {
                if(!response.payload.isAuth){ //로그인 하지 않은 상태
                    if(option) props.history.push('/login') //로그인 한 유저만 출입이 가능한 페이지
                    
                }else{ //로그인 한 상태
                    if(adminRoute && !response.payload.isAdmin){ //어드민만 들어갈 수 있는 페이지 && 어드민이 아니면
                        props.history.push('/')
                    }else{
                        if(!option) props.history.push('/') // 로그인한 유저는 출입 불가능한 페이지 로그인, 회원가입
                    }
                }
            })
        }, [])

        return (
            <SpecificComponent {...props} />
        )
    }

    return AuthentiCationCheck
}