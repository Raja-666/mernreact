import React from 'react';
import './gridviewlist.scss';

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

import checkTickIcon from '../../assets/images/toast/checkIcon.svg';
import removeIcon from '../../assets/images/toast/checkIcon.svg';

import AlertToast from '../../components/alertToast';
import { useNavigate } from 'react-router-dom';



const GridViewItem = ({filterview , data}) => {
    const navigate = useNavigate()
    console.log('ffdsf' , data)
    const gridview = (filterview)? 'g-col-5' : 'g-col-6';
    
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
                <div className='tagLabel'
               
                >
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

   const ItemCard = data.map((item)=>{
        return(
            <>
            <div className='grid-col'
             style={{
                cursor:'pointer'
            }}
            onClick={() => navigate('/nftdetails' , {state:item._id})}
            >
                    <div className={`gridItemCard ${item.itemadded? 'active': ''}`}>
                        <div className='gItemImg'>
                            <img src={item.uploadfile} alt="Itemimg1" className='img-fluid w-100 itemImage' />
                            <div className='hoverImgCnt'>
                                <div className='d-flex justify-content-between '>
                                    <div>
                                        <img src={ETHIcon} alt="ETHIcon" className='cointypeImg'/>
                                    </div>
                                    <div className='alarmbadge'>
                                       <i className='fas fa-alarm-clock'></i> 6 Days left
                                    </div>
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
                                <img src={item.uploadfile} height={73} alt="ItemimgSm1" />
                            </div>
                            <div className='botcntTxt'>
                                <div className='itemName'>{item.nftName}</div>
                                <div className='d-flex justify-content-between'>
                                    <div className="itemPricetxt">Price</div>
                                    <div className="itemPriceval">0 ETH</div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>            
            </>
        )
   })

    return(
        <div className='py-3'>
            <div className='row mb-4'>
                <div className='col-lg-6'><span class="cmntxt">871 items</span></div>
                <div className='col-lg-6 text-right'>
                    <span class="cmntxt">
                        Updated 32 seconds ago
                        <button className='btn-refeash'>
                        <svg width="16" height="16" viewBox="0 0 16 16" className='ml-1' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.207 1.54297C14.4258 1.32422 14.7812 1.48828 14.7812 1.76172V5.67188C14.7812 5.86328 14.6172 6 14.4531 6H10.5156C10.2422 6 10.0781 5.67188 10.2969 5.45312L11.7734 3.97656C10.8164 2.99219 9.47656 2.39062 8 2.39062C5.12891 2.39062 2.80469 4.63281 2.64062 7.44922C2.61328 7.64062 2.47656 7.75 2.3125 7.75H1.54688C1.35547 7.75 1.19141 7.61328 1.21875 7.42188C1.38281 3.83984 4.36328 0.96875 8 0.96875C9.85938 0.96875 11.5547 1.73438 12.7852 2.96484L14.207 1.54297ZM14.4258 7.75C14.6172 7.75 14.7812 7.91406 14.7539 8.10547C14.5898 11.6875 11.6094 14.5312 8 14.5312C6.11328 14.5312 4.41797 13.793 3.1875 12.5625L1.76562 13.9844C1.54688 14.2031 1.21875 14.0391 1.21875 13.7656V9.82812C1.21875 9.66406 1.35547 9.5 1.54688 9.5H5.45703C5.73047 9.5 5.89453 9.85547 5.67578 10.0742L4.19922 11.5508C5.15625 12.5352 6.49609 13.1094 8 13.1094C10.8438 13.1094 13.168 10.8945 13.332 8.07812C13.3594 7.88672 13.4961 7.75 13.6602 7.75H14.4258Z" fill="#C5C5C5"/>
                        </svg>
                        </button>
                    </span>
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

            <div className={`gridrow ${gridview}`}>
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