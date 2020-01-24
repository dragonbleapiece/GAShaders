import React, { Component } from 'react';
import * as THREE from 'three';
import Helpers from '../../Helpers/Helpers.js';
import './ThreeCanvas.css';

class ThreeCanvas extends Component {

    constructor(props) {
        super(props);
        this.renderer = null;
    }


    componentDidMount() {
        this.initScene();
        window.addEventListener('resize', e => {
            const rectContainer = this.refs.container.getBoundingClientRect();
            this.renderer.setSize( rectContainer.width, rectContainer.height );
        }, false);
    }

    initScene() {
        let scene = new THREE.Scene();
        const rectContainer = this.refs.container.getBoundingClientRect();
        const camera = new THREE.PerspectiveCamera( 75, rectContainer.width / rectContainer.height, 0.1, 1000 );

        this.renderer = new THREE.WebGLRenderer({canvas: this.refs.canvas});
        this.renderer.setSize( rectContainer.width, rectContainer.height );

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        const self = this;

        /*const animate = function () {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            self.renderer.render( scene, camera );
        };

        animate();*/

        this.renderer.render( scene, camera );
    }

    render() {

        return (
            <div className='ThreeCanvas' ref='container'>
                <canvas ref='canvas'></canvas>
            </div>
        );
    }
}

export default ThreeCanvas;