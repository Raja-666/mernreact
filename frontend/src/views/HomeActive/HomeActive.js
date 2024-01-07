import { Input, InputGroup, TabContent, TabPane, Nav, NavItem, NavLink, UncontrolledCollapse, UncontrolledTooltip  } from "reactstrap"
import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./HomeActive.scss"
import classnames from 'classnames';

import tc1 from "./assets/tc1.png"
import tc2 from "./assets/tc2.png"
import tc3 from "./assets/tc3.png"
import tc4 from "./assets/tc4.png"
import tc5 from "./assets/tc5.png"
import tc6 from "./assets/tc6.png"
import tc7 from "./assets/tc7.png"
import tc8 from "./assets/tc8.png"
import sm4 from "./assets/sm4.png"
import sm3 from "./assets/sm3.png"
import sm2 from "./assets/sm2.png"
import sm1 from "./assets/sm1.png"
import angleDown from "./assets/angle-down.png"
import ser from "./assets/ser.png"
import cndds from "./assets/cndds.png"
import tag from "./assets/tag.png"
import tag2 from "./assets/tag2.png"

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
               <div class="mb-36 d-flex">
                  <Nav tabs className="trad_tab_hd">
                     <NavItem>
                        <NavLink
                           className={classnames({ active: activeTab === '1' })}
                           onClick={() => { toggle('1'); }}
                        >
                           All
                        </NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink
                           className={classnames({ active: activeTab === '2' })}
                           onClick={() => { toggle('2'); }}
                        >
                           Sales
                        </NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink
                           className={classnames({ active: activeTab === '3' })}
                           onClick={() => { toggle('3'); }}
                        >
                           Listings
                        </NavLink>
                     </NavItem>
                  </Nav>
               </div>
               <div>
                  <div class="row">
                     <div class="col-xl-9 order-xl-1 order-2 mb-3">
                        <TabContent activeTab={activeTab}>
                           <TabPane tabId="1">
                              <div>
                                 <div class="table-responsive">
                                    <table class="table table-borderless mb-0 hmecollection">
                                       <thead class="trd_head">
                                             <tr>
                                                <th></th>
                                                <th>Item </th>
                                                <th>Price
                                                </th>
                                                <th>Rarity</th>
                                                <th>Quantity</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th><svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                         <path
                                                            d="M6 0.6875C9.21094 0.6875 11.8125 3.28906 11.8125 6.5C11.8125 9.71094 9.21094 12.3125 6 12.3125C2.78906 12.3125 0.1875 9.71094 0.1875 6.5C0.1875 3.28906 2.78906 0.6875 6 0.6875ZM6 11.1875C8.57812 11.1875 10.6875 9.10156 10.6875 6.5C10.6875 3.92188 8.57812 1.8125 6 1.8125C3.39844 1.8125 1.3125 3.92188 1.3125 6.5C1.3125 9.10156 3.39844 11.1875 6 11.1875ZM7.42969 8.75L5.4375 7.29688C5.36719 7.25 5.34375 7.15625 5.34375 7.08594V3.21875C5.34375 3.07812 5.46094 2.9375 5.625 2.9375H6.375C6.51562 2.9375 6.65625 3.07812 6.65625 3.21875V6.54688L8.20312 7.69531C8.34375 7.78906 8.36719 7.95312 8.27344 8.09375L7.82812 8.67969C7.73438 8.82031 7.57031 8.84375 7.42969 8.75Z"
                                                            fill="#595F6A" />
                                                   </svg>
                                                </th>
                                             </tr>
                                       </thead>
                                       <tbody class="trdtable_body">
                                             <tr>
                                                <td>
                                                   <label class="liscdbs">
                                                         <span class="mr-1">
                                                            <img src={tag} alt="" />
                                                         </span>list
                                                   </label>
                                                </td>
                                                <td>
                                                   <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                            <img src={tc1} alt="" />
                                                         </span>
                                                         <div>
                                                            <h2>AI</h2>
                                                            <p>AI PFP CLUB <span class="ml-1"><img
                                                                        src={sm4} alt="" />
                                                               </span>
                                                            </p>
                                                         </div>

                                                   </div>
                                                </td>
                                                <td>
                                                   <h3>0.009 ETH</h3>
                                                   <p>$15.71</p>
                                                </td>
                                                <td>
                                                   --
                                                </td>
                                                <td>
                                                   1
                                                </td>
                                                <td class="orncl">
                                                   Giana Dokidis
                                                </td>
                                                <td class="orncl">
                                                   Justin Gouse
                                                </td>
                                                <td>
                                                   22s
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <label class="liscdbs">
                                                         <span class="mr-1">
                                                            <img src={tag} alt="" />
                                                         </span>
                                                         list
                                                   </label>
                                                </td>
                                                <td>
                                                   <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                            <img src={tc2} alt="" />
                                                         </span>
                                                         <div>
                                                            <h2>De Gods</h2>
                                                            <p>Dope Bored Ape Bros </p>
                                                         </div>
                                                   </div>
                                                </td>
                                                <td>
                                                   <h3>0.0067 ETH</h3>
                                                   <p>$13.71</p>
                                                </td>
                                                <td>
                                                   --
                                                </td>
                                                <td>
                                                   1
                                                </td>
                                                <td class="orncl">
                                                   Cheyenne Dokidi
                                                </td>
                                                <td class="orncl">
                                                   Madelyn Lubin
                                                </td>
                                                <td>
                                                   31s
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <label class="liscdbs">
                                                         <span class="mr-1">
                                                            <img src={tag2} alt="" />
                                                         </span>
                                                         Sale
                                                   </label>
                                                </td>
                                                <td>
                                                   <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                            <img src={tc3} alt="" />
                                                         </span>
                                                         <div>
                                                            <h2>#642</h2>
                                                            <p>STONED JOBS <span class="ml-1"><img
                                                                        src={sm4} alt="" />
                                                               </span>
                                                            </p>
                                                         </div>
                                                   </div>
                                                </td>
                                                <td>
                                                   <h3>0.008 ETH</h3>
                                                   <p>$13.71</p>
                                                </td>
                                                <td>
                                                   --
                                                </td>
                                                <td>
                                                   1
                                                </td>
                                                <td class="orncl">
                                                   Hanna Carder
                                                </td>
                                                <td class="orncl">
                                                   Carla Donin
                                                </td>
                                                <td>
                                                   1m
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <label class="liscdbs">
                                                         <span class="mr-1">
                                                            <img src={tag} alt="" />
                                                         </span>
                                                         list
                                                   </label>
                                                </td>
                                                <td>
                                                   <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                            <img src={tc4} alt="" />
                                                         </span>
                                                         <div>
                                                            <h2>The Assembler</h2>
                                                            <p>Celestial Assembly x Re... <span class="ml-1"><img
                                                                        src={sm4} alt="" />
                                                               </span>
                                                            </p>
                                                         </div>
                                                   </div>
                                                </td>
                                                <td>
                                                   <h3>0.125 ETH</h3>
                                                   <p>$215.98</p>
                                                </td>
                                                <td>
                                                   --
                                                </td>
                                                <td>
                                                   1
                                                </td>
                                                <td class="orncl">
                                                   Gretchen Baptista
                                                </td>
                                                <td class="orncl">
                                                   Terry Schleifer
                                                </td>
                                                <td>
                                                   1m
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <label class="liscdbs">
                                                         <span class="mr-1">
                                                            <img src={tag2} alt="" />
                                                         </span>
                                                         sale
                                                   </label>
                                                </td>
                                                <td>
                                                   <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                            <img src={tc5} alt="" />
                                                         </span>
                                                         <div>
                                                            <h2>0x76F</h2>
                                                            <p>Corruption(s*)
                                                            </p>
                                                         </div>
                                                   </div>
                                                </td>
                                                <td>
                                                   <h3>0.0745 ETH</h3>
                                                   <p>$128.46</p>
                                                </td>
                                                <td>
                                                   --
                                                </td>
                                                <td>
                                                   1
                                                </td>
                                                <td class="orncl">
                                                   Hanna Baptista
                                                </td>
                                                <td class="orncl">
                                                   Kianna Gouse
                                                </td>
                                                <td>
                                                   1m
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <label class="liscdbs">
                                                         <span class="mr-1">
                                                            <img src={tag2} alt="" />
                                                         </span>
                                                         sale
                                                   </label>
                                                </td>
                                                <td>
                                                   <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                            <img src={tc6} alt="" />
                                                         </span>
                                                         <div>
                                                            <h2>Devil Frens</h2>
                                                            <p>PFP WORLD
                                                            </p>
                                                         </div>
                                                   </div>
                                                </td>
                                                <td>
                                                   <h3>0.005 ETH </h3>
                                                   <p>$8.59</p>
                                                </td>
                                                <td>
                                                   --
                                                </td>
                                                <td>
                                                   1
                                                </td>
                                                <td class="orncl">
                                                   Angel Dorwart
                                                </td>
                                                <td class="orncl">
                                                   Jakob Levin
                                                </td>
                                                <td>
                                                   1m
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <label class="liscdbs">
                                                         <span class="mr-1">
                                                            <img src={tag2} alt="" />
                                                         </span>
                                                         sale
                                                   </label>
                                                </td>
                                                <td>
                                                   <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                            <img src={tc7} alt="" />
                                                         </span>
                                                         <div>
                                                            <h2>Asuki #8574</h2>
                                                            <p>WeAsuki
                                                            </p>
                                                         </div>
                                                   </div>
                                                </td>
                                                <td>
                                                   <h3>0.021 ETH </h3>
                                                   <p>$8.59</p>
                                                </td>
                                                <td>
                                                   --
                                                </td>
                                                <td>
                                                   1
                                                </td>
                                                <td class="orncl">
                                                   Marcus Geidt
                                                </td>
                                                <td class="orncl">
                                                   Zaire Botosh
                                                </td>
                                                <td>
                                                   2m
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <label class="liscdbs">
                                                         <span class="mr-1">
                                                            <img src={tag2} alt="" />
                                                         </span>
                                                         sale
                                                   </label>
                                                </td>
                                                <td>
                                                   <div class="d-flex align-items-center">
                                                         <span class="mr-2">
                                                            <img src={tc8} alt="" />
                                                         </span>
                                                         <div>
                                                            <h2>Asuki #54320</h2>
                                                            <p>WeAsuki
                                                            </p>
                                                         </div>
                                                   </div>
                                                </td>
                                                <td>
                                                   <h3>0.021 ETH </h3>
                                                   <p>$8.59</p>
                                                </td>
                                                <td>
                                                   --
                                                </td>
                                                <td>
                                                   1
                                                </td>
                                                <td class="orncl">
                                                   Abram Curtis
                                                </td>
                                                <td class="orncl">
                                                   Gustavo Ekstrom Bothman
                                                </td>
                                                <td>
                                                   2m
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
                        </TabContent>
                     </div>
                     <div class="col-xl-3 col-md-6 order-xl-2 order-1 mb-3">
                           <div class="filtl">
                              <h1>Filter</h1>
                              <div class="d-flex align-items-center justify-content-between hdfil mb-20" id="collapse1">
                                 <h2>Collections</h2>
                                 <img class="rntar" src={angleDown} alt="" />
                              </div>
                              <UncontrolledCollapse toggler="#collapse1" className="mb-20">
                                 <div class="input-group sergps mb-3">
                                       <div class="input-group-prepend">
                                          <span class="input-group-text" id="basic-addon1">
                                             <img src={ser} alt="" />
                                          </span>
                                       </div>
                                       <input type="search" class="form-control" placeholder="Username"
                                          aria-label="Username" aria-describedby="basic-addon1" />
                                 </div>
                                 <div class="bxnflt">
                                       <div class="d-flex align-items-center mb-1">
                                          <label class="cuschk mr-2">
                                             <input type="checkbox" />
                                             <span class="checkmark"></span>
                                          </label>
                                          <h3>Azuki <span> <img src={sm4} alt="" /> </span></h3>
                                       </div>
                                       <div class="d-flex align-items-center mb-1">
                                          <label class="cuschk mr-2">
                                             <input type="checkbox" />
                                             <span class="checkmark"></span>
                                          </label>
                                          <h3>Bored Ape Yacht Club <span> <img src={sm4} alt="" /> </span>
                                          </h3>
                                       </div>
                                       <div class="d-flex align-items-center mb-1">
                                          <label class="cuschk mr-2">
                                             <input type="checkbox" />
                                             <span class="checkmark"></span>
                                          </label>
                                          <h3>DeGods</h3>
                                       </div>
                                       <div class="d-flex align-items-center mb-1">
                                          <label class="cuschk mr-2">
                                             <input type="checkbox" />
                                             <span class="checkmark"></span>
                                          </label>
                                          <h3>Milady <span> <img src={sm4} alt="" /> </span></h3>
                                       </div>
                                       <div class="d-flex align-items-center mb-1">
                                          <label class="cuschk mr-2">
                                             <input type="checkbox"  />
                                             <span class="checkmark"></span>
                                          </label>
                                          <h3>CloneX</h3>
                                       </div>
                                       <div class="d-flex align-items-center mb-1">
                                          <label class="cuschk mr-2">
                                             <input type="checkbox" />
                                             <span class="checkmark"></span>
                                          </label>
                                          <h3>Blips</h3>
                                       </div>
                                       <div class="d-flex align-items-center mb-1">
                                          <label class="cuschk mr-2">
                                             <input type="checkbox" />
                                             <span class="checkmark"></span>
                                          </label>
                                          <h3>ON1 Force <span> <img src={sm4} alt="" /> </span></h3>
                                       </div>
                                       <div class="d-flex align-items-center mb-1">
                                          <label class="cuschk mr-2">
                                             <input type="checkbox" />
                                             <span class="checkmark"></span>
                                          </label>
                                          <h3>Doodles <span> <img src={sm4} alt="" /> </span></h3>
                                       </div>

                                       <div class="noResf text-center" >
                                          <img class="img-fluid" src={cndds} alt="" />
                                          <h1>No Results</h1>
                                          <p>Try broadening your search.</p>
                                       </div>
                                 </div>
                              </UncontrolledCollapse>
                              <div class="d-flex align-items-center justify-content-between hdfil " id="collapse2">
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