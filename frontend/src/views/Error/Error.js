import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import notFound from "../../assets/images/404.png";
import './Error.scss';

export const Error = () => {

    return (
      <div className='withoutBannerHeaderPage'>
        <Header />
        <section className="errNotFoundCnt d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <img src={notFound} className="NFImg" />
              <div className="col-12 textCnt text-center d-flex flex-column align-items-center">
                <h3 className="heading">PAGE <span className="gradientTxt">NOT FOUND</span></h3>
                <p>SORRY, WE CAN’T FIND PAGE YOU’RE LOOKIN FOR.</p>
                <button className="btn gradientBtn">Back To HomePage</button>
              </div>
            </div>
          </div>
        </section>        
        <Footer />
      </div>
    );
};

export default Error;