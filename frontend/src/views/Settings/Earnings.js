import React, { useState } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Modal, UncontrolledPopover, PopoverBody, UncontrolledTooltip } from 'reactstrap';
import angleDown from "../../assets/images/angleDown.svg";
import aiPfpClub from '../../assets/images/itemIcons/aiPfpClub.png';
import IconModal from '../../assets/images/IconModal.png';
import walletLoaderCnt from "../../assets/images/walletLoader.png";
import yellowTick from "../../assets/images/collection/yellow-tick_20px.svg";
import copyIcon from '../../assets/images/copyIcon.svg';
import logoImg from '../../assets/images/logoImg.png';
import coverImg from '../../assets/images/coverImg.png';
import Pencil from '../../assets/images/Pencil.svg';
import twitter from '../../assets/images/twitterNew.svg';
import instagram from '../../assets/images/instagram.svg';
import globe from '../../assets/images/globe.svg';
import infoIcon from '../../assets/images/infoIcon.svg';
import facebook from '../../assets/images/facebook.svg';
import twitterNew from '../../assets/images/twitterNew.svg';
import telegram from '../../assets/images/telegram-plane.svg';
import checkIcon from '../../assets/images/toast/checkIcon.svg';
import noItemfoundImage from '../../assets/images/collection/noItemfoundImage.svg';
import userImage from '../../assets/images/collection/userImage.png';
import deGods from '../../assets/images/itemIcons/deGods.png';
import tick from '../../assets/images/collection/yellow-tick_20px.svg';
import eth from '../../assets/images/ethIconSm.png';
import bnb from '../../assets/images/bnbIconSm.png';
//import '../MyCollection/myCollection.scss';
import '../../assets/scss/mycollecion_mint.scss';
import './Settings.scss';

export const SettingsEarnings = () => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const CheckTick = () => {
    return (
    <>
      <svg className="ml-auto" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.1953 0.46875C10.3125 0.351562 10.5 0.351562 10.5938 0.46875L11.2734 1.125C11.3672 1.24219 11.3672 1.42969 11.2734 1.52344L4.24219 8.55469C4.125 8.67188 3.96094 8.67188 3.84375 8.55469L0.703125 5.4375C0.609375 5.32031 0.609375 5.13281 0.703125 5.03906L1.38281 4.35938C1.47656 4.26562 1.66406 4.26562 1.78125 4.35938L4.03125 6.63281L10.1953 0.46875Z" fill="#55f764"/>
      </svg>
    </>
  )
}

    return (
      <>
        <div className="d-flex align-items-center mb-3">
          <h3 className="settingsHeading mb-0">Earnings</h3>
          </div>
          <div className="createCollectionCard mb-3">
            <form className="w-100">
              <div className="form-row">
                <div className="col-12 mb-3">
                  <div className="walletCnt mb-3">
                    <h3>92fwr424...0394</h3>
                    <span className="walletLabel successLabel ml-auto">Wallet Connected</span>
                    <img src={copyIcon} className="ml-2" />
                  </div>
                </div>

                <div className="col-12">
                  <div className='noItemFound'>
                    <div className='text-center'>
                        <img src={noItemfoundImage} alt="noItemfoundImage" className='img-fluid'/>
                    </div>
                    <div className='nofounttxt mb-2'>
                      No Earnings.
                    </div>
                    <p className="greyTxt mb-4">This wallet address does not have any creator earnings from sales using WARRIOR in 2022.</p>
                  </div>
                </div>

              </div>
            </form>
          </div>

      </>
    );
};

export default SettingsEarnings;