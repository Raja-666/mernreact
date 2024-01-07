import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import copyIcon from '../../../assets/images/copyIcon.svg';
import BidPlaceSuccessModal from './bidplaceSuccess';

const AddFundsModal = (props) => {
    const [bidplacesuccessModal, setBidPlaceSuccessModal] = useState(false);

    const closeBtn = <button className="close" onClick={props.closeModal}>
   <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M12.3359 10.5L16.5547 14.7188C16.7891 14.9531 16.7891 15.3828 16.5547 15.6172L15.5781 16.5938C15.3438 16.8281 14.9141 16.8281 14.6797 16.5938L10.5 12.375L6.28125 16.5938C6.04688 16.8281 5.61719 16.8281 5.38281 16.5938L4.40625 15.6172C4.17188 15.3828 4.17188 14.9531 4.40625 14.7188L8.625 10.5L4.40625 6.32031C4.17188 6.08594 4.17188 5.65625 4.40625 5.42188L5.38281 4.44531C5.61719 4.21094 6.04688 4.21094 6.28125 4.44531L10.5 8.66406L14.6797 4.44531C14.9141 4.21094 15.3438 4.21094 15.5781 4.44531L16.5547 5.42188C16.7891 5.65625 16.7891 6.08594 16.5547 6.32031L12.3359 10.5Z" fill="#6E737E"/>
   </svg>
   </button>;
    return(
        <>
        <Modal isOpen={props.modalOpen} centered="true" className="mymodal" backdropClassName="selCurBp">
         <ModalHeader onClick={props.closeModal} close={closeBtn}>Add funds</ModalHeader>
         <ModalBody>
            <div className='dark-text-secondary fs-16 fw-400 mb-3 text-center'>
                Transfer funds to your wallet or add funds with a card. It can take up to a minute for your balance to update.
            </div>
            <div className='position-relative zindex1'>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <div>
                                <span className='fs-14 fw-400 dark-text-grey'>Wallet</span>
                                {/* <span className="walletLabel successLabel ml-2">Connected</span> */}
                            </div>
                            <div className='fs-14 fw-400 dark-text-grey'>Balance: <span class="fw-600">0 ETH</span></div>
                        </div>
                        
                        <div className="walletCnt d-flex align-items-center flex-wrap mb-3">
                            <h3>92fwr424...0394</h3>
                            <a href="" className="ml-auto"><img src={copyIcon} className="ml-2" /></a>
                        </div>
            </div>
            <div className='mt-4'>
                <button className='btn btn-block btnSecondary' onClick={()=>setBidPlaceSuccessModal(true)}>Continue</button>
            </div>
         </ModalBody>
         </Modal>

         <BidPlaceSuccessModal  modalOpen={bidplacesuccessModal} closeBidModal={()=>setBidPlaceSuccessModal(false)}/>
       </>
    )
}

export default AddFundsModal;