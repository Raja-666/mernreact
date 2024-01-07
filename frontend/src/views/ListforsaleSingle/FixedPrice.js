import React, { useState } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Modal } from 'reactstrap';
import angleDown from "../../assets/images/angleDown.svg";
import aiPfpClub from '../../assets/images/itemIcons/aiPfpClub.png';
import IconModal from '../../assets/images/IconModal.png';
import walletLoaderCnt from "../../assets/images/walletLoader.png";
import walletLoader from "../../assets/images/loaderCircle.png";

export const FixedPrice = () => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const CheckTick = () => {
    return (
    <>
      <svg class="ml-auto" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.1953 0.46875C10.3125 0.351562 10.5 0.351562 10.5938 0.46875L11.2734 1.125C11.3672 1.24219 11.3672 1.42969 11.2734 1.52344L4.24219 8.55469C4.125 8.67188 3.96094 8.67188 3.84375 8.55469L0.703125 5.4375C0.609375 5.32031 0.609375 5.13281 0.703125 5.03906L1.38281 4.35938C1.47656 4.26562 1.66406 4.26562 1.78125 4.35938L4.03125 6.63281L10.1953 0.46875Z" fill="#55f764"/>
      </svg>
    </>
  )
}

    return (
      <>
        <form>
          <div className="form-row">
            <div className="col-12 mb-3">
              <div className="d-flex align-items-center flex-wrap">
                <span className="formLabel">Price</span>
              </div>
              <div className="d-flex urlFieldCnt traitsCnt mb-2">
                <div class="input-group mb-2">
                  <input type="text" class="form-control" value="0.98" />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <select>
                        <option>ETH</option>
                        <option>BNB</option>
                        <option>MATIC</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-3">
              <div className="d-flex align-items-center flex-wrap">
                <span className="formLabel">Duration</span>
              </div>
              <UncontrolledDropdown className="">
                <DropdownToggle caret className="d-flex align-items-center w-100">
                  7 Days
                  <img src={angleDown} className="ml-auto" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a">
                    <div className="d-flex align-items-center">
                      1 Hour
                    </div>
                  </DropdownItem>
                  <DropdownItem tag="a">
                    <div className="d-flex align-items-center">
                      6 Hours
                    </div>
                  </DropdownItem>
                  <DropdownItem tag="a">
                    <div className="d-flex align-items-center">
                      1 Day
                    </div>
                  </DropdownItem>
                  <DropdownItem tag="a">
                    <div className="d-flex align-items-center">
                      3 Days
                    </div>
                  </DropdownItem>
                  <DropdownItem tag="a">
                    <div className="d-flex align-items-center">
                      7 Days
                      <CheckTick />
                    </div>
                  </DropdownItem>
                  <DropdownItem tag="a">
                    <div className="d-flex align-items-center">
                      1 Month
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>

            <div className="col-lg-6 mb-3">
              <div className="d-flex align-items-center flex-wrap">
                <span className="formLabel">Ends At</span>
              </div>
              <div className="d-flex urlFieldCnt traitsCnt">
                <div class="input-group">
                  <input type="text" class="form-control" value="29-08-2023" />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      07:23 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-100" />

            <div className="col-12 mt-3">
              <div className="borderedCnt mb-3">
                <div className="valueRow d-flex align-items-center flex-wrap mb-2">
                  <h3>Listing Price</h3>
                  <span className="valueLabel ml-auto">0.98 ETH</span>
                </div>
                <div className="valueRow d-flex align-items-center flex-wrap mb-2">
                  <h3>WARRIOR Fee</h3>
                  <span className="valueLabel ml-auto">2%</span>
                </div>
                <div className="valueRow d-flex align-items-center flex-wrap mb-2">
                  <h3>Creator Earnings</h3>
                  <span className="valueLabel ml-auto">6%</span>
                </div>
                <div className="valueRow d-flex align-items-center flex-wrap mb-2">
                  <h3>Potential Earnings</h3>
                  <span className="valueLabel ml-auto"><span>($1,432.63)</span>0.9016 ETH</span>
                </div>
              </div>
            </div>
            <hr className="w-100" />

            <div className="col-12 d-flex align-items-center mb-3">
              <button type="button" className="btn btn-block blackBtn mx-2 my-2">Cancel</button>
              <button type="button" className="btn btn-block gradientBtn mx-2 my-2" onClick={toggle}>List for Sale</button>
            </div>
          </div>
        </form>


        <Modal isOpen={modal} toggle={toggle} centered="true" className="curMdl createScsMdl" backdropClassName="selCurBp">
            <div className="createContent">
              <button className="btn closeBtn" onClick={toggle}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.46875 6L10.8438 9.375C11.0312 9.5625 11.0312 9.90625 10.8438 10.0938L10.0625 10.875C9.875 11.0625 9.53125 11.0625 9.34375 10.875L6 7.5L2.625 10.875C2.4375 11.0625 2.09375 11.0625 1.90625 10.875L1.125 10.0938C0.9375 9.90625 0.9375 9.5625 1.125 9.375L4.5 6L1.125 2.65625C0.9375 2.46875 0.9375 2.125 1.125 1.9375L1.90625 1.15625C2.09375 0.96875 2.4375 0.96875 2.625 1.15625L6 4.53125L9.34375 1.15625C9.53125 0.96875 9.875 0.96875 10.0625 1.15625L10.8438 1.9375C11.0312 2.125 11.0312 2.46875 10.8438 2.65625L7.46875 6Z" fill="#595F6A" />
                </svg>
              </button>
              <div className="d-flex justify-content-center">
                <img src={aiPfpClub} />
              </div>
              <h3 className="walletHeading my-3">Item has been listed!</h3>
              <p className="text-center"><span>Azuki #8372</span> from <span>Azuki</span> collection has been listed for sale.</p>
              <button type="button" className="btn btn-block gradientBtn">View Listing</button>
            </div>
            {/* <div className="createContent">
              <button className="btn closeBtn" onClick={toggle}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.46875 6L10.8438 9.375C11.0312 9.5625 11.0312 9.90625 10.8438 10.0938L10.0625 10.875C9.875 11.0625 9.53125 11.0625 9.34375 10.875L6 7.5L2.625 10.875C2.4375 11.0625 2.09375 11.0625 1.90625 10.875L1.125 10.0938C0.9375 9.90625 0.9375 9.5625 1.125 9.375L4.5 6L1.125 2.65625C0.9375 2.46875 0.9375 2.125 1.125 1.9375L1.90625 1.15625C2.09375 0.96875 2.4375 0.96875 2.625 1.15625L6 4.53125L9.34375 1.15625C9.53125 0.96875 9.875 0.96875 10.0625 1.15625L10.8438 1.9375C11.0312 2.125 11.0312 2.46875 10.8438 2.65625L7.46875 6Z" fill="#595F6A" />
                </svg>
              </button>
              <div className="d-flex justify-content-center">
                <img src={IconModal} />
              </div>
              <h3 className="walletHeading my-3">Something went wrong</h3>
              <button type="button" className="btn btn-block darkBtn">Okay</button>
            </div> */}
            
            {/* <div>
              <h3 className="walletHeading my-3">Loading</h3>
              <h3 className="walletSubHeading">To continue send transaction with your wallet.</h3>
              <div className="d-flex justify-content-center align-items-center loaderCont">
                <img src={walletLoaderCnt} />
                <div className="loaderAnimCnt">
                    <img src={walletLoader} className="loaderAnimation" />
                </div>
              </div>
            </div> */}
         </Modal>
      </>
    );
};

export default FixedPrice;