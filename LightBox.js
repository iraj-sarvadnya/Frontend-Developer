import React, { Component } from "react";
import { render } from "react-dom";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import img1 from '../img/gallery-1.jpg';
import imgT1 from '../img/gall-thumb-1.jpg';
import img2 from '../img/gallery-2.jpg';
import imgT2 from '../img/gall-thumb-2.jpg';
import img3 from '../img/gallery-3.jpg';
import imgT3 from '../img/gall-thumb-3.jpg';
import img4 from '../img/gallery-4.jpg';
import imgT4 from '../img/gall-thumb-4.jpg';

function LightBox() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={img1} className="col-sm-6 py-2 px-2 d-block">
                    <img alt="FALCON 9" src={imgT1} />
                </a>
                <a href={img2} className="col-sm-6 py-2 px-2 d-block">
                    <img alt="FALCON 9" src={imgT2} />
                </a>
                <a href={img3} className="col-sm-6 py-2 px-2 d-block">
                    <img alt="FALCON 9" src={imgT3} />
                </a>
                <a href={img4} className="col-sm-6 py-2 px-2 d-block">
                    <img alt="FALCON 9" src={imgT4} />
                </a>

            </LightGallery>
        </div>
    );
}

export default LightBox;