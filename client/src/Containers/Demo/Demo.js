import React, {Component} from 'react';
import { Link, useParams } from "react-router-dom";
import Helpers from '../../Helpers/Helpers.js';
import ThreeCanvas from "../../Components/ThreeCanvas/ThreeCanvas.js";
import ShaderCode from '../../Components/ShaderCode/ShaderCode.js';
import './Demo.css';

const shaders = ['vertex', 'fragment'];

class Demo extends Component {

    state = {
        shaders: {},
        current: 0
    }

    componentDidMount() {
        this.getShaders();
    }

    getShaders() {
        
        Helpers.getVertex(this.props.folderName)
        .then(res => res.text())
        .then(vertex => this.setState({ shaders: {...this.state.shaders, [shaders[0]]: vertex} }))
        .catch(err => console.error(err));

        Helpers.getFragment(this.props.folderName)
        .then(res => res.text())
        .then(fragment => this.setState({ shaders: {...this.state.shaders, [shaders[1]]: fragment} }))
        .catch(err => console.error(err));
    }

    render() {
        const promise = new Promise((resolve, reject) => {
            if(this.state.shaders[shaders[0]] && this.state.shaders[shaders[1]]) {
                resolve(this.state.shaders)
            }
        });

        const Inputs = shaders.map((shader, index) =>
            <div className='ShaderCode__input' key={index}>
                <label className={'button'  + (this.state.current === index ? '' : ' style3')}>
                    <input
                        type='radio'
                        name='shader'
                        checked={this.state.current === index}
                        onChange={(e) => this.setState({current: index})}
                    />
                    {shader.toUpperCase()}
                </label>
            </div>
        );

        return (
            <div className='Demo'>
                <div className='ShaderCode__header'>
                    <h1>{this.props.folderName}</h1>
                    <div className={'ShaderCode__inputs'}>
                        {Inputs}
                    </div>
                </div>
                <div className='Demo__elements'>
                    <ThreeCanvas promise={promise} />
                    <ShaderCode shader={this.state.shaders[shaders[this.state.current]]} />
                </div>
            </div>
        );
    }
}

export default Demo;