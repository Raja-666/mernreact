import React, { useEffect, useState } from 'react';
import style from './collection.module.scss';
import userImg from '../../assets/images/collection/userImage.png';
import yellowTick24px from '../../assets/images/collection/yellow-tick-24px.svg';
import yellowTick20px from '../../assets/images/collection/yellow-tick_20px.svg';

import discord from '../../assets/images/collection/discord.svg';
import twittericon from '../../assets/images/collection/twitter.svg';
import icongroup from '../../assets/images/collection/group.svg';
import staricon from '../../assets/images/collection/star.svg';
import shareIcon from '../../assets/images/collection/shareIcon.svg';
import ellipsisV from '../../assets/images/collection/ellipsis-v.svg';
import pennant from '../../assets/images/collection/pennant.svg';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledDropdown } from 'reactstrap';
import classnames from 'classnames';
import ItemsCollection from './collectionItem';
import OffersCollectionMain from './collectionOffersMain';
import ActivityCollectionMain from './collectionActivityMain';
import AnalyticsCollectionMain from './collectionAnalyticsMain';
import { useLocation } from 'react-router-dom';
import { useFullColListMutation } from '../../store/Endpoint';




export const CollectionPage = () => {

  const location = useLocation()
  const [homeCollectionList, { isLoading: isLoadingHomeCol, isError }] = useFullColListMutation();

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  const _id = location.state ?? ''

  console.log('_id', _id)

  const [collectionList, setCollectionList] = useState([])
  const [homeData, setHomeData] = useState({})

  console.log('rfdsfdsfedata', homeData)

  const handleCollectionList = async () => {
    let obj = {
      id: _id
    }
    const res = await homeCollectionList(obj).unwrap();
    console.log('res.data', res.data)
    if (res.success) {
      setCollectionList(res.data.itemList)
      setHomeData(res.data.rootData)
    }
  }


  useEffect(() => {
    if (_id) {
      handleCollectionList()
    }
  }, [])


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-2 text-center">
            <div className={style.userDetails}>
              <div className="imgtag">
                <img src={homeData?.logo ? homeData?.logo : userImg} alt="userImg" />
              </div>
              <div className="text-center">
                <div className="userName">
                  {homeData?.collectionName ?? "-"}
                  <img
                    src={yellowTick24px}
                    alt="yellowTick24px"
                    className="ml-2"
                  />
                </div>
                <div className="usernameby">
                  <span className="fw-400">By</span> {homeData?.collectionName ?? "-"}
                  <img
                    src={yellowTick20px}
                    alt={yellowTick20px}
                    className="ml-2"
                  />
                </div>
                <div className={style.userDescpara}>
                {homeData?.description ?? "-"}
                </div>
                <div>
                  <button className={style.readmorebtn}>
                    Read More <i className="fas fa-angle-down ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 order-lg-1 text-center text-lg-left">
            <div className={`${style.socialmediaBtnGrid} justify-content-center justify-content-lg-start`}>
              <button className={style.iconBtn}>
                <img src={discord} alt="discord" />
              </button>
              <button className={style.iconBtn}>
                <img src={twittericon} alt="twittericon" />
              </button>
              <button className={style.iconBtn}>
                <img src={icongroup} alt="icongroup" />
              </button>
            </div>
          </div>
          <div className="col-lg-3 order-lg-3 text-center text-lg-right">
            <div className={`justify-content-center justify-content-lg-end ${style.socialmediaBtnGrid}`}>
              <button className={style.iconBtn}>
                <img src={staricon} alt="staricon" />
              </button>
              <UncontrolledDropdown>
                <DropdownToggle className={style.iconBtn}>
                  <img src={shareIcon} alt="shareIcon" />
                </DropdownToggle>
                <DropdownMenu right className={style.dropdownMenu}>
                  <DropdownItem className='mb-2'>
                    {/* <i class="fab fa-twitter-square mr-2"></i>  */}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.1527 8.92804L16.2525 3H15.044L10.6159 8.14724L7.07919 3H3L8.34821 10.7835L3 17H4.20855L8.88474 11.5643L12.6198 17H16.699L11.1524 8.92804H11.1527ZM9.49748 10.8521L8.95559 10.077L4.644 3.90978H6.50026L9.97976 8.88696L10.5216 9.66202L15.0446 16.1316H13.1883L9.49748 10.8524V10.8521Z" fill="white" />
                    </svg> Twitter

                  </DropdownItem>
                  <DropdownItem className='mb-2'>
                    <i class="fab fa-telegram mr-2"></i> Telegram
                  </DropdownItem>
                  <DropdownItem className='mb-2'>
                    <i class="fab fa-facebook mr-2"></i> Facebook
                  </DropdownItem>
                  <DropdownItem className='mb-2'>
                    <i class="fas fa-envelope mr-2"></i> Email
                  </DropdownItem>
                  <DropdownItem className='mb-2'>
                    <i class="fas fa-link mr-2"></i> Copy Link
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown>
                <DropdownToggle className={style.iconBtn}>
                  <img src={ellipsisV} alt="ellipsisV" />
                </DropdownToggle>
                <DropdownMenu right className={style.dropdownMenu}>
                  <DropdownItem>
                    <img src={pennant} alt="pennant" className='mr-2' /> Report
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className={style.moredetailsCnt}>
              <div className='listDetails'>
                <div className='listchild1'>Floor Price</div>
                <div className='listchild2'>0.55 ETH</div>
              </div>
              <div className='listDetails'>
                <div className='listchild1'>Total Volume</div>
                <div className='listchild2'>18,188 ETH</div>
              </div>
              <div className='listDetails'>
                <div className='listchild1'>24h Volume <span className='text-green'>+23.2%</span></div>
                <div className='listchild2'>42.53 ETH</div>
              </div>
              <div className='listDetails'>
                <div className='listchild1'>7d Volume <span className='text-red'>-1.41%</span></div>
                <div className='listchild2'>1,003.86 ETH</div>
              </div>
              <div className='listDetails'>
                <div className='listchild1'>Top Bid</div>
                <div className='listchild2'>0.494 ETH</div>
              </div>
              <div className='listDetails'>
                <div className='listchild1'>Listed/Total Items</div>
                <div className='listchild2'>871/7,927</div>
              </div>
              <div className='listDetails'>
                <div className='listchild1'>Owners</div>
                <div className='listchild2'>4,341</div>
              </div>
              <div className='listDetails'>
                <div className='listchild1'>Unique Owners</div>
                <div className='listchild2'>31%</div>
              </div>
              <div className='listDetails'>
                <div className='listchild1'>Royalty Fee</div>
                <div className='listchild2'>1.2%</div>
              </div>
              <div className='listDetails'>
                <div className='listchild1'>Chain</div>
                <div className='listchild2'>Etherium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mb-4 ${style.borderbottom}`}></div>
      <div className='container'>
        <div className="row">
          <div className="col-lg-6">
            <Nav tabs className={style.mycollectiontabs}>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>
                  Items
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>
                  Offers
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}>
                  Activity
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '4' })} onClick={() => { toggle('4'); }}>
                  Analytics
                </NavLink>
              </NavItem>

            </Nav>
          </div>
          <div className="col-lg-6 text-right">
            <button className={`mb-4 ${style.collectOfferBtn}`}>Make Collection Offer</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                {activeTab === "1" &&
                  <ItemsCollection itemData={collectionList} />
                }
              </TabPane>
              <TabPane tabId="2">
                {activeTab === "2" &&
                  <OffersCollectionMain />
                }
              </TabPane>
              <TabPane tabId="3">
                {activeTab === "3" &&
                  <ActivityCollectionMain />
                }
              </TabPane>
              <TabPane tabId="4">
                {activeTab === "4" &&
                  <AnalyticsCollectionMain />
                }
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>


    </>
  );
};

export default CollectionPage;