import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Nav = () => {
    
    const [ darkMode, setDarkMode ] = useDarkMode("DarkMode", false);

    const toggle = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode);        
    }


    return (
        <div>
            <nav className="navbar">
                <h1 className="nav-title">Men's Soccer Player - World ranking</h1>

                <button className="btn" onClick={toggle}>Change</button>
                
            </nav>
        </div>
    )
}

export default Nav;