import React from 'react';
import '../css/style.css';
import banner from '../images/banner.jpg';
function Banner(){
    return (<div id="banner">
            <img src={banner} id="bannerImg" alt=""/>
    </div>);
}
export default Banner;