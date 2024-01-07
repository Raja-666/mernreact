import React from 'react';


import './profileActive.scss';

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
import yellowTick from '../../../assets/images/collection/yellow-tick_20px.svg';


const tableImg = [
    {
        offerType: 'Offer',
        offerIcon: offerIcon,
        imgsrc: tblUserImg1,
        fromuser: 'Carla Septimus',                
    },
    {
        offerType: 'Collection Offer',
        offerIcon: collectionOfferIcon,
        imgsrc: tblUserImg2,
        ownername: 'Miracle Lipshutz'
    },
    {
        offerType: 'Sale',
        offerIcon: saleIcon,
        imgsrc: tblUserImg3,
        ownername: 'Skylar George'
    },
    {
        offerType: 'List',
        offerIcon: listIcon,
        imgsrc: tblUserImg4,
        ownername: 'Davis Bator'
    },
    {
        offerType: 'Transfer',
        offerIcon: transferIcon,
        imgsrc: tblUserImg5,
        ownername: 'Davis Passaquindi...'        
    },
    {
        offerType: 'Transfer',
        offerIcon: transferIcon,
        imgsrc: tblUserImg6,
        ownername: 'Davis Passaquindi...'        
    },
    {
        offerType: 'Transfer',
        offerIcon: transferIcon,
        imgsrc: tblUserImg7,
        ownername: 'Anika Saris'        
    },
    {
        offerType: 'Transfer',
        offerIcon: transferIcon,
        imgsrc: tblUserImg8,
        ownername: 'Ahmad Dokidis'        
    },
    {
        offerType: 'Transfer',
        offerIcon: transferIcon,
        imgsrc: tblUserImg9,
        ownername: 'Allison Curtis'        
    },
    {
        offerType: 'Transfer',
        offerIcon: transferIcon,
        imgsrc: tblUserImg10,
        ownername: 'Marcus Botosh'        
    },
    {
        offerType: 'Transfer',
        offerIcon: transferIcon,
        imgsrc: tblUserImg11,
        ownername: 'Cheyenne Rosser'     
    },
    {
        offerType: 'Transfer',
        offerIcon: transferIcon,
        imgsrc: tblUserImg12,
        ownername: 'Davis Passaquindi...'
    },

]

const ActivityCollection = () => {
    const listViewrow = tableImg.map((item, index) => 
        <>
            <tr>
            <td>
                <div className='d-flex align-items-center'>
                    <div className='tblImg'><img src={item.imgsrc} alt={`item.imgsrc`} /></div>
                    <div>
                        <div className='fw-600'>Azuki #1249</div>
                        <div className='smTxt dark-text-secondary'>Azuki <img src={yellowTick} height="18" className="ml-1" /></div>
                    </div>
                </div>
            </td>
            <td className='text-right'>
                <div>0.008 ETH</div>
                <div className='fs-12 dark-text-secondary'>$13.71</div>
            </td>
            <td>1235% above</td> 
            <td className='text-right'>in 2 months</td>           
            <td className='text-right'><span className="cancelTag">Cancel</span></td>           
        </tr>
        </>    
    )
    return(
        <>
             <div className='table-responsive'>
                <table className='table table-borderless activityTable'>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th className='text-right'>Price</th>
                            <th>Floor Difference</th>
                            <th className='text-right'>Expiration</th>  
                            <th></th> 
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