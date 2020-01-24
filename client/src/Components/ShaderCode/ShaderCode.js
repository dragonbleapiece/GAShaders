import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Helpers from '../../Helpers/Helpers.js';
import './ShaderCode.css';

class ShaderCode extends Component {

    state = {
        current: 0
    };

    constructor(props) {
        super(props);
        this.fragment = this.props.fragment ? this.props.fragment : 'loading...';
        this.vertex = this.props.vertex ? this.props.vertex : 'loading...';
        if(!this.props.fragment || !this.props.vertex) {
            console.error('Must have the fragment and vertex shaders in props');
        }
    }

    componentDidUpdate() {
        this.fragment = this.props.fragment ? this.props.fragment : 'no fragment to show';
        this.vertex = this.props.vertex ? this.props.vertex : 'no vertex to show';
    }

    render() {

        console.log('fragment', this.fragment);
        console.log('vertex', this.vertex);

        const shaders = ['vertex', 'fragment'];
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
            <div className='ShaderCode'>
                <div className='ShaderCode__header'>
                    <h2>Code</h2>
                    <div className={'ShaderCode__inputs'}>
                        {Inputs}
                    </div>
                </div>
                <SyntaxHighlighter language='glsl' style={atomOneDark} className='Highlighter' showLineNumbers={true} >
                    {this.state.current === 0 ? this.vertex : this.fragment}
                </SyntaxHighlighter>
            </div>
        );
    }
}

export default ShaderCode;