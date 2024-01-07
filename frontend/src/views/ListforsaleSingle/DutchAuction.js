import React, { useState } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import angleDown from "../../assets/images/angleDown.svg";

export const Auction = () => {

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
                <span className="formLabel">Starting Price</span>
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

            <div className="col-12 mb-3">
              <div className="d-flex align-items-center flex-wrap">
                <span className="formLabel">Ending Price</span>
              </div>
              <div className="d-flex urlFieldCnt traitsCnt mb-2">
                <div class="input-group mb-2">
                  <input type="text" class="form-control" value="0.00" />
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

            <hr className="w-100" />

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

            <div className="col-lg-12 mb-3">
              <div className="d-flex align-items-center flex-wrap">
                <span className="formLabel">Decreament Duration</span>
              </div>
              <UncontrolledDropdown className="">
                <DropdownToggle caret className="d-flex align-items-center w-100">
                  1 Minute
                  <img src={angleDown} className="ml-auto" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a">
                    <div className="d-flex align-items-center">
                      1 Minute
                    </div>
                  </DropdownItem>
                  <DropdownItem tag="a">
                    <div className="d-flex align-items-center">
                      15 Minutes
                    </div>
                  </DropdownItem>
                  <DropdownItem tag="a">
                    <div className="d-flex align-items-center">
                      1 Hour
                      <CheckTick />
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
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
              <button type="button" className="btn btn-block gradientBtn mx-2 my-2">List for Sale</button>
            </div>
          </div>
        </form>
      </>
    );
};

export default Auction;