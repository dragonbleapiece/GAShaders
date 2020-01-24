import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Thumbnail.css';

class Thumbnail extends Component {

    render() {
        return (
            <div className='box'>
                <Link to={'/shader/' + this.props.folderName} className='image fit'><img src="images/pic01.jpg" alt="" /></Link>
                <div class="inner">
                    <h3>{'To Shader ' + this.props.folderName}</h3>
                    <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
                    <Link to={'/shader/' + this.props.folderName} className='button fit'>Go</Link>
                </div>
            </div>
        );
    }
}

export default Thumbnail;