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
        <div className="background-black" style={{ fontWeight: '600', fontSize: '16px' }}>
            <div className="modal">
                <div className="inner"
                style={{ color: '#282E38' }}>
                    <div>
                        <span className="icon" style={{ color: '#282E38' }}>
                            <FontAwesomeIcon icon={faExclamationCircle} />
                        </span>
                        {props.message}
                    </div>
                    {props.prompt === true?
                        <div className="prompt">
                            <button onClick={closeBtn} style={{ fontWeight: '600', color: '#282E38' }}className="button">취소</button>
                            <button onClick={setDeletePost} style={{ fontWeight: '600', color: '#282E38' }} className="button">확인</button>
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Alert
