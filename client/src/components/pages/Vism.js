import { render } from '@testing-library/react';
import React from 'react'
import * as THREE from "three";

export default class Vism extends React.Component {

    componentDidMount(){

        var scene = new THREE.Scene()
        var renderer = new THREE.WebGL1Renderer({alpha:true, antialias:true})
        renderer.setSize(window.innerWidth,window.innerHeight)

        document.body.appendChild(renderer.domElement)

        var camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,1,1000)
        camera.position.z = 30;
        //var controls = new OrbitControls(camera,renderer.domElement)

       

        const geometry = new THREE.SphereGeometry(5,50,50 );
        const material = new THREE.MeshBasicMaterial( { color: 0xffff20 } );
        const sphere = new THREE.Mesh( geometry, material );
        scene.add( sphere );

        animate();

        function animate(){
           // controls.update()
            renderer.render(scene,camera)
            
            requestAnimationFrame(animate)

        }

        
    }

    render() {
        return (
            <div/>
   
        )
    }
}