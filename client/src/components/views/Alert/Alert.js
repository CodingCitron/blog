import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import './Alert.css'

function Alert(props) {

    const [position, setPosition] = useState('')

    const closeBtn = () => {
        props.setModal(false)
    }

    const setDeletePost = () => {
        props.setDeletePost(true)
        props.setModal(false)
    }

    return (
        <div className="background-black">
            <div className="modal">
                <div className="inner"
                style={props.style}>
                    <div>
                        <span className="icon">
                            <FontAwesomeIcon icon={faExclamationCircle} />
                        </span>
                        {props.message}
                    </div>
                    {props.prompt === true?
                        <div className="prompt">
                            <button onClick={closeBtn} className="button">취소</button>
                            <button onClick={setDeletePost} className="button">확인</button>
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Alert
