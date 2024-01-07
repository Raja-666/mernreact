import { Input, InputGroup, Modal, ModalHeader } from "reactstrap"
import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Bridge.scss"

import c1 from "./assets/cn1.png"
import c2 from "./assets/cn2.png"
import elprd from "./assets/elprd.png"
import swap from "./assets/swap.png"
import searchIcon from "./assets/search.svg"

import eth from "./assets/eth.png"
import bnb from "./assets/bnb.png"
import poly from "./assets/poly.png"
import tether from "./assets/tether.png"

const Bridge = () => {

   const [modal, setModal] = useState(false);
   const toggle = () => setModal(!modal);

   

   return (
      <div className="withoutBannerHeaderPage">
         <Header />

         <section class="BriSec inrPgMt inrPgMb">
            <div class="container">
               <div class="brhsd text-center">
                  <h1>Bridge</h1>

               </div>
               <div class="row justify-content-center">
                  <div class="col-xl-6 col-lg-8">
                     <div class="crdbrg">
                        <div class="FrmIpt">
                           <div className="d-flex justify-content-between">
                              <h1>You Send</h1>
                              <h1>Balance 12344.34 ETH </h1>
                           </div>
                           <div class="d-flex justify-content-center justify-content-between">
                              <div class="form-group">
                                 <input type="email" class="form-control" value="0.1" />
                              </div>
                              <div>
                                 <button class="btn sltbtn" onClick={toggle}>
                                    <span><img src={c1} alt="" /></span>
                                    <span>
                                       ETH
                                    </span>
                                    <span>
                                       <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1 1L5 5L9 1" stroke="white" />
                                       </svg>
                                    </span>
                                 </button>
                              </div>
                           </div>
                        </div>
                        <div class="text-right my-4">
                           <a href="">
                              <img src={swap} alt="swap" />
                           </a>
                        </div>
                        <div class="FrmIpt mb-35">
                           <div className="d-flex justify-content-between">
                              <h1>You Get</h1>
                              <h1>Balance 12344.34 BNB</h1>
                           </div>                           
                           <div class="d-flex justify-content-center justify-content-between">
                              <div class="form-group">
                                 <input type="email" class="form-control" value="0.00658756" />
                              </div>
                              <div>
                                 <button class="btn sltbtn" onClick={toggle}>
                                    <span><img src={c2} alt="" /></span>
                                    <span>
                                       ETH
                                    </span>
                                    <span>
                                       <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1 1L5 5L9 1" stroke="white" />
                                       </svg>
                                    </span>
                                 </button>
                              </div>
                           </div>
                        </div>
                        <button class="btn swpbtn"> Swap</button>
                     </div>
                  </div>
               </div>
            </div>
            <div class="shdcd">
               <img class="img-fluid" src={elprd} alt="elprd" />
            </div>
         </section>

         <Footer />

         <Modal isOpen={modal} toggle={toggle} centered="true" className="curMdl" backdropClassName="selCurBp">
            <div className="selCrHd">
               <button className="btn">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M7.46875 6L10.8438 9.375C11.0312 9.5625 11.0312 9.90625 10.8438 10.0938L10.0625 10.875C9.875 11.0625 9.53125 11.0625 9.34375 10.875L6 7.5L2.625 10.875C2.4375 11.0625 2.09375 11.0625 1.90625 10.875L1.125 10.0938C0.9375 9.90625 0.9375 9.5625 1.125 9.375L4.5 6L1.125 2.65625C0.9375 2.46875 0.9375 2.125 1.125 1.9375L1.90625 1.15625C2.09375 0.96875 2.4375 0.96875 2.625 1.15625L6 4.53125L9.34375 1.15625C9.53125 0.96875 9.875 0.96875 10.0625 1.15625L10.8438 1.9375C11.0312 2.125 11.0312 2.46875 10.8438 2.65625L7.46875 6Z" fill="#595F6A" />
                  </svg>
               </button>
               <span>Select Currency</span>
               <button className="btn" onClick={toggle}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M7.46875 6L10.8438 9.375C11.0312 9.5625 11.0312 9.90625 10.8438 10.0938L10.0625 10.875C9.875 11.0625 9.53125 11.0625 9.34375 10.875L6 7.5L2.625 10.875C2.4375 11.0625 2.09375 11.0625 1.90625 10.875L1.125 10.0938C0.9375 9.90625 0.9375 9.5625 1.125 9.375L4.5 6L1.125 2.65625C0.9375 2.46875 0.9375 2.125 1.125 1.9375L1.90625 1.15625C2.09375 0.96875 2.4375 0.96875 2.625 1.15625L6 4.53125L9.34375 1.15625C9.53125 0.96875 9.875 0.96875 10.0625 1.15625L10.8438 1.9375C11.0312 2.125 11.0312 2.46875 10.8438 2.65625L7.46875 6Z" fill="#595F6A" />
                  </svg>
               </button>
            </div>
            <div className="selCrSrh">
               <InputGroup className="curSrh">
                  <button className="btn" type="button">
                     <img src={searchIcon} alt="search" />
                  </button>
                  <Input placeholder="Search" />
               </InputGroup>
            </div>
            <div className="selCrLs">
               <button type="button" className="btn">
                  <img src={eth} alt="eth" />
                  <span>Ethereum (ETH)</span>
               </button>
               <button type="button" className="btn">
                  <img src={bnb} alt="bnb" />
                  <span>Binance (BNB)</span>
               </button>
               <button type="button" className="btn">
                  <img src={poly} alt="poly" />
                  <span>Polygon (MATIC)</span>
               </button>
               <button type="button" className="btn">
                  <img src={tether} alt="tether" />
                  <span>Tether (USDT)</span>
               </button>
               <button type="button" className="btn">
                  <img src={eth} alt="eth" />
                  <span>Ethereum (ETH)</span>
               </button>
               <button type="button" className="btn">
                  <img src={bnb} alt="bnb" />
                  <span>Binance (BNB)</span>
               </button>
               <button type="button" className="btn">
                  <img src={poly} alt="poly" />
                  <span>Polygon (MATIC)</span>
               </button>
               <button type="button" className="btn">
                  <img src={tether} alt="tether" />
                  <span>Tether (USDT)</span>
               </button>
            </div>
         </Modal>
      </div>
   )
}
export default Bridge;