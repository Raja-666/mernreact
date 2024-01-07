import React, { useEffect } from 'react';

import style from './homeExplorerLayout.module.scss'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


import iconMail from '../../assets/images/helpcenter/mail.svg';
import iconPhone from '../../assets/images/helpcenter/phone.svg';

import homeExplorerBanner from '../../assets/images/homeExplorer/homeExplorerBanner.png';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';


const HomeExplorerLayout = () => {
    const bannerimgsize = '100%';

    useEffect(() => {
        document.body.classList.add('helpcenterpages');
    }, []);
   

    return(
        <>
            <Header />
            <div className='position-relative'>
                <div className={style.cl_banner}>
                    <img src={homeExplorerBanner} alt='collectionBanner' width={bannerimgsize} height={bannerimgsize}/>
                </div>
               
                <div className={style.bannerContent}>
                    <div className={style.maxwidthcnt}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className={style.bannerTit}>Explore <span>best NFTs</span>!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <Outlet />
            
            <Footer />
        </>
    )
}

export default HomeExplorerLayout;