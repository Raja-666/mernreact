import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalHeader, UncontrolledDropdown } from 'reactstrap';

//import './makeOffer.scss';
import '../../../assets/scss/modalStyle.scss';


import item1 from '../../../assets/images/collection/modalItem1.png';

import yellowtick20 from '../../../assets/images/collection/yellow-tick_20px.svg';
import AddFundsModal from './addfundsModal';



const PlaceABidModal = (props) => {
    console.log('checkcartModal', props.modalOpen);
    
    const[addfundmodal, setAddFundModal] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    const closeBtn = <button className="close" onClick={props.modalclose}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3359 10.5L16.5547 14.7188C16.7891 14.9531 16.7891 15.3828 16.5547 15.6172L15.5781 16.5938C15.3438 16.8281 14.9141 16.8281 14.6797 16.5938L10.5 12.375L6.28125 16.5938C6.04688 16.8281 5.61719 16.8281 5.38281 16.5938L4.40625 15.6172C4.17188 15.3828 4.17188 14.9531 4.40625 14.7188L8.625 10.5L4.40625 6.32031C4.17188 6.08594 4.17188 5.65625 4.40625 5.42188L5.38281 4.44531C5.61719 4.21094 6.04688 4.21094 6.28125 4.44531L10.5 8.66406L14.6797 4.44531C14.9141 4.21094 15.3438 4.21094 15.5781 4.44531L16.5547 5.42188C16.7891 5.65625 16.7891 6.08594 16.5547 6.32031L12.3359 10.5Z" fill="#6E737E" />
        </svg>
    </button>;

    const CheckTick = () => {
        return (
            <>
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.1953 0.46875C10.3125 0.351562 10.5 0.351562 10.5938 0.46875L11.2734 1.125C11.3672 1.24219 11.3672 1.42969 11.2734 1.52344L4.24219 8.55469C4.125 8.67188 3.96094 8.67188 3.84375 8.55469L0.703125 5.4375C0.609375 5.32031 0.609375 5.13281 0.703125 5.03906L1.38281 4.35938C1.47656 4.26562 1.66406 4.26562 1.78125 4.35938L4.03125 6.63281L10.1953 0.46875Z" fill="#55f764" />
                </svg>
            </>
        )
    }


    return (
        <>
            {/* <Button color="danger" onClick={toggle}>Click</Button> */}

            <Modal isOpen={props.modalOpen} centered="true" className="mymodal" backdropClassName="selCurBp">
                <ModalHeader onClick={props.closeModal} close={closeBtn}>Place a Bid</ModalHeader>
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
                                        $--
                                    </span>
                                </div>
                                <div className='d-flex justify-content-between mb-n1'>
                                    <div className='itemId'>Azuki #8372</div>
                                    <span className='itemBal'>-- ETH</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr className='hrCls' />
                    <div className='borderRoundedCard'>
                        <div class="d-flex justify-content-between mb-2">
                            <div className='fs-14 fw-400 dark-text-secondary'>Your Balance</div>
                            <div className='fs-16 fw-600 dark-text'>0 ETH</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div className='fs-14 fw-400 dark-text-secondary'>Highest Bid</div>
                            <div className='fs-16 fw-600 dark-text'>117.864 ETH</div>
                        </div>
                    </div>

                   

                    <hr className='hrCls mt-3' />

                    <div className='position-relative zindex1'>
                        <div className='d-flex justify-content-between mb-1'>
                            <span className='fs-14 fw-600 dark-text'>Bid</span>
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
                        </div>
                    </div>

                    <div className='warningbx'>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.50781 5.125H9.46484C9.57422 5.125 9.62891 5.20703 9.62891 5.31641L9.4375 10.6758C9.4375 10.7578 9.35547 10.8125 9.27344 10.8125H8.69922C8.61719 10.8125 8.53516 10.7578 8.53516 10.6758L8.34375 5.31641C8.34375 5.20703 8.39844 5.125 8.50781 5.125ZM9 11.3594C9.41016 11.3594 9.76562 11.7148 9.76562 12.125C9.76562 12.5625 9.41016 12.8906 9 12.8906C8.5625 12.8906 8.23438 12.5625 8.23438 12.125C8.23438 11.7148 8.5625 11.3594 9 11.3594ZM16.6836 12.7812C17.2031 13.6562 16.5469 14.75 15.5625 14.75H2.4375C1.42578 14.75 0.796875 13.6562 1.28906 12.7812L7.85156 1.40625C8.34375 0.53125 9.62891 0.53125 10.1211 1.40625L16.6836 12.7812ZM15.5625 13.875C15.8906 13.875 16.1094 13.5195 15.918 13.2188L9.35547 1.84375C9.19141 1.57031 8.78125 1.57031 8.61719 1.84375L2.05469 13.2188C1.89062 13.5195 2.08203 13.875 2.4375 13.875H15.5625Z" fill="white"/>
                        </svg>
                        <span className='pl-2'>Your bid should be higher than <span class="fw-600">117.864 ETH</span>!</span>
                    </div>
                    
                    <div className='mt-4'>
                        <button className='btn btn-block btnSecondary' onClick={()=>setAddFundModal(true)}>Add Funds </button>
                    </div>

                </ModalBody>
            </Modal>
            <AddFundsModal modalOpen={addfundmodal} closeModal={()=>setAddFundModal(false)} />
            {/* <OfferPlaceSuccess showOfferPlacemodal={offerPlaceModal} closeOfferPlacemodal={() => setOfferPlaceModal(false)} /> */}
        </>
    )
}

export default PlaceABidModal;