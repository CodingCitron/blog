import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null){
    //optioin
    //null = 아무나 출입이 가능한 페이지
    //true = 로그인 한 유저만 출입이 가능한 페이지
    //false = 로그인 한 유저는 출입이 불가능한 페이지

    //adminRoute = null 
    //어드민 라우터는 어드민만 들어갈 수 있는 페이지를 구현한다.
    function AuthentiCationCheck(props){
        let user = useSelector(state => state.user)
        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(auth()).then(async response => {
                if(await !response.payload.isAuth){ //로그인 하지 않은 상태
                    if(option){ 
                        //로그인 한 유저만 출입이 가능한 페이지
                        props.history.push('/login')
                    }
                }else{ //로그인 한 상태
                    if(adminRoute && !response.payload.isAdmin){ 
                        //어드민만 들어갈 수 있는 페이지 && 어드민이 아니면
                        props.history.push('/')
                    }else{
                        if(option === false){
                        // 로그인한 유저는 출입 불가능한 페이지 로그인, 회원가입
                            props.history.push('/')
                        }
                    }
                }
            })
        }, [dispatch, props.history])
        return (
            <SpecificComponent {...props} user={user}/>
        )
    }

    return AuthentiCationCheck
}