import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
            </nav>
        );
    }
}
