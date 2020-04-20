import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Helpers from '../../Helpers/Helpers';
import './Thumbnail.css';

class Thumbnail extends Component {

    state = {
        description : "Loading..."
    }

    componentDidMount() {
        Helpers.getDescription(this.props.folderName)
        .then(res => res.text())
        .then(description => this.setState({ description }))
        .catch(err => console.error(err));
    }

    render() {
        return (
            <div className='box'>
                <Link to={'/shader/' + this.props.folderName} className='image fit'><img src={Helpers.url('/api/' + this.props.folderName + '/view')} alt="view" /></Link>
                <div className="inner">
                    <h3>{this.props.folderName + ' Shader'}</h3>
                    <p>{this.state.description}</p>
                    <Link to={'/shader/' + this.props.folderName} className='button fit'>Go to Demo</Link>
                </div>
            </div>
        );
    }
}

export default Thumbnail;