import React, { useEffect } from 'react';

import style from './collectionlayout.module.scss'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


import collectionBanner from '../../assets/images/collection/collectionBanner.png';


const CollectionLayout = () => {
    const bannerimgsize = '100%';

    useEffect(() => {
        document.body.classList.add('collectionpages');
    }, []);

   

    return(
        <>
            <Header />
            <div className={style.cl_banner}>
                <img src={collectionBanner} alt='collectionBanner' width={bannerimgsize} height={bannerimgsize}/>
            </div>
            <Outlet />
            <Footer />
        </>
    )
}

export default CollectionLayout;