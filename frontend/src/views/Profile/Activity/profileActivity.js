import React from 'react';


import './profileActivity.scss';

import tblUserImg1 from '../../../assets/images/collection/tblUserImg1.png';
import tblUserImg2 from '../../../assets/images/collection/tblUserImg2.png';
import tblUserImg3 from '../../../assets/images/collection/tblUserImg3.png';
import tblUserImg4 from '../../../assets/images/collection/tblUserImg4.png';
import tblUserImg5 from '../../../assets/images/collection/tblUserImg5.png';
import tblUserImg6 from '../../../assets/images/collection/tblUserImg6.png';
import tblUserImg7 from '../../../assets/images/collection/tblUserImg7.png';
import tblUserImg8 from '../../../assets/images/collection/tblUserImg8.png';
import tblUserImg9 from '../../../assets/images/collection/tblUserImg9.png';
import tblUserImg10 from '../../../assets/images/collection/tblUserImg10.png';
import tblUserImg11 from '../../../assets/images/collection/tblUserImg11.png';
import tblUserImg12 from '../../../assets/images/collection/tblUserImg12.png';

import saleIcon from '../../../assets/images/collection/saleIcon.svg';
import transferIcon from '../../../assets/images/collection/transferIcon.svg';
import listIcon from '../../../assets/images/collection/listIcon.svg';
import collectionOfferIcon from '../../../assets/images/collection/collectionOfferIcon.svg';
import offerIcon from '../../../assets/images/collection/offerIcon.svg';
import mintIcon from '../assets/mintIcon.svg';
import dealsIcon from '../assets/dealsIcon.svg';


const tableImg = [
    {
        offerType: 'Sale',
        offerIcon: saleIcon,
        imgsrc: tblUserImg1,
        fromname: 'You',                
    },
    {
        offerType: 'List',
        offerIcon: listIcon,
        imgsrc: tblUserImg2,
        fromname: 'Miracle Lipshutz'
    },
    {
        offerType: 'Offer',
        offerIcon: offerIcon,
        imgsrc: tblUserImg3,
        fromname: 'Skylar George'
    },
    {
        offerType: 'Collection Offer',
        offerIcon: collectionOfferIcon,
        imgsrc: tblUserImg4,
        fromname: 'You'
    },
    {
        offerType: 'Transfer',
        offerIcon: transferIcon,
        imgsrc: tblUserImg5,
        fromname: 'Davis Passaquindi...'        
    },
    {
        offerType: 'Mint',
        offerIcon: mintIcon,
        imgsrc: tblUserImg6,
        fromname: 'Davis Passaquindi...'        
    },
    {
        offerType: 'Deal Sent',
        offerIcon: dealsIcon,
        imgsrc: tblUserImg7,
        fromname: 'Anika Saris'        
    },
    {
        offerType: 'Deal Accepted',
        offerIcon: dealsIcon,
        imgsrc: tblUserImg8,
        fromname: 'You'        
    },
    {
        offerType: 'Collection Offer',
        offerIcon: collectionOfferIcon,
        imgsrc: tblUserImg9,
        fromname: 'Allison Curtis'        
    },
    {
        offerType: 'Mint',
        offerIcon: mintIcon,
        imgsrc: tblUserImg10,
        fromname: 'Marcus Botosh'        
    },
    {
        offerType: 'Transfer',
        offerIcon: transferIcon,
        imgsrc: tblUserImg11,
        fromname: 'Cheyenne Rosser'     
    },
    {
        offerType: 'Transfer',
        offerIcon: transferIcon,
        imgsrc: tblUserImg12,
        fromname: 'Davis Passaquindi...'
    },

]

const ActivityCollection = () => {
    const listViewrow = tableImg.map((item, index) => 
        <>
            <tr>
            <td>
                <button className='btnBuynow'><img src={item.offerIcon} alt='offerIcon' /> {item.offerType}</button>
            </td>
            <td>
                <div className='d-flex align-items-center'>
                    <div className='tblImg'><img src={item.imgsrc} alt={`item.imgsrc`} /></div>
                    <div className='fw-600'>Azuki #1249</div>
                </div>
            </td>
            <td className='text-right'>
                <div>0.008 ETH</div>
                <div className='fs-12 dark-text-secondary'>$13.71</div>
            </td>
            <td><span className="dark-text-grey">--</span></td>
            <td className='text-right'>1</td>            
            <td><span className="dark-primary ellipsisTxt">{item.fromname}</span></td>
            <td className='text-right dark-text-grey'>--</td>
            <td><span className="dark-text-secondary">22s</span></td>            
        </tr>
        </>    
    )
    return(
        <>
             <div className='table-responsive'>
                <table className='table table-borderless activityTable'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item</th>
                            <th className='text-right'>Price</th>
                            <th>Rarity</th>
                            <th className='text-right'>Quantity</th>                            
                            <th>From</th>
                            <th className='text-right'>To</th>                            
                            <th>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6665 4.6875C13.8774 4.6875 16.479 7.28906 16.479 10.5C16.479 13.7109 13.8774 16.3125 10.6665 16.3125C7.45557 16.3125 4.854 13.7109 4.854 10.5C4.854 7.28906 7.45557 4.6875 10.6665 4.6875ZM10.6665 15.1875C13.2446 15.1875 15.354 13.1016 15.354 10.5C15.354 7.92188 13.2446 5.8125 10.6665 5.8125C8.06494 5.8125 5.979 7.92188 5.979 10.5C5.979 13.1016 8.06494 15.1875 10.6665 15.1875ZM12.0962 12.75L10.104 11.2969C10.0337 11.25 10.0103 11.1562 10.0103 11.0859V7.21875C10.0103 7.07812 10.1274 6.9375 10.2915 6.9375H11.0415C11.1821 6.9375 11.3228 7.07812 11.3228 7.21875V10.5469L12.8696 11.6953C13.0103 11.7891 13.0337 11.9531 12.9399 12.0938L12.4946 12.6797C12.4009 12.8203 12.2368 12.8438 12.0962 12.75Z" fill="#595F6A"/>
                            </svg>
                            </th>                           
                        </tr>
                    </thead>
                    <tbody>
                        {listViewrow}
                        {/* <tr>
                            <td>
                                <label class="cuschk mr-2 mb-0" For="checkbx12">
                                    <input type="checkbox" id="checkbx12" />
                                    <span class="checkmark"></span>
                                </label>
                            </td>
                            <td>
                                <div className='d-flex'>
                                    <div><img src="" alt="" /></div>
                                    <div>Azuki #1249</div>
                                </div>
                            </td>
                            <td>--</td>
                            <td>3.7364 ETH</td>
                            <td>3.73 ETH</td>
                            <td>Ahmad Dokidis</td>
                            <td>22s</td>
                            <td>
                                <button className='btnBuynow'>3.7364 ETH</button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ActivityCollection;