import React, { useState } from 'react';

import '../../../assets/scss/filtersection.scss';

import { Button, Collapse, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import yellowTick from '../../../assets/images/collection/yellow-tick_20px.svg';
import deGods from '../../../assets/images/itemIcons/deGods.png';
import loadedLions from '../../../assets/images/itemIcons/loadedLions.png';
import boredApe from '../../../assets/images/itemIcons/boredApe.png';
import azuki from '../../../assets/images/collection/userImage.png';

const FilterActivitySection = (props) =>{
    const[isOpenCollapse1, setIsOpenCollapse1] = useState(false);    
    const toggleCollapse1 = () => {
        setIsOpenCollapse1(!isOpenCollapse1);        
    }
    const[isOpenCollapse2, setIsOpenCollapse2] = useState(false);    
    const toggleCollapse2 = () => {
        setIsOpenCollapse2(!isOpenCollapse2);        
    }

    
    
    return ( 
        <>
            <div className='filtercard'>
                <div>
                    <Button className='filterTit' onClick={toggleCollapse1}>
                        <span>Collection</span> 
                        <i className={`fas ${isOpenCollapse1? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                        </Button>
                    <Collapse isOpen={isOpenCollapse1}>
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

                            <div className='filterInnercard'>
                                <div class="scroller htcheckbox">
                                    <div class="d-flex align-items-center mb-2">
                                        <label class="cuschk mr-2 mb-0" For="checkbx1">
                                            <input type="checkbox" id="checkbx1" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <h3 className='mb-0 filterLabel'>Azuki</h3>
                                        <img src={yellowTick} className="ml-1" />
                                        <h3 className='mb-0 filterLabel dark-text-secondary ml-auto'>5</h3>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <label class="cuschk mr-2 mb-0" For="checkbx2">
                                            <input type="checkbox" id="checkbx2" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <h3 className='mb-0 filterLabel'>Azuki Beans</h3>
                                        <img src={yellowTick} className="ml-1" />
                                        <h3 className='mb-0 filterLabel dark-text-secondary ml-auto'>51</h3>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <label class="cuschk mr-2 mb-0" For="checkbx3">
                                            <input type="checkbox" id="checkbx3" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <h3 className='mb-0 filterLabel'>Azuki Elemental Beans</h3>
                                        <h3 className='mb-0 filterLabel dark-text-secondary ml-auto'>13</h3>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <label class="cuschk mr-2 mb-0" For="checkbx8">
                                            <input type="checkbox" id="checkbx8" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <h3 className='mb-0 filterLabel'>Azuki Green Beans</h3>
                                        <img src={yellowTick} className="ml-1" />
                                        <h3 className='mb-0 filterLabel dark-text-secondary ml-auto'>13</h3>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <label class="cuschk mr-2 mb-0" For="checkbx4">
                                            <input type="checkbox" id="checkbx4" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <h3 className='mb-0 filterLabel'>Azuki x Ambush</h3>
                                        <h3 className='mb-0 filterLabel dark-text-secondary ml-auto'>13</h3>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <label class="cuschk mr-2 mb-0" For="checkbx5">
                                            <input type="checkbox" id="checkbx5" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <h3 className='mb-0 filterLabel'>Azuki Elementals</h3>
                                        <h3 className='mb-0 filterLabel dark-text-secondary ml-auto'>13</h3>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <label class="cuschk mr-2 mb-0" For="checkbx6">
                                            <input type="checkbox" id="checkbx6" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <h3 className='mb-0 filterLabel'>Azuki Golden Beans</h3>
                                        <img src={yellowTick} className="ml-1" />
                                        <h3 className='mb-0 filterLabel dark-text-secondary ml-auto'>13</h3>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <label class="cuschk mr-2 mb-0" For="checkbx7">
                                            <input type="checkbox" id="checkbx7" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <h3 className='mb-0 filterLabel'>The Bean Farmer</h3>
                                        <img src={yellowTick} className="ml-1" />
                                        <h3 className='mb-0 filterLabel dark-text-secondary ml-auto'>13</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        </>
     );
}

export default FilterActivitySection;