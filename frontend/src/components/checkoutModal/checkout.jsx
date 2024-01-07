import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

//import './checkout.scss';
import '../../assets/scss/modalStyle.scss';

import item1 from '../../assets/images/collection/modalItem1.png';
import item2 from '../../assets/images/collection/modalItem2.png';

import removeIcon from '../../assets/images/collection/trash-alt.svg';
import yellowtick20 from '../../assets/images/collection/yellow-tick_20px.svg';

const CheckoutModal = (props) => {
    console.log('checkcartModal', props.showcheckoutmodal);    
    // const {
    //     buttonLabel,
    //     className
    //   } = props;
    
    //   const [modal, setModal] = useState(props.modalclose);   
    //     console.log('check', modal) 
      //const toggle = () => setModal(props.modalclose);

      const closeBtn = <button className="close" onClick={props.closecheckoutmodal}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3359 10.5L16.5547 14.7188C16.7891 14.9531 16.7891 15.3828 16.5547 15.6172L15.5781 16.5938C15.3438 16.8281 14.9141 16.8281 14.6797 16.5938L10.5 12.375L6.28125 16.5938C6.04688 16.8281 5.61719 16.8281 5.38281 16.5938L4.40625 15.6172C4.17188 15.3828 4.17188 14.9531 4.40625 14.7188L8.625 10.5L4.40625 6.32031C4.17188 6.08594 4.17188 5.65625 4.40625 5.42188L5.38281 4.44531C5.61719 4.21094 6.04688 4.21094 6.28125 4.44531L10.5 8.66406L14.6797 4.44531C14.9141 4.21094 15.3438 4.21094 15.5781 4.44531L16.5547 5.42188C16.7891 5.65625 16.7891 6.08594 16.5547 6.32031L12.3359 10.5Z" fill="#6E737E"/>
                        </svg>
                        </button>;


    return(
        <>
        {/* <Button color="danger" onClick={toggle}>Click</Button> */}

        <Modal isOpen={props.showcheckoutmodal} onClick={props.closecheckoutmodal}  centered="true" className="mymodal" backdropClassName="selCurBp">
          <ModalHeader onClick={props.closecheckoutmodal} close={closeBtn}></ModalHeader>
          <ModalBody>
                <div className='text-center mt-n5'>
                       <svg className='mb12px' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="12" fill="#00B976"/>
                        <path d="M25.5938 14.625C25.75 14.4688 26 14.4688 26.125 14.625L27.0312 15.5C27.1562 15.6562 27.1562 15.9062 27.0312 16.0312L17.6562 25.4062C17.5 25.5625 17.2812 25.5625 17.125 25.4062L12.9375 21.25C12.8125 21.0938 12.8125 20.8438 12.9375 20.7188L13.8438 19.8125C13.9688 19.6875 14.2188 19.6875 14.375 19.8125L17.375 22.8438L25.5938 14.625Z" fill="white"/>
                        </svg>

                        <div className='checkTit mb-2'>Checkout success!</div>
                        <div className='subcheckTxt mb-3'>
                            You sucesssfully purchaseed <span className='fw-600 dark-text'>2 NFT’s!</span>
                        </div>
                </div>
               
               
                <div>
                    <div className='cartItem'>                        
                        <div className='itemImg'>
                            <img src={item1} alt="item1" />
                        </div>
                        <div className='flex-grow-1 p-3'>
                            <div className='d-flex justify-content-between mb-2'>
                                    <div className='itemName'>Azuki <img src={yellowtick20} alt="yellowtick20" className='ml-1' /></div>
                                    <span className=''>
                                        <button className='removebtn'>
                                            <img src={removeIcon} alt="" />
                                        </button>
                                    </span>
                                </div>
                                <div className='d-flex justify-content-between mb-n1'>
                                    <div className='itemId'>Azuki #8372</div>
                                    <span className='itemBal'>4.05 ETH</span>
                                </div>
                        </div>
                    </div>
                    <div className='cartItem'>                        
                        <div className='itemImg'>
                            <img src={item2} alt="item2" />
                        </div>
                        <div className='flex-grow-1 p-3'>
                            <div className='d-flex justify-content-between mb-2'>
                                    <div className='itemName'>Azuki <img src={yellowtick20} alt="yellowtick20" className='ml-1' /></div>
                                    <span className=''>
                                        <button className='removebtn'>
                                            <img src={removeIcon} alt="" />
                                        </button>
                                    </span>
                                </div>
                                <div className='d-flex justify-content-between mb-n1'>
                                    <div className='itemId'>Azuki #1723</div>
                                    <span className='itemBal'>4.05 ETH</span>
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

export default CheckoutModal;