import React, { useState } from 'react';
import './home-explorer.scss';

import loader from '../../assets/images/Loader.png';
import Itemimg1 from '../../assets/images/collection/Itemimg1.png';
import Itemimg2 from '../../assets/images/collection/Itemimg2.png';
import Itemimg3 from '../../assets/images/collection/Itemimg3.png';
import Itemimg4 from '../../assets/images/collection/Itemimg4.png';
import Itemimg5 from '../../assets/images/collection/Itemimg5.png';
import Itemimg6 from '../../assets/images/collection/Itemimg6.png';
import Itemimg7 from '../../assets/images/collection/Itemimg7.png';
import Itemimg8 from '../../assets/images/collection/Itemimg8.png';
import Itemimg9 from '../../assets/images/collection/Itemimg9.png';
import Itemimg10 from '../../assets/images/collection/Itemimg10.png';

import ItemimgSm1 from '../../assets/images/collection/Itemimg-sm1.png';
import ItemimgSm2 from '../../assets/images/collection/Itemimg-sm2.png';
import ItemimgSm3 from '../../assets/images/collection/Itemimg-sm3.png';
import ItemimgSm4 from '../../assets/images/collection/Itemimg-sm4.png';
import ItemimgSm5 from '../../assets/images/collection/Itemimg-sm5.png';
import ItemimgSm6 from '../../assets/images/collection/Itemimg-sm6.png';
import ItemimgSm7 from '../../assets/images/collection/Itemimg-sm7.png';
import ItemimgSm8 from '../../assets/images/collection/Itemimg-sm8.png';
import ItemimgSm9 from '../../assets/images/collection/Itemimg-sm9.png';
import ItemimgSm10 from '../../assets/images/collection/Itemimg-sm10.png';

import ETHIcon from '../../assets/images/collection/ETHIcon.png';
import shoppingcart from '../../assets/images/collection/shopping-cart.svg';
import primeTick from '../../assets/images/collection/yellow-tick_20px.svg';

import bnbIconSm from '../../assets/images/bnbIconSm.png';
import ethIconSm from '../../assets/images/ethIconSm.png';
import maticIconSm from '../../assets/images/maticIconSm.png';
import yellowTick from '../../assets/images/collection/yellow-tick_20px.svg';

// import checkTickIcon from '../../assets/images/toast/checkIcon.svg';
// import removeIcon from '../../assets/images/toast/checkIcon.svg';

// import AlertToast from '../../components/alertToast';
import { Button, Collapse, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

const AllNFTPage = () => {
    //const gridview = (props.filterview)? 'g-col-5' : 'g-col-6';
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

      const ItemList =[
        {
            imgsrc: Itemimg1,
            imgsmsrc: ItemimgSm1,
            itemadded: false
        },
        {
            imgsrc: Itemimg2,
            imgsmsrc: ItemimgSm2,
            itemadded: true
        },
        {
            imgsrc: Itemimg3,
            imgsmsrc: ItemimgSm3,
            itemadded: true
        },
        {
            imgsrc: Itemimg4,
            imgsmsrc: ItemimgSm4,
            itemadded: false
        },
        {
            imgsrc: Itemimg5,
            imgsmsrc: ItemimgSm5
        },
        {
            imgsrc: Itemimg6,
            imgsmsrc: ItemimgSm6
        },
        {
            imgsrc: Itemimg7,
            imgsmsrc: ItemimgSm7
        },
        {
            imgsrc: Itemimg8,
            imgsmsrc: ItemimgSm8
        },
        {
            imgsrc: Itemimg9,
            imgsmsrc: ItemimgSm9
        },
        {
            imgsrc: Itemimg10,
            imgsmsrc: ItemimgSm10
        },
   ]

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

   const ItemCard = ItemList.map((item)=>{
        return(
            <>
            <div className='grid-col'>
                    <div className={`gridItemExplorerCard ${item.itemadded? 'active': ''}`}>
                        <div className='gItemImg'>
                            <img src={item.imgsrc} alt="Itemimg1" className='img-fluid w-100 itemImage' />
                            <div className='hashabsolute'>
                                <span className='hashnum'>#1,421</span>
                            </div>
                            <div className='hoverImgCnt'>
                                <div className='d-flex justify-content-between '>
                                    <div>
                                        <img src={ETHIcon} alt="ETHIcon" className='cointypeImg mr-2'/>
                                        <span className='hashnum'>#1,421</span>
                                    </div>
                                    {/* <div className='alarmbadge'>
                                       <i className='fas fa-alarm-clock'></i> 6 Days left
                                    </div> */}
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button className='buybowbtn rounded-pill' type='button'>Buy Now</button>
                                    <button className='cartBtnCircle'>
                                        <img src={shoppingcart} alt="shoppingcart" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='botcntCard'>
                            <div className='bottomSmImg'>
                                <img src={item.imgsmsrc} height={73} alt="ItemimgSm1" />
                            </div>
                            <div className='botcntTxt'>
                                <div className='itemsmName'>Azuki <img src={primeTick} alt='primeTick' /></div>
                                <div className='itemName'>Azuki #2341</div>
                                <div className='d-flex justify-content-between'>
                                    <div className="itemPricetxt">Highest Bid</div>
                                    <div className="itemPriceval">0.04 ETH</div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>            
            </>
        )
   })

    return(
        <>
            <div className='row'>
                <div className='col-lg-9'>
                    
                    <div className="mb-4">
                        <div className='d-flex justify-content-between mb-4'>
                            <div className='fs-14 fw-400 dark-text-secondary'>871 items</div>
                            <div className='fs-14 fw-400 dark-text-secondary'>
                                Updated 32 seconds ago
                                <button className='refreshIcon pl-2'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4531 0.96875C14.6172 0.96875 14.7812 1.13281 14.7812 1.29688V5.67188C14.7812 5.86328 14.6172 6 14.4531 6H10.0781C9.88672 6 9.75 5.86328 9.75 5.67188V5.39844C9.75 5.23438 9.88672 5.07031 10.0781 5.07031H13.1953C12.2109 3.21094 10.2422 1.89844 8 1.89844C4.85547 1.89844 2.3125 4.38672 2.14844 7.44922C2.12109 7.64062 1.98438 7.75 1.82031 7.75H1.54688C1.35547 7.75 1.19141 7.61328 1.21875 7.42188C1.38281 3.83984 4.36328 0.96875 8 0.96875C10.4883 0.96875 12.6484 2.33594 13.8516 4.33203V1.29688C13.8516 1.13281 13.9883 0.96875 14.1797 0.96875H14.4531ZM14.4258 7.75C14.6172 7.75 14.7812 7.91406 14.7539 8.10547C14.5898 11.6875 11.6094 14.5312 8 14.5312C5.48438 14.5312 3.32422 13.1914 2.14844 11.1953V14.2031C2.14844 14.3945 1.98438 14.5312 1.82031 14.5312H1.54688C1.35547 14.5312 1.21875 14.3945 1.21875 14.2031V9.82812C1.21875 9.66406 1.35547 9.5 1.54688 9.5H5.92188C6.08594 9.5 6.25 9.66406 6.25 9.82812V10.1016C6.25 10.293 6.08594 10.4297 5.92188 10.4297H2.77734C3.76172 12.3438 5.73047 13.6016 8 13.6016C11.1172 13.6016 13.6602 11.168 13.8242 8.07812C13.8516 7.88672 13.9883 7.75 14.1523 7.75H14.4258Z" fill="#C5C5C5"/>
                                        </svg>
                                </button>
                            </div>
                        </div>
                        <div className='fiterSelectlabel mb-4'>
                            {litstedTagLoop}
                            <div className='tagLabel'>
                                <span className='background'>Backgrounds: </span>
                                <span>Off White A</span>
                                <i className="fas fa-times ml-2"></i>
                            </div>
                            <button className='clearAllBtn'>Clear All</button>
                        </div>
                        <div className={`gridrow g-col-5`}>
                            {ItemCard}
                        </div>
                    </div>
                    <div className='text-center'>
                        <img src={loader} alt='' className='spinAnimate' />
                    </div>
                </div>
                <div className='col-lg-3'>
                <div className='filtercard'>
                <div>
                    <Button className='filterTit' onClick={toggleCollapse1}>
                        <span>Status</span> 
                        <i className={`fas ${isOpenCollapse1? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                    </Button>
                    <Collapse isOpen={isOpenCollapse1}>
                        <div className='collapseCnt'>
                            <button className='filterStatusbtn'>All</button>                            
                            <button className='filterStatusbtn'>Listed</button>
                            <button className='filterStatusbtn'>On Auction</button>
                            <button className='filterStatusbtn'>Sales New</button>
                            <button className='filterStatusbtn active'>Has Offers</button>
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
                            <div className='row form-row align-items-center'>
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
                            <div className='row form-row align-items-center'>
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
                    <Button className='filterTit' onClick={toggleCollapse5}>
                        <span>Collection</span> 
                        <i className={`fas ${isOpenCollapse5? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                     </Button>
                    <Collapse isOpen={isOpenCollapse5}>
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
                
                </div>
            </div>
        </>
    )
}

export default AllNFTPage;