import React, { useState } from 'react';
import alertDanger from '../../assets/images/alertDanger.svg';
import aiPfpClub from '../../assets/images/itemIcons/aiPfpClub.png';
import IconModal from '../../assets/images/IconModal.png';
import walletLoaderCnt from "../../assets/images/walletLoader.png";
import walletLoader from "../../assets/images/loaderCircle.png";
import angleDown from "../../assets/images/angleDown.svg";
import coverImg from '../../assets/images/coverImg.png';
import Pencil from '../../assets/images/Pencil.svg';
import plus from '../../assets/images/plus.svg';
import userImage from '../../assets/images/collection/userImage.png';
import deGods from '../../assets/images/itemIcons/deGods.png';
import tick from '../../assets/images/collection/yellow-tick_20px.svg';
import modalItem1 from '../../assets/images/collection/modalItem1.png';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledDropdown, Modal } from 'reactstrap';
import classnames from 'classnames';
//import '../MyCollection/myCollection.scss';
import '../../assets/scss/mycollecion_mint.scss';
import './listforsale.scss';
import FixedPrice from './FixedPrice';
import Auction from './Auction';
import DutchAuction from './DutchAuction';
import { useLocation, useNavigate } from 'react-router-dom';




export const Listforsale = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  const [activeTab, setActiveTab] = useState('3');
  const toggle2 = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // State for sale details
  const [saleDetails, setSaleDetails] = useState({
    type: '',
    name: '',
    price: '',
    duration: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSaleDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleListForSale = () => {
    
    console.log('Listing NFT for sale:', saleDetails);
    toggle(); // Close the modal after listing
  };

    return (
      <>
        <div className="row">
          <div className="col-lg-2 mb-3">
            <button className="backIcon"><i className="fas fa-angle-left" onClick={() => navigate(-1)}></i></button>
          </div>
          <div className="col-lg-3 mb-3">
            <h3 className="collectionSecHeading text-left">List For Sale </h3>
          </div>
          <div className="col-lg-6">
            <div className="createCollectionCard mb-3">
                <div className="borderedCnt mb-3">
                  <div className="valueRow d-flex align-items-center flex-wrap">
                    <h3>92fwr424...0394</h3>
                    <span className="valueLabel ml-auto">0.1293 ETH</span>
                  </div>
                </div>
                <hr className="w-100" />
                <div className="lfsItemCnt mb-3">
                  <img src={modalItem1} className="itemImg" />
                  <div className="itemValueCnt d-flex align-items-center">
                    <div className="d-flex align-items-start flex-column">
                      <span className="mb-1">Azuki<img src={tick} className="ml-1" /></span>
                      <h3 className="mb-1">Azuki #8372</h3>
                    </div>
                    <div className="d-flex flex-column ml-auto">
                      <span className="mb-1">$1,579.72</span>
                      <h3 className="mb-1">0.98 ETH</h3>
                    </div>
                  </div>
                </div>
                <hr className="w-100" />
                <div className="row mb-3">
                  <div className="col-12">
                    <span className="formLabel mr-2">Choose a sale type</span>
                    <Nav tabs className="mt-3">
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === '1' })}
                          onClick={() => { toggle2('1'); }}
                        >
                          <span>Fixed Price</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === '2' })}
                          onClick={() => { toggle2('2'); }}
                        >
                          <span>Auction</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: activeTab === '3' })}
                          onClick={() => { toggle2('3'); }}
                        >
                          <span>Dutch Auction</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <hr />
                  </div>
                  
                  <div className="col-12">
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <FixedPrice />
                      </TabPane>
                      <TabPane tabId="2">
                        <Auction />
                      </TabPane>
                      <TabPane tabId="3">
                        <DutchAuction />
                      </TabPane>
                    </TabContent>
                  </div>
                </div>
            </div>
          </div>
        </div>


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
              <h3 className="walletHeading my-3">Item Minted Successfully</h3>
              <button type="button" className="btn btn-block gradientBtn">View Collection</button>
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

         <Modal isOpen={modal1} toggle={toggle1} centered="true" className="curMdl createScsMdl" backdropClassName="selCurBp">
            <div className="createContent">
              <button className="btn closeBtn" onClick={toggle1}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.46875 6L10.8438 9.375C11.0312 9.5625 11.0312 9.90625 10.8438 10.0938L10.0625 10.875C9.875 11.0625 9.53125 11.0625 9.34375 10.875L6 7.5L2.625 10.875C2.4375 11.0625 2.09375 11.0625 1.90625 10.875L1.125 10.0938C0.9375 9.90625 0.9375 9.5625 1.125 9.375L4.5 6L1.125 2.65625C0.9375 2.46875 0.9375 2.125 1.125 1.9375L1.90625 1.15625C2.09375 0.96875 2.4375 0.96875 2.625 1.15625L6 4.53125L9.34375 1.15625C9.53125 0.96875 9.875 0.96875 10.0625 1.15625L10.8438 1.9375C11.0312 2.125 11.0312 2.46875 10.8438 2.65625L7.46875 6Z" fill="#595F6A" />
                </svg>
              </button>
              <div className="d-flex justify-content-center">
                <img src={aiPfpClub} />
              </div>
              <h3 className="walletHeading my-3">Add Trait</h3>
              <form>
                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="d-flex align-items-center flex-wrap">
                      <span className="formLabel mb-2">Type</span>
                    </div>
                    <input type="text" placeholder="Enter Type" className="form-control" />
                  </div>
                  <div className="col-12 mb-3">
                    <div className="d-flex align-items-center flex-wrap">
                      <span className="formLabel mb-2">Name</span>
                    </div>
                    <input type="text" placeholder="Enter Name" className="form-control" />
                  </div>
                </div>
              </form>
              <button type="button" className="btn btn-block gradientBtn">Add Trait</button>
            </div>
         </Modal>

      </>
    );
};

export default Listforsale;