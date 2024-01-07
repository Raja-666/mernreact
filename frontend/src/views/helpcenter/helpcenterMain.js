import React from 'react';
import './helpcenter.scss';

import icon1 from '../../assets/images/helpcenter/stars.svg';
import icon2 from '../../assets/images/helpcenter/wallet.svg';
import icon3 from '../../assets/images/helpcenter/tag.svg';
import icon4 from '../../assets/images/helpcenter/magic.svg';
import icon5 from '../../assets/images/helpcenter/send-back.svg';
import icon6 from '../../assets/images/helpcenter/user.svg';
import icon7 from '../../assets/images/helpcenter/life-ring.svg';
import icon8 from '../../assets/images/helpcenter/shield-alt.svg';
import icon9 from '../../assets/images/helpcenter/code.svg';




const HelpCenterMainPage = () => {

    const titleImgIcon =[
        {"icon": icon1, "title": "Getting Started"},
        {"icon": icon2, "title": "Buying"},
        {"icon": icon3, "title": "Selling"},
        {"icon": icon4, "title": "Create an NFT"},
        {"icon": icon5, "title": "Drop a Collection"},
        {"icon": icon6, "title": "User Content"},
        {"icon": icon7, "title": "FaQ"},
        {"icon": icon8, "title": "User Safety"},
        {"icon": icon9, "title": "Developers"},
    ]

    const litstedTileLoop = titleImgIcon.map((item) => {
        return (
            <>
                <div className='col-lg-4 col-md-4 col-sm-6'>
                    <div className='tilebox'>
                        <div className='iconwizard'>
                            <img src={item.icon} alt={item.icon} />
                        </div>
                        <div className='tileName'>
                            {item.title}
                        </div>
                    </div>
                </div>
            </>
        );
      });

    return(
        <>
            <div className="container py-5">
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='tileBoxmain'>
                            <div className='row'>
                                {litstedTileLoop}
                                {/* <div className='col-lg-4 col-md-4 col-sm-6'>
                                    <div className='tilebox'>
                                        <div className='iconwizard'>
                                            <img src={icon1} alt='' />
                                        </div>
                                        <div className='tileName'>
                                        Getting Started
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default HelpCenterMainPage;