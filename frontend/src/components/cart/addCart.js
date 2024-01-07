import React, { useState } from 'react';
import { Input, InputGroup, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalHeader } from 'reactstrap';

//import './addcart.scss';
import '../../assets/scss/modalStyle.scss';

import item1 from '../../assets/images/collection/modalItem1.png';
import item2 from '../../assets/images/collection/modalItem2.png';

import removeIcon from '../../assets/images/collection/trash-alt.svg';
import yellowtick20 from '../../assets/images/collection/yellow-tick_20px.svg';
import CheckoutModal from '../checkoutModal/checkout';

const AddCart = (props) => {
    console.log('checkcartModal', props.modalshow);
    const[checkoutModal, setCheckoutModal] = useState(false)
    // const {
    //     buttonLabel,
    //     className
    //   } = props;
    
    //   const [modal, setModal] = useState(props.modalclose);   
    //     console.log('check', modal) 
      //const toggle = () => setModal(props.modalclose);

      const closeBtn = <button className="close" onClick={props.modalclose}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3359 10.5L16.5547 14.7188C16.7891 14.9531 16.7891 15.3828 16.5547 15.6172L15.5781 16.5938C15.3438 16.8281 14.9141 16.8281 14.6797 16.5938L10.5 12.375L6.28125 16.5938C6.04688 16.8281 5.61719 16.8281 5.38281 16.5938L4.40625 15.6172C4.17188 15.3828 4.17188 14.9531 4.40625 14.7188L8.625 10.5L4.40625 6.32031C4.17188 6.08594 4.17188 5.65625 4.40625 5.42188L5.38281 4.44531C5.61719 4.21094 6.04688 4.21094 6.28125 4.44531L10.5 8.66406L14.6797 4.44531C14.9141 4.21094 15.3438 4.21094 15.5781 4.44531L16.5547 5.42188C16.7891 5.65625 16.7891 6.08594 16.5547 6.32031L12.3359 10.5Z" fill="#6E737E"/>
                        </svg>
                        </button>;


    return(
        <>
        {/* <Button color="danger" onClick={toggle}>Click</Button> */}

        <Modal isOpen={props.modalshow} centered="true" className="mymodal" backdropClassName="selCurBp">
          <ModalHeader onClick={props.modalclose} close={closeBtn}>Your cart</ModalHeader>
          <ModalBody>
                <div className='d-flex justify-content-between mb-3'>
                    <span className='fs-16 fw-600 dark-text'>2 items</span>
                    <span><button className="btn btn-clear fs-14 fw-400 dark-text-secondary">Clear All</button></span>
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
                <hr className='hrCls'/>
                    <div className='d-flex mb-3'>
                        <div>
                            <span className='fs-16 fw-600'>Wallet</span> <span className='greenLabel'>Connected</span>
                        </div>                       
                    </div>
                    <div className='form-group formInputs'>
                        <InputGroup>
                        <Input placeholder='92fwr424...0394'/>
                        <InputGroupAddon addonType="append">
                        <InputGroupText className='pr-0'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 2C17.3125 2 18 2.6875 18 3.5V13.5C18 14.3438 17.3125 15 16.5 15H15V16.5C15 17.3438 14.3125 18 13.5 18H3.5C2.65625 18 2 17.3438 2 16.5V6.5C2 5.6875 2.65625 5 3.5 5H5V3.5C5 2.6875 5.65625 2 6.5 2H16.5ZM13.3125 16.5C13.4062 16.5 13.5 16.4375 13.5 16.3125V15H6.5C5.65625 15 5 14.3438 5 13.5V6.5H3.6875C3.5625 6.5 3.5 6.59375 3.5 6.6875V16.3125C3.5 16.4375 3.5625 16.5 3.6875 16.5H13.3125ZM16.3125 13.5C16.4062 13.5 16.5 13.4375 16.5 13.3125V3.6875C16.5 3.59375 16.4062 3.5 16.3125 3.5H6.6875C6.5625 3.5 6.5 3.59375 6.5 3.6875V13.3125C6.5 13.4375 6.5625 13.5 6.6875 13.5H16.3125Z" fill="#6E737E"/>
                            </svg>
                        </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                        </div>
                <hr className='hrCls'/>
                <div className=''>
                    <div className='d-flex justify-content-between mb12px'>
                        <span className='itemCalLeft'>Subotal</span>
                        <span className='itemCalRight'>
                            <span className='pr-1 itemCalRightLight'>($12,311.21)</span>
                            <span>8.1 ETH</span>
                        </span>
                    </div>
                    <div className='d-flex justify-content-between mb12px'>
                        <span className='itemCalLeft'>Fee</span>
                        <span className='itemCalRight'>
                            <span className='pr-1 itemCalRightLight'>($15.03)</span>
                            <span>0,01 ETH</span>
                        </span>
                    </div>
                    <div className='d-flex justify-content-between mb12px'>
                        <span className='itemCalLeft'>Total</span>
                        <span className='itemCalRight'>
                            <span className='pr-1 itemCalRightLight'>($12,326.24)</span>
                            <span className='fw-700'>8.11 ETH</span>
                        </span>
                    </div>
                </div>

                <div className='noteTxt'>
                        <span className='pr-2'>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 2.25C14.75 2.25 18.25 5.75 18.25 10C18.25 14.2812 14.75 17.75 10.5 17.75C6.21875 17.75 2.75 14.2812 2.75 10C2.75 5.75 6.21875 2.25 10.5 2.25ZM10.5 16.25C13.9375 16.25 16.75 13.4688 16.75 10C16.75 6.5625 13.9375 3.75 10.5 3.75C7.03125 3.75 4.25 6.5625 4.25 10C4.25 13.4688 7.03125 16.25 10.5 16.25ZM10.5 5.6875C11.2188 5.6875 11.8125 6.28125 11.8125 7C11.8125 7.75 11.2188 8.3125 10.5 8.3125C9.75 8.3125 9.1875 7.75 9.1875 7C9.1875 6.28125 9.75 5.6875 10.5 5.6875ZM12.25 13.625C12.25 13.8438 12.0625 14 11.875 14H9.125C8.90625 14 8.75 13.8438 8.75 13.625V12.875C8.75 12.6875 8.90625 12.5 9.125 12.5H9.5V10.5H9.125C8.90625 10.5 8.75 10.3438 8.75 10.125V9.375C8.75 9.1875 8.90625 9 9.125 9H11.125C11.3125 9 11.5 9.1875 11.5 9.375V12.5H11.875C12.0625 12.5 12.25 12.6875 12.25 12.875V13.625Z" fill="#6E737E"/>
</svg>

                        </span>
                        <span>
                        Items in your cart are not guaranteed at purchase.
                        </span>
                </div>

                <div className='mt-4'>
                    <button className='btn btn-block checkoutBtn' onClick={() => setCheckoutModal(true)}>Check out</button>
                </div>
          </ModalBody>         
        </Modal>

        <CheckoutModal showcheckoutmodal={checkoutModal} closecheckoutmodal={() => setCheckoutModal(false)} />
        </>
    )
}

export default AddCart;