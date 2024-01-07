import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody } from 'reactstrap';

import '../Activity/profileActivity.scss';
import './profileOfferReceived.scss';

import item1 from '../../../assets/images/collection/modalItem1.png';
import copyIcon from '../../../assets/images/copyIcon.svg';


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
import greenCheck from '../../../assets/images/greenCheck.svg';


const tableImg = [
    {
        imgsrc: tblUserImg1,
        received: '13s',                
    },
    {
        imgsrc: tblUserImg2,
        received: '2 mins',   
    },
    {
        imgsrc: tblUserImg3,
        received: '2 mins',
    },
    {
        imgsrc: tblUserImg4,
        received: '2 mins',
    },
    {
        imgsrc: tblUserImg5,
        received: '13s',       
    },
    {
        imgsrc: tblUserImg6,
        received: '13s',      
    },
    {
        imgsrc: tblUserImg7,
        received: '13s',     
    },
    {
        imgsrc: tblUserImg8,
        received: '13s',     
    },
    {
        imgsrc: tblUserImg9,
        received: '13s',       
    },
    {
        imgsrc: tblUserImg10,
        received: '13s',        
    },
    {
        imgsrc: tblUserImg11,
        received: '13s',    
    },
    {
        imgsrc: tblUserImg12,
        received: '13s',
    },

]

const ActivityCollection = (props) => {
    const {
        buttonLabel,
        className
      } = props;    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [modal1, setModal1] = useState(false);
    const toggle1 = () => setModal1(!modal1);

    const closeBtn = <button className="close">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3359 10.5L16.5547 14.7188C16.7891 14.9531 16.7891 15.3828 16.5547 15.6172L15.5781 16.5938C15.3438 16.8281 14.9141 16.8281 14.6797 16.5938L10.5 12.375L6.28125 16.5938C6.04688 16.8281 5.61719 16.8281 5.38281 16.5938L4.40625 15.6172C4.17188 15.3828 4.17188 14.9531 4.40625 14.7188L8.625 10.5L4.40625 6.32031C4.17188 6.08594 4.17188 5.65625 4.40625 5.42188L5.38281 4.44531C5.61719 4.21094 6.04688 4.21094 6.28125 4.44531L10.5 8.66406L14.6797 4.44531C14.9141 4.21094 15.3438 4.21094 15.5781 4.44531L16.5547 5.42188C16.7891 5.65625 16.7891 6.08594 16.5547 6.32031L12.3359 10.5Z" fill="#6E737E" />
        </svg>
    </button>;

    const listViewrow = tableImg.map((item, index) => 
        <>
            <tr>
            <td>
                <div className='d-flex align-items-center'>
                    <div className='tblImg'><img src={item.imgsrc} alt={`item.imgsrc`} /></div>
                    <div>
                        <div className='fw-600'>Azuki <img src={yellowTick} height="18" className="ml-1" /></div>
                    </div>
                </div>
            </td>
            <td className='text-right'>
                <div>0.008 ETH</div>
                <div className='fs-12 dark-text-secondary'>$13.71</div>
            </td>
            <td className='text-right'>1235% above</td> 
            <td className='text-right'>1</td> 
            <td className='text-right'>in 2 months</td>           
            <td className='text-right'>{item.received} ago</td>           
            <td className='text-right'><span className="outlineBtn" onClick={toggle}>Accept</span></td>           
        </tr>
        </>    
    )
    return(
        <>
             <div className='table-responsive'>
                <table className='table table-borderless activityTable offerTable'>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th className='text-right'>Price</th>
                            <th className='text-right'>Floor Difference</th>
                            <th className='text-right'>Quantity</th>
                            <th className='text-right'>Expiration</th>  
                            <th className='text-right'>Received</th>  
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

            <Modal isOpen={modal} toggle={toggle} centered="true" className="mymodal" backdropClassName="selCurBp">
                <ModalHeader toggle={toggle} close={closeBtn}>Accept Offer</ModalHeader>
                <ModalBody>

                    <div>
                        <div className='cartItem'>
                            <div className='itemImg'>
                                <img src={item1} alt="item1" />
                            </div>
                            <div className='flex-grow-1 d-flex justify-content-between p-3'>
                                <div className='d-flex flex-column mb-2'>
                                    <div className="mb-2">
                                        <div className='itemName'>Azuki <img src={yellowTick} alt="yellowtick20" className='ml-1' /></div>
                                        <span className='fs-14 fw-400 dark-text-secondary'>
                                            {/* $-- */}
                                        </span>    
                                    </div>
                                    
                                    <div className='itemId'>Azuki #8372</div>
                                </div>
                                <div className='d-flex flex-column mb-n1 text-right'>                                    
                                    <span className='itemBal mb-2'>$110.89</span>
                                    <div className='itemId'>0.068 ETH</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='borderRoundedCard'>
                        <div class="d-flex justify-content-between mb-2">
                            <div className='fs-14 fw-400 dark-text-secondary'>Floor Diference</div>
                            <div className='fs-16 fw-400 dark-text'>14% below</div>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <div className='fs-14 fw-400 dark-text-secondary'>From</div>
                            <div className='fs-16 fw-400 yellowTxt'>MiaMia</div>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <div className='fs-14 fw-400 dark-text-secondary'>Expiration</div>                            
                            <div className='fs-16 fw-400 dark-text'>in 3 minutes</div>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <div className='fs-14 fw-400 dark-text-secondary'>WARRIOR Fee</div>
                            <div className='fs-16 fw-400 dark-text'>2%</div>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <div className='fs-14 fw-400 dark-text-secondary'>Creator Earnings</div>
                            <div className='fs-16 fw-400 dark-text'>6%</div>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <div className='fs-14 fw-700 dark-text-secondary'>Total Earnings</div>
                            <div className='fs-16 fw-700 dark-text'><span className='dark-text-grey fs-16 fw-400'>($100.97)</span> 0.0679 ETH</div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <button className='btn btn-block checkoutBtn' onClick={toggle1}>Accept </button>
                    </div>

                </ModalBody>
            </Modal>

            <Modal isOpen={modal1} toggle={toggle1} centered="true" className="mymodal" backdropClassName="selCurBp">
                <ModalHeader onClick={toggle1} close={closeBtn}>
                    <div className="d-flex flex-column align-items-center">
                        <img src={greenCheck} className="mb-3" alt="greenCheck" />
                        User Name received your confirmation!
                    </div>
                </ModalHeader>
                <ModalBody className="pt-0">
                    <div>
                        <p className="dark-text-secondary text-center">Once payment is finalised, you will be notified.</p>
                        <div className='cartItem'>
                            <div className='itemImg'>
                                <img src={item1} alt="item1" />
                            </div>
                            <div className='flex-grow-1 d-flex justify-content-between p-3'>
                                <div className='d-flex flex-column mb-2'>
                                    <div className="mb-2">
                                        <div className='itemName'>Azuki <img src={yellowTick} alt="yellowtick20" className='ml-1' /></div>
                                        <span className='fs-14 fw-400 dark-text-secondary'>
                                            {/* $-- */}
                                        </span>    
                                    </div>
                                    
                                    <div className='itemId'>Azuki #8372</div>
                                </div>
                                <div className='d-flex flex-column mb-n1 text-right justify-content-center'> 
                                    <div className='itemId'>0.068 ETH</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <button className='btn btn-block checkoutBtn'>Okay</button>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}

export default ActivityCollection;