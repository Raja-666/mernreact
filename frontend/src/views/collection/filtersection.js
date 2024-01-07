import React, { useState } from 'react';

import '../../assets/scss/filtersection.scss';

import { Button, Collapse, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

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
    const[isOpenCollapse6, setIsOpenCollapse6] = useState(false);    
    const toggleCollapse6 = () => {
        setIsOpenCollapse6(!isOpenCollapse6);        
    }
    const[isOpenCollapse7, setIsOpenCollapse7] = useState(false);    
    const toggleCollapse7 = () => {
        setIsOpenCollapse7(!isOpenCollapse7);        
    }
    const[isOpenCollapse8, setIsOpenCollapse8] = useState(false);    
    const toggleCollapse8 = () => {
        setIsOpenCollapse8(!isOpenCollapse8);        
    }
    const[isOpenCollapse9, setIsOpenCollapse9] = useState(false);    
    const toggleCollapse9 = () => {
        setIsOpenCollapse9(!isOpenCollapse9);        
    }
    const[isOpenCollapse10, setIsOpenCollapse10] = useState(false);    
    const toggleCollapse10 = () => {
        setIsOpenCollapse10(!isOpenCollapse10);        
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
                        <span>Owner </span>
                        <i className={`fas ${isOpenCollapse2? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                     </Button>
                    <Collapse isOpen={isOpenCollapse2}>
                        <div className='collapseCnt'>
                            <div className='filterInnercard'>
                            <div class="d-flex align-items-center mb-3">
                                    <label class="cuschk mr-2 mb-0" For="checkbx1">
                                        <input type="checkbox" id="checkbx1" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <h3 className='mb-0'>All</h3>
                            </div>
                            <div class="d-flex align-items-center mb-0">
                                    <label class="cuschk mr-2 mb-0" For="checkbx2">
                                        <input type="checkbox" id="checkbx2" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <h3 className='mb-0'>Me</h3>
                            </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div>
                    <Button className='filterTit' onClick={toggleCollapse3}>
                        <span>Rarity </span>
                        <i className={`fas ${isOpenCollapse3? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                     </Button>
                    <Collapse isOpen={isOpenCollapse3}>
                        <div className='collapseCnt'>
                            <div className='row align-items-center'>
                                <div className='col'>
                                    <div className='form-group formInputs'>
                                        <input className='form-control' type='text' placeholder='min'/>
                                    </div>
                                </div>
                                <div className='col-auto text-center px-0 mb-3'>to</div>
                                <div className='col'>
                                    <div className='form-group formInputs'>
                                        <input className='form-control' type='text' placeholder='max'/>
                                    </div>
                                </div>                                
                            </div>
                            <div>
                                <button className='applybtn' disabled>Apply</button>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div>
                    <Button className='filterTit' onClick={toggleCollapse4}>
                        <span>Price </span>
                        <i className={`fas ${isOpenCollapse4? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                     </Button>
                    <Collapse isOpen={isOpenCollapse4}>
                    <div className='collapseCnt'>
                            <div className='row align-items-center'>
                                <div className='col' style={{minWidth: '90px'}}>
                                    <div className='form-group formInputs'>
                                    <Input type="select">
                                        <option>ETH</option>
                                    </Input>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='form-group formInputs'>
                                        <input className='form-control' type='text' placeholder='min'/>
                                    </div>
                                </div>
                                <div className='col-auto text-center px-0 mb-3'>to</div>
                                <div className='col'>
                                    <div className='form-group formInputs'>
                                        <input className='form-control' type='text' placeholder='max'/>
                                    </div>
                                </div>                                
                            </div>
                            <div>
                                <button className='applybtn' disabled>Apply</button>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div>
                    <Button className='filterTit' onClick={toggleCollapse5}>
                        <span>Currency </span>
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
                                    <h3 className='mb-0'>ETH</h3>
                                </div>
                                <div class="d-flex align-items-center mb-0">
                                    <label class="cuschk mr-2 mb-0" For="checkbx11">
                                        <input type="checkbox" id="checkbx11" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <h3 className='mb-0'>WETH</h3>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div className='filtersubTit'>Traits</div>
                <div>
                    <Button className='filterTit' onClick={toggleCollapse6}>
                        <span>Backgrounds </span>
                        <span><span className='rightcounttxt'>188</span><i className={`fas ${isOpenCollapse6? 'fa-angle-up' : 'fa-angle-down'}`} ></i></span>
                     </Button>
                    <Collapse isOpen={isOpenCollapse6}>
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
                            <div className='filterInnercard mb-3'>
                            <div class="scroller htcheckbox">
                                <div class="d-flex align-items-center mb-3 justify-content-between">
                                    <div className='d-flex align-items-center'>
                                        <label class="cuschk mr-2 mb-0" For="checkbx3">
                                            <input type="checkbox" id="checkbx3" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <h3 className='mb-0'>Off White D</h3>
                                    </div>
                                    <span className='rightTxt'>11</span>
                                </div>
                                <div class="d-flex align-items-center mb-3 justify-content-between">
                                    <div className='d-flex align-items-center'>
                                        <label class="cuschk mr-2 mb-0" For="checkbx4">
                                            <input type="checkbox" id="checkbx5" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <h3 className='mb-0'>Off White C</h3>
                                    </div>
                                    <span className='rightTxt'>23</span>
                                </div>
                                <div class="d-flex align-items-center mb-3 justify-content-between">
                                    <div className='d-flex align-items-center'>
                                        <label class="cuschk mr-2 mb-0" For="checkbx4">
                                            <input type="checkbox" id="checkbx5" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <h3 className='mb-0'>Off White A</h3>
                                    </div>
                                    <span className='rightTxt'>23</span>
                                </div>
                                <div class="d-flex align-items-center mb-3 justify-content-between">
                                    <div className='d-flex align-items-center'>
                                        <label class="cuschk mr-2 mb-0" For="checkbx4">
                                            <input type="checkbox" id="checkbx5" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <h3 className='mb-0'>Off White B</h3>
                                    </div>
                                    <span className='rightTxt'>23</span>
                                </div>
                                <div class="d-flex align-items-center mb-3 justify-content-between">
                                    <div className='d-flex align-items-center'>
                                        <label class="cuschk mr-2 mb-0" For="checkbx4">
                                            <input type="checkbox" id="checkbx5" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <h3 className='mb-0'>Red</h3>
                                    </div>
                                    <span className='rightTxt'>23</span>
                                </div>
                                <div class="d-flex align-items-center mb-3 justify-content-between">
                                    <div className='d-flex align-items-center'>
                                        <label class="cuschk mr-2 mb-0" For="checkbx4">
                                            <input type="checkbox" id="checkbx5" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <h3 className='mb-0'>Dark Blue</h3>
                                    </div>
                                    <span className='rightTxt'>23</span>
                                </div>
                                <div class="d-flex align-items-center mb-3 justify-content-between">
                                    <div className='d-flex align-items-center'>
                                        <label class="cuschk mr-2 mb-0" For="checkbx4">
                                            <input type="checkbox" id="checkbx5" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <h3 className='mb-0'>Earth</h3>
                                    </div>
                                    <span className='rightTxt'>23</span>
                                </div>
                                <div class="d-flex align-items-center mb-3 justify-content-between">
                                    <div className='d-flex align-items-center'>
                                        <label class="cuschk mr-2 mb-0" For="checkbx4">
                                            <input type="checkbox" id="checkbx5" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <h3 className='mb-0'>Fire</h3>
                                    </div>
                                    <span className='rightTxt'>23</span>
                                </div>
                            </div>
                            </div>
                    </div>
                    </Collapse>
                </div>
                <div>
                    <Button className='filterTit' onClick={toggleCollapse7}>
                        <span>Clothing </span>
                        <i className={`fas ${isOpenCollapse7? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                     </Button>
                    <Collapse isOpen={isOpenCollapse7}>
                        <div className='collapseCnt'>Collapse Owner</div>
                    </Collapse>
                </div>
                <div>
                    <Button className='filterTit' onClick={toggleCollapse8}>
                        <span>Ear </span>
                        <i className={`fas ${isOpenCollapse8? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                     </Button>
                    <Collapse isOpen={isOpenCollapse8}>
                    <div className='collapseCnt'>Collapse Owner</div>
                    </Collapse>
                </div>
                <div>
                    <Button className='filterTit' onClick={toggleCollapse9}>
                        <span>Collections </span>
                        <i className={`fas ${isOpenCollapse9? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                     </Button>
                    <Collapse isOpen={isOpenCollapse9}>
                    <div className='collapseCnt'>Collapse Owner</div>
                    </Collapse>
                </div>
                <div>
                    <Button className='filterTit' onClick={toggleCollapse10}>
                        <span>Eyes </span>
                        <i className={`fas ${isOpenCollapse10? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                     </Button>
                    <Collapse isOpen={isOpenCollapse10}>
                    <div className='collapseCnt'>Collapse Owner</div>
                    </Collapse>
                </div>
            </div>
        </>
     );
}

export default FilterSection;