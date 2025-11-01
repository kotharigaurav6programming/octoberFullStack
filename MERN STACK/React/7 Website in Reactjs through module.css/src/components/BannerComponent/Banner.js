import React from 'react';
import bannerStyle from './bannerStyle.module.css';
import banner from '../../images/banner.jpg';
function Banner(){
    return (<div className={bannerStyle.banner}>
            <img src={banner} className={bannerStyle.bannerImg} alt=""/>
    </div>);
}
export default Banner;