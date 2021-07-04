import React, { useState } from 'react'
import CategoryList from './CategoryList'
import './Aside.css'

function Aside(){

    const [el1_height, setEl1_height] = useState(0);

    return(
        <aside className="aside" style={{ height: `${el1_height}px` }}>
           <CategoryList setEl1_height={setEl1_height}/>
        </aside>
    )
}

export default Aside