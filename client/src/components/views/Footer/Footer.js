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
                        <a href="https://www.instagram.com/xectler/?hl=ko" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} 
                                className="insta-icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCkM8-lzK4IaUTf_XJew951g/videos" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} 
                                className="youtube-icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/CodingCitron" target="_blank">
                            <FontAwesomeIcon icon={faGithub} 
                                className="github-icon"
                            />
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