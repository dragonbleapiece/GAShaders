import React from 'react';
import { Link, useParams } from "react-router-dom";
import Helpers from '../../Helpers/Helpers.js';
import ThreeCanvas from "../../Components/ThreeCanvas/ThreeCanvas.js";
import ShaderCode from '../../Components/ShaderCode/ShaderCode.js';

const Demo = () => {

    const { folderName } = useParams();

    return (
        <div>
            <div>
                <ThreeCanvas/>
            </div>
            <div>
                <ShaderCode/>
            </div>
        </div>
    );
}

export default Demo;