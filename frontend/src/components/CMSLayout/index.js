import React, { useEffect } from 'react';

import style from './cmsLayout.module.scss'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


import iconMail from '../../assets/images/helpcenter/mail.svg';
import iconPhone from '../../assets/images/helpcenter/phone.svg';

import helpcenterBanner from '../../assets/images/helpcenter/helpcenterBanner.png';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';


const CMSPagesLayout = (props) => {
   const HeadPrimeTxt =  props.HeadPrimeTxt;
   const headFirstTxt =  props.headFirstTxt;
    const bannerimgsize = '100%';

    useEffect(() => {
        document.body.classList.add('helpcenterpages');
    }, []);
   

    return(
        <div className='withoutBannerHeaderPage'>
            <Header />
            <div className={style.bannerParent}>
                <div className={style.cl_banner}>
                    <img src={helpcenterBanner} alt='collectionBanner' width={bannerimgsize} height={bannerimgsize}/>
                </div>
                <div className={style.bannerContent}>
                    <div className={style.maxwidthcnt}>
                        <div className={style.bannerTit}><span>{HeadPrimeTxt}</span> {headFirstTxt}</div>
                        {/* <div className='formInputs'>
                        <InputGroup className='mb-2'>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText className='px-2'>
                                <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M15.875 14.6562C16.0312 14.8125 16.0312 15.0625 15.875 15.1875L15.1562 15.9062C15.0312 16.0625 14.7812 16.0625 14.625 15.9062L10.8438 12.125C10.7812 12.0312 10.75 11.9375 10.75 11.8438V11.4375C9.59375 12.4062 8.125 13 6.5 13C2.90625 13 0 10.0938 0 6.5C0 2.9375 2.90625 0 6.5 0C10.0625 0 13 2.9375 13 6.5C13 8.125 12.375 9.625 11.4062 10.75H11.8125C11.9062 10.75 12 10.8125 12.0938 10.875L15.875 14.6562ZM6.5 11.5C9.25 11.5 11.5 9.28125 11.5 6.5C11.5 3.75 9.25 1.5 6.5 1.5C3.71875 1.5 1.5 3.75 1.5 6.5C1.5 9.28125 3.71875 11.5 6.5 11.5Z"
                                    fill="white"
                                />
                                </svg>
                            </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Search" />
                        </InputGroup>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="py-5">
                <Outlet />
            </div>
          
            <Footer />
        </div>
    )
}

export default CMSPagesLayout;