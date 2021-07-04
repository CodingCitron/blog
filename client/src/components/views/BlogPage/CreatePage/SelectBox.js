import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import './SelectBox.css'

function SelectBox({ updateSelect, value }){
    const [selected, setSelected] = useState(value)
    const [active, setActive] = useState(false)
    const selectBox = useRef()

    const optionOpen = () => {
        setActive(!active)
    }

    const optionSelect = (e) => {
        setActive(!active)
        updateSelect(e.target.innerText)
        setSelected(e.target.innerText)
    }

    const handleClickOutside = event => {
        if(!selectBox.current.contains(event.target)) setActive(false)
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [])

    return (
        <div className="select-box" ref={selectBox}>
            <div className={active === true? 'select active' : 'select'} onClick={optionOpen}>
                <span className="selected">{selected}</span>
                <span className="arrow-down">
                    <FontAwesomeIcon icon={faAngleDown} />
                </span>
                <span className="arrow-up">
                    <FontAwesomeIcon icon={faAngleUp} />
                </span>
            </div>
            <ul className={active === true? 'option active' : 'option'} onClick={optionSelect}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
            </ul>
        </div>
    )
}

export default SelectBox