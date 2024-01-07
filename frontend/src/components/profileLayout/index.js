import React, { useEffect } from 'react';

import style from './profilelayout.module.scss'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


import profileBanner from '../../assets/images/profile/profileCover.png';
import Pencil from '../../assets/images/Pencil.svg';
import bannerGradientBg from '../../assets/images/bannerGradientBg.png';


const ProfileLayout = () => {
    const bannerimgsize = '100%';

    useEffect(() => {
        document.body.classList.add('collectionpages');
    }, []);

   

    return(
        <>
            <Header />
            <div className={style.cl_banner}>                
                <div className={style.coverBannerCnt}>
                    <img src={profileBanner} alt='profileBanner' width={bannerimgsize} height={bannerimgsize}/>
                    {/* <img src={bannerGradientBg} alt='profileBanner' width={bannerimgsize} height={bannerimgsize}/> */}
                    {/* <div className={style.noCoverCnt}></div> */}
                </div>
                <div className={style.editIconCnt}>
                    <img src={Pencil} />
                </div>
            </div>
            <Outlet />
            <Footer />
        </>
    )
}

export default ProfileLayout;