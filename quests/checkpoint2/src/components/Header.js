import React from 'react';
import './Header.css';

const Header = ({name}) => {
    return (
        <div className="header">
            <h1 id="headerTitle">Welcome to {name} !</h1>
        </div>
    );
}
 
export default Header;
