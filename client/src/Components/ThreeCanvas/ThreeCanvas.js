import React, { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Helpers from '../../Helpers/Helpers.js';
import Algebra from 'ganja.js';
import './ThreeCanvas.css';

class ThreeCanvas extends Component {

    constructor(props) {
        super(props);
        this.renderer = null;
        this.camera = null;
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
        if(!this.refs.container) return;
        const rectContainer = this.refs.container.getBoundingClientRect();
        this.renderer.setSize( rectContainer.width, rectContainer.height );
        this.camera.aspect = rectContainer.width / rectContainer.height;
        this.camera.updateProjectionMatrix();
    }

    initScene() {
        let scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x8FBCD4 );
        const rectContainer = this.refs.container.getBoundingClientRect();
        this.camera = new THREE.PerspectiveCamera( 75, rectContainer.width / rectContainer.height, 0.1, 1000 );

        const ambientLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 5 );
        //const mainLight = new THREE.DirectionalLight( 0xffffff, 5 );
        //mainLight.position.set( 10, 10, 10 );
      
        scene.add( ambientLight );
        
        this.renderer = new THREE.WebGLRenderer({canvas: this.refs.canvas, antialias: true});
        this.renderer.setSize( rectContainer.width, rectContainer.height );
        this.renderer.setPixelRatio( window.devicePixelRatio );

        const controls = new OrbitControls( this.camera, this.renderer.domElement );

        //controls.update() must be called after any manual changes to the camera's transform
        this.camera.position.set( 0, 20, 100 );
        controls.update();

        // Instantiate a loader
        const loader = new GLTFLoader();

        const self = this;

        // Load a glTF resource
        loader.load(
            // resource URL
            Helpers.url('/api/models/Sponza/Sponza.gltf'),
            // called when the resource is loaded
            function ( gltf ) {

                self.props.promise.then( ({vertex, fragment}) => {
                    console.log(gltf.scene);
                    const gltfChangedScene = self.includeShader(gltf.scene, vertex, fragment);
                    scene.add( gltfChangedScene );
    
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
            
                        self.renderer.render( scene, self.camera );
                    };
            
                    animate();
                });
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

    includeShader(node, vertex, fragment) {
        node.children.forEach((child, index) => {
            if(child.isMesh) {
                const oldMat = child.material;
                const material = new THREE.ShaderMaterial( {
                    uniforms: {
                        alphaMap: {value: oldMat.alphaMap},
                        aoMap: {value: oldMat.aoMap},
                        aoMapIntensity: {value: oldMat.aoMapIntensity},
                        bumpMap: {value: oldMat.bumpMap},
                        bumpScale: {value: oldMat.bumpScale},
                        diffuse: {value: oldMat.color},
                        displacementMap: {value: oldMat.displacementMap},
                        displacementScale: {value: oldMat.displacementScale},
                        displacementBias: {value: oldMat.displacementBias},
                        emissive: {value: oldMat.emissive},
                        emissiveMap: {value: oldMat.emissiveMap},
                        emissiveIntensity: {value: oldMat.emissiveIntensity},
                        lightMap: {value: oldMat.lightMap},
                        lightMapIntensity: {value: oldMat.lightMapIntensity},
                        map: {value: oldMat.map},
                        metalness: {value: oldMat.metalness},
                        metalnessMap: {value: oldMat.metalnessMap},
                        morphNormals: {value: oldMat.morphNormals},
                        morphTargets: {value: oldMat.morphTargets},
                        normalMap: {value: oldMat.normalMap},
                        normalMapType: {value: oldMat.normalMapType},
                        normalScale: {value: oldMat.normalScale},
                        refractionRatio: {value: oldMat.refractionRatio},
                        roughness: {value: oldMat.roughness},
                        roughnessMap: {value: oldMat.roughnessMap},
                        opacity: {value: oldMat.opacity}
                    },
                
                    extensions: {
                        derivatives: true, // set to use derivatives
                        fragDepth: false, // set to use fragment depth values
                        drawBuffers: false, // set to use draw buffers
                        shaderTextureLOD: false // set to use shader texture LOD
                    },

                    defines: {
                        "STANDARD": ""
                    },

                    vertexShader: vertex,
                
                    fragmentShader: fragment
                
                } );


                material.map = oldMat.map;
                node.children[index].material = material;

            }

            node.children[index].children = this.includeShader(child, vertex, fragment).children;
        });

        return node;
    }

    GALoad() {
        
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