import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

//import './offerplaceSuccess.scss';
import '../../../assets/scss/modalStyle.scss';

import item1 from '../../../assets/images/collection/modalItem1.png';
import item2 from '../../../assets/images/collection/modalItem2.png';

import removeIcon from '../../../assets/images/collection/trash-alt.svg';
import yellowtick20 from '../../../assets/images/collection/yellow-tick_20px.svg';

const BidPlaceSuccessModal = (props) => {
    //console.log('checkcartModal', props.modalOpen);    
    // const {
    //     buttonLabel,
    //     className
    //   } = props;
    
    //   const [modal, setModal] = useState(props.modalclose);   
    //     console.log('check', modal) 
      //const toggle = () => setModal(props.modalclose);

      const closeBtn = <button className="close" onClick={props.closeBidModal}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3359 10.5L16.5547 14.7188C16.7891 14.9531 16.7891 15.3828 16.5547 15.6172L15.5781 16.5938C15.3438 16.8281 14.9141 16.8281 14.6797 16.5938L10.5 12.375L6.28125 16.5938C6.04688 16.8281 5.61719 16.8281 5.38281 16.5938L4.40625 15.6172C4.17188 15.3828 4.17188 14.9531 4.40625 14.7188L8.625 10.5L4.40625 6.32031C4.17188 6.08594 4.17188 5.65625 4.40625 5.42188L5.38281 4.44531C5.61719 4.21094 6.04688 4.21094 6.28125 4.44531L10.5 8.66406L14.6797 4.44531C14.9141 4.21094 15.3438 4.21094 15.5781 4.44531L16.5547 5.42188C16.7891 5.65625 16.7891 6.08594 16.5547 6.32031L12.3359 10.5Z" fill="#6E737E"/>
                        </svg>
                        </button>;


    return(
        <>
        {/* <Button color="danger" onClick={toggle}>Click</Button> */}

        <Modal isOpen={props.modalOpen} centered="true" className="mymodal" backdropClassName="selCurBp">
          <ModalHeader onClick={props.closeBidModal} close={closeBtn}></ModalHeader>
          <ModalBody>
                <div className='text-center mt-n4'>
                       <svg className='mb12px' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="12" fill="#00B976"/>
                        <path d="M25.5938 14.625C25.75 14.4688 26 14.4688 26.125 14.625L27.0312 15.5C27.1562 15.6562 27.1562 15.9062 27.0312 16.0312L17.6562 25.4062C17.5 25.5625 17.2812 25.5625 17.125 25.4062L12.9375 21.25C12.8125 21.0938 12.8125 20.8438 12.9375 20.7188L13.8438 19.8125C13.9688 19.6875 14.2188 19.6875 14.375 19.8125L17.375 22.8438L25.5938 14.625Z" fill="white"/>
                        </svg>

                        <div className='checkTit mb-2'>Bid placed successfully!</div>
                        <div className='subcheckTxt mb-2'>
                        You’ve placed an bid on <br />
                        <span className='fw-700 dark-text'>Azuki #8372</span> from <span className='fw-700 dark-text'>Azuki.</span>
                        </div>
                        <div className='subcheckTxt mb-3'>Please wait until auction ended.</div>

                </div>
               
               
                <div>
                <div className='noteTxt'>
                        <span className='pr-2'>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3.9375C5.1875 3.9375 2.9375 6.21094 2.9375 9C2.9375 11.8125 5.1875 14.0625 8 14.0625C10.7891 14.0625 13.0625 11.8125 13.0625 9C13.0625 6.21094 10.7656 3.9375 8 3.9375ZM8 3.1875C11.1875 3.1875 13.8125 5.8125 13.8125 9C13.8125 12.2109 11.1875 14.8125 8 14.8125C4.78906 14.8125 2.1875 12.2109 2.1875 9C2.1875 5.8125 4.78906 3.1875 8 3.1875ZM7.15625 11.25H7.4375V8.4375H7.15625C6.99219 8.4375 6.875 8.32031 6.875 8.15625V7.96875C6.875 7.82812 6.99219 7.6875 7.15625 7.6875H8.28125C8.42188 7.6875 8.5625 7.82812 8.5625 7.96875V11.25H8.84375C8.98438 11.25 9.125 11.3906 9.125 11.5312V11.7188C9.125 11.8828 8.98438 12 8.84375 12H7.15625C6.99219 12 6.875 11.8828 6.875 11.7188V11.5312C6.875 11.3906 6.99219 11.25 7.15625 11.25ZM8 5.625C8.39844 5.625 8.75 5.97656 8.75 6.375C8.75 6.79688 8.39844 7.125 8 7.125C7.57812 7.125 7.25 6.79688 7.25 6.375C7.25 5.97656 7.57812 5.625 8 5.625Z" fill="#6E737E"/>
</svg>
                        </span>
                        <span>
                        The relevant amount of crypto will be frozen, and will be automatically released when your offer is canceled or expired.
                        </span>
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

export default BidPlaceSuccessModal;