import React from 'react';

// import './listviewItem.scss';
import '../../assets/scss/listviewItem.scss';

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
import { useNavigate } from 'react-router-dom';

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

const ListViewItem = ({ data }) => {
    console.log('fsfdsfsdfsd432424', data)
    const navigate = useNavigate()
    const listViewrow = data.map((item, index) =>
        <>
            <tr style={{
                cursor:'pointer'
            }}
            onClick={() => navigate('/nftdetails' , {state:item._id})}
            >
                <td>
                    <label class="cuschk mr-2 mb-0" For={`checkbx11${index}`}>
                        <input type="checkbox" id={`checkbx11${index}`} />
                        <span class="checkmark"></span>
                    </label>
                </td>
                <td>
                    <div className='d-flex align-items-center'>
                        <div className='tblImg'><img src={item.uploadfile} alt={`item.imgsrc`} /></div>
                        <div className='fw-600'>{item.nftName}</div>
                    </div>
                </td>
                <td><span className="dark-text-grey">--</span></td>
                <td className='text-right'>0 ETH</td>
                <td className='text-right'>0 ETH</td>
                <td className='text-right'><span className="dark-primary">{item.nftName}</span></td>
                <td><span className="dark-text-secondary">22s</span></td>
                <td className='text-right'>
                    <button className='btnBuynow'>0 ETH</button>
                </td>
            </tr>
        </>
    )

    // const rows = [];
    // for (let i = 0; i < 12; i++) {
    //     rows.push(

    //     );
    // }

    return (
        <>
            <div className='table-responsive'>
                <table className='table table-borderless listViewTable'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item</th>
                            <th>Rarity</th>
                            <th className='text-right'>Highest Bid</th>
                            <th className='text-right'>Last Sale</th>
                            <th className='text-right'>Owner</th>
                            <th>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6665 4.6875C13.8774 4.6875 16.479 7.28906 16.479 10.5C16.479 13.7109 13.8774 16.3125 10.6665 16.3125C7.45557 16.3125 4.854 13.7109 4.854 10.5C4.854 7.28906 7.45557 4.6875 10.6665 4.6875ZM10.6665 15.1875C13.2446 15.1875 15.354 13.1016 15.354 10.5C15.354 7.92188 13.2446 5.8125 10.6665 5.8125C8.06494 5.8125 5.979 7.92188 5.979 10.5C5.979 13.1016 8.06494 15.1875 10.6665 15.1875ZM12.0962 12.75L10.104 11.2969C10.0337 11.25 10.0103 11.1562 10.0103 11.0859V7.21875C10.0103 7.07812 10.1274 6.9375 10.2915 6.9375H11.0415C11.1821 6.9375 11.3228 7.07812 11.3228 7.21875V10.5469L12.8696 11.6953C13.0103 11.7891 13.0337 11.9531 12.9399 12.0938L12.4946 12.6797C12.4009 12.8203 12.2368 12.8438 12.0962 12.75Z" fill="#595F6A" />
                                </svg>
                            </th>
                            <th className='text-right'>Buy Now</th>
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