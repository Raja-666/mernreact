import React from 'react';
import '../gridviewlist.scss';
import style from '../profile.module.scss';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import Itemimg1 from '../../../assets/images/collection/Itemimg1.png';
import Itemimg2 from '../../../assets/images/collection/Itemimg2.png';
import Itemimg3 from '../../../assets/images/collection/Itemimg3.png';
import Itemimg4 from '../../../assets/images/collection/Itemimg4.png';
import Itemimg5 from '../../../assets/images/collection/Itemimg5.png';
import Itemimg6 from '../../../assets/images/collection/Itemimg6.png';
import Itemimg7 from '../../../assets/images/collection/Itemimg7.png';
import Itemimg8 from '../../../assets/images/collection/Itemimg8.png';
import Itemimg9 from '../../../assets/images/collection/Itemimg9.png';
import Itemimg10 from '../../../assets/images/collection/Itemimg10.png';

import ItemimgSm1 from '../../../assets/images/collection/Itemimg-sm1.png';
import ItemimgSm2 from '../../../assets/images/collection/Itemimg-sm2.png';
import ItemimgSm3 from '../../../assets/images/collection/Itemimg-sm3.png';
import ItemimgSm4 from '../../../assets/images/collection/Itemimg-sm4.png';
import ItemimgSm5 from '../../../assets/images/collection/Itemimg-sm5.png';
import ItemimgSm6 from '../../../assets/images/collection/Itemimg-sm6.png';
import ItemimgSm7 from '../../../assets/images/collection/Itemimg-sm7.png';
import ItemimgSm8 from '../../../assets/images/collection/Itemimg-sm8.png';
import ItemimgSm9 from '../../../assets/images/collection/Itemimg-sm9.png';
import ItemimgSm10 from '../../../assets/images/collection/Itemimg-sm10.png';

import transferIcon from '../../../assets/images/collection/transferIcon.svg';
import listIcon from '../../../assets/images/collection/listIcon.svg';
import offerIcon from '../assets/bestOfferIcon.svg';
import selectIcon from '../assets/selectIcon.svg';
import hideIcon from '../assets/hideIcon.svg';
import copyIcon from '../assets/copyIcon.svg';
import settingsIcon from '../assets/settingsIcon.svg';

import ETHIcon from '../../../assets/images/collection/ETHIcon.png';
import shoppingcart from '../../../assets/images/collection/shopping-cart.svg';

import checkTickIcon from '../../../assets/images/toast/checkIcon.svg';
import removeIcon from '../../../assets/images/toast/checkIcon.svg';
import yellowTick20px from '../../../assets/images/collection/yellow-tick_20px.svg';
import moreIcon from '../assets/moreIcon.svg';

import AlertToast from '../../../components/alertToast';



const GridViewItem = (props) => {
    //console.log('gridviewpage', props.filterview)
     

    const gridview = (props.filterview)? 'g-col-5' : 'g-col-6';
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

   const ItemCard = ItemList.map((item)=>{
        return(
            <>
            <div className='grid-col'>
                    <div className={`gridItemCard ${item.itemadded? 'active': ''}`}>
                        <div className='gItemImg'>
                            <img src={item.imgsrc} alt="Itemimg1" className='img-fluid w-100 itemImage' />
                            <div className='idTag'>
                                #1412
                            </div>
                            <div className='hoverImgCnt'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className="d-flex align-items-center">
                                        <img src={ETHIcon} alt="ETHIcon" className='cointypeImg'/>
                                        <div className='idTag'>
                                            #1412
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='botcntCard'>
                            <div className='bottomSmImg'>
                                <img src={item.imgsmsrc} height={73} alt="ItemimgSm1" />
                            </div>
                            <div className='botcntTxt'>
                                <div className='itemLabel'>Azuki <img src={yellowTick20px} height="12" /></div>
                                <div className='itemName'>Azuki #2341</div>
                                <div className='d-flex justify-content-between'>
                                    <div className="itemPricetxt">Last Sale</div>
                                    <div className="itemPriceval">1.4 ETH</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </>
        )
   })

    return(
        <div className='pb-3'>
            <div className='row mb-4'>
                <div className='col-lg-6'><span class="cmntxt">41 items</span></div>
            </div>

            <div className="gridrow g-col-6">
                {ItemCard}
                {/* <div className='col-lg'>
                    <div className='gridItemCard'>
                        <div className='gItemImg'>
                            <img src={Itemimg1} alt="Itemimg1" className='img-fluid' />
                            <div className='hoverImgCnt'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src={ETHIcon} alt="ETHIcon" />
                                    </div>
                                    <div>
                                       <i className='fas fa-alarm-clock'></i> 6 Days left
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button className='primeBtn rounded-pill' type='button'>Buy Now</button>
                                    <button className='cartBtnCircle'>
                                        <img src={shoppingcart} alt="shoppingcart" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='botcntCard'>
                            <div className='bottomSmImg'>
                                <img src={ItemimgSm1} height={73} alt="ItemimgSm1" />
                            </div>
                            <div className='botcntTxt'>
                                <div className='itemName'>Azuki #2341</div>
                                <div className='d-flex justify-content-between'>
                                    <div className="itemPricetxt">Price</div>
                                    <div className="itemPriceval">1.4 ETH</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}                
            </div>
            <AlertToast toastImgIcon={checkTickIcon} toastmassage="Added to Cart." />
            <AlertToast toastImgIcon={removeIcon} toastmassage="Removed from Cart." />

            
        </div>
        
    )
}

export default GridViewItem;