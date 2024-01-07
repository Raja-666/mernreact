import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

import { InputGroup, InputGroupAddon, InputGroupText, Input, DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';


import '../profileOffer.scss';
import FilterSection from './filterActivitysection';

import filterIcon from '../../../assets/images/collection/filterIcon.svg';
import arrowLeftIcon from '../../../assets/images/collection/arrowLeftIcon.svg';
import noItemfoundImage from '../../../assets/images/collection/noItemfoundImage.svg';

// import FilterActivitySection from './filterActivitysection';
import ProfileActivity from './profileActivity';
    
const ActivityCollectionMain = () => {
  
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
                  <FilterSection />
                </div>
                <div className={`viewItemscard ${isFilterView ? 'collapseWidth' : 'fullWidth'}`}>
                  <div>
                    <ProfileActivity />
                  </div>
                  <div className='noItemFound'>
                        <div className='text-center'>
                            <img src={noItemfoundImage} alt="noItemfoundImage" className='img-fluid'/>
                        </div>
                        <div className='nofounttxt mb-4'>
                            No items were found. Try to broaden your search.
                        </div>
                        <div>
                          <button className='applyBtn'>Apply</button>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ActivityCollectionMain;