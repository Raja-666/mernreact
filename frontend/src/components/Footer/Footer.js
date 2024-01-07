import { Link } from "react-router-dom";
import style from "./Footer.module.scss"
import logo from "./assets/logo.svg"
import logoLight from "./assets/logo-light.svg"
import { Input } from "reactstrap";

import twitter from "./assets/twitter.svg"
import instagram from "./assets/instagram.svg"
import facebook from "./assets/facebook.svg"
import telegram from "./assets/telegram-plane.svg"
import discord from "./assets/discord.svg"

const Footer = () => {
   return (
      <>
         <footer className={style.ftr}>
            <div className={style.ftrTp}>
               <div className={style.glow1}></div>
               <div className={style.glow2}></div>
               <div className={style.glow3}></div>
               <div className="container">
                  <div className={style.ftLogo}>
                     <Link to="/">
                        <img src={logo} alt="logo" className={style.darkLogo}  />
                        <img src={logoLight} alt="logo" className={style.lightLogo}   />
                     </Link>
                  </div>

                  <div className={`row ${style.ftrR || ""}`}>
                     <div className={`col-md-6 col-lg-4 ${style.ftrC}`}>
                        <p className={style.ftrMuTl}>
                           Stay in the  loop.
                        </p>
                        <div className={style.ftrSbs}>
                           <Input type="email" placeholder="Enter Your Email" />
                        </div>
                     </div>
                     <div className={`col-md-6 col-lg-4 col-xl-3 ${style.ftrC}`}>
                        <p className={style.ftrMuTl}>
                           Marketplace
                        </p>
                        <ul className={style.ftMnu}>
                           <li>
                              <Link to="/">All NFT's</Link>
                           </li>
                           <li>
                              <Link to="/">Art</Link>
                           </li>
                           <li>
                              <Link to="/">Music</Link>
                           </li>
                           <li>
                              <Link to="/">Photography</Link>
                           </li>
                           <li>
                              <Link to="/">Sports</Link>
                           </li>
                        </ul>
                     </div>
                     <div className={`col-md-6 col-lg-4 col-xl-3 ${style.ftrC}`}>
                        <p className={style.ftrMuTl}>
                           My Account
                        </p>
                        <ul className={style.ftMnu}>
                           <li>
                              <Link to="/">Profile</Link>
                           </li>
                           <li>
                              <Link to="/">Favorites</Link>
                           </li>
                           <li>
                              <Link to="/">Watchlist</Link>
                           </li>
                           <li>
                              <Link to="/">My Collections</Link>
                           </li>
                           <li>
                              <Link to="/">Settings</Link>
                           </li>
                        </ul>
                     </div>
                     <div className={`col-md-6 col-lg-4 col-xl-2 ${style.ftrC}`}>
                        <p className={style.ftrMuTl}>
                           Resources
                        </p>
                        <ul className={style.ftMnu}>
                           <li>
                              <Link to="/">Learn Center</Link>
                           </li>
                           <li>
                              <Link to="/">Help Center</Link>
                           </li>
                           <li>
                              <Link to="/">Community Standards</Link>
                           </li>
                           <li>
                              <Link to="/">Partners</Link>
                           </li>
                           <li>
                              <Link to="/">Developer Platform</Link>
                           </li>
                        </ul>
                     </div>

                     <div className={`col-md-6 col-lg-4 ${style.ftrC}`}>
                        <p className={style.ftrMuTl}>
                           Join the community.
                        </p>
                        <ul className={style.ftrScl}>
                           <li>
                              <a href="#">
                                 <img src={twitter} alt="twitter" width={16} height={14} />
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <img src={instagram} alt="instagram" width={15} height={15} />
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <img src={facebook} alt="facebook" width={16} height={16} />
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <img src={telegram} alt="facebook" width={16} height={16} />
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <img src={discord} alt="discord" width={20} height={15} />
                              </a>
                           </li>
                        </ul>
                     </div>
                     <div className={`col-md-6 col-lg-4 col-xl-2 ${style.ftrC}`}>
                        <p className={style.ftrMuTl}>
                           Stats
                        </p>
                        <ul className={style.ftMnu}>
                           <li>
                              <Link to="/">Ranking</Link>
                           </li>
                           <li>
                              <Link to="/">Activity</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className={style.ftrBm}>
               <div className="container">
                  <div className="row align-items-center justify-content-between">
                     <div className="col-lg-auto">
                        <ul className={style.ftBmMu}>
                           <li>
                              <Link to="/">
                                 Privacy Policy
                              </Link>
                           </li>
                           <li>
                              <Link to="/">
                                 Terms of Service
                              </Link>
                           </li>
                           <li>
                              <Link to="/">
                                 Legal Notice
                              </Link>
                           </li>
                        </ul>
                     </div>
                     <div className="col-lg-auto">
                        <p className={style.ftrCpr}>© 2023 WARRIOR. All rights reserved.</p>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}
export default Footer;