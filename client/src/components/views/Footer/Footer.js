import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons"
import '../Footer/Footer.css'
import React, { useEffect, useState } from 'react'

function Footer(){    
    const [fixed, setFixed] = useState(false)
    const [path, setPath] = useState(window.location.pathname)

    const pathChange = () => {
        setPath(window.location.pathname)
    }

    useEffect(() => {
        if(path.split('/')[1] === 'login' || path.split('/')[1] === 'register'){
            setFixed(true)
        }else{
            setFixed(false)
        }
    }, [path])

    return(
        <footer className={fixed === true ? 'footer fixed' : 'footer'} onChange={pathChange}>
            <div className="inner">
                <ul className="link">
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </ul>
                <div className="say">
                    <p>This site was created from June 22nd</p>
                    <p>Developer ParkSangMin</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer