import { useParams } from "react-router-dom";
import Helpers from '../../Helpers/Helpers.js';
import Three from 'three';
// scripts
// threeJS

const Demo = () => {

    const { folderName } = useParams();

    return 'shader ' + folderName;
}

export default Demo;