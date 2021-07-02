import './LandingPage.css'
import React from 'react'
import BlogPage from '../BlogPage/BlogPage'
import Aside from '../Aside/Aside'

function LandingPage(props){

    return (
        <div className="ladingPage">
            <Aside />
            <BlogPage />
        </div>
    )
}

export default LandingPage