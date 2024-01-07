import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalHeader, UncontrolledDropdown } from 'reactstrap';

// import './buynftModal.scss';
import '../../assets/scss/modalStyle.scss';

import cancelListinImg from '../../assets/images/cancelListinImg.svg';
import loaderbg from '../../assets/images/loaderbg.png';
import loader from '../../assets/images/Loader.png';


import yellowtick20 from '../../assets/images/collection/yellow-tick_20px.svg';



const CancelListingModal = (props) => {
    console.log('checkcartModal', props.showcancellistModal);
   // const [checkoutModal, setCheckoutModal] = useState(false);

    // const [dropdownOpen, setDropdownOpen] = useState(false);
    // const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    const closeBtn = <button className="close" onClick={props.closeCancelListModal}>
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

            <Modal isOpen={props.showcancellistModal} centered="true" className="mymodal" backdropClassName="selCurBp">
                <ModalHeader onClick={props.closeModal} close={closeBtn}>Cancel Listing</ModalHeader>
                <ModalBody>
                  
                    <div className='fs-16 fw-400 text-center dark-text-secondary mb12px'>To continue send transaction with your wallet.</div>
                    <div className='text-center'>
                        <div className='loadercenter'>
                            <img src={loader} alt='' className='spinAnimate' />
                        </div>
                        <img src={loaderbg} alt='loaderbg' className='img-fluid'/>
                    </div>

                </ModalBody>
            </Modal>

            {/* <CheckoutModal showcheckoutmodal={checkoutModal} closecheckoutmodal={() => setCheckoutModal(false)} /> */}

            {/* <OfferPlaceSuccess showOfferPlacemodal={offerPlaceModal} closeOfferPlacemodal={() => setOfferPlaceModal(false)} /> */}
        </>
    )
}

export default CancelListingModal;