import './LandingPage.css'
import React from 'react'
import Main from '../Main/Main'
import Aside from '../Aside/Aside'

function LandingPage(props){

    return (
        <div className="ladingPage">
            <Aside />
            <Main />
        </div>
    )
}

export default LandingPage