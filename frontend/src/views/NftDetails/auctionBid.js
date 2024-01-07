import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import '../../assets/scss/modalStyle.scss';
import PlaceABidModal from './placeBid/placeBidModal';


const AuctionBids = (props) => {
   // console.log('checkModal', props.modalOpen); 

   const[placeBids, setPlaceBids] = useState(false);

   const closeBtn = <button className="close" onClick={props.closeModal}>
   <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M12.3359 10.5L16.5547 14.7188C16.7891 14.9531 16.7891 15.3828 16.5547 15.6172L15.5781 16.5938C15.3438 16.8281 14.9141 16.8281 14.6797 16.5938L10.5 12.375L6.28125 16.5938C6.04688 16.8281 5.61719 16.8281 5.38281 16.5938L4.40625 15.6172C4.17188 15.3828 4.17188 14.9531 4.40625 14.7188L8.625 10.5L4.40625 6.32031C4.17188 6.08594 4.17188 5.65625 4.40625 5.42188L5.38281 4.44531C5.61719 4.21094 6.04688 4.21094 6.28125 4.44531L10.5 8.66406L14.6797 4.44531C14.9141 4.21094 15.3438 4.21094 15.5781 4.44531L16.5547 5.42188C16.7891 5.65625 16.7891 6.08594 16.5547 6.32031L12.3359 10.5Z" fill="#6E737E"/>
   </svg>
   </button>;

    return(
        <>
         <Modal isOpen={props.modalOpen} onClick={props.closeModal}  centered="true" className="mymodal modalLG" backdropClassName="selCurBp">
          <ModalHeader onClick={props.closeModal} close={closeBtn}>Bids</ModalHeader>
          <ModalBody>
            <div className='borderBox mb-4'>
                <div className='d-flex flex-wrap justify-content-between'>
                        <div>
                            <div className='fs-14 fw-400 dark-text-secondary'>Bids</div>
                            <div className='fs-16 fw-400 dark-text'>54</div>
                        </div>
                        <div>
                            <div className='fs-14 fw-400 dark-text-secondary'>Bidders</div>
                            <div className='fs-16 fw-400 dark-text'>30</div>
                        </div>
                        <div>
                            <div className='fs-14 fw-400 dark-text-secondary'>Retractions</div>
                            <div className='fs-16 fw-400 dark-text'>2</div>
                        </div>
                        <div>
                            <div className='fs-14 fw-400 dark-text-secondary'>Time Left</div>
                            <div className='fs-16 fw-400 dark-text'>00d 19h 27m 29s</div>
                        </div>
                        <div>
                            <div className='fs-14 fw-400 dark-text-secondary'>Duration</div>
                            <div className='fs-16 fw-400 dark-text'>7 Days</div>
                        </div>
                </div>
            </div>
            <table className="table table-borderless table-hover mb-0 hmecollection nftTables_offers">
                    <thead className="trd_head">
                        <tr>
                            <th>Bid Amount</th>
                            <th>USD Price</th>
                            <th>Bid Time</th>
                            <th>Bidder</th>
                        </tr>
                    </thead>
                    <tbody className='trdtable_body'>
                        <tr>
                            <td>34.31 ETH</td>
                            <td>$53,941.95</td>
                            <td>7:14 PM, Oct 11</td>
                            <td className='yellowTxt'><span class="leadLabel mr-2">Lead</span> Phillip Kenter</td>
                        </tr> 
                        <tr>
                            <td>34.31 ETH</td>
                            <td>$53,941.95</td>
                            <td>7:14 PM, Oct 11</td>
                            <td className='yellowTxt'><span class="leadLabel mr-2">Lead</span> Phillip Kenter</td>
                        </tr> 
                        <tr>
                            <td>34.31 ETH</td>
                            <td>$53,941.95</td>
                            <td>7:14 PM, Oct 11</td>
                            <td className='yellowTxt'><span class="leadLabel mr-2">Lead</span> Phillip Kenter</td>
                        </tr>
                        <tr>
                            <td>34.31 ETH</td>
                            <td>$53,941.95</td>
                            <td>7:14 PM, Oct 11</td>
                            <td className='yellowTxt'><span class="leadLabel mr-2">Lead</span> Phillip Kenter</td>
                        </tr> 
                        <tr>
                            <td>34.31 ETH</td>
                            <td>$53,941.95</td>
                            <td>7:14 PM, Oct 11</td>
                            <td className='yellowTxt'><span class="leadLabel mr-2">Lead</span> Phillip Kenter</td>
                        </tr> 
                        <tr>
                            <td>34.31 ETH</td>
                            <td>$53,941.95</td>
                            <td>7:14 PM, Oct 11</td>
                            <td className='yellowTxt'><span class="leadLabel mr-2">Lead</span> Phillip Kenter</td>
                        </tr> 
                        <tr>
                            <td>34.31 ETH</td>
                            <td>$53,941.95</td>
                            <td>7:14 PM, Oct 11</td>
                            <td className='yellowTxt'><span class="leadLabel mr-2">Lead</span> Phillip Kenter</td>
                        </tr> 
                        <tr>
                            <td>34.31 ETH</td>
                            <td>$53,941.95</td>
                            <td>7:14 PM, Oct 11</td>
                            <td className='yellowTxt'><span class="leadLabel mr-2">Lead</span> Phillip Kenter</td>
                        </tr> 
                        <tr>
                            <td>34.31 ETH</td>
                            <td>$53,941.95</td>
                            <td>7:14 PM, Oct 11</td>
                            <td className='yellowTxt'><span class="leadLabel mr-2">Lead</span> Phillip Kenter</td>
                        </tr>                      
                    </tbody>
                </table>

                <div className='d-flex flex-wrap justify-content-between mt-4'>
                    <button className='btn darkBtn my-1 '>Get Back</button>
                    <button className='btn gradientBtn my-1' onClick={()=>setPlaceBids(true)}>Place a Bid</button>
                </div>
          </ModalBody>
          </Modal>


          <PlaceABidModal modalOpen={placeBids} closeModal={()=>setPlaceBids(false)} />
        </>
    )
}

export default AuctionBids;