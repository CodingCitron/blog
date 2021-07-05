import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function CategoryList() {
    const [focus, setFocus] = useState(false)

    const onFocusHandler = (e) => {
        setFocus(!focus)
    }

    return (
        <div className="category-list box-shadow">
            <form action="">
                <label htmlFor="search" className={focus? 'search-box box-shadow-inset active' : 'search-box box-shadow-inset'}>
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
                    <div className="all"><a href="#">전체 글</a></div>
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
