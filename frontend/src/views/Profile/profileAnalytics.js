import React from 'react';
import './profileAnalytics.scss';

import Graph1 from '../../assets/images/collection/Graph1.png';
import Graph2 from '../../assets/images/collection/Graph2.png';
import Graph3 from '../../assets/images/collection/Graph3.png';
import greenUpArrow from '../../assets/images/collection/greenUpArrow.svg';
import redDownArrow from '../../assets/images/collection/redDownArrow.svg';



import ownerImg1 from '../../assets/images/collection/ownerImg1.png';
import ownerImg2 from '../../assets/images/collection/ownerImg2.png';
import ownerImg3 from '../../assets/images/collection/ownerImg3.png';
import ownerImg4 from '../../assets/images/collection/ownerImg4.png';
import ownerImg5 from '../../assets/images/collection/ownerImg5.png';
import { Progress } from 'reactstrap';


const ownertblList = [
    {
        imgsrc: ownerImg1,
        ownername: 'Davis Bator'
    },
    {
        imgsrc: ownerImg2,
        ownername: 'Ahmad Carder'
    },
    {
        imgsrc: ownerImg3,
        ownername: 'Justin Botosh'
    },
    {
        imgsrc: ownerImg4,
        ownername: 'Zain Dorwart'
    },
    {
        imgsrc: ownerImg5,
        ownername: 'Alfonso Mango'        
    },
    {
        imgsrc: ownerImg1,
        ownername: 'Davis Passaquindi...'        
    },
    {
        imgsrc: ownerImg2,
        ownername: 'Anika Saris'        
    },
    {
        imgsrc: ownerImg3,
        ownername: 'Ahmad Dokidis'        
    },
    {
        imgsrc: ownerImg4,
        ownername: 'Allison Curtis'        
    },
    {
        imgsrc: ownerImg5,
        ownername: 'Marcus Botosh'        
    },
    {
        imgsrc: ownerImg1,
        ownername: 'Cheyenne Rosser'     
    },
    {
        imgsrc: ownerImg2,
        ownername: 'Davis Passaquindi...'
    },

]

const AnalyticsCollection = () => {
    const listViewrow = ownertblList.map((item) => 
    <>
        <tr>        
        <td>
            <div className='d-flex align-items-center'>
                <div className='tblImg'><img src={item.imgsrc} alt={`item.imgsrc`} /></div>
                <div className='fw-400 dark-primary'>{item.ownername}</div>
            </div>
        </td>        
        <td className='text-right'>9d8....23a</td>
        <td className='text-right'>276</td>
        <td className='text-right'>4.4%</td>
        
    </tr>
    </>    
)
    return(
        <>
            <div className='row mt-3'>
                <div className="col-lg-12">
                <div className="analyticsCard">
                    <div className='cardTit mb-1'>Floor Price</div>
                    <div className='graphvalue mb-2 d-flex align-items-center'>0.55 ETH <span className="greenTxt pl-2"><img src={greenUpArrow} alt="greenUpArrow" /> +0.23%</span></div>
                    <div>
                        <img src={Graph1} alt='graph1' className='img-fluid' />
                    </div>
                </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-6">
                <div className="analyticsCard">
                    <div className='cardTit mb-1'>Sales</div>
                    <div className='graphvalue mb-2 d-flex align-items-center'>800 <span className="greenTxt pl-2"><img src={greenUpArrow} alt="greenUpArrow" /> +9%</span></div>
                    <div>
                        <img src={Graph2} alt='graph2' className='img-fluid' />
                    </div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="analyticsCard">
                    <div className='cardTit mb-1'>Volume</div>
                    <div className='graphvalue mb-2 d-flex align-items-center'>412 ETH <span className="redTxt pl-2"><img src={redDownArrow} alt="redDownArrow" /> +9%</span></div>                
                    <div>
                        <img src={Graph3} alt='graph3' className='img-fluid' />
                    </div>
                </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-6">
                <div className="analyticsCard">
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='fs-16 fw-600 dark-text'>Owners</div>
                        <div className='dark-text-secondary fs-14 fw-400'>Top 50</div>
                    </div>
                    <div className='table-responsive heightTbl scroller'>
                <table className='table table-borderless analyticsTable'>
                    <thead>
                        <tr>
                            <th>Name</th>                            
                            <th className='text-right'>Wallet</th>
                            <th className='text-right'>Owned</th>                            
                            <th className='text-right text-nowrap'>Owned, %</th>                                                    
                        </tr>
                    </thead>
                    <tbody>
                        {listViewrow}                       
                    </tbody>
                </table>
            </div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="analyticsCard">
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='fs-16 fw-600 dark-text'>Owner Distribution</div>
                        <div className='dark-text-secondary fs-14 fw-400'>4,521 Owners</div>
                    </div>
                    <div className="progressList">
                        <div className='d-flex justify-content-between align-items-center mb12px'>
                            <div className='fs-14 fw-600 dark-text'>65%</div>
                            <div className='dark-text-secondary fs-14 fw-400'>1 item</div>                            
                        </div>
                        <Progress value="65" className='cusProgress'/>
                    </div>
                    <div className="progressList">
                        <div className='d-flex justify-content-between align-items-center mb12px'>
                            <div className='fs-14 fw-600 dark-text'>24%</div>
                            <div className='dark-text-secondary fs-14 fw-400'>2-3 items</div>                            
                        </div>
                        <Progress value="24" className='cusProgress'/>
                    </div>
                    <div className="progressList">
                        <div className='d-flex justify-content-between align-items-center mb12px'>
                            <div className='fs-14 fw-600 dark-text'>19%</div>
                            <div className='dark-text-secondary fs-14 fw-400'>4-10 items</div>                            
                        </div>
                        <Progress value="19" className='cusProgress'/>
                    </div>
                    <div className="progressList">
                        <div className='d-flex justify-content-between align-items-center mb12px'>
                            <div className='fs-14 fw-600 dark-text'>9%</div>
                            <div className='dark-text-secondary fs-14 fw-400'>11-25 items</div>                            
                        </div>
                        <Progress value="9" className='cusProgress'/>
                    </div>
                    <div className="progressList">
                        <div className='d-flex justify-content-between align-items-center mb12px'>
                            <div className='fs-14 fw-600 dark-text'>5%</div>
                            <div className='dark-text-secondary fs-14 fw-400'>26-50 items</div>                            
                        </div>
                        <Progress value="5" className='cusProgress'/>
                    </div>
                    <div className="progressList">
                        <div className='d-flex justify-content-between align-items-center mb12px'>
                            <div className='fs-14 fw-600 dark-text'>2%</div>
                            <div className='dark-text-secondary fs-14 fw-400'>50+ items</div>                            
                        </div>
                        <Progress value="2" className='cusProgress'/>
                    </div>
                </div>
                </div>
            </div>
            
        </>
    )
}

export default AnalyticsCollection;