import React from 'react'
import { useHistory } from 'react-router-dom'
import"./Footer.scss"
import { FaGithub , FaLinkedin ,FaRegCopyright } from 'react-icons/fa';





const Footer = () => {
     let history = useHistory()

    return (
        <div className="footerBody">
            <div className="SocialMedia">
            <a href="https://github.com/CarlosRQuinteroM" Target="_blank" ><FaGithub id="github" className="socialIcon"/></a>
            <a href="https://www.linkedin.com/in/carlos-quintero-moreno/"  Target="_blank" ><FaLinkedin  id="linkInd" className="socialIcon"/></a>
            </div>
           <FaRegCopyright/> By Carlos Quintero Moreno 2021 
        </div>
    )
}

export default Footer
