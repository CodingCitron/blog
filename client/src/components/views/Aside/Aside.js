import './Aside.css'
import React from 'react'
import CategoryList from './CategoryList'

function Aside(){

    return(
        <aside className="aside">
           <CategoryList />
        </aside>
    )
}

export default Aside