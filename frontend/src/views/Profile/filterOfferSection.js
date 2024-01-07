import React from 'react';

import '../../assets/scss/filtersection.scss';
import './filterOfferSection.scss';

import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

const FilterOffersSection = (props) =>{   
    return ( 
        <>
            <div className='filtercard'>
            <div className='filterTit'>Traits</div>
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
                                    <Input placeholder="Search" />
                                </InputGroup>
                            </div>
                            <div className='filterofferscard notrans mb-2'>                                
                                <div className='d-flex justify-content-between '>
                                    <div>
                                        <div className='fs-16 fw-600 dark-text'>3.71 ETH</div>
                                        <div>Volume: 55.528</div>
                                    </div>
                                    <div className='text-right'>
                                        <div>No Traits</div>
                                    </div>
                                </div>                                    
                            </div>
                            <div className='filterofferscard mb-2'>                                
                                 <div className='d-flex justify-content-between '>
                                    <div>
                                        <div className='fs-16 fw-600 dark-text'>30 ETH</div>
                                        <div className='text-nowrap'>Volume: 30 ETH</div>
                                    </div>
                                    <div className='text-right'>
                                        <div>Spirit 0.97%</div>
                                        <div>Type</div>
                                    </div>
                                </div>  
                            </div>
                            <div className='filterofferscard mb-2'>                                
                                 <div className='d-flex justify-content-between '>
                                    <div>
                                        <div className='fs-16 fw-600 dark-text'>3.1 ETH</div>
                                        <div className='text-nowrap'>Volume: 5.997 ETH</div>
                                    </div>
                                    <div className='text-right'>
                                        <div className='text-nowrap'><span className='spanTextRight'>Golden Cat Kigurumi</span> <span>0.07%</span></div>
                                        <div>Clothing</div>
                                    </div>
                                </div>  
                            </div>
                            <div className='filterofferscard mb-2'>                                
                                 <div className='d-flex justify-content-between '>
                                    <div>
                                        <div className='fs-16 fw-600 dark-text'>3.53 ETH</div>
                                        <div className='text-nowrap'>Volume: 6.972 ETH</div>
                                    </div>
                                    <div className='text-right'>
                                        <div className='text-nowrap'><span className='spanTextRight'>Golden Flog Kigurumi</span> <span>0.09%</span></div>
                                        <div>Clothing</div>
                                    </div>
                                </div>  
                            </div>
                            <div className='filterofferscard mb-2'>                                
                                 <div className='d-flex justify-content-between '>
                                    <div>
                                        <div className='fs-16 fw-600 dark-text'>2.41 ETH</div>
                                        <div className='text-nowrap'>Volume: 5.938 ETH</div>
                                    </div>
                                    <div className='text-right'>
                                        <div className='text-nowrap'><span className='spanTextRight'>Golden Elephant Kigurumi</span> <span>0.079%</span></div>
                                        <div>Clothing</div>
                                    </div>
                                </div>  
                            </div>
                            <div className='filterofferscard mb-2'>                                
                                 <div className='d-flex justify-content-between '>
                                    <div>
                                        <div className='fs-16 fw-600 dark-text'>1.7 ETH</div>
                                        <div className='text-nowrap'>Volume: 2.528 ETH</div>
                                    </div>
                                    <div className='text-right'>
                                        <div className='text-nowrap'><span className='spanTextRight'>Black Kigurumi</span> <span>0.06%</span></div>
                                        <div>Clothing</div>
                                    </div>
                                </div>  
                            </div>
                            <div className='filterofferscard mb-2'>                                
                                 <div className='d-flex justify-content-between '>
                                    <div>
                                        <div className='fs-16 fw-600 dark-text'>0.13 ETH</div>
                                        <div className='text-nowrap'>Volume: 1.03 ETH</div>
                                    </div>
                                    <div className='text-right'>
                                        <div className='text-nowrap'><span className='spanTextRight'>Red Kigurumi</span> <span>0.03%</span></div>
                                        <div>Clothing</div>
                                    </div>
                                </div>  
                            </div>
                 </div>               
            </div>
        </>
     );
}

export default FilterOffersSection;