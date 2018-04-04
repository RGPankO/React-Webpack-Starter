import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <Link to="/home">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
            </div>
        )
    }
}

export default Header;