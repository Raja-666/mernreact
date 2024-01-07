import { Input, InputGroup, TabContent, TabPane, Nav, NavItem, NavLink, UncontrolledCollapse, UncontrolledTooltip  } from "reactstrap"
import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./HomeCollection.scss"
import classnames from 'classnames';

import xnd from "./assets/xnd.png"
import updown from "./assets/updown.png"
import tb1 from "./assets/tb1.png"
import tb2 from "./assets/tb2.png"
import tb3 from "./assets/tb3.png"
import tb4 from "./assets/tb4.png"
import tb5 from "./assets/tb5.png"
import tb6 from "./assets/tb6.png"
import tb7 from "./assets/tb7.png"
import tb8 from "./assets/tb8.png"
import tb9 from "./assets/tb9.png"
import tb10 from "./assets/tb10.png"
import tb11 from "./assets/tb11.png"
import sm4 from "./assets/sm4.png"
import sm3 from "./assets/sm3.png"
import sm2 from "./assets/sm2.png"
import sm1 from "./assets/sm1.png"
import angleDown from "./assets/angle-down.png";
import nodatayet from "./assets/nodatayet.svg";

import tether from "./assets/tether.png"

const Bridge = () => {

   const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const [activeTab1, setActiveTab1] = useState('1');
  const toggle1 = tab => {
    if(activeTab1 !== tab) setActiveTab1(tab);
  }

   return (
      <div className='withoutBannerHeaderPage'>
         <Header />

         <section class="TraSec">
            <div class="container">
                  <div class="d-flex align-items-center justify-content-between flex-wrap">
                     <div class="mb-36">
                        <Nav tabs className="trad_tab_hd">
                           <NavItem>
                              <NavLink
                                 className={classnames({ active: activeTab === '1' })}
                                 onClick={() => { toggle('1'); }}
                              >
                                 Trending
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink
                                 className={classnames({ active: activeTab === '2' })}
                                 onClick={() => { toggle('2'); }}
                              >
                                 Top
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink
                                 className={classnames({ active: activeTab === '3' })}
                                 onClick={() => { toggle('3'); }}
                              >
                                 Watchlist
                              </NavLink>
                           </NavItem>
                        </Nav>
                        {/* <ul class="nav trad_tab_hd " role="tablist">
                           <li class="nav-item">
                              <a class="nav-link btn active mr-2" data-toggle="tab" href="#treitem">
                                 Trending
                              </a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link  btn  mr-2" data-toggle="tab" href="#topitem">
                                 Top
                              </a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link  btn" data-toggle="tab" href="#watchitem">
                                 Watchlist
                              </a>
                           </li>
                        </ul> */}
                     </div>
                     <div class="mb-36">
                        <div class=" mt-2 ">
                              <Nav tabs className="hrs_tab_hd">
                                 <NavItem>
                                    <NavLink
                                       className={classnames({ active: activeTab1 === '1' })}
                                       onClick={() => { toggle1('1'); }}
                                    >
                                       1h
                                    </NavLink>
                                 </NavItem>
                                 <NavItem>
                                    <NavLink
                                       className={classnames({ active: activeTab1 === '2' })}
                                       onClick={() => { toggle1('2'); }}
                                    >
                                       6h
                                    </NavLink>
                                 </NavItem>
                                 <NavItem>
                                    <NavLink
                                       className={classnames({ active: activeTab1 === '3' })}
                                       onClick={() => { toggle1('3'); }}
                                    >
                                       24h
                                    </NavLink>
                                 </NavItem>
                                 <NavItem>
                                    <NavLink
                                       className={classnames({ active: activeTab1 === '4' })}
                                       onClick={() => { toggle1('4'); }}
                                    >
                                       7d
                                    </NavLink>
                                 </NavItem>
                              </Nav>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div class="row">
                        <div class="col-xl-9 order-xl-1 order-2 mb-3">
                              <TabContent activeTab={activeTab}>
                                 <TabPane tabId="1">
                                    <div>
                                       <div class="mb-2">
                                          <label class="artcrd mr-1"><span>Art</span> <span class="crs"><img
                                                      src={xnd} alt="" /></span></label>
                                          <label class="artcrd mr-1"><span>Music</span> <span class="crs"><img
                                                      src={xnd} alt="" /></span></label>
                                          <label class="artcrd mr-1"><span>Binance</span> <span class="crs"><img
                                                      src={xnd} alt="" /></span></label>
                                          <label class="artcrd mr-1"><span>Clear All</span></label>
                                       </div>
                                       <div class="table-responsive">
                                          <table class="table table-borderless mb-0 hmecollection">
                                             <thead class="trd_head">
                                                   <tr>
                                                      <th></th>
                                                      <th>Collection </th>
                                                      <th></th>
                                                      <th>Volume <span><img src={updown} alt="" /></span>
                                                      </th>
                                                      <th>Volume Change <span><img src={updown}
                                                                  alt="" /></span></th>
                                                      <th>Floor Price <span><img src={updown}
                                                                  alt="" /></span></th>
                                                      <th>Floor Change <span><img src={updown}
                                                                  alt="" /></span> </th>
                                                      <th>
                                                         Owners
                                                      </th>
                                                      <th>Items </th>
                                                   </tr>
                                             </thead>
                                             <tbody class="trdtable_body">
                                                   <tr>
                                                      <td class="gld">
                                                         1
                                                         <span className="progressBarCnt"></span>
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb1} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> De Gods</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm3} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg id="tooltip1" width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                                  <UncontrolledTooltip placement="top" target="tooltip1" className="tooltipCnt red-tooltip">
                                                                     Add to Watchlist
                                                                  </UncontrolledTooltip>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         4.4 MATIC
                                                      </td>
                                                      <td class="red">
                                                         -13.31%
                                                      </td>
                                                      <td>
                                                         2.6K MATIC
                                                      </td>
                                                      <td class="green">
                                                         +1.43%

                                                      </td>
                                                      <td>
                                                         6,027
                                                      </td>
                                                      <td>
                                                         64
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         2
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb2} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Remivision</h1>
                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.06 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%
                                                      </td>
                                                      <td>
                                                         5.32 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%

                                                      </td>
                                                      <td>
                                                         1,053
                                                      </td>
                                                      <td>
                                                         126
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         3
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb3} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Loaded Lions</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg id="tooltip2" width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                           fill="#55f764" />
                                                                  </svg>
                                                                  <UncontrolledTooltip placement="top" target="tooltip2" className="tooltipCnt">
                                                                     Remove from Watchlist
                                                                  </UncontrolledTooltip>
                                                               </a>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.57 ETH
                                                      </td>
                                                      <td class="green">
                                                         +1.45%
                                                      </td>
                                                      <td>
                                                         264.15 ETH
                                                      </td>
                                                      <td class="green">
                                                         +10.18%

                                                      </td>
                                                      <td>
                                                         8,486
                                                      </td>
                                                      <td>
                                                         142
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         4
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb4} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="red">
                                                         -12.78%
                                                      </td>
                                                      <td>
                                                         2.6K ETH
                                                      </td>
                                                      <td class="green">
                                                         +586.49%

                                                      </td>
                                                      <td>
                                                         5,193
                                                      </td>
                                                      <td>
                                                         107
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         5
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb5} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Sproto Pepes</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="green">
                                                         +46.12%
                                                      </td>
                                                      <td>
                                                         2.9 ETH
                                                      </td>
                                                      <td class="green">
                                                         +158.52%

                                                      </td>
                                                      <td>
                                                         6,364
                                                      </td>
                                                      <td>
                                                         68
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         6
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb6} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">frENS</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.03 ETH
                                                      </td>
                                                      <td class="red">
                                                         -39.11%
                                                      </td>
                                                      <td>
                                                         11.87 ETH
                                                      </td>
                                                      <td class="green">
                                                         +23.87%

                                                      </td>
                                                      <td>
                                                         1,203
                                                      </td>
                                                      <td>
                                                         57
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         7
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb7} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Moonrunners Of</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.08 ETH
                                                      </td>
                                                      <td class="green">
                                                         +0.76%
                                                      </td>
                                                      <td>
                                                         16 ETH
                                                      </td>
                                                      <td class="green">
                                                         +11.32%

                                                      </td>
                                                      <td>
                                                         4,263
                                                      </td>
                                                      <td>
                                                         39
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         8
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb8} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">League of Kingdo..</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                           fill="#55f764" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         46.11 ETH
                                                      </td>
                                                      <td class="green">
                                                         +0.99%
                                                      </td>
                                                      <td>
                                                         7.8K ETH
                                                      </td>
                                                      <td class="green">
                                                         +54.48%

                                                      </td>
                                                      <td>
                                                         3,417
                                                      </td>
                                                      <td>
                                                         144
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         9
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb9} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Hero Metaverse</h1>

                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.09 BNB
                                                      </td>
                                                      <td class="red">
                                                         -0.05%
                                                      </td>
                                                      <td>
                                                         6.63 BNB
                                                      </td>
                                                      <td class="green">
                                                         +36.17%

                                                      </td>
                                                      <td>
                                                         6,691
                                                      </td>
                                                      <td>
                                                         102
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         10
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb10} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Mocaverse</h1>

                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.64 BNB
                                                      </td>
                                                      <td class="green">
                                                         +9.83%
                                                      </td>
                                                      <td>
                                                         128.2 BNB
                                                      </td>
                                                      <td class="red">
                                                         -36.17%

                                                      </td>
                                                      <td>
                                                         6,500
                                                      </td>
                                                      <td>
                                                         13
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         11
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb11} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Parallel Alpha</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.64 ETH
                                                      </td>
                                                      <td class="green">
                                                         +9.83%
                                                      </td>
                                                      <td>
                                                         128.2 ETH
                                                      </td>
                                                      <td class="red">
                                                         -57.11%

                                                      </td>
                                                      <td>
                                                         6,500
                                                      </td>
                                                      <td>
                                                         13
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         12
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb1} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> De Gods</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm3} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         4.4 MATIC
                                                      </td>
                                                      <td class="red">
                                                         -13.31%
                                                      </td>
                                                      <td>
                                                         2.6K MATIC
                                                      </td>
                                                      <td class="green">
                                                         +1.43%

                                                      </td>
                                                      <td>
                                                         6,027
                                                      </td>
                                                      <td>
                                                         64
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         13
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Remivision</h1>
                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.06 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%
                                                      </td>
                                                      <td>
                                                         5.32 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%

                                                      </td>
                                                      <td>
                                                         1,053
                                                      </td>
                                                      <td>
                                                         126
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         14
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb3} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Loaded Lions</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                           fill="#55f764" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.57 ETH
                                                      </td>
                                                      <td class="green">
                                                         +1.45%
                                                      </td>
                                                      <td>
                                                         264.15 ETH
                                                      </td>
                                                      <td class="green">
                                                         +10.18%

                                                      </td>
                                                      <td>
                                                         8,486
                                                      </td>
                                                      <td>
                                                         142
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         15
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb4} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                           fill="#55f764" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="red">
                                                         -12.78%
                                                      </td>
                                                      <td>
                                                         2.6K ETH
                                                      </td>
                                                      <td class="green">
                                                         +586.49%

                                                      </td>
                                                      <td>
                                                         5,193
                                                      </td>
                                                      <td>
                                                         107
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         16
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb5} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Sproto Pepes</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="green">
                                                         +46.12%
                                                      </td>
                                                      <td>
                                                         2.9 ETH
                                                      </td>
                                                      <td class="green">
                                                         +158.52%

                                                      </td>
                                                      <td>
                                                         6,364
                                                      </td>
                                                      <td>
                                                         68
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         17
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb6} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">frENS</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                           fill="#55f764" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.03 ETH
                                                      </td>
                                                      <td class="red">
                                                         -39.11%
                                                      </td>
                                                      <td>
                                                         11.87 ETH
                                                      </td>
                                                      <td class="green">
                                                         +23.87%

                                                      </td>
                                                      <td>
                                                         1,203
                                                      </td>
                                                      <td>
                                                         57
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         18
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb7} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Moonrunners Of</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                           fill="#55f764" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.08 ETH
                                                      </td>
                                                      <td class="green">
                                                         +0.76%
                                                      </td>
                                                      <td>
                                                         16 ETH
                                                      </td>
                                                      <td class="green">
                                                         +11.32%

                                                      </td>
                                                      <td>
                                                         4,263
                                                      </td>
                                                      <td>
                                                         39
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         19
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb8} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">League of Kingdo..</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         46.11 ETH
                                                      </td>
                                                      <td class="green">
                                                         +0.99%
                                                      </td>
                                                      <td>
                                                         7.8K ETH
                                                      </td>
                                                      <td class="green">
                                                         +54.48%

                                                      </td>
                                                      <td>
                                                         3,417
                                                      </td>
                                                      <td>
                                                         144
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         20
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb9} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Hero Metaverse</h1>

                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.09 BNB
                                                      </td>
                                                      <td class="red">
                                                         -0.05%
                                                      </td>
                                                      <td>
                                                         6.63 BNB
                                                      </td>
                                                      <td class="green">
                                                         +36.17%

                                                      </td>
                                                      <td>
                                                         6,691
                                                      </td>
                                                      <td>
                                                         102
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         21
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb10} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Mocaverse</h1>

                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                           fill="#55f764" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.64 BNB
                                                      </td>
                                                      <td class="green">
                                                         +9.83%
                                                      </td>
                                                      <td>
                                                         128.2 BNB
                                                      </td>
                                                      <td class="red">
                                                         -36.17%

                                                      </td>
                                                      <td>
                                                         6,500
                                                      </td>
                                                      <td>
                                                         13
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         22
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb11} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Parallel Alpha</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                           fill="#55f764" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.64 ETH
                                                      </td>
                                                      <td class="green">
                                                         +9.83%
                                                      </td>
                                                      <td>
                                                         128.2 ETH
                                                      </td>
                                                      <td class="red">
                                                         -57.11%

                                                      </td>
                                                      <td>
                                                         6,500
                                                      </td>
                                                      <td>
                                                         13
                                                      </td>
                                                   </tr>

                                                   {/* ************ */}
                                                   <tr>
                                                      <td class="gld">
                                                         23
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb1} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> De Gods</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm3} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         4.4 MATIC
                                                      </td>
                                                      <td class="red">
                                                         -13.31%
                                                      </td>
                                                      <td>
                                                         2.6K MATIC
                                                      </td>
                                                      <td class="green">
                                                         +1.43%

                                                      </td>
                                                      <td>
                                                         6,027
                                                      </td>
                                                      <td>
                                                         64
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         24
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Remivision</h1>
                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.06 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%
                                                      </td>
                                                      <td>
                                                         5.32 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%

                                                      </td>
                                                      <td>
                                                         1,053
                                                      </td>
                                                      <td>
                                                         126
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         25
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb3} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Loaded Lions</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.57 ETH
                                                      </td>
                                                      <td class="green">
                                                         +1.45%
                                                      </td>
                                                      <td>
                                                         264.15 ETH
                                                      </td>
                                                      <td class="green">
                                                         +10.18%

                                                      </td>
                                                      <td>
                                                         8,486
                                                      </td>
                                                      <td>
                                                         142
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         26
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb4} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="red">
                                                         -12.78%
                                                      </td>
                                                      <td>
                                                         2.6K ETH
                                                      </td>
                                                      <td class="green">
                                                         +586.49%

                                                      </td>
                                                      <td>
                                                         5,193
                                                      </td>
                                                      <td>
                                                         107
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         27
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb5} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Sproto Pepes</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="green">
                                                         +46.12%
                                                      </td>
                                                      <td>
                                                         2.9 ETH
                                                      </td>
                                                      <td class="green">
                                                         +158.52%

                                                      </td>
                                                      <td>
                                                         6,364
                                                      </td>
                                                      <td>
                                                         68
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         28
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb6} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">frENS</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.03 ETH
                                                      </td>
                                                      <td class="red">
                                                         -39.11%
                                                      </td>
                                                      <td>
                                                         11.87 ETH
                                                      </td>
                                                      <td class="green">
                                                         +23.87%

                                                      </td>
                                                      <td>
                                                         1,203
                                                      </td>
                                                      <td>
                                                         57
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         29
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb7} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Moonrunners Of</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.08 ETH
                                                      </td>
                                                      <td class="green">
                                                         +0.76%
                                                      </td>
                                                      <td>
                                                         16 ETH
                                                      </td>
                                                      <td class="green">
                                                         +11.32%

                                                      </td>
                                                      <td>
                                                         4,263
                                                      </td>
                                                      <td>
                                                         39
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         30
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb8} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">League of Kingdo..</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         46.11 ETH
                                                      </td>
                                                      <td class="green">
                                                         +0.99%
                                                      </td>
                                                      <td>
                                                         7.8K ETH
                                                      </td>
                                                      <td class="green">
                                                         +54.48%

                                                      </td>
                                                      <td>
                                                         3,417
                                                      </td>
                                                      <td>
                                                         144
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         31
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb9} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Hero Metaverse</h1>

                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.09 BNB
                                                      </td>
                                                      <td class="red">
                                                         -0.05%
                                                      </td>
                                                      <td>
                                                         6.63 BNB
                                                      </td>
                                                      <td class="green">
                                                         +36.17%

                                                      </td>
                                                      <td>
                                                         6,691
                                                      </td>
                                                      <td>
                                                         102
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         32
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb10} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Mocaverse</h1>

                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.64 BNB
                                                      </td>
                                                      <td class="green">
                                                         +9.83%
                                                      </td>
                                                      <td>
                                                         128.2 BNB
                                                      </td>
                                                      <td class="red">
                                                         -36.17%

                                                      </td>
                                                      <td>
                                                         6,500
                                                      </td>
                                                      <td>
                                                         13
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         33
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb11} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Parallel Alpha</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.64 ETH
                                                      </td>
                                                      <td class="green">
                                                         +9.83%
                                                      </td>
                                                      <td>
                                                         128.2 ETH
                                                      </td>
                                                      <td class="red">
                                                         -57.11%

                                                      </td>
                                                      <td>
                                                         6,500
                                                      </td>
                                                      <td>
                                                         13
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         34
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb1} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> De Gods</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm3} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         4.4 MATIC
                                                      </td>
                                                      <td class="red">
                                                         -13.31%
                                                      </td>
                                                      <td>
                                                         2.6K MATIC
                                                      </td>
                                                      <td class="green">
                                                         +1.43%

                                                      </td>
                                                      <td>
                                                         6,027
                                                      </td>
                                                      <td>
                                                         64
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         35
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Remivision</h1>
                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.06 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%
                                                      </td>
                                                      <td>
                                                         5.32 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%

                                                      </td>
                                                      <td>
                                                         1,053
                                                      </td>
                                                      <td>
                                                         126
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         36
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb3} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Loaded Lions</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.57 ETH
                                                      </td>
                                                      <td class="green">
                                                         +1.45%
                                                      </td>
                                                      <td>
                                                         264.15 ETH
                                                      </td>
                                                      <td class="green">
                                                         +10.18%

                                                      </td>
                                                      <td>
                                                         8,486
                                                      </td>
                                                      <td>
                                                         142
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         37
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb4} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="red">
                                                         -12.78%
                                                      </td>
                                                      <td>
                                                         2.6K ETH
                                                      </td>
                                                      <td class="green">
                                                         +586.49%

                                                      </td>
                                                      <td>
                                                         5,193
                                                      </td>
                                                      <td>
                                                         107
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         38
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb5} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Sproto Pepes</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="green">
                                                         +46.12%
                                                      </td>
                                                      <td>
                                                         2.9 ETH
                                                      </td>
                                                      <td class="green">
                                                         +158.52%

                                                      </td>
                                                      <td>
                                                         6,364
                                                      </td>
                                                      <td>
                                                         68
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         39
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb6} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">frENS</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.03 ETH
                                                      </td>
                                                      <td class="red">
                                                         -39.11%
                                                      </td>
                                                      <td>
                                                         11.87 ETH
                                                      </td>
                                                      <td class="green">
                                                         +23.87%

                                                      </td>
                                                      <td>
                                                         1,203
                                                      </td>
                                                      <td>
                                                         57
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         40
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb7} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Moonrunners Of</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.08 ETH
                                                      </td>
                                                      <td class="green">
                                                         +0.76%
                                                      </td>
                                                      <td>
                                                         16 ETH
                                                      </td>
                                                      <td class="green">
                                                         +11.32%

                                                      </td>
                                                      <td>
                                                         4,263
                                                      </td>
                                                      <td>
                                                         39
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         41
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb8} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">League of Kingdo..</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         46.11 ETH
                                                      </td>
                                                      <td class="green">
                                                         +0.99%
                                                      </td>
                                                      <td>
                                                         7.8K ETH
                                                      </td>
                                                      <td class="green">
                                                         +54.48%

                                                      </td>
                                                      <td>
                                                         3,417
                                                      </td>
                                                      <td>
                                                         144
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         42
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb9} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Hero Metaverse</h1>

                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.09 BNB
                                                      </td>
                                                      <td class="red">
                                                         -0.05%
                                                      </td>
                                                      <td>
                                                         6.63 BNB
                                                      </td>
                                                      <td class="green">
                                                         +36.17%

                                                      </td>
                                                      <td>
                                                         6,691
                                                      </td>
                                                      <td>
                                                         102
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         43
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb10} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Mocaverse</h1>

                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.64 BNB
                                                      </td>
                                                      <td class="green">
                                                         +9.83%
                                                      </td>
                                                      <td>
                                                         128.2 BNB
                                                      </td>
                                                      <td class="red">
                                                         -36.17%

                                                      </td>
                                                      <td>
                                                         6,500
                                                      </td>
                                                      <td>
                                                         13
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         44
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb11} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Parallel Alpha</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.64 ETH
                                                      </td>
                                                      <td class="green">
                                                         +9.83%
                                                      </td>
                                                      <td>
                                                         128.2 ETH
                                                      </td>
                                                      <td class="red">
                                                         -57.11%

                                                      </td>
                                                      <td>
                                                         6,500
                                                      </td>
                                                      <td>
                                                         13
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         45
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Remivision</h1>
                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.06 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%
                                                      </td>
                                                      <td>
                                                         5.32 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%

                                                      </td>
                                                      <td>
                                                         1,053
                                                      </td>
                                                      <td>
                                                         126
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         46
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb3} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Loaded Lions</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.57 ETH
                                                      </td>
                                                      <td class="green">
                                                         +1.45%
                                                      </td>
                                                      <td>
                                                         264.15 ETH
                                                      </td>
                                                      <td class="green">
                                                         +10.18%

                                                      </td>
                                                      <td>
                                                         8,486
                                                      </td>
                                                      <td>
                                                         142
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         47
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb4} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="red">
                                                         -12.78%
                                                      </td>
                                                      <td>
                                                         2.6K ETH
                                                      </td>
                                                      <td class="green">
                                                         +586.49%

                                                      </td>
                                                      <td>
                                                         5,193
                                                      </td>
                                                      <td>
                                                         107
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         48
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb5} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Sproto Pepes</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="green">
                                                         +46.12%
                                                      </td>
                                                      <td>
                                                         2.9 ETH
                                                      </td>
                                                      <td class="green">
                                                         +158.52%

                                                      </td>
                                                      <td>
                                                         6,364
                                                      </td>
                                                      <td>
                                                         68
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         49
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb6} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">frENS</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.03 ETH
                                                      </td>
                                                      <td class="red">
                                                         -39.11%
                                                      </td>
                                                      <td>
                                                         11.87 ETH
                                                      </td>
                                                      <td class="green">
                                                         +23.87%

                                                      </td>
                                                      <td>
                                                         1,203
                                                      </td>
                                                      <td>
                                                         57
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         50
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb4} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="red">
                                                         -12.78%
                                                      </td>
                                                      <td>
                                                         2.6K ETH
                                                      </td>
                                                      <td class="green">
                                                         +586.49%

                                                      </td>
                                                      <td>
                                                         5,193
                                                      </td>
                                                      <td>
                                                         107
                                                      </td>
                                                   </tr>

                                                   {/* ********************************** */}

                                                   <tr>
                                                      <td class="gld">
                                                         51
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb1} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> De Gods</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm3} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         4.4 MATIC
                                                      </td>
                                                      <td class="red">
                                                         -13.31%
                                                      </td>
                                                      <td>
                                                         2.6K MATIC
                                                      </td>
                                                      <td class="green">
                                                         +1.43%

                                                      </td>
                                                      <td>
                                                         6,027
                                                      </td>
                                                      <td>
                                                         64
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         52
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Remivision</h1>
                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.06 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%
                                                      </td>
                                                      <td>
                                                         5.32 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%

                                                      </td>
                                                      <td>
                                                         1,053
                                                      </td>
                                                      <td>
                                                         126
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         53
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb3} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Loaded Lions</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.57 ETH
                                                      </td>
                                                      <td class="green">
                                                         +1.45%
                                                      </td>
                                                      <td>
                                                         264.15 ETH
                                                      </td>
                                                      <td class="green">
                                                         +10.18%

                                                      </td>
                                                      <td>
                                                         8,486
                                                      </td>
                                                      <td>
                                                         142
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         54
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb4} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="red">
                                                         -12.78%
                                                      </td>
                                                      <td>
                                                         2.6K ETH
                                                      </td>
                                                      <td class="green">
                                                         +586.49%

                                                      </td>
                                                      <td>
                                                         5,193
                                                      </td>
                                                      <td>
                                                         107
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         55
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb5} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Sproto Pepes</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="green">
                                                         +46.12%
                                                      </td>
                                                      <td>
                                                         2.9 ETH
                                                      </td>
                                                      <td class="green">
                                                         +158.52%

                                                      </td>
                                                      <td>
                                                         6,364
                                                      </td>
                                                      <td>
                                                         68
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         56
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb6} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">frENS</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.03 ETH
                                                      </td>
                                                      <td class="red">
                                                         -39.11%
                                                      </td>
                                                      <td>
                                                         11.87 ETH
                                                      </td>
                                                      <td class="green">
                                                         +23.87%

                                                      </td>
                                                      <td>
                                                         1,203
                                                      </td>
                                                      <td>
                                                         57
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         57
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb7} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Moonrunners Of</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.08 ETH
                                                      </td>
                                                      <td class="green">
                                                         +0.76%
                                                      </td>
                                                      <td>
                                                         16 ETH
                                                      </td>
                                                      <td class="green">
                                                         +11.32%

                                                      </td>
                                                      <td>
                                                         4,263
                                                      </td>
                                                      <td>
                                                         39
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         58
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb8} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">League of Kingdo..</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         46.11 ETH
                                                      </td>
                                                      <td class="green">
                                                         +0.99%
                                                      </td>
                                                      <td>
                                                         7.8K ETH
                                                      </td>
                                                      <td class="green">
                                                         +54.48%

                                                      </td>
                                                      <td>
                                                         3,417
                                                      </td>
                                                      <td>
                                                         144
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         59
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb9} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Hero Metaverse</h1>

                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.09 BNB
                                                      </td>
                                                      <td class="red">
                                                         -0.05%
                                                      </td>
                                                      <td>
                                                         6.63 BNB
                                                      </td>
                                                      <td class="green">
                                                         +36.17%

                                                      </td>
                                                      <td>
                                                         6,691
                                                      </td>
                                                      <td>
                                                         102
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         60
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb10} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Mocaverse</h1>

                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.64 BNB
                                                      </td>
                                                      <td class="green">
                                                         +9.83%
                                                      </td>
                                                      <td>
                                                         128.2 BNB
                                                      </td>
                                                      <td class="red">
                                                         -36.17%

                                                      </td>
                                                      <td>
                                                         6,500
                                                      </td>
                                                      <td>
                                                         13
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         61
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb11} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Parallel Alpha</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.64 ETH
                                                      </td>
                                                      <td class="green">
                                                         +9.83%
                                                      </td>
                                                      <td>
                                                         128.2 ETH
                                                      </td>
                                                      <td class="red">
                                                         -57.11%

                                                      </td>
                                                      <td>
                                                         6,500
                                                      </td>
                                                      <td>
                                                         13
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         62
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb1} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> De Gods</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm3} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         4.4 MATIC
                                                      </td>
                                                      <td class="red">
                                                         -13.31%
                                                      </td>
                                                      <td>
                                                         2.6K MATIC
                                                      </td>
                                                      <td class="green">
                                                         +1.43%

                                                      </td>
                                                      <td>
                                                         6,027
                                                      </td>
                                                      <td>
                                                         64
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         63
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Remivision</h1>
                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.06 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%
                                                      </td>
                                                      <td>
                                                         5.32 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%

                                                      </td>
                                                      <td>
                                                         1,053
                                                      </td>
                                                      <td>
                                                         126
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         64
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb3} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Loaded Lions</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.57 ETH
                                                      </td>
                                                      <td class="green">
                                                         +1.45%
                                                      </td>
                                                      <td>
                                                         264.15 ETH
                                                      </td>
                                                      <td class="green">
                                                         +10.18%

                                                      </td>
                                                      <td>
                                                         8,486
                                                      </td>
                                                      <td>
                                                         142
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         65
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb4} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="red">
                                                         -12.78%
                                                      </td>
                                                      <td>
                                                         2.6K ETH
                                                      </td>
                                                      <td class="green">
                                                         +586.49%

                                                      </td>
                                                      <td>
                                                         5,193
                                                      </td>
                                                      <td>
                                                         107
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         66
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb5} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Sproto Pepes</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="green">
                                                         +46.12%
                                                      </td>
                                                      <td>
                                                         2.9 ETH
                                                      </td>
                                                      <td class="green">
                                                         +158.52%

                                                      </td>
                                                      <td>
                                                         6,364
                                                      </td>
                                                      <td>
                                                         68
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         67
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb6} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">frENS</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.03 ETH
                                                      </td>
                                                      <td class="red">
                                                         -39.11%
                                                      </td>
                                                      <td>
                                                         11.87 ETH
                                                      </td>
                                                      <td class="green">
                                                         +23.87%

                                                      </td>
                                                      <td>
                                                         1,203
                                                      </td>
                                                      <td>
                                                         57
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         68
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb7} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Moonrunners Of</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.08 ETH
                                                      </td>
                                                      <td class="green">
                                                         +0.76%
                                                      </td>
                                                      <td>
                                                         16 ETH
                                                      </td>
                                                      <td class="green">
                                                         +11.32%

                                                      </td>
                                                      <td>
                                                         4,263
                                                      </td>
                                                      <td>
                                                         39
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         69
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb8} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">League of Kingdo..</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         46.11 ETH
                                                      </td>
                                                      <td class="green">
                                                         +0.99%
                                                      </td>
                                                      <td>
                                                         7.8K ETH
                                                      </td>
                                                      <td class="green">
                                                         +54.48%

                                                      </td>
                                                      <td>
                                                         3,417
                                                      </td>
                                                      <td>
                                                         144
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         70
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb9} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Hero Metaverse</h1>

                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.09 BNB
                                                      </td>
                                                      <td class="red">
                                                         -0.05%
                                                      </td>
                                                      <td>
                                                         6.63 BNB
                                                      </td>
                                                      <td class="green">
                                                         +36.17%

                                                      </td>
                                                      <td>
                                                         6,691
                                                      </td>
                                                      <td>
                                                         102
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         71
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb10} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Mocaverse</h1>

                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.64 BNB
                                                      </td>
                                                      <td class="green">
                                                         +9.83%
                                                      </td>
                                                      <td>
                                                         128.2 BNB
                                                      </td>
                                                      <td class="red">
                                                         -36.17%

                                                      </td>
                                                      <td>
                                                         6,500
                                                      </td>
                                                      <td>
                                                         13
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         72
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb11} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Parallel Alpha</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.64 ETH
                                                      </td>
                                                      <td class="green">
                                                         +9.83%
                                                      </td>
                                                      <td>
                                                         128.2 ETH
                                                      </td>
                                                      <td class="red">
                                                         -57.11%

                                                      </td>
                                                      <td>
                                                         6,500
                                                      </td>
                                                      <td>
                                                         13
                                                      </td>
                                                   </tr>

                                                   {/* ************ */}
                                                   <tr>
                                                      <td class="gld">
                                                         73
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb1} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> De Gods</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm3} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         4.4 MATIC
                                                      </td>
                                                      <td class="red">
                                                         -13.31%
                                                      </td>
                                                      <td>
                                                         2.6K MATIC
                                                      </td>
                                                      <td class="green">
                                                         +1.43%

                                                      </td>
                                                      <td>
                                                         6,027
                                                      </td>
                                                      <td>
                                                         64
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         74
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Remivision</h1>
                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.06 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%
                                                      </td>
                                                      <td>
                                                         5.32 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%

                                                      </td>
                                                      <td>
                                                         1,053
                                                      </td>
                                                      <td>
                                                         126
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         75
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb3} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Loaded Lions</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.57 ETH
                                                      </td>
                                                      <td class="green">
                                                         +1.45%
                                                      </td>
                                                      <td>
                                                         264.15 ETH
                                                      </td>
                                                      <td class="green">
                                                         +10.18%

                                                      </td>
                                                      <td>
                                                         8,486
                                                      </td>
                                                      <td>
                                                         142
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         76
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb4} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="red">
                                                         -12.78%
                                                      </td>
                                                      <td>
                                                         2.6K ETH
                                                      </td>
                                                      <td class="green">
                                                         +586.49%

                                                      </td>
                                                      <td>
                                                         5,193
                                                      </td>
                                                      <td>
                                                         107
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         77
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb5} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Sproto Pepes</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="green">
                                                         +46.12%
                                                      </td>
                                                      <td>
                                                         2.9 ETH
                                                      </td>
                                                      <td class="green">
                                                         +158.52%

                                                      </td>
                                                      <td>
                                                         6,364
                                                      </td>
                                                      <td>
                                                         68
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         78
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb6} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">frENS</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.03 ETH
                                                      </td>
                                                      <td class="red">
                                                         -39.11%
                                                      </td>
                                                      <td>
                                                         11.87 ETH
                                                      </td>
                                                      <td class="green">
                                                         +23.87%

                                                      </td>
                                                      <td>
                                                         1,203
                                                      </td>
                                                      <td>
                                                         57
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         79
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb7} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Moonrunners Of</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.08 ETH
                                                      </td>
                                                      <td class="green">
                                                         +0.76%
                                                      </td>
                                                      <td>
                                                         16 ETH
                                                      </td>
                                                      <td class="green">
                                                         +11.32%

                                                      </td>
                                                      <td>
                                                         4,263
                                                      </td>
                                                      <td>
                                                         39
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         80
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb8} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">League of Kingdo..</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         46.11 ETH
                                                      </td>
                                                      <td class="green">
                                                         +0.99%
                                                      </td>
                                                      <td>
                                                         7.8K ETH
                                                      </td>
                                                      <td class="green">
                                                         +54.48%

                                                      </td>
                                                      <td>
                                                         3,417
                                                      </td>
                                                      <td>
                                                         144
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         81
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb9} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Hero Metaverse</h1>

                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.09 BNB
                                                      </td>
                                                      <td class="red">
                                                         -0.05%
                                                      </td>
                                                      <td>
                                                         6.63 BNB
                                                      </td>
                                                      <td class="green">
                                                         +36.17%

                                                      </td>
                                                      <td>
                                                         6,691
                                                      </td>
                                                      <td>
                                                         102
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         82
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb10} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Mocaverse</h1>

                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.64 BNB
                                                      </td>
                                                      <td class="green">
                                                         +9.83%
                                                      </td>
                                                      <td>
                                                         128.2 BNB
                                                      </td>
                                                      <td class="red">
                                                         -36.17%

                                                      </td>
                                                      <td>
                                                         6,500
                                                      </td>
                                                      <td>
                                                         13
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         83
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb11} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Parallel Alpha</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.64 ETH
                                                      </td>
                                                      <td class="green">
                                                         +9.83%
                                                      </td>
                                                      <td>
                                                         128.2 ETH
                                                      </td>
                                                      <td class="red">
                                                         -57.11%

                                                      </td>
                                                      <td>
                                                         6,500
                                                      </td>
                                                      <td>
                                                         13
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         84
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb1} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> De Gods</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm3} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         4.4 MATIC
                                                      </td>
                                                      <td class="red">
                                                         -13.31%
                                                      </td>
                                                      <td>
                                                         2.6K MATIC
                                                      </td>
                                                      <td class="green">
                                                         +1.43%

                                                      </td>
                                                      <td>
                                                         6,027
                                                      </td>
                                                      <td>
                                                         64
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         85
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Remivision</h1>
                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.06 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%
                                                      </td>
                                                      <td>
                                                         5.32 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%

                                                      </td>
                                                      <td>
                                                         1,053
                                                      </td>
                                                      <td>
                                                         126
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         86
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb3} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Loaded Lions</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.57 ETH
                                                      </td>
                                                      <td class="green">
                                                         +1.45%
                                                      </td>
                                                      <td>
                                                         264.15 ETH
                                                      </td>
                                                      <td class="green">
                                                         +10.18%

                                                      </td>
                                                      <td>
                                                         8,486
                                                      </td>
                                                      <td>
                                                         142
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         87
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb4} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="red">
                                                         -12.78%
                                                      </td>
                                                      <td>
                                                         2.6K ETH
                                                      </td>
                                                      <td class="green">
                                                         +586.49%

                                                      </td>
                                                      <td>
                                                         5,193
                                                      </td>
                                                      <td>
                                                         107
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         88
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb5} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Sproto Pepes</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="green">
                                                         +46.12%
                                                      </td>
                                                      <td>
                                                         2.9 ETH
                                                      </td>
                                                      <td class="green">
                                                         +158.52%

                                                      </td>
                                                      <td>
                                                         6,364
                                                      </td>
                                                      <td>
                                                         68
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         89
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb6} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">frENS</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.03 ETH
                                                      </td>
                                                      <td class="red">
                                                         -39.11%
                                                      </td>
                                                      <td>
                                                         11.87 ETH
                                                      </td>
                                                      <td class="green">
                                                         +23.87%

                                                      </td>
                                                      <td>
                                                         1,203
                                                      </td>
                                                      <td>
                                                         57
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         90
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb7} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Moonrunners Of</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.08 ETH
                                                      </td>
                                                      <td class="green">
                                                         +0.76%
                                                      </td>
                                                      <td>
                                                         16 ETH
                                                      </td>
                                                      <td class="green">
                                                         +11.32%

                                                      </td>
                                                      <td>
                                                         4,263
                                                      </td>
                                                      <td>
                                                         39
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         91
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb8} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">League of Kingdo..</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         46.11 ETH
                                                      </td>
                                                      <td class="green">
                                                         +0.99%
                                                      </td>
                                                      <td>
                                                         7.8K ETH
                                                      </td>
                                                      <td class="green">
                                                         +54.48%

                                                      </td>
                                                      <td>
                                                         3,417
                                                      </td>
                                                      <td>
                                                         144
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         92
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb9} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Hero Metaverse</h1>

                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.09 BNB
                                                      </td>
                                                      <td class="red">
                                                         -0.05%
                                                      </td>
                                                      <td>
                                                         6.63 BNB
                                                      </td>
                                                      <td class="green">
                                                         +36.17%

                                                      </td>
                                                      <td>
                                                         6,691
                                                      </td>
                                                      <td>
                                                         102
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         93
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb10} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Mocaverse</h1>

                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.64 BNB
                                                      </td>
                                                      <td class="green">
                                                         +9.83%
                                                      </td>
                                                      <td>
                                                         128.2 BNB
                                                      </td>
                                                      <td class="red">
                                                         -36.17%

                                                      </td>
                                                      <td>
                                                         6,500
                                                      </td>
                                                      <td>
                                                         13
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         94
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb11} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Parallel Alpha</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.64 ETH
                                                      </td>
                                                      <td class="green">
                                                         +9.83%
                                                      </td>
                                                      <td>
                                                         128.2 ETH
                                                      </td>
                                                      <td class="red">
                                                         -57.11%

                                                      </td>
                                                      <td>
                                                         6,500
                                                      </td>
                                                      <td>
                                                         13
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         95
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Remivision</h1>
                                                               <span>
                                                                  <img src={sm1} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.06 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%
                                                      </td>
                                                      <td>
                                                         5.32 BNB
                                                      </td>
                                                      <td class="green">
                                                         +0.00%

                                                      </td>
                                                      <td>
                                                         1,053
                                                      </td>
                                                      <td>
                                                         126
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         96
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb3} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Loaded Lions</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.57 ETH
                                                      </td>
                                                      <td class="green">
                                                         +1.45%
                                                      </td>
                                                      <td>
                                                         264.15 ETH
                                                      </td>
                                                      <td class="green">
                                                         +10.18%

                                                      </td>
                                                      <td>
                                                         8,486
                                                      </td>
                                                      <td>
                                                         142
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         97
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb4} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="red">
                                                         -12.78%
                                                      </td>
                                                      <td>
                                                         2.6K ETH
                                                      </td>
                                                      <td class="green">
                                                         +586.49%

                                                      </td>
                                                      <td>
                                                         5,193
                                                      </td>
                                                      <td>
                                                         107
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         98
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb5} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">Sproto Pepes</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="green">
                                                         +46.12%
                                                      </td>
                                                      <td>
                                                         2.9 ETH
                                                      </td>
                                                      <td class="green">
                                                         +158.52%

                                                      </td>
                                                      <td>
                                                         6,364
                                                      </td>
                                                      <td>
                                                         68
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         99
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb6} alt="" />
                                                               </span>
                                                               <h1 class="mr-2">frENS</h1>

                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         0.03 ETH
                                                      </td>
                                                      <td class="red">
                                                         -39.11%
                                                      </td>
                                                      <td>
                                                         11.87 ETH
                                                      </td>
                                                      <td class="green">
                                                         +23.87%

                                                      </td>
                                                      <td>
                                                         1,203
                                                      </td>
                                                      <td>
                                                         57
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="gld">
                                                         100
                                                      </td>
                                                      <td>
                                                         <div class="d-flex align-items-center">
                                                               <span class="mr-2">
                                                                  <img src={tb4} alt="" />
                                                               </span>
                                                               <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                               <span class="mr-2">
                                                                  <img src={sm4} alt="" />
                                                               </span>
                                                               <span>
                                                                  <img src={sm2} alt="" />
                                                               </span>
                                                         </div>
                                                      </td>
                                                      <td>
                                                         <div>
                                                               <a href="#">
                                                                  <svg width="19" height="18" viewBox="0 0 19 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                     <path
                                                                           d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                           fill="#595F6A" />
                                                                  </svg>
                                                               </a>

                                                         </div>
                                                      </td>
                                                      <td>
                                                         &lt;0.01 ETH
                                                      </td>
                                                      <td class="red">
                                                         -12.78%
                                                      </td>
                                                      <td>
                                                         2.6K ETH
                                                      </td>
                                                      <td class="green">
                                                         +586.49%

                                                      </td>
                                                      <td>
                                                         5,193
                                                      </td>
                                                      <td>
                                                         107
                                                      </td>
                                                   </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                       <div class="bri_pagenation2">
                                          <nav aria-label="Page ">
                                             <ul class="pagination justify-content-center align-items-center mb-0">
                                                   <li class="page-item"><a href="#" class="page-link page-link-1 "> <svg
                                                               width="7" height="12" viewBox="0 0 7 12" fill="none"
                                                               xmlns="http://www.w3.org/2000/svg">
                                                               <path
                                                                  d="M1.125 5.75L5.71875 1.125C5.84375 0.96875 6.09375 0.96875 6.25 1.125L6.84375 1.75C7 1.875 7 2.125 6.84375 2.28125L3.15625 6L6.84375 9.75C7 9.90625 7 10.125 6.84375 10.2812L6.25 10.9062C6.09375 11.0625 5.84375 11.0625 5.71875 10.9062L1.125 6.28125C0.96875 6.125 0.96875 5.90625 1.125 5.75Z"
                                                                  fill="#F7F7F7" />
                                                         </svg>
                                                      </a></li>
                                                   <li class="page-item"><a href="#" class="page-link active">1</a></li>
                                                   <li class="page-item"><a href="#" class="page-link">2</a></li>
                                                   <li class="page-item"><a href="#" class="page-link">3</a></li>
                                                   <li class="page-item">
                                                      <div class="clog">
                                                         0f
                                                      </div>
                                                   </li>
                                                   <li class="page-item"><a href="#" class="page-link">10</a></li>
                                                   <li class="page-item"><a href="#" class="page-link page-link-1 ">
                                                         <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                                               xmlns="http://www.w3.org/2000/svg">
                                                               <path
                                                                  d="M6.84375 6.28125L2.28125 10.9062C2.125 11.0625 1.875 11.0625 1.75 10.9062L1.125 10.2812C0.96875 10.125 0.96875 9.90625 1.125 9.75L4.8125 6L1.125 2.28125C0.96875 2.125 0.96875 1.875 1.125 1.75L1.75 1.125C1.875 0.96875 2.125 0.96875 2.28125 1.125L6.84375 5.75C7 5.90625 7 6.125 6.84375 6.28125Z"
                                                                  fill="#F7F7F7" />
                                                         </svg>
                                                      </a></li>
                                             </ul>
                                          </nav>
                                       </div>
                                 </div>
                                 </TabPane>
                                 <TabPane tabId="2">
                                    <div class="table-responsive">
                                       <table class="table table-borderless mb-0 hmecollection">
                                          <thead class="trd_head">
                                             <tr>
                                                   <th></th>
                                                   <th>Collection </th>
                                                   <th></th>
                                                   <th>Volume <span><img src={updown} alt="" /></span>
                                                   </th>
                                                   <th>Volume Change <span><img src={updown}
                                                               alt="" /></span></th>
                                                   <th>Floor Price <span><img src={updown} alt="" /></span>
                                                   </th>
                                                   <th>Floor Change <span><img src={updown}
                                                               alt="" /></span> </th>
                                                   <th>
                                                      Owners
                                                   </th>
                                                   <th>Items </th>
                                             </tr>
                                          </thead>
                                          <tbody class="trdtable_body">
                                             <tr>
                                                   <td class="gld">
                                                      1
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb1} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> De Gods</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm3} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      4.4 MATIC
                                                   </td>
                                                   <td class="red">
                                                      -13.31%
                                                   </td>
                                                   <td>
                                                      2.6K MATIC
                                                   </td>
                                                   <td class="green">
                                                      +1.43%

                                                   </td>
                                                   <td>
                                                      6,027
                                                   </td>
                                                   <td>
                                                      64
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      2
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Remivision</h1>
                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.06 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%
                                                   </td>
                                                   <td>
                                                      5.32 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%

                                                   </td>
                                                   <td>
                                                      1,053
                                                   </td>
                                                   <td>
                                                      126
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      3
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb3} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Loaded Lions</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                     fill="#55f764" />
                                                               </svg>
                                                         </a>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.57 ETH
                                                   </td>
                                                   <td class="green">
                                                      +1.45%
                                                   </td>
                                                   <td>
                                                      264.15 ETH
                                                   </td>
                                                   <td class="green">
                                                      +10.18%

                                                   </td>
                                                   <td>
                                                      8,486
                                                   </td>
                                                   <td>
                                                      142
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      4
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb4} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="red">
                                                      -12.78%
                                                   </td>
                                                   <td>
                                                      2.6K ETH
                                                   </td>
                                                   <td class="green">
                                                      +586.49%

                                                   </td>
                                                   <td>
                                                      5,193
                                                   </td>
                                                   <td>
                                                      107
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      5
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb5} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Sproto Pepes</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="green">
                                                      +46.12%
                                                   </td>
                                                   <td>
                                                      2.9 ETH
                                                   </td>
                                                   <td class="green">
                                                      +158.52%

                                                   </td>
                                                   <td>
                                                      6,364
                                                   </td>
                                                   <td>
                                                      68
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      6
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb6} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">frENS</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.03 ETH
                                                   </td>
                                                   <td class="red">
                                                      -39.11%
                                                   </td>
                                                   <td>
                                                      11.87 ETH
                                                   </td>
                                                   <td class="green">
                                                      +23.87%

                                                   </td>
                                                   <td>
                                                      1,203
                                                   </td>
                                                   <td>
                                                      57
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      7
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb7} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Moonrunners Of</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.08 ETH
                                                   </td>
                                                   <td class="green">
                                                      +0.76%
                                                   </td>
                                                   <td>
                                                      16 ETH
                                                   </td>
                                                   <td class="green">
                                                      +11.32%

                                                   </td>
                                                   <td>
                                                      4,263
                                                   </td>
                                                   <td>
                                                      39
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      8
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb8} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">League of Kingdo..</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                     fill="#55f764" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      46.11 ETH
                                                   </td>
                                                   <td class="green">
                                                      +0.99%
                                                   </td>
                                                   <td>
                                                      7.8K ETH
                                                   </td>
                                                   <td class="green">
                                                      +54.48%

                                                   </td>
                                                   <td>
                                                      3,417
                                                   </td>
                                                   <td>
                                                      144
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      9
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb9} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Hero Metaverse</h1>

                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.09 BNB
                                                   </td>
                                                   <td class="red">
                                                      -0.05%
                                                   </td>
                                                   <td>
                                                      6.63 BNB
                                                   </td>
                                                   <td class="green">
                                                      +36.17%

                                                   </td>
                                                   <td>
                                                      6,691
                                                   </td>
                                                   <td>
                                                      102
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      10
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb10} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Mocaverse</h1>

                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.64 BNB
                                                   </td>
                                                   <td class="green">
                                                      +9.83%
                                                   </td>
                                                   <td>
                                                      128.2 BNB
                                                   </td>
                                                   <td class="red">
                                                      -36.17%

                                                   </td>
                                                   <td>
                                                      6,500
                                                   </td>
                                                   <td>
                                                      13
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      11
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb11} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Parallel Alpha</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.64 ETH
                                                   </td>
                                                   <td class="green">
                                                      +9.83%
                                                   </td>
                                                   <td>
                                                      128.2 ETH
                                                   </td>
                                                   <td class="red">
                                                      -57.11%

                                                   </td>
                                                   <td>
                                                      6,500
                                                   </td>
                                                   <td>
                                                      13
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      12
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb1} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> De Gods</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm3} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      4.4 MATIC
                                                   </td>
                                                   <td class="red">
                                                      -13.31%
                                                   </td>
                                                   <td>
                                                      2.6K MATIC
                                                   </td>
                                                   <td class="green">
                                                      +1.43%

                                                   </td>
                                                   <td>
                                                      6,027
                                                   </td>
                                                   <td>
                                                      64
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      13
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Remivision</h1>
                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.06 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%
                                                   </td>
                                                   <td>
                                                      5.32 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%

                                                   </td>
                                                   <td>
                                                      1,053
                                                   </td>
                                                   <td>
                                                      126
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      14
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb3} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Loaded Lions</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                     fill="#55f764" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.57 ETH
                                                   </td>
                                                   <td class="green">
                                                      +1.45%
                                                   </td>
                                                   <td>
                                                      264.15 ETH
                                                   </td>
                                                   <td class="green">
                                                      +10.18%

                                                   </td>
                                                   <td>
                                                      8,486
                                                   </td>
                                                   <td>
                                                      142
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      15
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb4} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                     fill="#55f764" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="red">
                                                      -12.78%
                                                   </td>
                                                   <td>
                                                      2.6K ETH
                                                   </td>
                                                   <td class="green">
                                                      +586.49%

                                                   </td>
                                                   <td>
                                                      5,193
                                                   </td>
                                                   <td>
                                                      107
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      16
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb5} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Sproto Pepes</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="green">
                                                      +46.12%
                                                   </td>
                                                   <td>
                                                      2.9 ETH
                                                   </td>
                                                   <td class="green">
                                                      +158.52%

                                                   </td>
                                                   <td>
                                                      6,364
                                                   </td>
                                                   <td>
                                                      68
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      17
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb6} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">frENS</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                     fill="#55f764" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.03 ETH
                                                   </td>
                                                   <td class="red">
                                                      -39.11%
                                                   </td>
                                                   <td>
                                                      11.87 ETH
                                                   </td>
                                                   <td class="green">
                                                      +23.87%

                                                   </td>
                                                   <td>
                                                      1,203
                                                   </td>
                                                   <td>
                                                      57
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      18
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb7} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Moonrunners Of</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                     fill="#55f764" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.08 ETH
                                                   </td>
                                                   <td class="green">
                                                      +0.76%
                                                   </td>
                                                   <td>
                                                      16 ETH
                                                   </td>
                                                   <td class="green">
                                                      +11.32%

                                                   </td>
                                                   <td>
                                                      4,263
                                                   </td>
                                                   <td>
                                                      39
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      19
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb8} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">League of Kingdo..</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      46.11 ETH
                                                   </td>
                                                   <td class="green">
                                                      +0.99%
                                                   </td>
                                                   <td>
                                                      7.8K ETH
                                                   </td>
                                                   <td class="green">
                                                      +54.48%

                                                   </td>
                                                   <td>
                                                      3,417
                                                   </td>
                                                   <td>
                                                      144
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      20
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb9} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Hero Metaverse</h1>

                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.09 BNB
                                                   </td>
                                                   <td class="red">
                                                      -0.05%
                                                   </td>
                                                   <td>
                                                      6.63 BNB
                                                   </td>
                                                   <td class="green">
                                                      +36.17%

                                                   </td>
                                                   <td>
                                                      6,691
                                                   </td>
                                                   <td>
                                                      102
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      21
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb10} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Mocaverse</h1>

                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                     fill="#55f764" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.64 BNB
                                                   </td>
                                                   <td class="green">
                                                      +9.83%
                                                   </td>
                                                   <td>
                                                      128.2 BNB
                                                   </td>
                                                   <td class="red">
                                                      -36.17%

                                                   </td>
                                                   <td>
                                                      6,500
                                                   </td>
                                                   <td>
                                                      13
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      22
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb11} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Parallel Alpha</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                     fill="#55f764" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.64 ETH
                                                   </td>
                                                   <td class="green">
                                                      +9.83%
                                                   </td>
                                                   <td>
                                                      128.2 ETH
                                                   </td>
                                                   <td class="red">
                                                      -57.11%

                                                   </td>
                                                   <td>
                                                      6,500
                                                   </td>
                                                   <td>
                                                      13
                                                   </td>
                                             </tr>

                                             {/* ************ */}
                                             <tr>
                                                   <td class="gld">
                                                      23
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb1} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> De Gods</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm3} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      4.4 MATIC
                                                   </td>
                                                   <td class="red">
                                                      -13.31%
                                                   </td>
                                                   <td>
                                                      2.6K MATIC
                                                   </td>
                                                   <td class="green">
                                                      +1.43%

                                                   </td>
                                                   <td>
                                                      6,027
                                                   </td>
                                                   <td>
                                                      64
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      24
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Remivision</h1>
                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.06 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%
                                                   </td>
                                                   <td>
                                                      5.32 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%

                                                   </td>
                                                   <td>
                                                      1,053
                                                   </td>
                                                   <td>
                                                      126
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      25
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb3} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Loaded Lions</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.57 ETH
                                                   </td>
                                                   <td class="green">
                                                      +1.45%
                                                   </td>
                                                   <td>
                                                      264.15 ETH
                                                   </td>
                                                   <td class="green">
                                                      +10.18%

                                                   </td>
                                                   <td>
                                                      8,486
                                                   </td>
                                                   <td>
                                                      142
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      26
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb4} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="red">
                                                      -12.78%
                                                   </td>
                                                   <td>
                                                      2.6K ETH
                                                   </td>
                                                   <td class="green">
                                                      +586.49%

                                                   </td>
                                                   <td>
                                                      5,193
                                                   </td>
                                                   <td>
                                                      107
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      27
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb5} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Sproto Pepes</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="green">
                                                      +46.12%
                                                   </td>
                                                   <td>
                                                      2.9 ETH
                                                   </td>
                                                   <td class="green">
                                                      +158.52%

                                                   </td>
                                                   <td>
                                                      6,364
                                                   </td>
                                                   <td>
                                                      68
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      28
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb6} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">frENS</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.03 ETH
                                                   </td>
                                                   <td class="red">
                                                      -39.11%
                                                   </td>
                                                   <td>
                                                      11.87 ETH
                                                   </td>
                                                   <td class="green">
                                                      +23.87%

                                                   </td>
                                                   <td>
                                                      1,203
                                                   </td>
                                                   <td>
                                                      57
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      29
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb7} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Moonrunners Of</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.08 ETH
                                                   </td>
                                                   <td class="green">
                                                      +0.76%
                                                   </td>
                                                   <td>
                                                      16 ETH
                                                   </td>
                                                   <td class="green">
                                                      +11.32%

                                                   </td>
                                                   <td>
                                                      4,263
                                                   </td>
                                                   <td>
                                                      39
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      30
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb8} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">League of Kingdo..</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      46.11 ETH
                                                   </td>
                                                   <td class="green">
                                                      +0.99%
                                                   </td>
                                                   <td>
                                                      7.8K ETH
                                                   </td>
                                                   <td class="green">
                                                      +54.48%

                                                   </td>
                                                   <td>
                                                      3,417
                                                   </td>
                                                   <td>
                                                      144
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      31
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb9} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Hero Metaverse</h1>

                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.09 BNB
                                                   </td>
                                                   <td class="red">
                                                      -0.05%
                                                   </td>
                                                   <td>
                                                      6.63 BNB
                                                   </td>
                                                   <td class="green">
                                                      +36.17%

                                                   </td>
                                                   <td>
                                                      6,691
                                                   </td>
                                                   <td>
                                                      102
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      32
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb10} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Mocaverse</h1>

                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.64 BNB
                                                   </td>
                                                   <td class="green">
                                                      +9.83%
                                                   </td>
                                                   <td>
                                                      128.2 BNB
                                                   </td>
                                                   <td class="red">
                                                      -36.17%

                                                   </td>
                                                   <td>
                                                      6,500
                                                   </td>
                                                   <td>
                                                      13
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      33
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb11} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Parallel Alpha</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.64 ETH
                                                   </td>
                                                   <td class="green">
                                                      +9.83%
                                                   </td>
                                                   <td>
                                                      128.2 ETH
                                                   </td>
                                                   <td class="red">
                                                      -57.11%

                                                   </td>
                                                   <td>
                                                      6,500
                                                   </td>
                                                   <td>
                                                      13
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      34
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb1} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> De Gods</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm3} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      4.4 MATIC
                                                   </td>
                                                   <td class="red">
                                                      -13.31%
                                                   </td>
                                                   <td>
                                                      2.6K MATIC
                                                   </td>
                                                   <td class="green">
                                                      +1.43%

                                                   </td>
                                                   <td>
                                                      6,027
                                                   </td>
                                                   <td>
                                                      64
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      35
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Remivision</h1>
                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.06 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%
                                                   </td>
                                                   <td>
                                                      5.32 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%

                                                   </td>
                                                   <td>
                                                      1,053
                                                   </td>
                                                   <td>
                                                      126
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      36
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb3} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Loaded Lions</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.57 ETH
                                                   </td>
                                                   <td class="green">
                                                      +1.45%
                                                   </td>
                                                   <td>
                                                      264.15 ETH
                                                   </td>
                                                   <td class="green">
                                                      +10.18%

                                                   </td>
                                                   <td>
                                                      8,486
                                                   </td>
                                                   <td>
                                                      142
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      37
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb4} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="red">
                                                      -12.78%
                                                   </td>
                                                   <td>
                                                      2.6K ETH
                                                   </td>
                                                   <td class="green">
                                                      +586.49%

                                                   </td>
                                                   <td>
                                                      5,193
                                                   </td>
                                                   <td>
                                                      107
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      38
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb5} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Sproto Pepes</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="green">
                                                      +46.12%
                                                   </td>
                                                   <td>
                                                      2.9 ETH
                                                   </td>
                                                   <td class="green">
                                                      +158.52%

                                                   </td>
                                                   <td>
                                                      6,364
                                                   </td>
                                                   <td>
                                                      68
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      39
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb6} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">frENS</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.03 ETH
                                                   </td>
                                                   <td class="red">
                                                      -39.11%
                                                   </td>
                                                   <td>
                                                      11.87 ETH
                                                   </td>
                                                   <td class="green">
                                                      +23.87%

                                                   </td>
                                                   <td>
                                                      1,203
                                                   </td>
                                                   <td>
                                                      57
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      40
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb7} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Moonrunners Of</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.08 ETH
                                                   </td>
                                                   <td class="green">
                                                      +0.76%
                                                   </td>
                                                   <td>
                                                      16 ETH
                                                   </td>
                                                   <td class="green">
                                                      +11.32%

                                                   </td>
                                                   <td>
                                                      4,263
                                                   </td>
                                                   <td>
                                                      39
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      41
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb8} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">League of Kingdo..</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      46.11 ETH
                                                   </td>
                                                   <td class="green">
                                                      +0.99%
                                                   </td>
                                                   <td>
                                                      7.8K ETH
                                                   </td>
                                                   <td class="green">
                                                      +54.48%

                                                   </td>
                                                   <td>
                                                      3,417
                                                   </td>
                                                   <td>
                                                      144
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      42
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb9} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Hero Metaverse</h1>

                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.09 BNB
                                                   </td>
                                                   <td class="red">
                                                      -0.05%
                                                   </td>
                                                   <td>
                                                      6.63 BNB
                                                   </td>
                                                   <td class="green">
                                                      +36.17%

                                                   </td>
                                                   <td>
                                                      6,691
                                                   </td>
                                                   <td>
                                                      102
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      43
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb10} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Mocaverse</h1>

                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.64 BNB
                                                   </td>
                                                   <td class="green">
                                                      +9.83%
                                                   </td>
                                                   <td>
                                                      128.2 BNB
                                                   </td>
                                                   <td class="red">
                                                      -36.17%

                                                   </td>
                                                   <td>
                                                      6,500
                                                   </td>
                                                   <td>
                                                      13
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      44
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb11} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Parallel Alpha</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.64 ETH
                                                   </td>
                                                   <td class="green">
                                                      +9.83%
                                                   </td>
                                                   <td>
                                                      128.2 ETH
                                                   </td>
                                                   <td class="red">
                                                      -57.11%

                                                   </td>
                                                   <td>
                                                      6,500
                                                   </td>
                                                   <td>
                                                      13
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      45
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Remivision</h1>
                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.06 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%
                                                   </td>
                                                   <td>
                                                      5.32 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%

                                                   </td>
                                                   <td>
                                                      1,053
                                                   </td>
                                                   <td>
                                                      126
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      46
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb3} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Loaded Lions</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.57 ETH
                                                   </td>
                                                   <td class="green">
                                                      +1.45%
                                                   </td>
                                                   <td>
                                                      264.15 ETH
                                                   </td>
                                                   <td class="green">
                                                      +10.18%

                                                   </td>
                                                   <td>
                                                      8,486
                                                   </td>
                                                   <td>
                                                      142
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      47
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb4} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="red">
                                                      -12.78%
                                                   </td>
                                                   <td>
                                                      2.6K ETH
                                                   </td>
                                                   <td class="green">
                                                      +586.49%

                                                   </td>
                                                   <td>
                                                      5,193
                                                   </td>
                                                   <td>
                                                      107
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      48
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb5} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Sproto Pepes</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="green">
                                                      +46.12%
                                                   </td>
                                                   <td>
                                                      2.9 ETH
                                                   </td>
                                                   <td class="green">
                                                      +158.52%

                                                   </td>
                                                   <td>
                                                      6,364
                                                   </td>
                                                   <td>
                                                      68
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      49
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb6} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">frENS</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.03 ETH
                                                   </td>
                                                   <td class="red">
                                                      -39.11%
                                                   </td>
                                                   <td>
                                                      11.87 ETH
                                                   </td>
                                                   <td class="green">
                                                      +23.87%

                                                   </td>
                                                   <td>
                                                      1,203
                                                   </td>
                                                   <td>
                                                      57
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      50
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb4} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="red">
                                                      -12.78%
                                                   </td>
                                                   <td>
                                                      2.6K ETH
                                                   </td>
                                                   <td class="green">
                                                      +586.49%

                                                   </td>
                                                   <td>
                                                      5,193
                                                   </td>
                                                   <td>
                                                      107
                                                   </td>
                                             </tr>

                                             {/* ********************************** */}

                                             <tr>
                                                   <td class="gld">
                                                      51
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb1} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> De Gods</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm3} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      4.4 MATIC
                                                   </td>
                                                   <td class="red">
                                                      -13.31%
                                                   </td>
                                                   <td>
                                                      2.6K MATIC
                                                   </td>
                                                   <td class="green">
                                                      +1.43%

                                                   </td>
                                                   <td>
                                                      6,027
                                                   </td>
                                                   <td>
                                                      64
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      52
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Remivision</h1>
                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.06 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%
                                                   </td>
                                                   <td>
                                                      5.32 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%

                                                   </td>
                                                   <td>
                                                      1,053
                                                   </td>
                                                   <td>
                                                      126
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      53
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb3} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Loaded Lions</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.57 ETH
                                                   </td>
                                                   <td class="green">
                                                      +1.45%
                                                   </td>
                                                   <td>
                                                      264.15 ETH
                                                   </td>
                                                   <td class="green">
                                                      +10.18%

                                                   </td>
                                                   <td>
                                                      8,486
                                                   </td>
                                                   <td>
                                                      142
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      54
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb4} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="red">
                                                      -12.78%
                                                   </td>
                                                   <td>
                                                      2.6K ETH
                                                   </td>
                                                   <td class="green">
                                                      +586.49%

                                                   </td>
                                                   <td>
                                                      5,193
                                                   </td>
                                                   <td>
                                                      107
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      55
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb5} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Sproto Pepes</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="green">
                                                      +46.12%
                                                   </td>
                                                   <td>
                                                      2.9 ETH
                                                   </td>
                                                   <td class="green">
                                                      +158.52%

                                                   </td>
                                                   <td>
                                                      6,364
                                                   </td>
                                                   <td>
                                                      68
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      56
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb6} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">frENS</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.03 ETH
                                                   </td>
                                                   <td class="red">
                                                      -39.11%
                                                   </td>
                                                   <td>
                                                      11.87 ETH
                                                   </td>
                                                   <td class="green">
                                                      +23.87%

                                                   </td>
                                                   <td>
                                                      1,203
                                                   </td>
                                                   <td>
                                                      57
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      57
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb7} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Moonrunners Of</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.08 ETH
                                                   </td>
                                                   <td class="green">
                                                      +0.76%
                                                   </td>
                                                   <td>
                                                      16 ETH
                                                   </td>
                                                   <td class="green">
                                                      +11.32%

                                                   </td>
                                                   <td>
                                                      4,263
                                                   </td>
                                                   <td>
                                                      39
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      58
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb8} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">League of Kingdo..</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      46.11 ETH
                                                   </td>
                                                   <td class="green">
                                                      +0.99%
                                                   </td>
                                                   <td>
                                                      7.8K ETH
                                                   </td>
                                                   <td class="green">
                                                      +54.48%

                                                   </td>
                                                   <td>
                                                      3,417
                                                   </td>
                                                   <td>
                                                      144
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      59
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb9} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Hero Metaverse</h1>

                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.09 BNB
                                                   </td>
                                                   <td class="red">
                                                      -0.05%
                                                   </td>
                                                   <td>
                                                      6.63 BNB
                                                   </td>
                                                   <td class="green">
                                                      +36.17%

                                                   </td>
                                                   <td>
                                                      6,691
                                                   </td>
                                                   <td>
                                                      102
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      60
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb10} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Mocaverse</h1>

                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.64 BNB
                                                   </td>
                                                   <td class="green">
                                                      +9.83%
                                                   </td>
                                                   <td>
                                                      128.2 BNB
                                                   </td>
                                                   <td class="red">
                                                      -36.17%

                                                   </td>
                                                   <td>
                                                      6,500
                                                   </td>
                                                   <td>
                                                      13
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      61
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb11} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Parallel Alpha</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.64 ETH
                                                   </td>
                                                   <td class="green">
                                                      +9.83%
                                                   </td>
                                                   <td>
                                                      128.2 ETH
                                                   </td>
                                                   <td class="red">
                                                      -57.11%

                                                   </td>
                                                   <td>
                                                      6,500
                                                   </td>
                                                   <td>
                                                      13
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      62
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb1} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> De Gods</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm3} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      4.4 MATIC
                                                   </td>
                                                   <td class="red">
                                                      -13.31%
                                                   </td>
                                                   <td>
                                                      2.6K MATIC
                                                   </td>
                                                   <td class="green">
                                                      +1.43%

                                                   </td>
                                                   <td>
                                                      6,027
                                                   </td>
                                                   <td>
                                                      64
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      63
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Remivision</h1>
                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.06 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%
                                                   </td>
                                                   <td>
                                                      5.32 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%

                                                   </td>
                                                   <td>
                                                      1,053
                                                   </td>
                                                   <td>
                                                      126
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      64
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb3} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Loaded Lions</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.57 ETH
                                                   </td>
                                                   <td class="green">
                                                      +1.45%
                                                   </td>
                                                   <td>
                                                      264.15 ETH
                                                   </td>
                                                   <td class="green">
                                                      +10.18%

                                                   </td>
                                                   <td>
                                                      8,486
                                                   </td>
                                                   <td>
                                                      142
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      65
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb4} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="red">
                                                      -12.78%
                                                   </td>
                                                   <td>
                                                      2.6K ETH
                                                   </td>
                                                   <td class="green">
                                                      +586.49%

                                                   </td>
                                                   <td>
                                                      5,193
                                                   </td>
                                                   <td>
                                                      107
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      66
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb5} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Sproto Pepes</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="green">
                                                      +46.12%
                                                   </td>
                                                   <td>
                                                      2.9 ETH
                                                   </td>
                                                   <td class="green">
                                                      +158.52%

                                                   </td>
                                                   <td>
                                                      6,364
                                                   </td>
                                                   <td>
                                                      68
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      67
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb6} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">frENS</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.03 ETH
                                                   </td>
                                                   <td class="red">
                                                      -39.11%
                                                   </td>
                                                   <td>
                                                      11.87 ETH
                                                   </td>
                                                   <td class="green">
                                                      +23.87%

                                                   </td>
                                                   <td>
                                                      1,203
                                                   </td>
                                                   <td>
                                                      57
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      68
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb7} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Moonrunners Of</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.08 ETH
                                                   </td>
                                                   <td class="green">
                                                      +0.76%
                                                   </td>
                                                   <td>
                                                      16 ETH
                                                   </td>
                                                   <td class="green">
                                                      +11.32%

                                                   </td>
                                                   <td>
                                                      4,263
                                                   </td>
                                                   <td>
                                                      39
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      69
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb8} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">League of Kingdo..</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      46.11 ETH
                                                   </td>
                                                   <td class="green">
                                                      +0.99%
                                                   </td>
                                                   <td>
                                                      7.8K ETH
                                                   </td>
                                                   <td class="green">
                                                      +54.48%

                                                   </td>
                                                   <td>
                                                      3,417
                                                   </td>
                                                   <td>
                                                      144
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      70
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb9} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Hero Metaverse</h1>

                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.09 BNB
                                                   </td>
                                                   <td class="red">
                                                      -0.05%
                                                   </td>
                                                   <td>
                                                      6.63 BNB
                                                   </td>
                                                   <td class="green">
                                                      +36.17%

                                                   </td>
                                                   <td>
                                                      6,691
                                                   </td>
                                                   <td>
                                                      102
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      71
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb10} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Mocaverse</h1>

                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.64 BNB
                                                   </td>
                                                   <td class="green">
                                                      +9.83%
                                                   </td>
                                                   <td>
                                                      128.2 BNB
                                                   </td>
                                                   <td class="red">
                                                      -36.17%

                                                   </td>
                                                   <td>
                                                      6,500
                                                   </td>
                                                   <td>
                                                      13
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      72
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb11} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Parallel Alpha</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.64 ETH
                                                   </td>
                                                   <td class="green">
                                                      +9.83%
                                                   </td>
                                                   <td>
                                                      128.2 ETH
                                                   </td>
                                                   <td class="red">
                                                      -57.11%

                                                   </td>
                                                   <td>
                                                      6,500
                                                   </td>
                                                   <td>
                                                      13
                                                   </td>
                                             </tr>

                                             {/* ************ */}
                                             <tr>
                                                   <td class="gld">
                                                      73
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb1} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> De Gods</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm3} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      4.4 MATIC
                                                   </td>
                                                   <td class="red">
                                                      -13.31%
                                                   </td>
                                                   <td>
                                                      2.6K MATIC
                                                   </td>
                                                   <td class="green">
                                                      +1.43%

                                                   </td>
                                                   <td>
                                                      6,027
                                                   </td>
                                                   <td>
                                                      64
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      74
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Remivision</h1>
                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.06 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%
                                                   </td>
                                                   <td>
                                                      5.32 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%

                                                   </td>
                                                   <td>
                                                      1,053
                                                   </td>
                                                   <td>
                                                      126
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      75
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb3} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Loaded Lions</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.57 ETH
                                                   </td>
                                                   <td class="green">
                                                      +1.45%
                                                   </td>
                                                   <td>
                                                      264.15 ETH
                                                   </td>
                                                   <td class="green">
                                                      +10.18%

                                                   </td>
                                                   <td>
                                                      8,486
                                                   </td>
                                                   <td>
                                                      142
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      76
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb4} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="red">
                                                      -12.78%
                                                   </td>
                                                   <td>
                                                      2.6K ETH
                                                   </td>
                                                   <td class="green">
                                                      +586.49%

                                                   </td>
                                                   <td>
                                                      5,193
                                                   </td>
                                                   <td>
                                                      107
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      77
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb5} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Sproto Pepes</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="green">
                                                      +46.12%
                                                   </td>
                                                   <td>
                                                      2.9 ETH
                                                   </td>
                                                   <td class="green">
                                                      +158.52%

                                                   </td>
                                                   <td>
                                                      6,364
                                                   </td>
                                                   <td>
                                                      68
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      78
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb6} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">frENS</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.03 ETH
                                                   </td>
                                                   <td class="red">
                                                      -39.11%
                                                   </td>
                                                   <td>
                                                      11.87 ETH
                                                   </td>
                                                   <td class="green">
                                                      +23.87%

                                                   </td>
                                                   <td>
                                                      1,203
                                                   </td>
                                                   <td>
                                                      57
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      79
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb7} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Moonrunners Of</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.08 ETH
                                                   </td>
                                                   <td class="green">
                                                      +0.76%
                                                   </td>
                                                   <td>
                                                      16 ETH
                                                   </td>
                                                   <td class="green">
                                                      +11.32%

                                                   </td>
                                                   <td>
                                                      4,263
                                                   </td>
                                                   <td>
                                                      39
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      80
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb8} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">League of Kingdo..</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      46.11 ETH
                                                   </td>
                                                   <td class="green">
                                                      +0.99%
                                                   </td>
                                                   <td>
                                                      7.8K ETH
                                                   </td>
                                                   <td class="green">
                                                      +54.48%

                                                   </td>
                                                   <td>
                                                      3,417
                                                   </td>
                                                   <td>
                                                      144
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      81
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb9} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Hero Metaverse</h1>

                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.09 BNB
                                                   </td>
                                                   <td class="red">
                                                      -0.05%
                                                   </td>
                                                   <td>
                                                      6.63 BNB
                                                   </td>
                                                   <td class="green">
                                                      +36.17%

                                                   </td>
                                                   <td>
                                                      6,691
                                                   </td>
                                                   <td>
                                                      102
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      82
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb10} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Mocaverse</h1>

                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.64 BNB
                                                   </td>
                                                   <td class="green">
                                                      +9.83%
                                                   </td>
                                                   <td>
                                                      128.2 BNB
                                                   </td>
                                                   <td class="red">
                                                      -36.17%

                                                   </td>
                                                   <td>
                                                      6,500
                                                   </td>
                                                   <td>
                                                      13
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      83
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb11} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Parallel Alpha</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.64 ETH
                                                   </td>
                                                   <td class="green">
                                                      +9.83%
                                                   </td>
                                                   <td>
                                                      128.2 ETH
                                                   </td>
                                                   <td class="red">
                                                      -57.11%

                                                   </td>
                                                   <td>
                                                      6,500
                                                   </td>
                                                   <td>
                                                      13
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      84
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb1} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> De Gods</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm3} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      4.4 MATIC
                                                   </td>
                                                   <td class="red">
                                                      -13.31%
                                                   </td>
                                                   <td>
                                                      2.6K MATIC
                                                   </td>
                                                   <td class="green">
                                                      +1.43%

                                                   </td>
                                                   <td>
                                                      6,027
                                                   </td>
                                                   <td>
                                                      64
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      85
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Remivision</h1>
                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.06 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%
                                                   </td>
                                                   <td>
                                                      5.32 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%

                                                   </td>
                                                   <td>
                                                      1,053
                                                   </td>
                                                   <td>
                                                      126
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      86
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb3} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Loaded Lions</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.57 ETH
                                                   </td>
                                                   <td class="green">
                                                      +1.45%
                                                   </td>
                                                   <td>
                                                      264.15 ETH
                                                   </td>
                                                   <td class="green">
                                                      +10.18%

                                                   </td>
                                                   <td>
                                                      8,486
                                                   </td>
                                                   <td>
                                                      142
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      87
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb4} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="red">
                                                      -12.78%
                                                   </td>
                                                   <td>
                                                      2.6K ETH
                                                   </td>
                                                   <td class="green">
                                                      +586.49%

                                                   </td>
                                                   <td>
                                                      5,193
                                                   </td>
                                                   <td>
                                                      107
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      88
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb5} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Sproto Pepes</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="green">
                                                      +46.12%
                                                   </td>
                                                   <td>
                                                      2.9 ETH
                                                   </td>
                                                   <td class="green">
                                                      +158.52%

                                                   </td>
                                                   <td>
                                                      6,364
                                                   </td>
                                                   <td>
                                                      68
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      89
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb6} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">frENS</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.03 ETH
                                                   </td>
                                                   <td class="red">
                                                      -39.11%
                                                   </td>
                                                   <td>
                                                      11.87 ETH
                                                   </td>
                                                   <td class="green">
                                                      +23.87%

                                                   </td>
                                                   <td>
                                                      1,203
                                                   </td>
                                                   <td>
                                                      57
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      90
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb7} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Moonrunners Of</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.08 ETH
                                                   </td>
                                                   <td class="green">
                                                      +0.76%
                                                   </td>
                                                   <td>
                                                      16 ETH
                                                   </td>
                                                   <td class="green">
                                                      +11.32%

                                                   </td>
                                                   <td>
                                                      4,263
                                                   </td>
                                                   <td>
                                                      39
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      91
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb8} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">League of Kingdo..</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      46.11 ETH
                                                   </td>
                                                   <td class="green">
                                                      +0.99%
                                                   </td>
                                                   <td>
                                                      7.8K ETH
                                                   </td>
                                                   <td class="green">
                                                      +54.48%

                                                   </td>
                                                   <td>
                                                      3,417
                                                   </td>
                                                   <td>
                                                      144
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      92
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb9} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Hero Metaverse</h1>

                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.09 BNB
                                                   </td>
                                                   <td class="red">
                                                      -0.05%
                                                   </td>
                                                   <td>
                                                      6.63 BNB
                                                   </td>
                                                   <td class="green">
                                                      +36.17%

                                                   </td>
                                                   <td>
                                                      6,691
                                                   </td>
                                                   <td>
                                                      102
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      93
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb10} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Mocaverse</h1>

                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.64 BNB
                                                   </td>
                                                   <td class="green">
                                                      +9.83%
                                                   </td>
                                                   <td>
                                                      128.2 BNB
                                                   </td>
                                                   <td class="red">
                                                      -36.17%

                                                   </td>
                                                   <td>
                                                      6,500
                                                   </td>
                                                   <td>
                                                      13
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      94
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb11} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Parallel Alpha</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.64 ETH
                                                   </td>
                                                   <td class="green">
                                                      +9.83%
                                                   </td>
                                                   <td>
                                                      128.2 ETH
                                                   </td>
                                                   <td class="red">
                                                      -57.11%

                                                   </td>
                                                   <td>
                                                      6,500
                                                   </td>
                                                   <td>
                                                      13
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      95
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Remivision</h1>
                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.06 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%
                                                   </td>
                                                   <td>
                                                      5.32 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%

                                                   </td>
                                                   <td>
                                                      1,053
                                                   </td>
                                                   <td>
                                                      126
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      96
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb3} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Loaded Lions</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.57 ETH
                                                   </td>
                                                   <td class="green">
                                                      +1.45%
                                                   </td>
                                                   <td>
                                                      264.15 ETH
                                                   </td>
                                                   <td class="green">
                                                      +10.18%

                                                   </td>
                                                   <td>
                                                      8,486
                                                   </td>
                                                   <td>
                                                      142
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      97
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb4} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="red">
                                                      -12.78%
                                                   </td>
                                                   <td>
                                                      2.6K ETH
                                                   </td>
                                                   <td class="green">
                                                      +586.49%

                                                   </td>
                                                   <td>
                                                      5,193
                                                   </td>
                                                   <td>
                                                      107
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      98
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb5} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">Sproto Pepes</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="green">
                                                      +46.12%
                                                   </td>
                                                   <td>
                                                      2.9 ETH
                                                   </td>
                                                   <td class="green">
                                                      +158.52%

                                                   </td>
                                                   <td>
                                                      6,364
                                                   </td>
                                                   <td>
                                                      68
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      99
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb6} alt="" />
                                                         </span>
                                                         <h1 class="mr-2">frENS</h1>

                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.03 ETH
                                                   </td>
                                                   <td class="red">
                                                      -39.11%
                                                   </td>
                                                   <td>
                                                      11.87 ETH
                                                   </td>
                                                   <td class="green">
                                                      +23.87%

                                                   </td>
                                                   <td>
                                                      1,203
                                                   </td>
                                                   <td>
                                                      57
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      100
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb4} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Bored Ape Ya...</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      &lt;0.01 ETH
                                                   </td>
                                                   <td class="red">
                                                      -12.78%
                                                   </td>
                                                   <td>
                                                      2.6K ETH
                                                   </td>
                                                   <td class="green">
                                                      +586.49%

                                                   </td>
                                                   <td>
                                                      5,193
                                                   </td>
                                                   <td>
                                                      107
                                                   </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                 </div>
                                 <div class="bri_pagenation2">
                                       <nav aria-label="Page ">
                                          <ul class="pagination justify-content-center align-items-center mb-0">
                                             <li class="page-item"><a href="#" class="page-link page-link-1 "> <svg
                                                         width="7" height="12" viewBox="0 0 7 12" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                         <path
                                                               d="M1.125 5.75L5.71875 1.125C5.84375 0.96875 6.09375 0.96875 6.25 1.125L6.84375 1.75C7 1.875 7 2.125 6.84375 2.28125L3.15625 6L6.84375 9.75C7 9.90625 7 10.125 6.84375 10.2812L6.25 10.9062C6.09375 11.0625 5.84375 11.0625 5.71875 10.9062L1.125 6.28125C0.96875 6.125 0.96875 5.90625 1.125 5.75Z"
                                                               fill="#F7F7F7" />
                                                      </svg>
                                                   </a></li>
                                             <li class="page-item"><a href="#" class="page-link active">1</a></li>
                                             <li class="page-item"><a href="#" class="page-link">2</a></li>
                                             <li class="page-item"><a href="#" class="page-link">3</a></li>
                                             <li class="page-item">
                                                   <div class="clog">
                                                      0f
                                                   </div>
                                             </li>
                                             <li class="page-item"><a href="#" class="page-link">10</a></li>
                                             <li class="page-item"><a href="#" class="page-link page-link-1 ">
                                                      <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                         <path
                                                               d="M6.84375 6.28125L2.28125 10.9062C2.125 11.0625 1.875 11.0625 1.75 10.9062L1.125 10.2812C0.96875 10.125 0.96875 9.90625 1.125 9.75L4.8125 6L1.125 2.28125C0.96875 2.125 0.96875 1.875 1.125 1.75L1.75 1.125C1.875 0.96875 2.125 0.96875 2.28125 1.125L6.84375 5.75C7 5.90625 7 6.125 6.84375 6.28125Z"
                                                               fill="#F7F7F7" />
                                                      </svg>
                                                   </a>
                                             </li>
                                          </ul>
                                       </nav>
                                 </div>
                                 </TabPane>
                                 <TabPane tabId="3">
                                    <div class="table-responsive">
                                       <table class="table table-borderless mb-0 hmecollection">
                                          <thead class="trd_head">
                                             <tr>
                                                   <th></th>
                                                   <th>Collection </th>
                                                   <th></th>
                                                   <th>Volume <span><img src={updown} alt="" /></span>
                                                   </th>
                                                   <th>Volume Change <span><img src={updown}
                                                               alt="" /></span></th>
                                                   <th>Floor Price <span><img src={updown} alt="" /></span>
                                                   </th>
                                                   <th>Floor Change <span><img src={updown}
                                                               alt="" /></span> </th>
                                                   <th>
                                                      Owners
                                                   </th>
                                                   <th>Items </th>
                                             </tr>
                                          </thead>
                                          <tbody class="trdtable_body">
                                             <tr>
                                                   <td class="gld">
                                                      1
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb1} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> De Gods</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm3} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      4.4 MATIC
                                                   </td>
                                                   <td class="red">
                                                      -13.31%
                                                   </td>
                                                   <td>
                                                      2.6K MATIC
                                                   </td>
                                                   <td class="green">
                                                      +1.43%

                                                   </td>
                                                   <td>
                                                      6,027
                                                   </td>
                                                   <td>
                                                      64
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      2
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Remivision</h1>
                                                         <span>
                                                               <img src={sm1} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375ZM12.5537 10.7812L15.71 7.71875L11.3662 7.09375L9.42871 3.15625L7.45996 7.09375L3.11621 7.71875L6.27246 10.7812L5.52246 15.0938L9.42871 13.0625L13.3037 15.0938L12.5537 10.7812Z"
                                                                     fill="#595F6A" />
                                                               </svg>
                                                         </a>

                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.06 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%
                                                   </td>
                                                   <td>
                                                      5.32 BNB
                                                   </td>
                                                   <td class="green">
                                                      +0.00%

                                                   </td>
                                                   <td>
                                                      1,053
                                                   </td>
                                                   <td>
                                                      126
                                                   </td>
                                             </tr>
                                             <tr>
                                                   <td class="gld">
                                                      3
                                                   </td>
                                                   <td>
                                                      <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                               <img src={tb3} alt="" />
                                                         </span>
                                                         <h1 class="mr-2"> Loaded Lions</h1>
                                                         <span class="mr-2">
                                                               <img src={sm4} alt="" />
                                                         </span>
                                                         <span>
                                                               <img src={sm2} alt="" />
                                                         </span>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      <div>
                                                         <a href="#">
                                                               <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                     d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                                     fill="#55f764" />
                                                               </svg>
                                                         </a>
                                                      </div>
                                                   </td>
                                                   <td>
                                                      0.57 ETH
                                                   </td>
                                                   <td class="green">
                                                      +1.45%
                                                   </td>
                                                   <td>
                                                      264.15 ETH
                                                   </td>
                                                   <td class="green">
                                                      +10.18%

                                                   </td>
                                                   <td>
                                                      8,486
                                                   </td>
                                                   <td>
                                                      142
                                                   </td>
                                             </tr>

                                          </tbody>
                                       </table>
                                 </div>
                                 <div class="nthhkj text-center">                                       
                                       <img class="img-fluid"  src={nodatayet} alt="nodatayet" />
                                       <h1>
                                          No data yet.
                                       </h1>
                                       <p>Select a collection and click on <span><svg width="19" height="18"
                                                   viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path
                                                      d="M8.52246 1.5625C8.89746 0.8125 9.95996 0.84375 10.3037 1.5625L12.3662 5.71875L16.9287 6.375C17.7412 6.5 18.0537 7.5 17.46 8.09375L14.1787 11.3125L14.96 15.8438C15.085 16.6562 14.21 17.2812 13.4912 16.9062L9.42871 14.75L5.33496 16.9062C4.61621 17.2812 3.74121 16.6562 3.86621 15.8438L4.64746 11.3125L1.36621 8.09375C0.772461 7.5 1.08496 6.5 1.89746 6.375L6.49121 5.71875L8.52246 1.5625Z"
                                                      fill="#55f764" />
                                             </svg>
                                          </span> star to add it to watchlist.</p>
                                 </div>
                                 </TabPane>
                              </TabContent>
                        </div>
                        <div class="col-xl-3 col-md-6 order-xl-2 order-1 mb-3">
                              <div class="filtl">
                                 <h1>Filter</h1>
                                 <div class="d-flex align-items-center justify-content-between hdfil mb-20" id="collapse1">
                                    <h2>Categories</h2>
                                    <img class="rntar" src={angleDown} alt="" />
                                 </div>
                                 <UncontrolledCollapse toggler="#collapse1" className="mb-20">
                                    <div class="bxnflt">
                                          <div class="d-flex align-items-center mb-1">
                                             <label class="cuschk mr-2">
                                                <input type="checkbox" />
                                                <span class="checkmark"></span>
                                             </label>
                                             <h3>All NFT's</h3>
                                          </div>
                                          <div class="d-flex align-items-center mb-1">
                                             <label class="cuschk mr-2">
                                                <input type="checkbox" />
                                                <span class="checkmark"></span>
                                             </label>
                                             <h3>Art</h3>
                                          </div>
                                          <div class="d-flex align-items-center mb-1">
                                             <label class="cuschk mr-2">
                                                <input type="checkbox" />
                                                <span class="checkmark"></span>
                                             </label>
                                             <h3>Music</h3>
                                          </div>
                                          <div class="d-flex align-items-center mb-1">
                                             <label class="cuschk mr-2">
                                                <input type="checkbox" />
                                                <span class="checkmark"></span>
                                             </label>
                                             <h3>Photography</h3>
                                          </div>
                                          <div class="d-flex align-items-center mb-1">
                                             <label class="cuschk mr-2">
                                                <input type="checkbox" />
                                                <span class="checkmark"></span>
                                             </label>
                                             <h3>Sports</h3>
                                          </div>



                                    </div>
                                 </UncontrolledCollapse>
                                 <div class="d-flex align-items-center justify-content-between hdfil mb-20" id="collapse2">
                                    <h2>Chains</h2>
                                    <img class="rntar" src={angleDown} alt="" />
                                 </div>
                                 <UncontrolledCollapse toggler="#collapse2" className="mb-20">
                                    <div class="bxnflt">
                                          <div class="d-flex align-items-center mb-1 justify-content-between">
                                             <div class="d-flex align-items-center ">
                                                <label class="cuschk mr-2">
                                                      <input type="checkbox" />
                                                      <span class="checkmark"></span>
                                                </label>
                                                <h3> <span class="mr-1"><img src={sm1}
                                                            alt="" /></span>Binance</h3>
                                             </div>
                                             <h3>BNB</h3>
                                          </div>
                                          <div class="d-flex align-items-center mb-1 justify-content-between">
                                             <div class="d-flex align-items-center">
                                                <label class="cuschk mr-2">
                                                      <input type="checkbox" />
                                                      <span class="checkmark"></span>
                                                </label>
                                                <h3> <span class="mr-1"><img src={sm2}
                                                            alt="" /></span>Etherium
                                                </h3>
                                             </div>
                                             <h3>ETH</h3>
                                          </div>
                                          <div class="d-flex align-items-center mb-1 justify-content-between">
                                             <div class="d-flex align-items-center">
                                                <label class="cuschk mr-2">
                                                      <input type="checkbox" />
                                                      <span class="checkmark"></span>
                                                </label>
                                                <h3> <span class="mr-1"><img src={sm3}
                                                            alt="" /></span>Polygon
                                                </h3>
                                             </div>
                                             <h3>MATIC</h3>
                                          </div>
                                    </div>
                                 </UncontrolledCollapse>
                              </div>
                        </div>
                     </div>
                  </div>
            </div>
         </section>

         <Footer />
      </div>
   )
}
export default Bridge;