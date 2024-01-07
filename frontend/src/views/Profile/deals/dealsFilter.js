import React, { useState } from 'react';

import '../../../assets/scss/filtersection.scss';

import { Button, Collapse, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

const FilterSection = (props) =>{
    const[isOpenCollapse1, setIsOpenCollapse1] = useState(false);    
    const toggleCollapse1 = () => {
        setIsOpenCollapse1(!isOpenCollapse1);        
    }
    const[isOpenCollapse2, setIsOpenCollapse2] = useState(false);    
    const toggleCollapse2 = () => {
        setIsOpenCollapse2(!isOpenCollapse2);        
    }
    // const[isOpenCollapse3, setIsOpenCollapse3] = useState(false);    
    // const toggleCollapse3 = () => {
    //     setIsOpenCollapse3(!isOpenCollapse3);        
    // }
    // const[isOpenCollapse4, setIsOpenCollapse4] = useState(false);    
    // const toggleCollapse4 = () => {
    //     setIsOpenCollapse4(!isOpenCollapse4);        
    // }
    // const[isOpenCollapse5, setIsOpenCollapse5] = useState(false);    
    // const toggleCollapse5 = () => {
    //     setIsOpenCollapse5(!isOpenCollapse5);        
    // }
    // const[isOpenCollapse6, setIsOpenCollapse6] = useState(false);    
    // const toggleCollapse6 = () => {
    //     setIsOpenCollapse6(!isOpenCollapse6);        
    // }
    // const[isOpenCollapse7, setIsOpenCollapse7] = useState(false);    
    // const toggleCollapse7 = () => {
    //     setIsOpenCollapse7(!isOpenCollapse7);        
    // }
    // const[isOpenCollapse8, setIsOpenCollapse8] = useState(false);    
    // const toggleCollapse8 = () => {
    //     setIsOpenCollapse8(!isOpenCollapse8);        
    // }
    // const[isOpenCollapse9, setIsOpenCollapse9] = useState(false);    
    // const toggleCollapse9 = () => {
    //     setIsOpenCollapse9(!isOpenCollapse9);        
    // }
    // const[isOpenCollapse10, setIsOpenCollapse10] = useState(false);    
    // const toggleCollapse10 = () => {
    //     setIsOpenCollapse10(!isOpenCollapse10);        
    // }

    
    
    return ( 
        <>
            <div className='filtercard'>
                <div>
                    <Button className='filterTit' onClick={toggleCollapse1}>
                        <span>Status </span>
                        <i className={`fas ${isOpenCollapse1? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                     </Button>
                    <Collapse isOpen={isOpenCollapse1}>
                        <div className='collapseCnt'>
                            <button className='filterStatusbtn active'>All</button>
                            <button className='filterStatusbtn'>Active</button>
                            <button className='filterStatusbtn'>Accepted</button>
                            <button className='filterStatusbtn'>Canceled</button>
                            <button className='filterStatusbtn'>Inactive</button>
                            <button className='filterStatusbtn'>Expired</button>
                        </div>
                    </Collapse>
                </div>
                <div>
                    <Button className='filterTit' onClick={toggleCollapse2}>
                        <span>Deals </span>
                        <i className={`fas ${isOpenCollapse2? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                     </Button>
                    <Collapse isOpen={isOpenCollapse2}>
                        <div className='collapseCnt'>
                            <button className='filterStatusbtn active'>All</button>
                            <button className='filterStatusbtn'>Sent</button>
                            <button className='filterStatusbtn'>Received</button>                            
                        </div>
                    </Collapse>
                </div>
                
            </div>
        </>
     );
}

export default FilterSection;