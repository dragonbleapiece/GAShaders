import React, { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Helpers from '../../Helpers/Helpers.js';
import './ThreeCanvas.css';

class ThreeCanvas extends Component {

    constructor(props) {
        super(props);
        this.renderer = null;
    }


    componentDidMount() {
        this.initScene();
        if(this.refs.container) {
            window.addEventListener('resize', this.onResize.bind(this), false);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize.bind(this));
    }

    onResize(e) {
        const rectContainer = this.refs.container.getBoundingClientRect();
        this.renderer.setSize( rectContainer.width, rectContainer.height );
    }

    initScene() {
        let scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x8FBCD4 );
        const rectContainer = this.refs.container.getBoundingClientRect();
        const camera = new THREE.PerspectiveCamera( 75, rectContainer.width / rectContainer.height, 0.1, 1000 );

        const ambientLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 5 );
        //const mainLight = new THREE.DirectionalLight( 0xffffff, 5 );
        //mainLight.position.set( 10, 10, 10 );
      
        scene.add( ambientLight );
        
        this.renderer = new THREE.WebGLRenderer({canvas: this.refs.canvas, antialias: true});
        this.renderer.setSize( rectContainer.width, rectContainer.height );
        this.renderer.setPixelRatio( window.devicePixelRatio );

        const controls = new OrbitControls( camera, this.renderer.domElement );

        //controls.update() must be called after any manual changes to the camera's transform
        camera.position.set( 0, 20, 100 );
        controls.update();

        // Instantiate a loader
        const loader = new GLTFLoader();

        const self = this;

        camera.position.z = 5;

        // Load a glTF resource
        loader.load(
            // resource URL
            Helpers.url('/api/models/Sponza/Sponza.gltf'),
            // called when the resource is loaded
            function ( gltf ) {

                scene.add( gltf.scene );

                //gltf.animations; // Array<THREE.AnimationClip>
                //gltf.scene; // THREE.Scene
                //gltf.scenes; // Array<THREE.Scene>
                //gltf.cameras; // Array<THREE.Camera>
                //gltf.asset; // Object
                //gltf.images; // Object

                const animate = function () {
                    requestAnimationFrame( animate );
        
                    // required if controls.enableDamping or controls.autoRotate are set to true
                    controls.update();
        
                    self.renderer.render( scene, camera );
                };
        
                animate();

            },
            // called while loading is progressing
            function ( xhr ) {

                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

            },
            // called when loading has errors
            function ( error ) {

                console.log( 'An error happened : ' + error );

            }
        );

        
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