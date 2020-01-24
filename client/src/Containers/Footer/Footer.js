import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <footer id="footer">
                <div className="inner">
                    <h2>About</h2>
                    <p>University project for the <a href="https://www.ingenieur-imac.fr">IMAC</a> formation.</p>
                    <p className="copyright">&copy; Cusumano Nicolas. Design: <a href="https://templated.co">TEMPLATED</a>.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;