import React from 'react'
import ReactLoading from 'react-loading'
import './Loader.css'

function Loader() {
    return (
        <div className="loading-page">
            {/* <svg className="loading-svg">
                <circle cx="70" cy="70" r="70"></circle>
            </svg> */}
            <ReactLoading type={'spinningBubbles'} color={'#6495ED'} />
        </div>
    )
}

export default Loader
