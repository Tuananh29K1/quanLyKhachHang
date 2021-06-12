import React, { Component } from 'react';
import HeaderLogin from './HeaderLogin';
import HeaderNav from './HeaderNav';

class Header extends Component {
    render() {
        return (
            <header>
                <HeaderLogin/>
                <HeaderNav/>
            </header>
        );
    }
}

export default Header;