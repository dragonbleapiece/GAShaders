import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Helpers from '../../Helpers/Helpers.js';
import './ShaderCode.css';

const LOADING = 'loading...';

class ShaderCode extends Component {

    render() {
        const shader = this.props.shader ? this.props.shader : LOADING;

        return (
            <div className='ShaderCode'>
                <SyntaxHighlighter language='glsl' style={atomOneDark} className='Highlighter' showLineNumbers={true}  wrapLines={true}>
                    {shader}
                </SyntaxHighlighter>
            </div>
        );
    }
}

export default ShaderCode;