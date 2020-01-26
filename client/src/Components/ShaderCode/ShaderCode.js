import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Helpers from '../../Helpers/Helpers.js';
import './ShaderCode.css';

const LOADING = 'loading...';

class ShaderCode extends Component {

    state = {
        current: 0
    };
    

    render() {

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

        const vertex = this.props.vertex ? this.props.vertex : LOADING;
        const fragment = this.props.fragment ? this.props.fragment : LOADING;

        return (
            <div className='ShaderCode'>
                <div className='ShaderCode__header'>
                    <h2>Code</h2>
                    <div className={'ShaderCode__inputs'}>
                        {Inputs}
                    </div>
                </div>
                <SyntaxHighlighter language='glsl' style={atomOneDark} className='Highlighter' showLineNumbers={true}  wrapLines={true}>
                    {this.state.current === 0 ? vertex : fragment}
                </SyntaxHighlighter>
            </div>
        );
    }
}

export default ShaderCode;