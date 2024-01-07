import React, { useState } from 'react';

import '../../../assets/scss/filtersection.scss';

import { Button, Collapse, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import bnbIconSm from '../../../assets/images/bnbIconSm.png';
import ethIconSm from '../../../assets/images/ethIconSm.png';
import maticIconSm from '../../../assets/images/maticIconSm.png';
import yellowTick from '../../../assets/images/collection/yellow-tick_20px.svg';
import deGods from '../../../assets/images/itemIcons/deGods.png';
import loadedLions from '../../../assets/images/itemIcons/loadedLions.png';
import boredApe from '../../../assets/images/itemIcons/boredApe.png';
import azuki from '../../../assets/images/collection/userImage.png';

const FilterSection = (props) =>{
    const[isOpenCollapse1, setIsOpenCollapse1] = useState(false);    
    const toggleCollapse1 = () => {
        setIsOpenCollapse1(!isOpenCollapse1);        
    }
    const[isOpenCollapse2, setIsOpenCollapse2] = useState(false);    
    const toggleCollapse2 = () => {
        setIsOpenCollapse2(!isOpenCollapse2);        
    }
    const[isOpenCollapse3, setIsOpenCollapse3] = useState(false);    
    const toggleCollapse3 = () => {
        setIsOpenCollapse3(!isOpenCollapse3);        
    }
    const[isOpenCollapse4, setIsOpenCollapse4] = useState(false);    
    const toggleCollapse4 = () => {
        setIsOpenCollapse4(!isOpenCollapse4);        
    }
    const[isOpenCollapse5, setIsOpenCollapse5] = useState(false);    
    const toggleCollapse5 = () => {
        setIsOpenCollapse5(!isOpenCollapse5);        
    }

    
    
    return ( 
        <>
            <div className='filtercard'>
                <div>
                    <Button className='filterTit' onClick={toggleCollapse1}>
                        <span>Status </span>
                        <i className={`fas ${isOpenCollapse1? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                     </Button>
                    <Collapse isOpen={isOpenCollapse1}>
                        <div className='collapseCnt'>
                            <button className='filterStatusbtn active'>All</button>
                            <button className='filterStatusbtn'>Listed</button>
                            <button className='filterStatusbtn'>On Auction</button>
                            <button className='filterStatusbtn'>New</button>
                            <button className='filterStatusbtn'>Has Offers</button>
                        </div>
                    </Collapse>
                </div>
                <div>
                    <Button className='filterTit' onClick={toggleCollapse2}>
                        <span>Chains </span>
                        <i className={`fas ${isOpenCollapse2? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                     </Button>
                    <Collapse isOpen={isOpenCollapse2}>
                        <div className='collapseCnt'>
                            <div className='filterInnercard'>
                                <div class="d-flex align-items-center mb-2">
                                        <label class="cuschk mr-2 mb-0" For="checkbx1">
                                            <input type="checkbox" id="checkbx1" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <img src={bnbIconSm} className="mr-1" />
                                        <h3 className='mb-0 filterLabel'>Binance</h3>
                                        <h3 className='mb-0 filterLabel ml-auto'>BNB</h3>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                        <label class="cuschk mr-2 mb-0" For="checkbx2">
                                            <input type="checkbox" id="checkbx2" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <img src={ethIconSm} className="mr-1" />
                                        <h3 className='mb-0 filterLabel'>Ethereum</h3>
                                        <h3 className='mb-0 filterLabel ml-auto'>ETH</h3>
                                </div>
                                <div class="d-flex align-items-center mb-0">
                                        <label class="cuschk mr-2 mb-0" For="checkbx3">
                                            <input type="checkbox" id="checkbx3" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <img src={maticIconSm} className="mr-1" />
                                        <h3 className='mb-0 filterLabel'>Polygon</h3>
                                        <h3 className='mb-0 filterLabel ml-auto'>MATIC</h3>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div>
                    <Button className='filterTit' onClick={toggleCollapse3}>
                        <span>Collection </span>
                        <i className={`fas ${isOpenCollapse3? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                     </Button>
                    <Collapse isOpen={isOpenCollapse3}>
                        <div className='collapseCnt'>
                                <div className="form-group formInputs">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText className='px-2'>
                                                <svg
                                                    width="17"
                                                    height="17"
                                                    viewBox="0 0 17 17"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M15.875 14.6562C16.0312 14.8125 16.0312 15.0625 15.875 15.1875L15.1562 15.9062C15.0312 16.0625 14.7812 16.0625 14.625 15.9062L10.8438 12.125C10.7812 12.0312 10.75 11.9375 10.75 11.8438V11.4375C9.59375 12.4062 8.125 13 6.5 13C2.90625 13 0 10.0938 0 6.5C0 2.9375 2.90625 0 6.5 0C10.0625 0 13 2.9375 13 6.5C13 8.125 12.375 9.625 11.4062 10.75H11.8125C11.9062 10.75 12 10.8125 12.0938 10.875L15.875 14.6562ZM6.5 11.5C9.25 11.5 11.5 9.28125 11.5 6.5C11.5 3.75 9.25 1.5 6.5 1.5C3.71875 1.5 1.5 3.75 1.5 6.5C1.5 9.28125 3.71875 11.5 6.5 11.5Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Search collection" />
                                    </InputGroup>
                                </div>
                                <div className='filterofferscard notrans mb-2'>                                
                                    <div className='d-flex align-items-center'>
                                        <img src={deGods} className="mr-2" height="36" />
                                        <div>    
                                            <div className='fs-12 fw-600 dark-text'>
                                                De Gods
                                                <img src={yellowTick} className="ml-1" />
                                            </div>
                                            <div>Listed: 1/212</div>
                                        </div>
                                        <div className='text-right ml-auto'>
                                            <div><span className="whiteTxt">Floor:</span> 1 ETH</div>
                                            <div>1421.4214 ETH</div>
                                        </div>
                                    </div>                                    
                                </div>
                                <div className='filterofferscard notrans mb-2'>                                
                                    <div className='d-flex align-items-center'>
                                        <img src={azuki} className="mr-2" height="36" />
                                        <div>    
                                            <div className='fs-12 fw-600 dark-text'>
                                                Azuki
                                            </div>
                                            <div>Listed: 27/635</div>
                                        </div>
                                        <div className='text-right ml-auto'>
                                            <div><span className="whiteTxt">Floor:</span> 565 ETH</div>
                                            <div>565 ETH</div>
                                        </div>
                                    </div>                                    
                                </div>

                                <div className='filterofferscard notrans mb-2'>                                
                                    <div className='d-flex align-items-center'>
                                        <img src={loadedLions} className="mr-2" height="36" />
                                        <div>    
                                            <div className='fs-12 fw-600 dark-text'>
                                                Loaded Lions
                                                <img src={yellowTick} className="ml-1" />
                                            </div>
                                            <div>Listed: 1/2</div>
                                        </div>
                                        <div className='text-right ml-auto'>
                                            <div><span className="whiteTxt">Floor:</span> 435 ETH</div>
                                            <div>435 ETH</div>
                                        </div>
                                    </div>                                    
                                </div>
                                
                                <div className='filterofferscard notrans mb-2'>                                
                                    <div className='d-flex align-items-center'>
                                        <img src={boredApe} className="mr-2" height="36" />
                                        <div>    
                                            <div className='fs-12 fw-600 dark-text'>
                                                Bored Ape Ya...
                                            </div>
                                            <div>Listed: 1/22</div>
                                        </div>
                                        <div className='text-right ml-auto'>
                                            <div><span className="whiteTxt">Floor:</span> 1132 ETH</div>
                                            <div>12 ETH</div>
                                        </div>
                                    </div>                                    
                                </div>
                        </div>
                    </Collapse>
                </div>
                <div>
                    <Button className='filterTit' onClick={toggleCollapse5}>
                        <span>Hidden Status </span>
                        <i className={`fas ${isOpenCollapse5? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                     </Button>
                    <Collapse isOpen={isOpenCollapse5}>
                        <div className='collapseCnt'>
                            <div className='filterInnercard'>
                                <div class="d-flex align-items-center mb-3">
                                    <label class="cuschk mr-2 mb-0" For="checkbx12">
                                        <input type="checkbox" id="checkbx12" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <h3 className='mb-0'>Hidden By You</h3>
                                </div>
                                <div class="d-flex align-items-center mb-0">
                                    <label class="cuschk mr-2 mb-0" For="checkbx11">
                                        <input type="checkbox" id="checkbx11" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <h3 className='mb-0'>Auto-Hidden</h3>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        </>
     );
}

export default FilterSection;