import React, { useState } from 'react';

import './alertToast.scss';


import closeToastIcon from '../assets/images/toast/closeToast.svg';

function AlertToast({toastImgIcon,toastmassage}) {
    const [isToastShow, setToastShow] = useState(true);

    const toastClose = () => {
        setToastShow(!isToastShow)
    }
   
    return ( 
        <>
            <div className={`alertToast ${isToastShow? 'show': 'hide'}`}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <span><img src={toastImgIcon} alt="toastIcon" /></span>
                        <span>{toastmassage}</span>
                    </div>
                    <div>
                        <button className='closeToastBtn' onClick={toastClose}>
                            <img src={closeToastIcon} alt="closeToastIcon" />
                        </button>
                    </div>
                </div>
            </div>
        </>
     );
}

export default AlertToast;