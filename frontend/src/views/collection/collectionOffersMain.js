import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

import './collectionItem.scss';

import FilterOffersSection from './filterOfferSection';
import ItemsCollection from './collectionOffer';

import filterIcon from '../../assets/images/collection/filterIcon.svg';
import arrowLeftIcon from '../../assets/images/collection/arrowLeftIcon.svg';



const OffersCollectionMain = () => {
  
//   const [activeTab, setActiveTab] = useState('2');
  const [isOfferFilterView, setfilterView] = useState(true)

//   const toggle = tab => {
//       if(setActiveTab !== tab) setActiveTab(tab)
//   }
  const filterShow = () =>{
    setfilterView(!isOfferFilterView)
  }



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
          {!isOfferFilterView ? <img src={arrowLeftIcon} alt='arrowLeftIcon'/> : <img src={filterIcon} alt='filterIcon'/> }           
          </button>
        </div>
        <div className="mb-5" ref={ref}>
          <div className="row">
            <div className="col-lg-12">
              <div className="itemWizard">
                <div className={`filterSection ${isOfferFilterView ? 'show' : 'hide'}`} >
                  <FilterOffersSection />
                </div>
                <div className={`viewItemscard ${isOfferFilterView ? 'collapseWidth' : 'fullWidth'}`}>
                  <ItemsCollection />                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default OffersCollectionMain;