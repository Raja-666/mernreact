import React, { useEffect } from 'react';

import style from './mycollectionlayout.module.scss'
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
        <div className='withoutBannerHeaderPage' >
            <Header />
            <section className="mycollectionSec">
                <div className='container'>
                    <Outlet />
                </div>
            </section>            
        </div>
    )
}

export default CollectionLayout;