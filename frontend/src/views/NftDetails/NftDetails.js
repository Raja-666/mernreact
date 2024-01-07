import { Modal, TabContent, TabPane, Nav, NavItem, NavLink, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, ModalHeader, ModalBody } from "reactstrap";
import React, { useEffect, useState } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from '../collection/collection.module.scss';
import "./NftDetails.scss"
import classnames from 'classnames';

import nftBanner1 from "./assets/nftBanner1.png";
import timerIcon from "./assets/timerIcon.svg";
import likeIcon from "./assets/likeIcon.svg";
import heart from "./assets/heart.svg";
import viewIcon from "./assets/viewIcon.svg";
import refresh from "./assets/refresh.svg";
import userIcon from "./assets/userIcon.png";
// import ETHIcon from "./assets/ETHIcon.svg";
import graph from "./assets/graph.png";
import shareIcon from '../../assets/images/collection/shareIcon.svg';
import ellipsisV from '../../assets/images/collection/ellipsis-v.svg';
import pennant from '../../assets/images/collection/pennant.svg';
import userImg from '../../assets/images/collection/userImage.png';
import yellowTick from '../../assets/images/collection/yellow-tick_20px.svg';
import cart from '../../assets/images/cart.png';
import tag from '../../assets/images/tag.png';
import clock from '../../assets/images/clock.svg';
import transferIcon from './assets/transferIcon.svg';
import cndds from "../HomeActive/assets/cndds.png";
import decreaseIcon from "../../assets/images/decreaseIcon.svg";
import increaseIcon from "../../assets/images/increaseIcon.svg";

import Itemimg1 from '../../assets/images/collection/Itemimg1.png';
import Itemimg2 from '../../assets/images/collection/Itemimg2.png';
import Itemimg3 from '../../assets/images/collection/Itemimg3.png';
import Itemimg4 from '../../assets/images/collection/Itemimg4.png';
import Itemimg5 from '../../assets/images/collection/Itemimg5.png';
import Itemimg6 from '../../assets/images/collection/Itemimg6.png';

import ItemimgSm1 from '../../assets/images/collection/Itemimg-sm1.png';
import ItemimgSm2 from '../../assets/images/collection/Itemimg-sm2.png';
import ItemimgSm3 from '../../assets/images/collection/Itemimg-sm3.png';
import ItemimgSm4 from '../../assets/images/collection/Itemimg-sm4.png';
import ItemimgSm5 from '../../assets/images/collection/Itemimg-sm5.png';
import ItemimgSm6 from '../../assets/images/collection/Itemimg-sm6.png';

import ETHIcon from '../../assets/images/collection/ETHIcon.png';
import shoppingcart from '../../assets/images/collection/shopping-cart.svg';
import MakeOfferModal from "../../components/makeOffer/makeOffer";
import BuyNFTModal from "../../components/buyNFT/buynftModal";

import checkTickIcon from '../../assets/images/toast/checkIcon.svg';
import closeIconRed from '../../assets/images/toast/closeIconRed.svg';

import EditListingModal from "../../components/editListingModal/editListingModal";
import AlertToast from "../../components/alertToast";
import AuctionBids from "./auctionBid";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetNftDetailMutation } from "../../store/Endpoint";
import { useAccount } from "wagmi";

const NftDetails = () => {
   const location = useLocation()
   const navigate = useNavigate()
   const { address } = useAccount()

   const [nftDetailMutation, { isLoading, isError, data }] = useGetNftDetailMutation();

   console.log('nftData', data)
   const nftId = location.state
   const [activeTab, setActiveTab] = useState('1');
   const toggle = tab => {
      if (activeTab !== tab) setActiveTab(tab);
   }

   const [activeTab1, setActiveTab1] = useState('1');
   const toggle1 = tab => {
      if (activeTab1 !== tab) setActiveTab1(tab);
   }

   const [modal, setModal] = useState(false);
   const toggle2 = () => setModal(!modal);

   const [makeOfferModal, setMakeOfferModal] = useState(false);
   const [buyNFTModal, setBuyNFTModal] = useState(false);
   const [editListModal, setEditListModal] = useState(false)

   const [auctionBidsModal, setAuctionBidsModal] = useState(false);

   const [transNFTModal, setTransNFTModal] = useState(false);



   const getNftDetail = async () => {
      const res = await nftDetailMutation({
         id: nftId
      }).unwrap();

   }

   useEffect(() => {
      if (nftId) {
         getNftDetail()
      }
   }, [])


   const closeBtn = <button className="close" onClick={() => { setTransNFTModal(!transNFTModal) }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M12.3359 10.5L16.5547 14.7188C16.7891 14.9531 16.7891 15.3828 16.5547 15.6172L15.5781 16.5938C15.3438 16.8281 14.9141 16.8281 14.6797 16.5938L10.5 12.375L6.28125 16.5938C6.04688 16.8281 5.61719 16.8281 5.38281 16.5938L4.40625 15.6172C4.17188 15.3828 4.17188 14.9531 4.40625 14.7188L8.625 10.5L4.40625 6.32031C4.17188 6.08594 4.17188 5.65625 4.40625 5.42188L5.38281 4.44531C5.61719 4.21094 6.04688 4.21094 6.28125 4.44531L10.5 8.66406L14.6797 4.44531C14.9141 4.21094 15.3438 4.21094 15.5781 4.44531L16.5547 5.42188C16.7891 5.65625 16.7891 6.08594 16.5547 6.32031L12.3359 10.5Z" fill="#6E737E" />
      </svg>
   </button>;

   return (
      <div className='withoutBannerHeaderPage'>
         <Header />
         <section class="TraSec">
            <div class="container">
               <div className="row">
                  <div className="col-lg-6 col-xl-5">
                     <div className="nftBannerCnt" onClick={toggle2}>
                        <img src={data && data?.data?.uploadfile} className="nftBanner" />
                        <div className="counterCnt d-flex align-items-center flex-wrap">
                           <div className="counter d-flex align-items-center">
                              <img src={timerIcon} className="mr-1" />
                              <span>02:29:19</span>
                           </div>
                           <div className="counter d-flex align-items-center ml-auto">
                              <img src={likeIcon} className="mr-1" />
                              <span className="mr-1">1,541 favorites</span>
                              <img src={viewIcon} className="mr-1" />
                              <span>12,980 Views</span>
                           </div>
                        </div>
                     </div>
                     <div className="nftCard"
                        style={{
                           display: address === data?.data?.owner ? 'none' : ''
                        }}
                     >
                        <div className="d-flex algign-items-center flex-wrap w-100">
                           <div className="d-flex flex-column">
                              <span className="cardLabel">Price</span>
                              <div className="d-flex align-items-center mb-2">
                                 <h3 className="mb-0 mr-2">34.31 ETH</h3>
                                 <span className="cardLabel">$53,941.95</span>
                              </div>
                           </div>
                           <div className="btn darkBtn ml-auto d-flex justify-content-between">
                              <a><img src={decreaseIcon} /></a>
                              <span className="mx-3">0.3</span>
                              <a><img src={increaseIcon} /></a>
                           </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap"

                        >
                           <button

                              className="btn gradientBtn btn160 mr-2 my-1" onClick={() => setBuyNFTModal(true)}>Buy Now</button>
                           <button className="btn gradientBtn mr-2 my-1">
                              <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M17.2188 2C17.7188 2 18.0625 2.46875 17.9688 2.9375L16.5625 9.4375C16.4688 9.78125 16.1875 10 15.8125 10H6.0625L6.34375 11.5H15.1562C15.6562 11.5 16 11.9688 15.9062 12.4375L15.875 12.5625C16.25 12.9375 16.5 13.4375 16.5 14C16.5 15.125 15.5938 16 14.5 16C13.375 16 12.5 15.125 12.5 14C12.5 13.6562 12.5938 13.3125 12.75 13H8.21875C8.375 13.3125 8.5 13.6562 8.5 14C8.5 15.125 7.59375 16 6.5 16C5.375 16 4.5 15.125 4.5 14C4.5 13.4688 4.6875 13 5.03125 12.625L2.875 1.5H0.375C0.15625 1.5 0 1.34375 0 1.125V0.375C0 0.1875 0.15625 0 0.375 0H3.5C3.84375 0 4.15625 0.28125 4.21875 0.625L4.5 2H17.2188ZM6.5 14.75C6.90625 14.75 7.25 14.4375 7.25 14C7.25 13.5938 6.90625 13.25 6.5 13.25C6.0625 13.25 5.75 13.5938 5.75 14C5.75 14.4375 6.0625 14.75 6.5 14.75ZM14.5 14.75C14.9062 14.75 15.25 14.4375 15.25 14C15.25 13.5938 14.9062 13.25 14.5 13.25C14.0625 13.25 13.75 13.5938 13.75 14C13.75 14.4375 14.0625 14.75 14.5 14.75ZM15.2188 8.5L16.3125 3.5H4.78125L5.75 8.5H15.2188Z" fill="#0A0A0B" />
                              </svg>
                           </button>
                           <button className="btn darkBtn my-1" onClick={() => setMakeOfferModal(true)}>
                              <svg className="mr-2" width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M17.7188 1.75C18.2188 2.1875 18.5 2.8125 18.4688 3.4375C18.4688 4.09375 18.1562 4.6875 17.625 5.0625L14.5 7.4375C14 7.8125 13.375 8 12.75 8H1C0.71875 8 0.5 7.78125 0.5 7.5V7C0.5 6.75 0.71875 6.5 1 6.5H12.75C13.0625 6.5 13.3438 6.40625 13.5938 6.21875L16.75 3.875C17.0625 3.625 17.0938 3.1875 16.75 2.90625C16.5312 2.71875 16.125 2.71875 15.875 2.90625L13.9688 4.34375C13.7188 4.53125 13.4375 4.625 13.125 4.625H8.90625C8.6875 4.625 8.5 4.4375 8.5 4.21875V4.1875C8.5 3.96875 8.6875 3.78125 8.90625 3.78125H10.7812C11.7188 3.78125 11.6875 2.5 10.8125 2.5H6.3125C5.75 2.5 5.21875 2.6875 4.78125 3.03125L3.5 4H1C0.71875 4 0.5 3.78125 0.5 3.5V3C0.5 2.75 0.71875 2.5 1 2.5H2.96875L3.875 1.84375C4.5625 1.3125 5.4375 1 6.3125 1H10.8125C12.0312 1 12.9688 1.9375 12.9688 3.125H13.0938L14.9688 1.71875C15.5625 1.25 16.75 0.9375 17.7188 1.75Z" fill="white" />
                              </svg>
                              Make an Offer
                           </button>
                        </div>
                     </div>
                     <div className="nftCard">
                        <div className="d-flex algign-items-center flex-wrap w-100">
                           <div className="d-flex flex-column">
                              <span className="cardLabel">Best Offer</span>
                              <div className="d-flex align-items-center mb-2">
                                 <h3 className="mb-0 mr-2">34.31 ETH</h3>
                                 <span className="cardLabel">$53,941.95</span>
                              </div>
                           </div>

                        </div>
                        <div className="d-flex align-items-center flex-nowrap w-100">
                           <button className="btn gradientBtn btn160 mr-2 my-1 w-100" onClick={() => {
                              // setBuyNFTModal(true)
                              navigate('/listforsale' , {state:data?.data?._id})
                           }}>List for Sale</button>

                           <button className="btn darkBtn my-1 w-100" onClick={() => setMakeOfferModal(true)}>
                              <svg className="mr-2" width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M17.7188 1.75C18.2188 2.1875 18.5 2.8125 18.4688 3.4375C18.4688 4.09375 18.1562 4.6875 17.625 5.0625L14.5 7.4375C14 7.8125 13.375 8 12.75 8H1C0.71875 8 0.5 7.78125 0.5 7.5V7C0.5 6.75 0.71875 6.5 1 6.5H12.75C13.0625 6.5 13.3438 6.40625 13.5938 6.21875L16.75 3.875C17.0625 3.625 17.0938 3.1875 16.75 2.90625C16.5312 2.71875 16.125 2.71875 15.875 2.90625L13.9688 4.34375C13.7188 4.53125 13.4375 4.625 13.125 4.625H8.90625C8.6875 4.625 8.5 4.4375 8.5 4.21875V4.1875C8.5 3.96875 8.6875 3.78125 8.90625 3.78125H10.7812C11.7188 3.78125 11.6875 2.5 10.8125 2.5H6.3125C5.75 2.5 5.21875 2.6875 4.78125 3.03125L3.5 4H1C0.71875 4 0.5 3.78125 0.5 3.5V3C0.5 2.75 0.71875 2.5 1 2.5H2.96875L3.875 1.84375C4.5625 1.3125 5.4375 1 6.3125 1H10.8125C12.0312 1 12.9688 1.9375 12.9688 3.125H13.0938L14.9688 1.71875C15.5625 1.25 16.75 0.9375 17.7188 1.75Z" fill="white" />
                              </svg>
                              Accept Offer <span class="fw-400 pl-1"> 34.31 ETH</span>
                           </button>
                        </div>
                     </div>
                     <div className="nftCard">
                        <div className="d-flex algign-items-center flex-wrap w-100">
                           <div className="d-flex flex-column">
                              <span className="cardLabel">Minimum Bid <span className="">View Bids</span></span>
                              <div className="d-flex align-items-center mb-2">
                                 <h3 className="mb-0 mr-2">34.31 ETH</h3>
                                 <span className="cardLabel">$53,941.95</span>
                              </div>
                           </div>
                           <div className="ml-auto fs-14 fw-400 dark-text-secondary d-inline-flex flex-column justify-content-center align-items-end">
                              <div><span>Ends in</span></div>
                              <div><span class="fw-600 dark-text">00</span> Days <span class="fw-600  dark-text">19</span> Hours <span class="fw-600  dark-text">27</span> Mins <span class="fw-600 dark-text">29</span> Secs</div>
                           </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap w-100">
                           <button className="btn gradientBtn btn-block btn160 mr-2 my-1" onClick={() => setAuctionBidsModal(true)}>Place a Bid</button>
                        </div>

                     </div>
                     <div className="nftCard">
                        <div className="d-flex algign-items-center flex-wrap w-100">
                           <div className="d-flex flex-column">
                              <span className="cardLabel">Price</span>
                              <div className="d-flex align-items-center mb-2">
                                 <h3 className="mb-0 mr-2">34.31 ETH</h3>
                                 <span className="cardLabel">$53,941.95</span>
                              </div>
                           </div>
                           <div className="ml-auto fs-14 fw-400 dark-text-secondary d-inline-flex flex-column justify-content-center align-items-end">
                              <div><span>Ends in</span></div>
                              <div><span class="fw-600 dark-text">00</span> Days <span class="fw-600  dark-text">19</span> Hours <span class="fw-600  dark-text">27</span> Mins <span class="fw-600 dark-text">29</span> Secs</div>
                           </div>
                        </div>

                        <div className="d-flex align-items-center flex-wrap w-100">
                           <button className="btn gradientBtn btn-block btn160 mr-2 my-1" onClick={() => setEditListModal(true)}>Edit Listing</button>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-6 col-xl-7">
                     <div className="nftCard mb-3">
                        <div className="d-flex align-items-center w-100 mb-4 flex-wrap">
                           <h3 className="mb-0 mr-2">{data && data?.data?.nftName}</h3>
                           <div className="d-flex align-items-center ml-auto">
                              <div className="d-flex align-items-center mr-2"><img src={refresh} className="mr-2" />Refresh</div>
                              <div className={`${style.iconBtn} iconBtn-h40 d-flex justify-content-center align-items-center mr-2`}>
                                 {/* <img src={likeIcon} /> */}
                                 <img src={heart} />
                              </div>
                              <UncontrolledDropdown className="mr-2">
                                 <DropdownToggle className={`${style.iconBtn} iconBtn-h40`}>
                                    <img src={shareIcon} alt="shareIcon" />
                                 </DropdownToggle>
                                 <DropdownMenu right className={style.dropdownMenu}>
                                    <DropdownItem className='mb-2'>
                                       <i class="fab fa-twitter-square mr-2"></i> Twitter
                                    </DropdownItem>
                                    <DropdownItem className='mb-2'>
                                       <i class="fab fa-telegram mr-2"></i> Telegram
                                    </DropdownItem>
                                    <DropdownItem className='mb-2'>
                                       <i class="fab fa-facebook mr-2"></i> Facebook
                                    </DropdownItem>
                                    <DropdownItem className='mb-2'>
                                       <i class="fas fa-envelope mr-2"></i> Email
                                    </DropdownItem>
                                    <DropdownItem className='mb-2'>
                                       <i class="fas fa-link mr-2"></i> Copy Link
                                    </DropdownItem>
                                    <DropdownItem className='mb-2' onClick={() => { setTransNFTModal(!transNFTModal) }}>
                                       <img src={transferIcon} alt="transfer" className="mr-2" /> Transfer
                                    </DropdownItem>
                                 </DropdownMenu>
                              </UncontrolledDropdown>

                              <UncontrolledDropdown>
                                 <DropdownToggle className={`${style.iconBtn} iconBtn-h40`}>
                                    <img src={ellipsisV} alt="ellipsisV" />
                                 </DropdownToggle>
                                 <DropdownMenu right className={style.dropdownMenu}>
                                    <DropdownItem>
                                       <img src={pennant} alt="pennant" className='mr-2' /> Report
                                    </DropdownItem>
                                 </DropdownMenu>
                              </UncontrolledDropdown>
                           </div>
                        </div>
                        <div className="row w-100">
                           <div className="col-lg-6">
                              <div className="d-flex align-items-center">
                                 <img src={data && data?.data?.collectionLogo} height="44" className="mr-3" />
                                 <div className="d-flex flex-column">
                                    <span className="cardLabel">Collection</span>
                                    <span className="cardValue d-flex align-items-center"> {data && data?.data?.collectionName} <img src={yellowTick} className="ml-2" /></span>
                                 </div>
                              </div>
                           </div>

                           <div className="col-lg-6">
                              <div className="d-flex align-items-center">
                                 <img src={data && data?.data?.profileImg} height="44" className="mr-3" />
                                 <div className="d-flex flex-column">
                                    <span className="cardLabel">Owner</span>
                                    <span className="cardValue d-flex align-items-center">{data && data?.data?.userName}</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="nftCard detCard">
                        <Nav tabs className="darkTabs mb-3">
                           <NavItem>
                              <NavLink
                                 className={classnames({ active: activeTab === '1' })}
                                 onClick={() => { toggle('1'); }}
                              >
                                 Details
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink
                                 className={classnames({ active: activeTab === '2' })}
                                 onClick={() => { toggle('2'); }}
                              >
                                 Offers
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink
                                 className={classnames({ active: activeTab === '3' })}
                                 onClick={() => { toggle('3'); }}
                              >
                                 Traits
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink
                                 className={classnames({ active: activeTab === '4' })}
                                 onClick={() => { toggle('4'); }}
                              >
                                 Listings
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink
                                 className={classnames({ active: activeTab === '5' })}
                                 onClick={() => { toggle('5'); }}
                              >
                                 Price History
                              </NavLink>
                           </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab} className="w-100 scroller">
                           <TabPane tabId="1">
                              <div className="row">
                                 <div className="col-sm-6">
                                    <span className="tableLabel">Contract</span>
                                 </div>
                                 <div className="col-sm-6 text-sm-right">
                                    <span className="tableValue yellowTxt">0399kdjs...93i92</span>
                                 </div>
                                 <div className="col-sm-6">
                                    <span className="tableLabel">Token ID</span>
                                 </div>
                                 <div className="col-sm-6 text-sm-right">
                                    <span className="tableValue yellowTxt">8329</span>
                                 </div>
                                 <div className="col-sm-6">
                                    <span className="tableLabel">Token Standard</span>
                                 </div>
                                 <div className="col-sm-6 text-sm-right">
                                    <span className="tableValue">ERC-721</span>
                                 </div>
                                 <div className="col-sm-6">
                                    <span className="tableLabel">Chain</span>
                                 </div>
                                 <div className="col-sm-6 text-sm-right">
                                    <span className="tableValue"><img src={ETHIcon} alt="ETHIcon" className="mr-2" /> Ethereum</span>
                                 </div>
                                 <div className="col-sm-6">
                                    <span className="tableLabel">Last Updated</span>
                                 </div>
                                 <div className="col-sm-6 text-sm-right">
                                    <span className="tableValue">3 days ago</span>
                                 </div>
                                 <div className="col-sm-6">
                                    <span className="tableLabel">Creator Earnings</span>
                                 </div>
                                 <div className="col-sm-6 text-sm-right">
                                    <span className="tableValue">5%</span>
                                 </div>
                                 {/* <div className="col-12">
                                    <div class="noResf text-center" >
                                       <img class="img-fluid" src={cndds} alt="" />
                                       <h1>No Data</h1>
                                    </div>
                                 </div> */}
                              </div>
                           </TabPane>
                           <TabPane tabId="2">
                              <div className="table-responsive">
                                 <table className="table table-borderless table-hover mb-0 hmecollection nftTables_offers">
                                    <thead className="trd_head">
                                       <tr>
                                          <th>Price</th>
                                          <th>USD Price</th>
                                          <th>Quantity</th>
                                          <th>Floor Difference</th>
                                          <th>Expiration</th>
                                          <th>From</th>
                                          <th></th>
                                       </tr>
                                    </thead>
                                    <tbody className="trdtable_body">
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td>7% below</td>
                                          <td>18 h ago</td>
                                          <td className="yellowTxt">Phillip Kenter</td>
                                          <td>
                                             <button className="btn btnAccept"><span>Accept</span></button>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td>7% below</td>
                                          <td>18 h ago</td>
                                          <td className="yellowTxt">Makenna George</td>
                                          <td>
                                             <button className="btn btnAccept"><span>Accept</span></button>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td>7% below</td>
                                          <td>18 h ago</td>
                                          <td className="yellowTxt">Tiana Lubin</td>
                                          <td>
                                             <button className="btn btnAccept"><span>Accept</span></button>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td>7% below</td>
                                          <td>18 h ago</td>
                                          <td className="yellowTxt">Allison Baptista</td>
                                          <td>
                                             <button className="btn btnAccept"><span>Accept</span></button>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td>7% below</td>
                                          <td>18 h ago</td>
                                          <td className="yellowTxt">Mira Calzoni</td>
                                          <td>
                                             <button className="btn btnAccept"><span>Accept</span></button>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td>7% below</td>
                                          <td>18 h ago</td>
                                          <td className="yellowTxt">Ryan Dorwart</td>
                                          <td>
                                             <button className="btn btnAccept"><span>Accept</span></button>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td>7% below</td>
                                          <td>18 h ago</td>
                                          <td className="yellowTxt">Jaxson Franci</td>
                                          <td>
                                             <button className="btn btnAccept"><span>Accept</span></button>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td>7% below</td>
                                          <td>18 h ago</td>
                                          <td className="yellowTxt">Zain Calzoni</td>
                                          <td>
                                             <button className="btn btnAccept"><span>Accept</span></button>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td>7% below</td>
                                          <td>18 h ago</td>
                                          <td className="yellowTxt">Cheyenne Herwitz</td>
                                          <td>
                                             <button className="btn btnAccept"><span>Accept</span></button>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                              {/* <div className="col-12">
                                 <div class="noResf text-center" >
                                    <img class="img-fluid" src={cndds} alt="" />
                                    <h1>No Data</h1>
                                 </div>
                              </div> */}
                           </TabPane>
                           <TabPane tabId="3">
                              <div className="row">
                                 <div className="col-sm-6 col-lg-4">
                                    <div className="traitCnt">
                                       <span className="cardLabel">Background</span>
                                       <div className="cardValue"><span className="yellowTxt mr-2">New Punk Blue</span> 12%</div>
                                    </div>
                                 </div>
                                 <div className="col-sm-6 col-lg-4">
                                    <div className="traitCnt">
                                       <span className="cardLabel">Clothes</span>
                                       <div className="cardValue"><span className="yellowTxt mr-2">Hip Hop</span> 1%</div>
                                    </div>
                                 </div>
                                 <div className="col-sm-6 col-lg-4">
                                    <div className="traitCnt">
                                       <span className="cardLabel">Eyes</span>
                                       <div className="cardValue"><span className="yellowTxt mr-2">Coins</span> 5%</div>
                                    </div>
                                 </div>
                                 <div className="col-sm-6 col-lg-4">
                                    <div className="traitCnt">
                                       <span className="cardLabel">Fur</span>
                                       <div className="cardValue"><span className="yellowTxt mr-2">Red</span> 5%</div>
                                    </div>
                                 </div>
                                 <div className="col-sm-6 col-lg-4">
                                    <div className="traitCnt">
                                       <span className="cardLabel">Hat</span>
                                       <div className="cardValue"><span className="yellowTxt mr-2">Fez</span> 4%</div>
                                    </div>
                                 </div>
                                 <div className="col-sm-6 col-lg-4">
                                    <div className="traitCnt">
                                       <span className="cardLabel">Mouth</span>
                                       <div className="cardValue"><span className="yellowTxt mr-2">Bored Cigarette</span> 7%</div>
                                    </div>
                                 </div>
                                 <div className="col-sm-6 col-lg-4">
                                    <div className="traitCnt">
                                       <span className="cardLabel">Special</span>
                                       <div className="cardValue"><span className="yellowTxt mr-2">Fire</span> 1%</div>
                                    </div>
                                 </div>
                                 {/* <div className="col-12">
                                    <div class="noResf text-center" >
                                       <img class="img-fluid" src={cndds} alt="" />
                                       <h1>No Data</h1>
                                    </div>
                                 </div> */}
                              </div>
                           </TabPane>
                           <TabPane tabId="4">
                              <div className="table-responsive">
                                 <table className="table table-borderless table-hover mb-0 hmecollection">
                                    <thead className="trd_head">
                                       <tr>
                                          <th>Price</th>
                                          <th>USD Price</th>
                                          <th>Quantity</th>
                                          <th>From</th>
                                          <th></th>
                                       </tr>
                                    </thead>
                                    <tbody className="trdtable_body">
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td className="yellowTxt">Phillip Kenter</td>
                                          {/* <td className="text-right">
                                             <button className="btn gradientBtn ml-auto">Buy Now</button>
                                          </td> */}
                                          <td className="text-right">
                                             <button className="btn btncancel ml-auto">Cancel</button>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td className="yellowTxt">Makenna George</td>
                                          <td className="text-right"></td>
                                          {/* <td className="text-right">
                                             <button className="btn gradientBtn ml-auto">Buy Now</button>
                                          </td> */}
                                       </tr>
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td className="yellowTxt">Tiana Lubin</td>
                                          <td className="text-right"></td>
                                          {/* <td className="text-right">
                                             <button className="btn gradientBtn ml-auto">Buy Now</button>
                                          </td> */}
                                       </tr>
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td className="yellowTxt">Allison Baptista</td>
                                          <td className="text-right"></td>
                                          {/* <td className="text-right">
                                             <button className="btn gradientBtn ml-auto">Buy Now</button>
                                          </td> */}
                                       </tr>
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td className="yellowTxt">Mira Calzoni</td>
                                          <td className="text-right"></td>
                                          {/* <td className="text-right">
                                             <button className="btn gradientBtn ml-auto">Buy Now</button>
                                          </td> */}
                                       </tr>
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td className="yellowTxt">Ryan Dorwart</td>
                                          <td className="text-right"></td>
                                          {/* <td className="text-right">
                                             <button className="btn gradientBtn ml-auto">Buy Now</button>
                                          </td> */}
                                       </tr>
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td className="yellowTxt">Jaxson Franci</td>
                                          <td className="text-right"></td>
                                          {/* <td className="text-right">
                                             <button className="btn gradientBtn ml-auto">Buy Now</button>
                                          </td> */}
                                       </tr>
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td className="yellowTxt">Zain Calzoni</td>
                                          <td className="text-right"></td>
                                          {/* <td className="text-right">
                                             <button className="btn gradientBtn ml-auto">Buy Now</button>
                                          </td> */}
                                       </tr>
                                       <tr>
                                          <td>34.31 ETH</td>
                                          <td>$53,941.95</td>
                                          <td>1</td>
                                          <td className="yellowTxt">Cheyenne Herwitz</td>
                                          <td className="text-right"></td>
                                          {/* <td className="text-right">
                                             <button className="btn gradientBtn ml-auto">Buy Now</button>
                                          </td> */}
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                              {/* <div className="col-12">
                                 <div class="noResf text-center" >
                                    <img class="img-fluid" src={cndds} alt="" />
                                    <h1>No Data</h1>
                                 </div>
                              </div> */}
                           </TabPane>
                           <TabPane tabId="5">
                              <img src={graph} width="100%" height="100%" />
                           </TabPane>
                        </TabContent>
                     </div>
                  </div>

                  <div className="col-12">
                     <div className="nftCard">
                        <h3 className="heading">Activity</h3>
                        <Nav tabs className="trad_tab_hd navNftDetails">
                           <NavItem>
                              <NavLink
                                 className={classnames({ active: activeTab1 === '1' })}
                                 onClick={() => { toggle1('1'); }}
                              >
                                 All
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink
                                 className={classnames({ active: activeTab1 === '2' })}
                                 onClick={() => { toggle1('2'); }}
                              >
                                 Sales
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink
                                 className={classnames({ active: activeTab1 === '3' })}
                                 onClick={() => { toggle1('3'); }}
                              >
                                 Listings
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink
                                 className={classnames({ active: activeTab1 === '4' })}
                                 onClick={() => { toggle1('4'); }}
                              >
                                 Offers
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink
                                 className={classnames({ active: activeTab1 === '5' })}
                                 onClick={() => { toggle1('5'); }}
                              >
                                 Transfers
                              </NavLink>
                           </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab1} className="w-100">
                           <TabPane tabId="1">
                              <div className="row">
                                 <div className="col-12">
                                    <div className="table-responsive">
                                       <table className="table table-borderless table-hover mb-0 hmecollection">
                                          <thead className="trd_head">
                                             <tr>
                                                <th></th>
                                                <th>Price</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th><img src={clock} /></th>
                                             </tr>
                                          </thead>
                                          <tbody className="trdtable_body">
                                             <tr>
                                                <td > <div className="tableTag">
                                                   <img src={cart} className="mr-2" /> Sale
                                                </div>
                                                </td>
                                                <td>34.31 ETH</td>
                                                <td className="yellowTxt">Gustava Mango</td>
                                                <td className="yellowTxt">Gretchen Philips</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td > <div className="tableTag"><img src={transferIcon} className="mr-2" /> Transfer </div></td>
                                                <td>3,5234 ETH</td>
                                                <td className="yellowTxt">Justin Carder</td>
                                                <td className="yellowTxt">Gustavo Mango</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td > <div className="tableTag"><img src={tag} className="mr-2" /> List </div></td>
                                                <td>3,6432 ETH</td>
                                                <td className="yellowTxt">Erin Press</td>
                                                <td className="yellowTxt">Justin Carder</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td > <div className="tableTag"><img src={tag} className="mr-2" /> List </div></td>
                                                <td>3,6432 ETH</td>
                                                <td className="yellowTxt">Tatiana Bator</td>
                                                <td className="yellowTxt">Erin Press</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td> <div className="tableTag">
                                                   <svg className="mr-2" width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M17.7188 1.75C18.2188 2.1875 18.5 2.8125 18.4688 3.4375C18.4688 4.09375 18.1562 4.6875 17.625 5.0625L14.5 7.4375C14 7.8125 13.375 8 12.75 8H1C0.71875 8 0.5 7.78125 0.5 7.5V7C0.5 6.75 0.71875 6.5 1 6.5H12.75C13.0625 6.5 13.3438 6.40625 13.5938 6.21875L16.75 3.875C17.0625 3.625 17.0938 3.1875 16.75 2.90625C16.5312 2.71875 16.125 2.71875 15.875 2.90625L13.9688 4.34375C13.7188 4.53125 13.4375 4.625 13.125 4.625H8.90625C8.6875 4.625 8.5 4.4375 8.5 4.21875V4.1875C8.5 3.96875 8.6875 3.78125 8.90625 3.78125H10.7812C11.7188 3.78125 11.6875 2.5 10.8125 2.5H6.3125C5.75 2.5 5.21875 2.6875 4.78125 3.03125L3.5 4H1C0.71875 4 0.5 3.78125 0.5 3.5V3C0.5 2.75 0.71875 2.5 1 2.5H2.96875L3.875 1.84375C4.5625 1.3125 5.4375 1 6.3125 1H10.8125C12.0312 1 12.9688 1.9375 12.9688 3.125H13.0938L14.9688 1.71875C15.5625 1.25 16.75 0.9375 17.7188 1.75Z" fill="white" />
                                                   </svg>
                                                   Offer </div>
                                                </td>
                                                <td>3,6456 ETH</td>
                                                <td className="yellowTxt">Chance Vaccaro</td>
                                                <td className="yellowTxt">Tatiana Bator</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td> <div className="tableTag">
                                                   <svg className="mr-2" width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M17.7188 1.75C18.2188 2.1875 18.5 2.8125 18.4688 3.4375C18.4688 4.09375 18.1562 4.6875 17.625 5.0625L14.5 7.4375C14 7.8125 13.375 8 12.75 8H1C0.71875 8 0.5 7.78125 0.5 7.5V7C0.5 6.75 0.71875 6.5 1 6.5H12.75C13.0625 6.5 13.3438 6.40625 13.5938 6.21875L16.75 3.875C17.0625 3.625 17.0938 3.1875 16.75 2.90625C16.5312 2.71875 16.125 2.71875 15.875 2.90625L13.9688 4.34375C13.7188 4.53125 13.4375 4.625 13.125 4.625H8.90625C8.6875 4.625 8.5 4.4375 8.5 4.21875V4.1875C8.5 3.96875 8.6875 3.78125 8.90625 3.78125H10.7812C11.7188 3.78125 11.6875 2.5 10.8125 2.5H6.3125C5.75 2.5 5.21875 2.6875 4.78125 3.03125L3.5 4H1C0.71875 4 0.5 3.78125 0.5 3.5V3C0.5 2.75 0.71875 2.5 1 2.5H2.96875L3.875 1.84375C4.5625 1.3125 5.4375 1 6.3125 1H10.8125C12.0312 1 12.9688 1.9375 12.9688 3.125H13.0938L14.9688 1.71875C15.5625 1.25 16.75 0.9375 17.7188 1.75Z" fill="white" />
                                                   </svg>
                                                   Offer
                                                   <span className="text-danger ml-2">Expired</span> </div>
                                                </td>
                                                <td>3,7585 ETH</td>
                                                <td className="yellowTxt">Carter Rhiel Madsen</td>
                                                <td className="yellowTxt">Chance Vaccaro</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td> <div className="tableTag"><img src={transferIcon} className="mr-2" /> Transfer </div></td>
                                                <td>3,8464 ETH</td>
                                                <td className="yellowTxt">Madelyn George</td>
                                                <td className="yellowTxt">Carter Rhiel Madsen</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td> <div className="tableTag"><img src={tag} className="mr-2" /> List </div></td>
                                                <td>3,2562 ETH</td>
                                                <td className="yellowTxt">Livia Saris</td>
                                                <td className="yellowTxt">Madelyn George</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td> <div className="tableTag">
                                                   <svg className="mr-2" width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M17.7188 1.75C18.2188 2.1875 18.5 2.8125 18.4688 3.4375C18.4688 4.09375 18.1562 4.6875 17.625 5.0625L14.5 7.4375C14 7.8125 13.375 8 12.75 8H1C0.71875 8 0.5 7.78125 0.5 7.5V7C0.5 6.75 0.71875 6.5 1 6.5H12.75C13.0625 6.5 13.3438 6.40625 13.5938 6.21875L16.75 3.875C17.0625 3.625 17.0938 3.1875 16.75 2.90625C16.5312 2.71875 16.125 2.71875 15.875 2.90625L13.9688 4.34375C13.7188 4.53125 13.4375 4.625 13.125 4.625H8.90625C8.6875 4.625 8.5 4.4375 8.5 4.21875V4.1875C8.5 3.96875 8.6875 3.78125 8.90625 3.78125H10.7812C11.7188 3.78125 11.6875 2.5 10.8125 2.5H6.3125C5.75 2.5 5.21875 2.6875 4.78125 3.03125L3.5 4H1C0.71875 4 0.5 3.78125 0.5 3.5V3C0.5 2.75 0.71875 2.5 1 2.5H2.96875L3.875 1.84375C4.5625 1.3125 5.4375 1 6.3125 1H10.8125C12.0312 1 12.9688 1.9375 12.9688 3.125H13.0938L14.9688 1.71875C15.5625 1.25 16.75 0.9375 17.7188 1.75Z" fill="white" />
                                                   </svg>
                                                   Offer
                                                   <span className="text-danger ml-2">Expired</span> </div>
                                                </td>
                                                <td>3,6742 ETH</td>
                                                <td className="yellowTxt">Omar Aminoff</td>
                                                <td className="yellowTxt">Livia Saris</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td> <div className="tableTag"><img src={transferIcon} className="mr-2" /> Transfer </div></td>
                                                <td>3,9864 ETH</td>
                                                <td className="yellowTxt">Livia Saris</td>
                                                <td className="yellowTxt">Omar Aminoff</td>
                                                <td>3h</td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                                 {/* <div className="col-12">
                                    <div class="noResf text-center" >
                                       <img class="img-fluid" src={cndds} alt="" />
                                       <h1>No Data</h1>
                                    </div>
                                 </div> */}
                              </div>
                           </TabPane>
                           <TabPane tabId="2">
                              <div className="row">
                                 <div className="col-12">
                                    <div className="table-responsive">
                                       <table className="table table-borderless table-hover mb-0 hmecollection">
                                          <thead className="trd_head">
                                             <tr>
                                                <th></th>
                                                <th>Price</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th><img src={clock} /></th>
                                             </tr>
                                          </thead>
                                          <tbody className="trdtable_body">
                                             <tr>
                                                <td> <div className="tableTag">
                                                   <img src={cart} className="mr-2" /> Sale </div>
                                                </td>
                                                <td>34.31 ETH</td>
                                                <td className="yellowTxt">Gustava Mango</td>
                                                <td className="yellowTxt">Gretchen Philips</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td> <div className="tableTag">
                                                   <img src={cart} className="mr-2" /> Sale </div>
                                                </td>
                                                <td>34.31 ETH</td>
                                                <td className="yellowTxt">Gustava Mango</td>
                                                <td className="yellowTxt">Gretchen Philips</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td> <div className="tableTag">
                                                   <img src={cart} className="mr-2" /> Sale </div>
                                                </td>
                                                <td>34.31 ETH</td>
                                                <td className="yellowTxt">Gustava Mango</td>
                                                <td className="yellowTxt">Gretchen Philips</td>
                                                <td>3h</td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                                 {/* <div className="col-12">
                                    <div class="noResf text-center" >
                                       <img class="img-fluid" src={cndds} alt="" />
                                       <h1>No Data</h1>
                                    </div>
                                 </div> */}
                              </div>
                           </TabPane>
                           <TabPane tabId="3">
                              <div className="row">
                                 <div className="col-12">
                                    <div className="table-responsive">
                                       <table className="table table-borderless table-hover mb-0 hmecollection">
                                          <thead className="trd_head">
                                             <tr>
                                                <th></th>
                                                <th>Price</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th><img src={clock} /></th>
                                             </tr>
                                          </thead>
                                          <tbody className="trdtable_body">
                                             <tr>
                                                <td> <div className="tableTag"><img src={tag} className="mr-2" /> List </div> </td>
                                                <td>3,6432 ETH</td>
                                                <td className="yellowTxt">Erin Press</td>
                                                <td className="yellowTxt">Justin Carder</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td> <div className="tableTag"><img src={tag} className="mr-2" /> List </div> </td>
                                                <td>3,6432 ETH</td>
                                                <td className="yellowTxt">Tatiana Bator</td>
                                                <td className="yellowTxt">Erin Press</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td> <div className="tableTag"><img src={tag} className="mr-2" /> List </div> </td>
                                                <td>3,2562 ETH</td>
                                                <td className="yellowTxt">Livia Saris</td>
                                                <td className="yellowTxt">Madelyn George</td>
                                                <td>3h</td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                                 {/* <div className="col-12">
                                    <div class="noResf text-center" >
                                       <img class="img-fluid" src={cndds} alt="" />
                                       <h1>No Data</h1>
                                    </div>
                                 </div> */}
                              </div>
                           </TabPane>
                           <TabPane tabId="4">
                              <div className="row">
                                 <div className="col-12">
                                    <div className="table-responsive">
                                       <table className="table table-borderless table-hover mb-0 hmecollection">
                                          <thead className="trd_head">
                                             <tr>
                                                <th></th>
                                                <th>Price</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th><img src={clock} /></th>
                                             </tr>
                                          </thead>
                                          <tbody className="trdtable_body">
                                             <tr>
                                                <td> <div className="tableTag">
                                                   <svg className="mr-2" width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M17.7188 1.75C18.2188 2.1875 18.5 2.8125 18.4688 3.4375C18.4688 4.09375 18.1562 4.6875 17.625 5.0625L14.5 7.4375C14 7.8125 13.375 8 12.75 8H1C0.71875 8 0.5 7.78125 0.5 7.5V7C0.5 6.75 0.71875 6.5 1 6.5H12.75C13.0625 6.5 13.3438 6.40625 13.5938 6.21875L16.75 3.875C17.0625 3.625 17.0938 3.1875 16.75 2.90625C16.5312 2.71875 16.125 2.71875 15.875 2.90625L13.9688 4.34375C13.7188 4.53125 13.4375 4.625 13.125 4.625H8.90625C8.6875 4.625 8.5 4.4375 8.5 4.21875V4.1875C8.5 3.96875 8.6875 3.78125 8.90625 3.78125H10.7812C11.7188 3.78125 11.6875 2.5 10.8125 2.5H6.3125C5.75 2.5 5.21875 2.6875 4.78125 3.03125L3.5 4H1C0.71875 4 0.5 3.78125 0.5 3.5V3C0.5 2.75 0.71875 2.5 1 2.5H2.96875L3.875 1.84375C4.5625 1.3125 5.4375 1 6.3125 1H10.8125C12.0312 1 12.9688 1.9375 12.9688 3.125H13.0938L14.9688 1.71875C15.5625 1.25 16.75 0.9375 17.7188 1.75Z" fill="white" />
                                                   </svg>
                                                   Offer </div>
                                                </td>
                                                <td>3,6456 ETH</td>
                                                <td className="yellowTxt">Chance Vaccaro</td>
                                                <td className="yellowTxt">Tatiana Bator</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td> <div className="tableTag">
                                                   <svg className="mr-2" width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M17.7188 1.75C18.2188 2.1875 18.5 2.8125 18.4688 3.4375C18.4688 4.09375 18.1562 4.6875 17.625 5.0625L14.5 7.4375C14 7.8125 13.375 8 12.75 8H1C0.71875 8 0.5 7.78125 0.5 7.5V7C0.5 6.75 0.71875 6.5 1 6.5H12.75C13.0625 6.5 13.3438 6.40625 13.5938 6.21875L16.75 3.875C17.0625 3.625 17.0938 3.1875 16.75 2.90625C16.5312 2.71875 16.125 2.71875 15.875 2.90625L13.9688 4.34375C13.7188 4.53125 13.4375 4.625 13.125 4.625H8.90625C8.6875 4.625 8.5 4.4375 8.5 4.21875V4.1875C8.5 3.96875 8.6875 3.78125 8.90625 3.78125H10.7812C11.7188 3.78125 11.6875 2.5 10.8125 2.5H6.3125C5.75 2.5 5.21875 2.6875 4.78125 3.03125L3.5 4H1C0.71875 4 0.5 3.78125 0.5 3.5V3C0.5 2.75 0.71875 2.5 1 2.5H2.96875L3.875 1.84375C4.5625 1.3125 5.4375 1 6.3125 1H10.8125C12.0312 1 12.9688 1.9375 12.9688 3.125H13.0938L14.9688 1.71875C15.5625 1.25 16.75 0.9375 17.7188 1.75Z" fill="white" />
                                                   </svg>
                                                   Offer
                                                   <span className="text-danger ml-2">Expired</span></div>
                                                </td>
                                                <td>3,7585 ETH</td>
                                                <td className="yellowTxt">Carter Rhiel Madsen</td>
                                                <td className="yellowTxt">Chance Vaccaro</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td> <div className="tableTag">
                                                   <svg className="mr-2" width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M17.7188 1.75C18.2188 2.1875 18.5 2.8125 18.4688 3.4375C18.4688 4.09375 18.1562 4.6875 17.625 5.0625L14.5 7.4375C14 7.8125 13.375 8 12.75 8H1C0.71875 8 0.5 7.78125 0.5 7.5V7C0.5 6.75 0.71875 6.5 1 6.5H12.75C13.0625 6.5 13.3438 6.40625 13.5938 6.21875L16.75 3.875C17.0625 3.625 17.0938 3.1875 16.75 2.90625C16.5312 2.71875 16.125 2.71875 15.875 2.90625L13.9688 4.34375C13.7188 4.53125 13.4375 4.625 13.125 4.625H8.90625C8.6875 4.625 8.5 4.4375 8.5 4.21875V4.1875C8.5 3.96875 8.6875 3.78125 8.90625 3.78125H10.7812C11.7188 3.78125 11.6875 2.5 10.8125 2.5H6.3125C5.75 2.5 5.21875 2.6875 4.78125 3.03125L3.5 4H1C0.71875 4 0.5 3.78125 0.5 3.5V3C0.5 2.75 0.71875 2.5 1 2.5H2.96875L3.875 1.84375C4.5625 1.3125 5.4375 1 6.3125 1H10.8125C12.0312 1 12.9688 1.9375 12.9688 3.125H13.0938L14.9688 1.71875C15.5625 1.25 16.75 0.9375 17.7188 1.75Z" fill="white" />
                                                   </svg>
                                                   Offer
                                                   <span className="text-danger ml-2">Expired</span></div>
                                                </td>
                                                <td>3,6742 ETH</td>
                                                <td className="yellowTxt">Omar Aminoff</td>
                                                <td className="yellowTxt">Livia Saris</td>
                                                <td>3h</td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                                 {/* <div className="col-12">
                                    <div class="noResf text-center" >
                                       <img class="img-fluid" src={cndds} alt="" />
                                       <h1>No Data</h1>
                                    </div>
                                 </div> */}
                              </div>
                           </TabPane>
                           <TabPane tabId="5">
                              <div className="row">
                                 <div className="col-12">
                                    <div className="table-responsive">
                                       <table className="table table-borderless table-hover mb-0 hmecollection">
                                          <thead className="trd_head">
                                             <tr>
                                                <th></th>
                                                <th>Price</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th><img src={clock} /></th>
                                             </tr>
                                          </thead>
                                          <tbody className="trdtable_body">
                                             <tr>
                                                <td> <div className="tableTag"><img src={transferIcon} className="mr-2" /> Transfer</div></td>
                                                <td>3,5234 ETH</td>
                                                <td className="yellowTxt">Justin Carder</td>
                                                <td className="yellowTxt">Gustavo Mango</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td> <div className="tableTag"><img src={transferIcon} className="mr-2" /> Transfer</div></td>
                                                <td>3,8464 ETH</td>
                                                <td className="yellowTxt">Madelyn George</td>
                                                <td className="yellowTxt">Carter Rhiel Madsen</td>
                                                <td>3h</td>
                                             </tr>
                                             <tr>
                                                <td> <div className="tableTag"><img src={transferIcon} className="mr-2" /> Transfer</div></td>
                                                <td>3,9864 ETH</td>
                                                <td className="yellowTxt">Livia Saris</td>
                                                <td className="yellowTxt">Omar Aminoff</td>
                                                <td>3h</td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                                 {/* <div className="col-12">
                                    <div class="noResf text-center" >
                                       <img class="img-fluid" src={cndds} alt="" />
                                       <h1>No Data</h1>
                                    </div>
                                 </div> */}
                              </div>
                           </TabPane>
                        </TabContent>
                     </div>
                  </div>

                  <div className="col-12 mt-3">
                     <div className="d-flex align-items-center mb-3">
                        <h3 className="gradientHeading">More from this collection.</h3>
                        <button className="btn darkBtn ml-auto">View Collection</button>
                     </div>
                  </div>
                  <div className="col-12 mt-3">
                     <div className="row">
                        <div className="col-sm-6 col-lg-3 col-xl-2">
                           <div className="gridItemCard">
                              <div className="gItemImg">
                                 <img src={Itemimg1} alt="Itemimg1" className="img-fluid w-100 itemImage" />
                                 <div className='hoverImgCnt'>
                                    <div className='d-flex justify-content-between '>
                                       <div>
                                          <img src={ETHIcon} alt="ETHIcon" className='cointypeImg' />
                                       </div>
                                       <div className='alarmbadge'>
                                          <i className='fas fa-alarm-clock'></i> 6 Days left
                                       </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                       <button className='buybowbtn rounded-pill' type='button'>Buy Now</button>
                                       <button className='cartBtnCircle'>
                                          <img src={shoppingcart} alt="shoppingcart" />
                                       </button>
                                    </div>
                                 </div>
                              </div>
                              <div className='botcntCard'>
                                 <div className='bottomSmImg'>
                                    <img src={ItemimgSm1} height={73} alt="ItemimgSm1" />
                                 </div>
                                 <div className='botcntTxt'>
                                    <div className='itemName'>Azuki #2341</div>
                                    <div className='d-flex justify-content-between'>
                                       <div className="itemPricetxt">Price</div>
                                       <div className="itemPriceval">1.4 ETH</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 col-xl-2">
                           <div className="gridItemCard">
                              <div className="gItemImg">
                                 <img src={Itemimg2} alt="Itemimg1" className="img-fluid w-100 itemImage" />
                                 <div className='hoverImgCnt'>
                                    <div className='d-flex justify-content-between '>
                                       <div>
                                          <img src={ETHIcon} alt="ETHIcon" className='cointypeImg' />
                                       </div>
                                       <div className='alarmbadge'>
                                          <i className='fas fa-alarm-clock'></i> 6 Days left
                                       </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                       <button className='buybowbtn rounded-pill' type='button'>Buy Now</button>
                                       <button className='cartBtnCircle'>
                                          <img src={shoppingcart} alt="shoppingcart" />
                                       </button>
                                    </div>
                                 </div>
                              </div>
                              <div className='botcntCard'>
                                 <div className='bottomSmImg'>
                                    <img src={ItemimgSm2} height={73} alt="ItemimgSm1" />
                                 </div>
                                 <div className='botcntTxt'>
                                    <div className='itemName'>Azuki #2341</div>
                                    <div className='d-flex justify-content-between'>
                                       <div className="itemPricetxt">Price</div>
                                       <div className="itemPriceval">1.4 ETH</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 col-xl-2">
                           <div className="gridItemCard">
                              <div className="gItemImg">
                                 <img src={Itemimg3} alt="Itemimg1" className="img-fluid w-100 itemImage" />
                                 <div className='hoverImgCnt'>
                                    <div className='d-flex justify-content-between '>
                                       <div>
                                          <img src={ETHIcon} alt="ETHIcon" className='cointypeImg' />
                                       </div>
                                       <div className='alarmbadge'>
                                          <i className='fas fa-alarm-clock'></i> 6 Days left
                                       </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                       <button className='buybowbtn rounded-pill' type='button'>Buy Now</button>
                                       <button className='cartBtnCircle'>
                                          <img src={shoppingcart} alt="shoppingcart" />
                                       </button>
                                    </div>
                                 </div>
                              </div>
                              <div className='botcntCard'>
                                 <div className='bottomSmImg'>
                                    <img src={ItemimgSm3} height={73} alt="ItemimgSm1" />
                                 </div>
                                 <div className='botcntTxt'>
                                    <div className='itemName'>Azuki #2341</div>
                                    <div className='d-flex justify-content-between'>
                                       <div className="itemPricetxt">Price</div>
                                       <div className="itemPriceval">1.4 ETH</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 col-xl-2">
                           <div className="gridItemCard">
                              <div className="gItemImg">
                                 <img src={Itemimg4} alt="Itemimg1" className="img-fluid w-100 itemImage" />
                                 <div className='hoverImgCnt'>
                                    <div className='d-flex justify-content-between '>
                                       <div>
                                          <img src={ETHIcon} alt="ETHIcon" className='cointypeImg' />
                                       </div>
                                       <div className='alarmbadge'>
                                          <i className='fas fa-alarm-clock'></i> 6 Days left
                                       </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                       <button className='buybowbtn rounded-pill' type='button'>Buy Now</button>
                                       <button className='cartBtnCircle'>
                                          <img src={shoppingcart} alt="shoppingcart" />
                                       </button>
                                    </div>
                                 </div>
                              </div>
                              <div className='botcntCard'>
                                 <div className='bottomSmImg'>
                                    <img src={ItemimgSm4} height={73} alt="ItemimgSm1" />
                                 </div>
                                 <div className='botcntTxt'>
                                    <div className='itemName'>Azuki #2341</div>
                                    <div className='d-flex justify-content-between'>
                                       <div className="itemPricetxt">Price</div>
                                       <div className="itemPriceval">1.4 ETH</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 col-xl-2">
                           <div className="gridItemCard">
                              <div className="gItemImg">
                                 <img src={Itemimg5} alt="Itemimg1" className="img-fluid w-100 itemImage" />
                                 <div className='hoverImgCnt'>
                                    <div className='d-flex justify-content-between '>
                                       <div>
                                          <img src={ETHIcon} alt="ETHIcon" className='cointypeImg' />
                                       </div>
                                       <div className='alarmbadge'>
                                          <i className='fas fa-alarm-clock'></i> 6 Days left
                                       </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                       <button className='buybowbtn rounded-pill' type='button'>Buy Now</button>
                                       <button className='cartBtnCircle'>
                                          <img src={shoppingcart} alt="shoppingcart" />
                                       </button>
                                    </div>
                                 </div>
                              </div>
                              <div className='botcntCard'>
                                 <div className='bottomSmImg'>
                                    <img src={ItemimgSm5} height={73} alt="ItemimgSm1" />
                                 </div>
                                 <div className='botcntTxt'>
                                    <div className='itemName'>Azuki #2341</div>
                                    <div className='d-flex justify-content-between'>
                                       <div className="itemPricetxt">Price</div>
                                       <div className="itemPriceval">1.4 ETH</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 col-xl-2">
                           <div className="gridItemCard">
                              <div className="gItemImg">
                                 <img src={Itemimg6} alt="Itemimg1" className="img-fluid w-100 itemImage" />
                                 <div className='hoverImgCnt'>
                                    <div className='d-flex justify-content-between '>
                                       <div>
                                          <img src={ETHIcon} alt="ETHIcon" className='cointypeImg' />
                                       </div>
                                       <div className='alarmbadge'>
                                          <i className='fas fa-alarm-clock'></i> 6 Days left
                                       </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                       <button className='buybowbtn rounded-pill' type='button'>Buy Now</button>
                                       <button className='cartBtnCircle'>
                                          <img src={shoppingcart} alt="shoppingcart" />
                                       </button>
                                    </div>
                                 </div>
                              </div>
                              <div className='botcntCard'>
                                 <div className='bottomSmImg'>
                                    <img src={ItemimgSm6} height={73} alt="ItemimgSm1" />
                                 </div>
                                 <div className='botcntTxt'>
                                    <div className='itemName'>Azuki #2341</div>
                                    <div className='d-flex justify-content-between'>
                                       <div className="itemPricetxt">Price</div>
                                       <div className="itemPriceval">1.4 ETH</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <Modal isOpen={modal} toggle={toggle2} centered="true" className="curMdl lgMdl" backdropClassName="selCurBp">
            <img src={nftBanner1} />
         </Modal>

         <MakeOfferModal modalOpen={makeOfferModal} closeModal={() => setMakeOfferModal(false)} />
         <BuyNFTModal modalOpen={buyNFTModal} closeModal={() => setBuyNFTModal(false)} />

         <EditListingModal modalOpen={editListModal} closeModal={() => setEditListModal(false)} />

         <AuctionBids modalOpen={auctionBidsModal} closeModal={() => setAuctionBidsModal(false)} />

         <AlertToast toastImgIcon={checkTickIcon} toastmassage="Listing updated." />
         <AlertToast toastImgIcon={closeIconRed} toastmassage="All listings canceled." />


         <Modal isOpen={transNFTModal} centered="true" className="mymodal" backdropClassName="selCurBp">
            <ModalHeader onClick={() => { setTransNFTModal(!transNFTModal) }} close={closeBtn}>Transfer NFT</ModalHeader>
            <ModalBody>

               <div class="form-group formInputs">
                  <label htmlFor="">Transfer To:</label>
                  <div class="input-group">
                     <input placeholder="0x13d3..." type="text" class="form-control" />
                  </div>
               </div>


               <div className='mt-4'>
                  <button className='btn btn-block checkoutBtn'>Transfer </button>
               </div>

            </ModalBody>
         </Modal>

         <Footer />
      </div>
   )
}
export default NftDetails;