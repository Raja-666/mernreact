import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

import { InputGroup, InputGroupAddon, InputGroupText, Input, DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';


import '../Collected/profileItem.scss';

import filterIcon from '../../../assets/images/collection/filterIcon.svg';
import arrowLeftIcon from '../../../assets/images/collection/arrowLeftIcon.svg';
import noItemfoundImage from '../../../assets/images/collection/noItemfoundImage.svg';

import FilterProfileOfferReceived from './filterProfileOfferReceived';
import ProfileOfferReceived from './profileOfferReceived';
    
const ProfileOfferReceivedMain = () => {
  
  //const [activeTab, setActiveTab] = useState('2');
  const [isFilterView, setfilterView] = useState(true)

//   const toggle = tab => {
//       if(setActiveTab !== tab) setActiveTab(tab)
//   }
  const filterShow = () =>{
    setfilterView(!isFilterView)
  }

  const CheckTick = () => {
    return (
    <>
      <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.1953 0.46875C10.3125 0.351562 10.5 0.351562 10.5938 0.46875L11.2734 1.125C11.3672 1.24219 11.3672 1.42969 11.2734 1.52344L4.24219 8.55469C4.125 8.67188 3.96094 8.67188 3.84375 8.55469L0.703125 5.4375C0.609375 5.32031 0.609375 5.13281 0.703125 5.03906L1.38281 4.35938C1.47656 4.26562 1.66406 4.26562 1.78125 4.35938L4.03125 6.63281L10.1953 0.46875Z" fill="#55f764"/>
      </svg>
    </>
  )
}

const [dropdownOpen, setDropdownOpen] = useState(false);
const toggleDropdown = () => setDropdownOpen(prevState => !prevState);



  const ref = useRef(null)
  //const ref1 = useRef(window.innerWidth)
  const [divWidth, setDivWidth] = useState('')
  const [divWidth1, setDivWidth1] = useState([window.innerWidth])
  
  const handleResize = () => {
      setDivWidth(ref.current.offsetWidth)
      setDivWidth1([window.innerWidth])
  }
  useEffect(() => {
      if (ref.current) window.addEventListener('resize',  handleResize)

      return () => {
          window.removeEventListener('resize', handleResize)
      }
  }, [ref])

  useEffect(() => {
    const handleWindowResize = () => {
      setDivWidth1(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useLayoutEffect(() => {
      setDivWidth(ref.current.offsetWidth)
      setDivWidth1([window.innerWidth])
  }, [])


    return (
      <>
        <div className='filterbtnshow' style={{'marginLeft': (((divWidth1[0] - divWidth) + 30)/2)* -1  + 17 }}>
          <button className='filtershowhideBtn' onClick={filterShow} >
          {!isFilterView ? <img src={arrowLeftIcon} alt='arrowLeftIcon'/> : <img src={filterIcon} alt='filterIcon'/> }           
          </button>
        </div>
        <div className="mb-5" ref={ref}>
          <div className="row">
            <div className="col-lg-12">
              <div className="itemWizard">
                <div className={`filterSection ${isFilterView ? 'show' : 'hide'}`} >
                  <FilterProfileOfferReceived />
                </div>
                <div className={`viewItemscard ${isFilterView ? 'collapseWidth' : 'fullWidth'}`}>
                  <div className="form-inline">
                    <div className="form-group formInputs mr-3 flex-grow-1">
                      <InputGroup className='mb-2'>
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
                        <Input placeholder="Search Items..." />
                      </InputGroup>
                    </div>
                   
                    {/* <div>
                      <button className="primeBtn mb-2">Sweep</button>
                    </div> */}
                  </div>
                  <div>
                  <div className='row my-3'>
                      <div className='col-lg-6'><span class="cmntxt">30 items</span></div>
                      <div className='col-lg-6 text-right'>
                          <span class="cmntxt dark-primary">
                            Cancel all listings and offers
                          </span>
                      </div>
                  </div>
                    <ProfileOfferReceived />
                  </div>
                  {/* <div className='noItemFound'>
                        <div className='text-center'>
                            <img src={noItemfoundImage} alt="noItemfoundImage" className='img-fluid'/>
                        </div>
                        <div className='nofounttxt mb-4'>
                            No items were found. Try to broaden your search.
                        </div>
                        <div>
                          <button className='applyBtn'>Apply</button>
                        </div>
                  </div> */}

                  {/* <div className="selectFloatCnt d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <a className="mr-2">Cancel</a>
                      <a className="active">Select All</a>
                    </div>
                    <div className="d-flex align-items-center">
                      1 item
                      <div className="btn mx-2">
                        Transfer
                      </div>
                      <div className="btn mx-2">
                        Unhide
                      </div>
                      <div className="btn mx-2">
                        Accept Offer
                      </div>
                      <div className="btn ml-2">
                        List For Sale
                      </div>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ProfileOfferReceivedMain;