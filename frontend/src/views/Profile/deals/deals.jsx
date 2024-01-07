import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

import ellipsisV from '../assets/ellipsis-v.svg';
import img11 from '../assets/dealImg1-1.png';
import img12 from '../assets/dealImg1-2.png';
import img21 from '../assets/dealImg2-1.png';
import img22 from '../assets/dealImg2-2.png';
import img31 from '../assets/dealImg3-1.png';
import img32 from '../assets/dealImg3-2.png';
import img41 from '../assets/dealImg4-1.png';
import img42 from '../assets/dealImg4-2.png';
import img51 from '../assets/dealImg5-1.png';
import img52 from '../assets/dealImg5-2.png';
import img61 from '../assets/dealImg6-1.png';
import img62 from '../assets/dealImg6-2.png';
import img71 from '../assets/dealImg7-1.png';
import img72 from '../assets/dealImg7-2.png';
import img81 from '../assets/dealImg8-1.png';
import img82 from '../assets/dealImg8-2.png';
import img91 from '../assets/dealImg9-1.png';
import img92 from '../assets/dealImg9-2.png';

import Verefied from '../assets/Verefied.svg';
import iconCopyLink from '../assets/iconCopyLink.svg';
import iconCross from '../assets/iconCross.svg';
import iconTick from '../assets/iconTick.svg';



const DealsContent = (props) => {

    const gridview = (props.filterview)? 'g-col-3' : 'g-col-4';

    const listtag = [
        {
            name: 'listed'
        },
        {
            name: 'On Aution'
        },
        {
            name: '123-3121'
        },
        {
            name: '123-11,623.442 ETH'
        },
        {
            name: 'ETH'
        }
    ]

    const litstedTagLoop = listtag.map((item) => {
        return (
            <>
                <div className='tagLabel'>
                    <span>{item.name}</span>
                    <i className="fas fa-times ml-2"></i>
                </div>
            </>
        );
      });

    const dealsCardList = [
        {
            imgsrc1: img11,
            imgsrc2: img12,
            status: 'Active'
        },
        {
            imgsrc1: img21,
            imgsrc2: img22,
            status: 'Inactive'
        },
        {
            imgsrc1: img31,
            imgsrc2: img32,
            status: 'Accepted'
        },
        {
            imgsrc1: img41,
            imgsrc2: img42,
            status: 'Active'
        },
        {
            imgsrc1: img51,
            imgsrc2: img52,
            status: 'Active'
        },
        {
            imgsrc1: img61,
            imgsrc2: img62,
            status: 'Active'
        },
        {
            imgsrc1: img71,
            imgsrc2: img72,
            status: 'Active'
        },
        {
            imgsrc1: img81,
            imgsrc2: img82,
            status: 'Active'
        },
        {
            imgsrc1: img91,
            imgsrc2: img92,
            status: 'Active'
        }
    ]

    const itemDealscard = dealsCardList.map((item, index)=>{
        return(
            <>
            <div className="grid-col">
                        <div className="dealsCard">
                            <div className='dealsTopImg'>
                                <div>
                                    <div className='dealImg'>
                                        <img src={item.imgsrc1} alt={`img${index}1`} />
                                        <div className='rightTxt'>
                                            +3
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between mt-3 fs-12 fw-400'>
                                        <span className='dark-primary textEllipse'>Adison Dias</span>
                                        <span className='dark-text'>4 items</span>
                                    </div>
                                </div>
                                <div className='mx-auto my-5'>
                                    <img src={Verefied} alt="Verefied" />
                                </div>
                                <div>
                                    <div className='dealImg'>
                                        <img src={item.imgsrc2} alt={`img${index}2`} />
                                        <div className='rightTxt'>
                                            +3
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between mt-3 fs-12 fw-400'>
                                        <span className='dark-text'>You</span>
                                        <span className='dark-text'>4 items</span>
                                    </div>
                                </div>
                            </div>
                            <hr className='cushr'/>
                            <div className='d-flex justify-content-between fs-12 fw-400'>
                                <div className='gridTxt'>
                                    <span className='dark-text-grey'>1mo ago</span>
                                    <span className='dark-text-grey'>Expires in 3d</span>
                                </div>
                                <div className='d-inline-flex'>
                                    <button className={`btn${item.status}`}>{item.status}</button>
                                    {/* <button className='iconBtn'>
                                        <img src={ellipsisV} alt="ellipsisV" />
                                    </button> */}
                                    <UncontrolledDropdown  direction="up" >
                                    <DropdownToggle className='iconBtn'>
                                        <img src={ellipsisV} alt="ellipsisV" />
                                    </DropdownToggle>
                                    <DropdownMenu right className='dropdownMenu'>                                        
                                        <DropdownItem>
                                            <img src={iconTick} alt="iconTick" className='mr-2' /> Accept
                                        </DropdownItem>
                                        <DropdownItem>
                                            <img src={iconCross} alt="iconCross" className='mr-2' /> Decline
                                        </DropdownItem>
                                        <DropdownItem>
                                            <img src={iconCopyLink} alt="iconCopyLink" className='mr-2' /> Copy Link
                                        </DropdownItem>
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </div>

                        </div>
                </div>
            </>
        )
    })

    return(
        <>
            <div className='fs-14 fw-400 dark-text-secondary mb-4 mt-3'>38 deals</div>
            <div className='fiterSelectlabel mb-4'>                
                {litstedTagLoop}
                <div className='tagLabel'>
                    <span className='background'>Backgrounds: </span>
                    <span>Off White A</span>
                    <i className="fas fa-times ml-2"></i>
                </div>
                
                <button className='clearAllBtn'>Clear All</button>
            </div>

             <div className={`deal_gridrow ${gridview}`}>
                {itemDealscard}
                {/* <div className="col-lg-4">
                        <div className="dealsCard">
                            <div className='dealsTopImg'>
                                <div>
                                    <div className='dealImg'>
                                        <img src={img11} alt="img11" />
                                        <div className='rightTxt'>
                                            +3
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between mt-3 fs-12 fw-400'>
                                        <span className='dark-primary'>Adison Dias</span>
                                        <span className='dark-text'>4 items</span>
                                    </div>
                                </div>
                                <div className='mx-auto my-5'>
                                    <img src={Verefied} alt="Verefied" />
                                </div>
                                <div>
                                    <div className='dealImg'>
                                        <img src={img12} alt="img12" />
                                        <div className='rightTxt'>
                                            +3
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between mt-3 fs-12 fw-400'>
                                        <span className='dark-text'>You</span>
                                        <span className='dark-text'>4 items</span>
                                    </div>
                                </div>
                            </div>
                            <hr className='cushr'/>
                            <div className='d-flex justify-content-between fs-12 fw-400'>
                                <div className='gridTxt'>
                                    <span className='dark-text-grey'>1mo ago</span>
                                    <span className='dark-text-grey'>Expires in 3d</span>
                                </div>
                                <div className='d-inline-flex'>
                                    <button className='btnActive'>Active</button>
                                    
                                    <UncontrolledDropdown  direction="up" >
                                    <DropdownToggle className='iconBtn'>
                                        <img src={ellipsisV} alt="ellipsisV" />
                                    </DropdownToggle>
                                    <DropdownMenu right className='dropdownMenu'>                                        
                                        <DropdownItem>
                                            <img src={iconTick} alt="iconTick" className='mr-2' /> Accept
                                        </DropdownItem>
                                        <DropdownItem>
                                            <img src={iconCross} alt="iconCross" className='mr-2' /> Decline
                                        </DropdownItem>
                                        <DropdownItem>
                                            <img src={iconCopyLink} alt="iconCopyLink" className='mr-2' /> Copy Link
                                        </DropdownItem>
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </div>

                        </div>
                </div> */}
            </div>
        </>
    )
}

export default DealsContent;