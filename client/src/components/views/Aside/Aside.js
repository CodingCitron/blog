import React from 'react'
import CategoryList from './CategoryList'
import Profile from '../Profile/Profile';
import './Aside.css'

function Aside(){

    return(
        <aside className="aside" >
            <div>
                <Profile />
                <CategoryList />
            </div>
        </aside>
    )
}

export default Aside