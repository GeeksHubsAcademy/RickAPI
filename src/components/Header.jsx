import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom'

class Header extends Component {
    render(){
        return (
            <Fragment>
                <nav>
                    <ul>
                        <li>
                            <Link to="/"> Inicio</Link>
                        </li>
                        <li>
                            <Link to="/contacto"> Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}

export default Header;