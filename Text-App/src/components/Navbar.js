import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} >
                        <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
// Adding, isRequired after below statement will throw error if you will not pass anything 
Navbar.prototype = {
    title: PropTypes.string,
    about: PropTypes.string
}

// if we will not pass anything href the props then this value will appear there as default value like this=> <Navbar/>
Navbar.defaultProps = {
    title: "Set Title",
    about: "Set About"
}