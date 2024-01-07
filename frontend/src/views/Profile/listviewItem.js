import React from 'react';

//import './listviewItem.scss';
import '../../assets/scss/listviewItem.scss';
import style from './profile.module.scss';

import tblUserImg1 from '../../assets/images/collection/tblUserImg1.png';
import tblUserImg2 from '../../assets/images/collection/tblUserImg2.png';
import tblUserImg3 from '../../assets/images/collection/tblUserImg3.png';
import tblUserImg4 from '../../assets/images/collection/tblUserImg4.png';
import tblUserImg5 from '../../assets/images/collection/tblUserImg5.png';
import tblUserImg6 from '../../assets/images/collection/tblUserImg6.png';
import tblUserImg7 from '../../assets/images/collection/tblUserImg7.png';
import tblUserImg8 from '../../assets/images/collection/tblUserImg8.png';
import tblUserImg9 from '../../assets/images/collection/tblUserImg9.png';
import tblUserImg10 from '../../assets/images/collection/tblUserImg10.png';
import tblUserImg11 from '../../assets/images/collection/tblUserImg11.png';
import tblUserImg12 from '../../assets/images/collection/tblUserImg12.png';
import yellowTick from '../../assets/images/collection/yellow-tick_20px.svg';

const tableImg = [
    {
        imgsrc: tblUserImg1,
        ownername: 'Ahmad Dokidis'
    },
    {
        imgsrc: tblUserImg2,
        ownername: 'Allison Curtis'
    },
    {
        imgsrc: tblUserImg3,
        ownername: 'Marcus Botosh'
    },
    {
        imgsrc: tblUserImg4,
        ownername: 'Cheyenne Rosser'
    },
    {
        imgsrc: tblUserImg5,
        ownername: 'Davis Passaquindi...'        
    },
    {
        imgsrc: tblUserImg6,
        ownername: 'Davis Passaquindi...'        
    },
    {
        imgsrc: tblUserImg7,
        ownername: 'Anika Saris'        
    },
    {
        imgsrc: tblUserImg8,
        ownername: 'Ahmad Dokidis'        
    },
    {
        imgsrc: tblUserImg9,
        ownername: 'Allison Curtis'        
    },
    {
        imgsrc: tblUserImg10,
        ownername: 'Marcus Botosh'        
    },
    {
        imgsrc: tblUserImg11,
        ownername: 'Cheyenne Rosser'     
    },
    {
        imgsrc: tblUserImg12,
        ownername: 'Davis Passaquindi...'
    },

]


const listtag = [
    {
        name: 'listed'
    },
    {
        name: 'On Auction'
    },
    {
        name: 'Binance'
    },
    {
        name: 'Loaded Lions'
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

const ListViewItem = () => {
    const listViewrow = tableImg.map((item, index) => 
        <>
            <tr>
                <td>
                    <label className="cuschk mr-2 mb-0" For={`checkbx11${index}`}>
                        <input type="checkbox" id={`checkbx11${index}`} />
                        <span className="checkmark"></span>
                    </label>
                </td>
                <td>
                    <div className='d-flex align-items-center'>
                        <div className='tblImg'><img src={item.imgsrc} alt={`item.imgsrc`} /></div>
                        <div>
                            <div className='fw-600'>Azuki #1249</div>
                            <div className='smTxt dark-text-secondary'>Azuki <img src={yellowTick} height="18" className="ml-1" /></div>
                        </div>
                    </div>
                </td>
                <td><span className="dark-text-grey">--</span></td>
                <td className='text-right'>1.39 ETH</td>
                <td className='text-right'>1.5 ETH</td>
                <td className='text-right'>1.4 ETH</td>
                <td className="text-right"><span className="dark-text-grey">--</span></td>
                <td className='text-right'>
                    <button className={style.iconBtn}><i className='fas fa-ellipsis-v'></i></button>
                </td>
            </tr>
        </>    
    )

// const rows = [];
// for (let i = 0; i < 12; i++) {
//     rows.push(
        
//     );
// }

    return(
        <>
            <div className='py-3'>
                <div className='row mb-4'>
                    <div className='col-lg-6'><span class="cmntxt">871 items</span></div>
                </div>
                <div className='fiterSelectlabel mb-4'>                
                    {litstedTagLoop}
                    
                    <button className='clearAllBtn'>Clear All</button>
                </div>
            </div>
            <div className='table-responsive'>
                <table className='table table-borderless listViewTable'>
                    <thead>
                        <tr>
                            <th>
                                <label class="cuschk mr-2 mb-0" For="checkhead">
                                    <input type="checkbox" id="checkhead" />
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th>Item</th>
                            <th>Floor Price</th>
                            <th className='text-right'>Highest Bid</th>
                            <th className='text-right'>Listing Price</th>
                            <th className='text-right'>Price</th>
                            <th className='text-right'>Difference</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {listViewrow}
                        {/* <tr>
                            <td>
                                <label class="cuschk mr-2 mb-0" For="checkbx12">
                                    <input type="checkbox" id="checkbx12" />
                                    <span class="checkmark"></span>
                                </label>
                            </td>
                            <td>
                                <div className='d-flex'>
                                    <div><img src="" alt="" /></div>
                                    <div>Azuki #1249</div>
                                </div>
                            </td>
                            <td>--</td>
                            <td>3.7364 ETH</td>
                            <td>3.73 ETH</td>
                            <td>Ahmad Dokidis</td>
                            <td>22s</td>
                            <td>
                                <button className='btnBuynow'>3.7364 ETH</button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListViewItem;