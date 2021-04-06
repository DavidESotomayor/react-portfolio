import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light navbar-colors">
            <a className="navbar-brand navbar-brand-colors" href="#">David Sotomayor</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link to="/contact" className="nav-link navbar-brand-colors"  href="#">Contact</Link>
                    <Link to="/projects" className="nav-link navbar-brand-colors"  href="#">Portfolio</Link>
                    <Link to="/" className="nav-link navbar-brand-colors"  href="#">About</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav