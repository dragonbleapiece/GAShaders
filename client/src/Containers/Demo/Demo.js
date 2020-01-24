import React, {Component} from 'react';
import { Link, useParams } from "react-router-dom";
import Helpers from '../../Helpers/Helpers.js';
import ThreeCanvas from "../../Components/ThreeCanvas/ThreeCanvas.js";
import ShaderCode from '../../Components/ShaderCode/ShaderCode.js';
import './Demo.css';

class Demo extends Component {

    state = {
        fragment: null,
        vertex: null
    }
    
    componentDidMount() {
        this.getShaders();
    }

    getShaders() {
        Helpers.getVertex(this.props.folderName)
        .then(res => res.text())
        .then(vertex => this.setState({ vertex }))
        .catch(err => console.error(err));

        Helpers.getFragment(this.props.folderName)
        .then(res => res.text())
        .then(fragment => this.setState({ fragment }))
        .catch(err => console.error(err));
    }

    render() {
        return (
            <div className='Demo'>
                <h1>{this.props.folderName}</h1>
                <div className='Demo__elements'>
                    <ThreeCanvas/>
                    <ShaderCode vertex={this.state.vertex} fragment={this.state.fragment}/>
                </div>
            </div>
        );
    }
}

export default Demo;