import React, { useEffect } from 'react';

import style from './mintlayout.module.scss'
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';


import collectionBanner from '../../assets/images/collection/collectionBanner.png';


const MintLayout = () => {
    const bannerimgsize = '100%';

    useEffect(() => {
        document.body.classList.add('collectionpages');
    }, []);

   

    return(
        <div className='withoutBannerHeaderPage'>
            <Header />
            <section className="mycollectionSec mintSec">
                <div className='container'>
                    <Outlet />
                </div>
            </section>
        </div>
    )
}

export default MintLayout;