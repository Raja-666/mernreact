import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

import { InputGroup, InputGroupAddon, InputGroupText, Input, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

import '../../assets/scss/filterInputItem.scss';
import './collectionOffer.scss';


const ItemsCollection = () => {
    return (
      <>        
        <div className='fiterSelectlabel mb-4'>                
            <div className='tagLabel'>
                <span className='background'>Backgrounds: </span>
                <span>Golden Flag Kigurumi</span>
                <i className="fas fa-times ml-2"></i>
            </div>
        </div>
        <div class="table-responsive">
          <table class="table table-borderless progressTable mb-0">
              <thead class="trd_head">
                    <tr>
                      <th>Offer Price</th>
                      <th>Total Volume </th>
                      <th>Total Offers</th>
                      <th>Bidders</th>
                      <th>Your Offers</th>
                    </tr>
              </thead>
              <tbody class="trdtable_body">
                    <tr>
                      <td>
                          <span className="tdValue">Make Offer at 3.71 ETH</span>
                          <span className="progressBarCnt" style={{width:65 + '%'}}></span>
                      </td>
                      <td><span className="tdValue">3.71 ETH</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">0</span></td>
                    </tr>
                    <tr>
                      <td>
                          <span className="tdValue">3.7 ETH</span>
                          <span className="progressBarCnt" style={{width:60 + '%'}}></span>
                      </td>
                      <td><span className="tdValue">3.7 ETH</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">0</span></td>
                    </tr>
                    <tr>
                      <td>
                          <span className="tdValue">3.69 ETH</span>
                          <span className="progressBarCnt" style={{width:55 + '%'}}></span>
                      </td>
                      <td><span className="tdValue">3.69 ETH</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">0</span></td>
                    </tr>
                    <tr>
                      <td>
                          <span className="tdValue">3.68 ETH</span>
                          <span className="progressBarCnt" style={{width:50 + '%'}}></span>
                      </td>
                      <td><span className="tdValue">3.68 ETH</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">0</span></td>
                    </tr>
                    <tr>
                      <td>
                          <span className="tdValue">3.67 ETH</span>
                          <span className="progressBarCnt" style={{width:45 + '%'}}></span>
                      </td>
                      <td><span className="tdValue">3.67 ETH</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">0</span></td>
                    </tr>
                    <tr>
                      <td>
                          <span className="tdValue">3.66 ETH</span>
                          <span className="progressBarCnt" style={{width:40 + '%'}}></span>
                      </td>
                      <td><span className="tdValue">3.66 ETH</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">0</span></td>
                    </tr>
                    <tr>
                      <td>
                          <span className="tdValue">3.65 ETH</span>
                          <span className="progressBarCnt" style={{width:35 + '%'}}></span>
                      </td>
                      <td><span className="tdValue">3.65 ETH</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">0</span></td>
                    </tr>
                    <tr>
                      <td>
                          <span className="tdValue">3.64 ETH</span>
                          <span className="progressBarCnt" style={{width:30 + '%'}}></span>
                      </td>
                      <td><span className="tdValue">3.64 ETH</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">0</span></td>
                    </tr>
                    <tr>
                      <td>
                          <span className="tdValue">3.62 ETH</span>
                          <span className="progressBarCnt" style={{width:25 + '%'}}></span>
                      </td>
                      <td><span className="tdValue">3.62 ETH</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">0</span></td>
                    </tr>
                    <tr>
                      <td>
                          <span className="tdValue">3.60 ETH</span>
                          <span className="progressBarCnt" style={{width:20 + '%'}}></span>
                      </td>
                      <td><span className="tdValue">3.60 ETH</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">0</span></td>
                    </tr>
                    <tr>
                      <td>
                          <span className="tdValue">3.58 ETH</span>
                          <span className="progressBarCnt" style={{width:15 + '%'}}></span>
                      </td>
                      <td><span className="tdValue">3.58 ETH</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">1</span></td>
                      <td><span className="tdValue">0</span></td>
                    </tr>
              </tbody>
          </table>
        </div>
      </>
    );
}

export default ItemsCollection;