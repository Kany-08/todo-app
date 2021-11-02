import React from 'react';
import logo from '../images/logo.png'

export default function Navigation(props) {
    return (
        <nav>
            <div className='left'>
                <img style={{cursor:'pointer'}} src={logo} alt='logo' onClick={props.switchPageToHome}/>
            </div>

            <div className='right'>
                <button onClick={props.switchPageToAbout}>About</button>
            </div>
        </nav>
    )
}
