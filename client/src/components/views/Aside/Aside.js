import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './Aside.css'
import React, { useState } from 'react'

function Aside(){
    const [focus, setFocus] = useState(false)

    const onFocusHandler = (e) => {
        setFocus(!focus)
    }

    return(
        <aside className="aside">
            <form action="">
                <label htmlFor="search" className={focus? 'search-box active' : 'search-box'}>
                    <input type="search" name="search" id="search" 
                    placeholder="search" 
                    onFocus={onFocusHandler} 
                    onBlur={onFocusHandler}/>
                    <button type="button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </label>
            </form>
            <div>
                <section className="board">
                    <h4>
                        CATEGORIES
                    </h4>
                    <ul className="list">
                        <li>
                            <div className="categories active">
                                <a href="#">HTML</a>
                                <span>(100)</span>
                            </div>
                            <ul className="subheading">
                                <li className="active">
                                    <a href="#" className="new">subheading</a>
                                    <span>(70)</span>
                                </li>
                                <li>
                                    <a href="#" className="new">subheading</a>
                                    <span>(70)</span>
                                </li>
                                <li>
                                    <a href="#">subheading</a>
                                    <span>(70)</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="categories">
                                <a href="#">HTML</a>
                                <span>(100)</span>
                            </div>
                            <ul className="subheading">
                                <li>
                                    <a href="#">subheading</a>
                                    <span>(70)</span>
                                </li>
                                <li>
                                    <a href="#">subheading</a>
                                    <span>(70)</span>
                                </li>
                                <li>
                                    <a href="#">subheading</a>
                                    <span>(70)</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="categories">
                                <a href="#">HTML</a>
                                <span>(100)</span>
                            </div>
                            <ul className="subheading">
                                <li>
                                    <a href="#">subheading</a>
                                    <span>(70)</span>
                                </li>
                                <li>
                                    <a href="#">subheading</a>
                                    <span>(70)</span>
                                </li>
                                <li>
                                    <a href="#">subheading</a>
                                    <span>(70)</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
        </aside>
    )
}

export default Aside