import React, { useState } from 'react'
import './SelectBox.css'

function SelectBox({ updateSelect, value }){
    const [selected, setSelected] = useState(value)
    const [active, setActive] = useState(false)
    
    const optionOpen = (e) => {
        setActive(!active)
    }

    const optionSelect = (e) => {
        setActive(!active)
        updateSelect(e.target.innerText)
        setSelected(e.target.innerText)
    }

    return (
        <div className="select-box">
            <div className={active? 'select active' : 'select'} onClick={optionOpen}>
                <span className="selected">{selected}</span>
                <span className="arrow-down"><i className="far fa-angle-down"></i></span>
                <span className="arrow-up"><i className="far fa-angle-up"></i></span>
            </div>
            <ul className={active? 'option active' : 'option'} onClick={optionSelect}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
            </ul>
        </div>
    )
}

export default SelectBox