import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import style from "./bnr.module.scss"
import bgImg from "./assets/bgImg.jpg"
import author from "./assets/author.jpg"
import Verefied from "./assets/Verefied.svg"
import { Link } from "react-router-dom"

import arrowLeft from "./assets/arrow-left.svg"
import { useRef } from "react";

const HomeBanner = () => {

   const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
   };

   const slider = useRef();

   const next = () => {
      slider.current.slickNext();
   };
   const previous = () => {
      slider.current.slickPrev();
   };

   return (
      <>
         <div className={style.bnr}>
            {/* <div className={style.bnrIg}>
               <img src={bgImg} alt="banner image" width={1440} height={552} />
            </div> */}

            <div className={style.bnrMn}>
               <div>
                  <div className={style.bnrSld}>
                     <div className={`container ${style.containAbsolute}`} >
                        <button className={`btn ${style.btnSld} ${style.btnSldLt}`} onClick={previous}>
                           <img src={arrowLeft} alt="arrow left" width={20} height={20} />
                        </button>

                        <button className={`btn ${style.btnSld} ${style.btnSldRt}`} onClick={next}>
                           <img src={arrowLeft} alt="arrow left" width={20} height={20} />
                        </button>
                     </div>
                     <Slider {...settings} ref={(c) => (slider.current = c)} >
                        <div className="position-relative">
                              <div className={style.bnrIg}>
                              <img src={bgImg} alt="banner image" width={1440} height={552} />
                              </div>
                              <div className={style.bnrCon} >
                                 <div className={style.atrIg}>
                                    <img src={author} alt="author" width={88} height={88} />
                                 </div>
                                 <h2>
                                    <span>ICONS by Parker Day</span>
                                    <img src={Verefied} alt="Verefied" width={40} height={40} />
                                 </h2>
                                 <p className={style.atrNm}>
                                    <span>By <strong>Quantum-Art-Curator</strong></span>
                                    <img src={Verefied} alt="Verefied" width={20} height={20} />
                                 </p>
                                 <p className={style.vlmFlr}>
                                    <span className={style.vlmCon}>
                                       Volume <strong>13.4K ETH</strong>
                                    </span>
                                    <span className={style.flrCon}>
                                       Floor <strong>554.2 ETH</strong>
                                    </span>
                                 </p>
                                 <div className={style.bnrLk}>
                                    <Link to="/">
                                       View Collection
                                    </Link>
                                 </div>
                              </div>
                        </div>
                        <div className="position-relative">
                           <div className={style.bnrIg}>
                              <img src={bgImg} alt="banner image" width={1440} height={552} />
                              </div>
                              <div className={style.bnrCon}>
                                 <div className={style.atrIg}>
                                    <img src={author} alt="author" width={88} height={88} />
                                 </div>
                                 <h2>
                                    <span>ICONS by Parker Day</span>
                                    <img src={Verefied} alt="Verefied" width={40} height={40} />
                                 </h2>
                                 <p className={style.atrNm}>
                                    <span>By <strong>Quantum-Art-Curator</strong></span>
                                    <img src={Verefied} alt="Verefied" width={20} height={20} />
                                 </p>
                                 <p className={style.vlmFlr}>
                                    <span className={style.vlmCon}>
                                       Volume <strong>13.4K ETH</strong>
                                    </span>
                                    <span className={style.flrCon}>
                                       Floor <strong>554.2 ETH</strong>
                                    </span>
                                 </p>
                                 <div className={style.bnrLk}>
                                    <Link to="/">
                                       View Collection
                                    </Link>
                                 </div>
                              </div>
                        </div>
                     </Slider>
                  </div>

               </div>
            </div>
         </div>
      </>
   );
}
export default HomeBanner;