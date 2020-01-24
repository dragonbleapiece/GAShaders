import React, { Component } from 'react';
import './Banner.css';


class Banner extends Component {

    render() {
        return (
            <section id="banner">
                <div className="inner">
                    <header>
                        <h1>Shaders Gallery</h1>
                        <p>Gallery of shaders experimentations in <i>WebGL</i><br />
                        using <a href="https://threejs.org/">Three.js</a> and the <a href="https://github.com/KhronosGroup/glTF-Sample-Models/tree/master/2.0/Sponza">Sponza model</a>.</p>
                    </header>
                    <a href="#main" class="more">Learn More</a>
                </div>
            </section>
        );
    }
}

export default Banner;