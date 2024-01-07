import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

import { InputGroup, InputGroupAddon, InputGroupText, Input, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';
import classnames from 'classnames';
import '../../../assets/scss/filterInputItem.scss';
// import '../Collected/profileItem.scss';

import GridViewItem from '../gridviewItem';
import ListViewItem from '../listviewItem';
import Hiddenfiltersection from './Hiddenfiltersection';

import filterIcon from '../../../assets/images/collection/filterIcon.svg';
import arrowLeftIcon from '../../../assets/images/collection/arrowLeftIcon.svg';
import noItemfoundImage from '../../../assets/images/collection/noItemfoundImage.svg';

const ItemsCollection = () => {
  
  const [activeTab, setActiveTab] = useState('2');
  const [isFilterView, setfilterView] = useState(true)

  const toggle = tab => {
      if(setActiveTab !== tab) setActiveTab(tab)
  }
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
                  <Hiddenfiltersection />
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
                    <div className="form-group formInputs mr-3 mb-2">
                      {/* <Input type="select">
                        <option>Price: Low - High</option>
                      </Input> */}
                       <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className='customdropdown'>
                        <DropdownToggle>
                            <span>Recently Received</span> <i className={`fas ${dropdownOpen ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><div>Recently Received</div><div><CheckTick /></div></DropdownItem>
                            <DropdownItem><div>Price: Low - High</div><div><CheckTick /></div></DropdownItem>
                            <DropdownItem><div>Price: High - Low</div><div><CheckTick /></div></DropdownItem>
                            <DropdownItem><div>Highest Floor</div><div><CheckTick /></div></DropdownItem>
                            <DropdownItem><div>Best Offer</div><div><CheckTick /></div></DropdownItem>
                            <DropdownItem><div>Recently Listed</div><div><CheckTick /></div></DropdownItem>
                            <DropdownItem><div>Recently Created</div><div><CheckTick /></div></DropdownItem>
                            <DropdownItem><div>Highest For Sale</div><div><CheckTick /></div></DropdownItem>
                            <DropdownItem><div>Oldest</div><div><CheckTick /></div></DropdownItem>                          
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <div className="mr-3 mb-2">
                      <Nav pills className="ItemsTabsViewTabs">
                        <NavItem>
                          <NavLink
                            onClick={() => {
                              toggle("1");
                            }}
                            className={classnames({
                              active: activeTab === "1",
                            })}
                          >
                            <svg
                              width="16"
                              height="14"
                              viewBox="0 0 16 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.5 10.5C2.3125 10.5 3 11.1875 3 12C3 12.8438 2.3125 13.5 1.5 13.5C0.65625 13.5 0 12.8438 0 12C0 11.1875 0.65625 10.5 1.5 10.5ZM1.5 5.5C2.3125 5.5 3 6.1875 3 7C3 7.84375 2.3125 8.5 1.5 8.5C0.65625 8.5 0 7.84375 0 7C0 6.1875 0.65625 5.5 1.5 5.5ZM1.5 0.5C2.3125 0.5 3 1.1875 3 2C3 2.84375 2.3125 3.5 1.5 3.5C0.65625 3.5 0 2.84375 0 2C0 1.1875 0.65625 0.5 1.5 0.5ZM15.5 1.25C15.75 1.25 16 1.5 16 1.75V2.25C16 2.53125 15.75 2.75 15.5 2.75H5.5C5.21875 2.75 5 2.53125 5 2.25V1.75C5 1.5 5.21875 1.25 5.5 1.25H15.5ZM15.5 6.25C15.75 6.25 16 6.5 16 6.75V7.25C16 7.53125 15.75 7.75 15.5 7.75H5.5C5.21875 7.75 5 7.53125 5 7.25V6.75C5 6.5 5.21875 6.25 5.5 6.25H15.5ZM15.5 11.25C15.75 11.25 16 11.5 16 11.75V12.25C16 12.5312 15.75 12.75 15.5 12.75H5.5C5.21875 12.75 5 12.5312 5 12.25V11.75C5 11.5 5.21875 11.25 5.5 11.25H15.5Z"
                                fill={activeTab === "1" ? "#55f764" : "white"}
                                fillOpacity={activeTab === "1" ? "1" : "0.6"}
                              />
                            </svg>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            onClick={() => {
                              toggle("2");
                            }}
                            className={classnames({
                              active: activeTab === "2",
                            })}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.5 3C17.3125 3 18 3.6875 18 4.5V15.5C18 16.3438 17.3125 17 16.5 17H3.5C2.65625 17 2 16.3438 2 15.5V4.5C2 3.6875 2.65625 3 3.5 3H16.5ZM8.15625 4.25V7.25H11.8125V4.25H8.15625ZM8.15625 8.5V11.5H11.8125V8.5H8.15625ZM6.90625 15.75V12.75H3.25V15.375C3.25 15.5938 3.40625 15.75 3.625 15.75H6.90625ZM6.90625 11.5V8.5H3.25V11.5H6.90625ZM6.90625 7.25V4.25H3.625C3.40625 4.25 3.25 4.4375 3.25 4.625V7.25H6.90625ZM11.8125 15.75V12.75H8.15625V15.75H11.8125ZM16.75 15.75V12.75H13.0625V15.75H16.75ZM16.75 11.5V8.5H13.0625V11.5H16.75ZM16.75 7.25V4.25H13.0625V7.25H16.75Z"
                                fill={activeTab === "2" ? "#55f764" : "white"}
                                fillOpacity={activeTab === "2" ? "1" : "0.6"}
                              />
                            </svg>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </div>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <ListViewItem />
                    </TabPane>
                    <TabPane tabId="2">
                      <GridViewItem filterview={isFilterView}/>
                    </TabPane>
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
                  </TabContent>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ItemsCollection;