import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalHeader, UncontrolledDropdown } from 'reactstrap';

//import './buynftModal.scss';
import '../../assets/scss/modalStyle.scss';

import item1 from '../../assets/images/collection/modalItem1.png';
import copyIcon from '../../assets/images/copyIcon.svg';


import yellowtick20 from '../../assets/images/collection/yellow-tick_20px.svg';

import OfferPlaceSuccess from '../offerplaceSuccess/offerplaceSuccess';
import CheckoutModal from '../checkoutModal/checkout';

const BuyNFTModal = (props) => {
    console.log('checkcartModal', props.modalOpen);
    const [checkoutModal, setCheckoutModal] = useState(false);

    // const [dropdownOpen, setDropdownOpen] = useState(false);
    // const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    const closeBtn = <button className="close" onClick={props.modalclose}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3359 10.5L16.5547 14.7188C16.7891 14.9531 16.7891 15.3828 16.5547 15.6172L15.5781 16.5938C15.3438 16.8281 14.9141 16.8281 14.6797 16.5938L10.5 12.375L6.28125 16.5938C6.04688 16.8281 5.61719 16.8281 5.38281 16.5938L4.40625 15.6172C4.17188 15.3828 4.17188 14.9531 4.40625 14.7188L8.625 10.5L4.40625 6.32031C4.17188 6.08594 4.17188 5.65625 4.40625 5.42188L5.38281 4.44531C5.61719 4.21094 6.04688 4.21094 6.28125 4.44531L10.5 8.66406L14.6797 4.44531C14.9141 4.21094 15.3438 4.21094 15.5781 4.44531L16.5547 5.42188C16.7891 5.65625 16.7891 6.08594 16.5547 6.32031L12.3359 10.5Z" fill="#6E737E" />
        </svg>
    </button>;

    // const CheckTick = () => {
    //     return (
    //         <>
    //             <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <path d="M10.1953 0.46875C10.3125 0.351562 10.5 0.351562 10.5938 0.46875L11.2734 1.125C11.3672 1.24219 11.3672 1.42969 11.2734 1.52344L4.24219 8.55469C4.125 8.67188 3.96094 8.67188 3.84375 8.55469L0.703125 5.4375C0.609375 5.32031 0.609375 5.13281 0.703125 5.03906L1.38281 4.35938C1.47656 4.26562 1.66406 4.26562 1.78125 4.35938L4.03125 6.63281L10.1953 0.46875Z" fill="#55f764" />
    //             </svg>
    //         </>
    //     )
    // }


    return (
        <>
            {/* <Button color="danger" onClick={toggle}>Click</Button> */}

            <Modal isOpen={props.modalOpen} centered="true" className="mymodal" backdropClassName="selCurBp">
                <ModalHeader onClick={props.closeModal} close={closeBtn}>Buy NFT</ModalHeader>
                <ModalBody>

                    <div>
                        <div className='cartItem'>
                            <div className='itemImg'>
                                <img src={item1} alt="item1" />
                            </div>
                            <div className='flex-grow-1 p-3'>
                                <div className='d-flex justify-content-between mb-2'>
                                    <div className='itemName'>Azuki <img src={yellowtick20} alt="yellowtick20" className='ml-1' /></div>
                                    <span className='fs-14 fw-400 dark-text-secondary'>
                                        {/* $-- */}
                                    </span>
                                </div>
                                <div className='d-flex justify-content-between mb-n1'>
                                    <div className='itemId'>Azuki #8372</div>
                                    <span className='itemBal'>8.1 ETH</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr className='hrCls' />
                    <div className='position-relative zindex1'>
                        <div className="d-flex align-items-center mb-3">
                            <span className='fs-14 fw-600 dark-text'>Wallet</span>
                            <span className="walletLabel successLabel ml-2">Connected</span>
                        </div>
                        
                        <div className="walletCnt d-flex align-items-center flex-wrap mb-3">
                            <h3>92fwr424...0394</h3>
                            <a href="" className="ml-auto"><img src={copyIcon} className="ml-2" /></a>
                        </div>
                        {/* <div className='d-flex justify-content-between mb-1'>
                            <span className='fs-14 fw-600 dark-text'>Price</span>
                            <span className='fs-14 fw-400 dark-red'>Not enough funds</span>
                        </div>
                        <div className='form-group formInputs'>
                            <InputGroup>
                                <Input placeholder='0.00' />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText className='pr-0'>
                                        <UncontrolledDropdown>
                                            <DropdownToggle className='input-Dropdown'>
                                                ETH <i className='fas fa-angle-down'></i>
                                            </DropdownToggle>
                                            <DropdownMenu right className='ig-dmenu'>
                                                <DropdownItem>Header</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </div> */}

                        {/* <div className='d-flex justify-content-between mb-1'>
                            <span className='fs-14 fw-600 dark-text'>Duration</span>
                        </div>
                        <div className='row form-row position-relative zindex-1'>
                            <div className='col-lg-8'>
                                <div className='form-group formInputs'>
                                    <InputGroup>
                                        <Input placeholder='29.08.2023' />
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText className='pr-0'>
                                                <span className="fs-16 fw-400">7:23 PM</span>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className='customdropdown w-100'>
                                <DropdownToggle className='w-100'>
                                    <span>7 Days</span> <i className={`fas ${dropdownOpen ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                                </DropdownToggle>
                                <DropdownMenu right>
                            <DropdownItem><div>All Time</div><div><CheckTick /></div></DropdownItem>
                            <DropdownItem><div>12 Hours</div><div><CheckTick /></div></DropdownItem>
                            <DropdownItem><div>1 Day</div><div><CheckTick /></div></DropdownItem>
                            <DropdownItem><div>3 Days</div><div><CheckTick /></div></DropdownItem>
                            <DropdownItem><div>7 Days</div><div><CheckTick /></div></DropdownItem>
                            <DropdownItem><div>1 Month</div><div><CheckTick /></div></DropdownItem>
                            <DropdownItem><div>Custom</div><div><CheckTick /></div></DropdownItem>
                                               
                        </DropdownMenu>
                        </Dropdown>
                            </div>
                        </div> */}
                    </div>

                    <hr className='hrCls mt-3' />

                    <div className='borderRoundedCard'>
                        <div class="d-flex justify-content-between mb-2">
                            <div className='fs-14 fw-400 dark-text-secondary'>Subtotal</div>
                            <div className='fs-16 fw-400 dark-text'><span className='dark-text-grey fs-16 fw-400'>($12,311.21)</span> 8.1 ETH</div>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                            <div className='fs-14 fw-400 dark-text-secondary'>Fee</div>
                            <div className='fs-16 fw-400 dark-text'><span className='dark-text-grey fs-16 fw-400'>($15.03)</span> 0,01 ETH</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div className='fs-14 fw-400 dark-text-secondary'>Total</div>
                            <div className='fs-16 fw-700 dark-text'><span className='dark-text-grey fs-16 fw-400'>($12,326.24)</span> 8.11 ETH</div>
                        </div>
                    </div>



                    <div className='mt-4'>
                        <button className='btn btn-block checkoutBtn' onClick={() => setCheckoutModal(true)}>Checkout </button>
                        {/* <p className="text-danger fs-14 text-center">Insufficient funds!</p>
                        <button className='btn btn-block darkBtn'>Add Funds </button> */}
                    </div>

                </ModalBody>
            </Modal>

            <CheckoutModal showcheckoutmodal={checkoutModal} closecheckoutmodal={() => setCheckoutModal(false)} />

            {/* <OfferPlaceSuccess showOfferPlacemodal={offerPlaceModal} closeOfferPlacemodal={() => setOfferPlaceModal(false)} /> */}
        </>
    )
}

export default BuyNFTModal;