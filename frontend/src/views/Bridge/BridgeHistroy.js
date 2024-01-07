import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Bridge.scss"

const BridgeHistroy = () => {
   return (
      <div className='withoutBannerHeaderPage'>
         <Header />

         <section class="BrigeHises  inrPgMt">
            <div class="container">
               <div class="brhsd text-center">
                  <h1>Bridge History</h1>
               </div>
               <div class="britab">
                  <div class="table-responsive">
                     <table class="table table-borderless mb-0">
                        <thead class="bri_head">
                           <tr>
                              <th>S.no </th>
                              <th>Date & Time </th>
                              <th>From</th>
                              <th>To</th>
                              <th>Transaction Hash </th>
                              <th>
                                 Status
                              </th>
                              <th>Status</th>
                           </tr>
                        </thead>
                        <tbody class="buy_table_body">
                           <tr>
                              <td>
                                 01
                              </td>
                              <td>
                                 25/09/2023 12:34:56
                              </td>
                              <td>
                                 46.11 BNB
                              </td>
                              <td>
                                 0.03 MATIC
                              </td>
                              <td>
                                 #0x3243sdf32323123reterte45
                              </td>
                              <td class="yelcl">
                                 Pending
                              </td>
                              <td>
                                 <button class="btn">Claim</button>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 02
                              </td>
                              <td>
                                 25/09/2023 12:34:56
                              </td>
                              <td>
                                 46.11 BNB
                              </td>
                              <td>
                                 0.03 MATIC
                              </td>
                              <td>
                                 #0x3243sdf32323123reterte45
                              </td>
                              <td class="redcl">
                                 Failed
                              </td>
                              <td>
                                 <button class="btn">Claim</button>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 03
                              </td>
                              <td>
                                 25/09/2023 12:34:56
                              </td>
                              <td>
                                 46.11 BNB
                              </td>
                              <td>
                                 0.03 MATIC
                              </td>
                              <td>
                                 #0x3243sdf32323123reterte45
                              </td>
                              <td class="grncl">
                                 Success
                              </td>
                              <td>
                                 <button class="btn">Claim</button>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 04
                              </td>
                              <td>
                                 25/09/2023 12:34:56
                              </td>
                              <td>
                                 46.11 BNB
                              </td>
                              <td>
                                 0.03 MATIC
                              </td>
                              <td>
                                 #0x3243sdf32323123reterte45
                              </td>
                              <td class="grncl">
                                 Success
                              </td>
                              <td>
                                 <button class="btn">Claim</button>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 05
                              </td>
                              <td>
                                 25/09/2023 12:34:56
                              </td>
                              <td>
                                 46.11 BNB
                              </td>
                              <td>
                                 0.03 MATIC
                              </td>
                              <td>
                                 #0x3243sdf32323123reterte45
                              </td>
                              <td class="grncl">
                                 Success
                              </td>
                              <td>
                                 <button class="btn">Claim</button>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 06
                              </td>
                              <td>
                                 25/09/2023 12:34:56
                              </td>
                              <td>
                                 46.11 BNB
                              </td>
                              <td>
                                 0.03 MATIC
                              </td>
                              <td>
                                 #0x3243sdf32323123reterte45
                              </td>
                              <td class="grncl">
                                 Success
                              </td>
                              <td>
                                 <button class="btn">Claim</button>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 07
                              </td>
                              <td>
                                 25/09/2023 12:34:56
                              </td>
                              <td>
                                 46.11 BNB
                              </td>
                              <td>
                                 0.03 MATIC
                              </td>
                              <td>
                                 #0x3243sdf32323123reterte45
                              </td>
                              <td class="grncl">
                                 Success
                              </td>
                              <td>
                                 <button class="btn">Claim</button>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 08
                              </td>
                              <td>
                                 25/09/2023 12:34:56
                              </td>
                              <td>
                                 46.11 BNB
                              </td>
                              <td>
                                 0.03 MATIC
                              </td>
                              <td>
                                 #0x3243sdf32323123reterte45
                              </td>
                              <td class="grncl">
                                 Success
                              </td>
                              <td>
                                 <button class="btn">Claim</button>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 09
                              </td>
                              <td>
                                 25/09/2023 12:34:56
                              </td>
                              <td>
                                 46.11 BNB
                              </td>
                              <td>
                                 0.03 MATIC
                              </td>
                              <td>
                                 #0x3243sdf32323123reterte45
                              </td>
                              <td class="grncl">
                                 Success
                              </td>
                              <td>
                                 <button class="btn">Claim</button>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 10
                              </td>
                              <td>
                                 25/09/2023 12:34:56
                              </td>
                              <td>
                                 46.11 BNB
                              </td>
                              <td>
                                 0.03 MATIC
                              </td>
                              <td>
                                 #0x3243sdf32323123reterte45
                              </td>
                              <td class="grncl">
                                 Success
                              </td>
                              <td>
                                 <button class="btn">Claim</button>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 11
                              </td>
                              <td>
                                 25/09/2023 12:34:56
                              </td>
                              <td>
                                 46.11 BNB
                              </td>
                              <td>
                                 0.03 MATIC
                              </td>
                              <td>
                                 #0x3243sdf32323123reterte45
                              </td>
                              <td class="grncl">
                                 Success
                              </td>
                              <td>
                                 <button class="btn">Claim</button>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 12
                              </td>
                              <td>
                                 25/09/2023 12:34:56
                              </td>
                              <td>
                                 46.11 BNB
                              </td>
                              <td>
                                 0.03 MATIC
                              </td>
                              <td>
                                 #0x3243sdf32323123reterte45
                              </td>
                              <td class="grncl">
                                 Success
                              </td>
                              <td>
                                 <button class="btn">Claim</button>
                              </td>
                           </tr>


                        </tbody>
                     </table>
                  </div>

               </div>

               <div class="bri_pagenation">
                  <nav aria-label="Page ">
                     <ul class="pagination justify-content-end mb-0">
                        <li class="page-item"><a href="#" class="page-link page-link-1 "> Next  </a></li>
                        <li class="page-item"><a href="#" class="page-link active">01</a></li>
                        <li class="page-item"><a href="#" class="page-link">02</a></li>
                        <li class="page-item"><a href="#" class="page-link">03</a></li>
                        <li class="page-item"><a href="#" class="page-link page-link-1 "> Previous </a></li>
                     </ul>
                  </nav>
               </div>


            </div>
         </section>

         <Footer />
      </div>
   )
}
export default BridgeHistroy;