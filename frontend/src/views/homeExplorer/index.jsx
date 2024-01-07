import React, { useState } from 'react';
import './home-explorer.scss';
import { Nav, NavLink,  NavItem, TabContent, TabPane } from 'reactstrap';


import classnames from 'classnames';
import AllNFTPage from './allNFT';

const HomeExplorerMain = () =>{
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !==tab) setActiveTab(tab);
    }

    return(
        <>
           <div className='container mt-set'>
            <div className='row'>
                <div className='col-12'>
                <Nav tabs className='myhmeExplorertabs'>
                    <NavItem>
                    <NavLink className={`nav-link ${classnames({ active: activeTab === '1' })}`}  onClick={() => { toggle('1'); }}>
                    All NFTs
                    </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={`nav-link ${classnames({ active: activeTab === '2' })}`} onClick={() => { toggle('2'); }}>
                        Art
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={`nav-link ${classnames({ active: activeTab === '3' })}`} onClick={() => { toggle('3'); }}>
                        Collectibles
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={`nav-link ${classnames({ active: activeTab === '4' })}`} onClick={() => { toggle('4'); }}>
                        Music
                        </NavLink>
                    </NavItem>  
                    <NavItem>
                        <NavLink className={`nav-link ${classnames({ active: activeTab === '5' })}`} onClick={() => { toggle('5'); }}>
                        Photography
                        </NavLink>
                    </NavItem> 
                    <NavItem>
                        <NavLink className={`nav-link ${classnames({ active: activeTab === '6' })}`} onClick={() => { toggle('6'); }}>
                        Sports
                        </NavLink>
                    </NavItem>                   
                </Nav>
                </div>
                </div>
                <div className='row'>
                <div className='col-12'>                  
                    <TabContent activeTab={activeTab} className='mytabcontent'>
                        <TabPane tabId="1">
                          {activeTab === "1" &&
                            <AllNFTPage />
                          }
                        </TabPane>
                       
                    </TabContent>
                </div>                
            </div>
           </div>
        </>
    )
}

export default HomeExplorerMain;