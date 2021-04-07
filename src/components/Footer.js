import React from 'react'

const Footer = () => {
    return (
        <div className="container-fluid  navbar-colors text-center p-2">
            <a href="https://github.com/DavidESotomayor" target="_blank" rel="noreferrer" title="David's Github Profile">
            <span className="footerIcons"><i className="fa fa-github fa-3x"></i></span>
            </a>
            <a href="https://www.linkedin.com/in/david-elijah-sotomayor/" target="_blank" rel="noreferrer" title="David's LinkedIn">
                <span className="footerIcons"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></span>
            </a>
        </div>
    )
}

export default Footer