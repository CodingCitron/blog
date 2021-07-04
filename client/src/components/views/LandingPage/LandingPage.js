import React from 'react'
import BlogPage from '../BlogPage/BlogPage'
import Aside from '../Aside/Aside'
import './LandingPage.css'

function LandingPage(props){

    return (
        <div className="ladingPage">
            <Aside />
            <BlogPage />
        </div>
    )
}

export default LandingPage