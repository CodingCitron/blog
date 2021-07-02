import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react'

function CategoryList(props) {
    const [focus, setFocus] = useState(false)

    const onFocusHandler = (e) => {
        setFocus(!focus)
    }

    return (
        <div className="category-list">
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
                    <div className="all"><a href="#">전체 글 보기</a></div>
                    <ul className="list">
                        <li>
                            <div className="categories">
                                <a href="#">HTML</a>
                            </div>
                            <ul className="subheading">
                                <li>
                                    <a href="#">subheading</a>
                                </li>
                                <li>
                                    <a href="#">subheading</a>
                                </li>
                                <li>
                                    <a href="#">subheading</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="categories">
                                <a href="#">HTML</a>
                            </div>
                            <ul className="subheading">
                                <li>
                                    <a href="#">subheading</a>
                                </li>
                                <li>
                                    <a href="#">subheading</a>
                                </li>
                                <li>
                                    <a href="#">subheading</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="categories">
                                <a href="#">HTML</a>
                            </div>
                            <ul className="subheading">
                                <li>
                                    <a href="#">subheading</a>
                                </li>
                                <li>
                                    <a href="#">subheading</a>
                                </li>
                                <li>
                                    <a href="#">subheading</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default CategoryList
