import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, useNavigate } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "../../components/Header/Header";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Footer from "../../components/Footer/Footer";

import deGods from '../../assets/images/itemIcons/deGods.png';
import remiVision from '../../assets/images/itemIcons/remiVision.png';
import loadedLions from '../../assets/images/itemIcons/loadedLions.png';
import boredApe from '../../assets/images/itemIcons/boredApe.png';
import sprotoPepes from '../../assets/images/itemIcons/sprotoPepes.png';
import frens from '../../assets/images/itemIcons/frens.png';
import moonRunnersOfficial from '../../assets/images/itemIcons/moonRunnersOfficial.png';
import leagueOfKingdomDragon from '../../assets/images/itemIcons/leagueOfKingdomDragon.png';
import heroMetaverse from '../../assets/images/itemIcons/heroMetaverse.png';
import mocaVerse from '../../assets/images/itemIcons/mocaVerse.png';
import aiPfpClub from '../../assets/images/itemIcons/aiPfpClub.png';
import stonedJobs from '../../assets/images/itemIcons/stonedJobs.png';
import assembler from '../../assets/images/itemIcons/assembler.png';
import corruptions from '../../assets/images/itemIcons/corruptions.png';
import devilFrens from '../../assets/images/itemIcons/devilFrens.png';
import asuki from '../../assets/images/itemIcons/asuki.png';
import asuki1 from '../../assets/images/itemIcons/asuki1.png';
import dopeApeBros1 from '../../assets/images/itemIcons/dopeApeBros1.png';
import cryptoPankBros from '../../assets/images/itemIcons/cryptoPankBros.png';
import dopeBoredApeBros from '../../assets/images/itemIcons/dopeBoredApeBros.png';
import badgeCheck from '../../assets/images/badgeCheck.svg';
import ethIconSm from '../../assets/images/ethIconSm.png';
import maticIconSm from '../../assets/images/maticIconSm.png';
import bnbIconSm from '../../assets/images/bnbIconSm.png';
import clock from '../../assets/images/clock.svg';
import list from '../../assets/images/tag.png';
import cart from '../../assets/images/cart.png';
import homeBannerSlider1 from '../../assets/images/banners/homeBannerSlider1.png';
import homeBannerSlider2 from '../../assets/images/banners/homeBannerSlider2.png';
import homeBannerSlider3 from '../../assets/images/banners/homeBannerSlider3.png';
import homeBannerSlider4 from '../../assets/images/banners/homeBannerSlider4.png';
import homeCollectionBanner1 from '../../assets/images/banners/homeCollectionBanner1.png';
import homeCollectionBanner2 from '../../assets/images/banners/homeCollectionBanner2.png';
import homeCollectionBanner3 from '../../assets/images/banners/homeCollectionBanner3.png';
import homeCollectionBanner4 from '../../assets/images/banners/homeCollectionBanner4.png';
import angleDown from '../../assets/images/angleDown.svg';
import bannerSliderImage from '../../assets/images/bannerSliderImage.png';
import bannerItemIcon from '../../assets/images/bannerItemIcon.png';
import homeFeaturedSliderBanner2 from '../../assets/images/banners/homeFeaturedSliderBanner2.png';
import homeFeaturedSliderBanner3 from '../../assets/images/banners/homeFeaturedSliderBanner3.png';
import featuredPFIcon2 from '../../assets/images/profIcons/featuredPFIcon2.png';
import featuredPFIcon3 from '../../assets/images/profIcons/featuredPFIcon3.png';
import { useHomeColListMutation } from "../../store/Endpoint";

const Home = (props) => {
    const navigate = useNavigate()
    const { className } = props;
    const [homeCollectionList, { isLoading: isLoadingHomeCol, isError }] = useHomeColListMutation();

    // const [modal, setModal] = useState(false);
    // const toggle = () => setModal(!modal);

    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const [activeTab1, setActiveTab1] = useState('1');
    const toggle1 = tab => {
        if (activeTab1 !== tab) setActiveTab1(tab);
    }

    const [activeTab2, setActiveTab2] = useState('1');
    const toggle2 = tab => {
        if (activeTab2 !== tab) setActiveTab2(tab);
    }

    const [activeTab3, setActiveTab3] = useState('1');
    const toggle3 = tab => {
        if (activeTab3 !== tab) setActiveTab3(tab);
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button type='button' class='slick-prev' onClick={onClick}><img src={angleDown} alt='' class='img-fluid' /></button>
        );
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button type='button' class='slick-next' onClick={onClick}><img src={angleDown} alt='' class='img-fluid' /></button>
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    var settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    var settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    const [collectionList, setCollectionList] = useState([])
    const handleCollectionList = async () => {
        let obj = {}
        const res = await homeCollectionList(obj).unwrap();
        console.log('res.data', res.data)
        setCollectionList(res.data)
    }

    const handleCollectionBtn = (id) => {
        navigate('/collection', { state: id })
    }

    useEffect(() => {
        handleCollectionList()
    }, [])

    return (
        <Fragment>
            <Header />
            <HomeBanner />
            <section className="collectionActivitySec">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="card my-1">
                                <div className="d-flex align-items-center mb-3">
                                    <h3 className="gradientHeading">Collections</h3>
                                    <button className="btn gradientBtn ml-auto">View All</button>
                                </div>
                                <div className="d-flex align-items-center flex-wrap">
                                    <Nav tabs className="mr-2 mr-sm-0">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '1' })}
                                                onClick={() => { toggle('1'); }}
                                            >
                                                Trending
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { toggle('2'); }}
                                            >
                                                Top
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <Nav tabs className="ml-sm-auto checkTab mr-3">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab1 === '1' })}
                                                onClick={() => { toggle1('1'); }}
                                            >
                                                1h
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab1 === '2' })}
                                                onClick={() => { toggle1('2'); }}
                                            >
                                                6h
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab1 === '3' })}
                                                onClick={() => { toggle1('3'); }}
                                            >
                                                24h
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab1 === '4' })}
                                                onClick={() => { toggle1('4'); }}
                                            >
                                                7d
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <select>
                                        <option>All Chains</option>
                                        <option>All Chains</option>
                                        <option>All Chains</option>
                                        <option>All Chains</option>
                                    </select>
                                </div>
                                <div className="w-100 mt-4">
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Collections</th>
                                                            <th className="text-right">Floor Price</th>
                                                            <th className="text-right">Volume</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {
                                                            collectionList.map(({ _id, collectionName, logo, status }, index) => {
                                                                const rejectedReason = status == 0 ? 'Pending' : status === 1 ? 'Approved' :
                                                                    'Rejected'
                                                                return (
                                                                    <tr key={_id} onClick={() => handleCollectionBtn(_id)}>
                                                                        <td className="lgTxt ylwTxt altFont">{index + 1}</td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <img src={logo} className="itemIcon mr-3 w-25 h-25" />
                                                                                <h3 className="mr-2">{collectionName}</h3>
                                                                                {rejectedReason && (
                                                                                    <div className={`boldTxt mr-2 ${status === 2 ? 'text-danger': status === 0 ? 'text-warning': 'text-success'} `}> {rejectedReason}</div>
                                                                                )}
                                                                                <img src={badgeCheck} className="mr-2" height="20" />
                                                                                <img src={ethIconSm} className="mr-2" height="20" />
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <div className="d-flex flex-column">
                                                                                <div className="">4.4 ETH</div>
                                                                                <div className="smTxt text-danger boldTxt">-13.31%</div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <div className="d-flex flex-column">
                                                                                <div className="">2.6K ETH</div>
                                                                                <div className="smTxt text-success boldTxt">+1.43%</div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }

                                                    </tbody>
                                                </table>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Collections</th>
                                                            <th className="text-right">Floor Price</th>
                                                            <th className="text-right">Volume</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="lgTxt ylwTxt altFont">1</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={heroMetaverse} className="itemIcon mr-3" />
                                                                    <h3 className="mr-2">Hero Metaverse</h3>
                                                                    <img src={bnbIconSm} className="mr-2" height="20" />
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.09 BNB</div>
                                                                    <div className="smTxt text-danger boldTxt">-0.05%</div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">6.63 BNB</div>
                                                                    <div className="smTxt text-success boldTxt">+36.17%</div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="lgTxt ylwTxt altFont">2</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={boredApe} className="itemIcon mr-3" />
                                                                    <h3 className="mr-2">Bored Ape Yacht Club</h3>
                                                                    <img src={badgeCheck} className="mr-2" height="20" />
                                                                    <img src={ethIconSm} className="mr-2" height="20" />
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.01 ETH</div>
                                                                    <div className="smTxt text-danger boldTxt">-12.78%</div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">2.6K ETH</div>
                                                                    <div className="smTxt text-success boldTxt">+586.49%</div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="lgTxt ylwTxt altFont">3</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={loadedLions} className="itemIcon mr-3" />
                                                                    <h3 className="mr-2">Loaded Lions</h3>
                                                                    <img src={badgeCheck} className="mr-2" height="20" />
                                                                    <img src={bnbIconSm} className="mr-2" height="20" />
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.57 BNB</div>
                                                                    <div className="smTxt text-success boldTxt">+1.45%</div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">264.15 BNB</div>
                                                                    <div className="smTxt text-success boldTxt">+10.18%</div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="lgTxt ylwTxt altFont">4</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={frens} className="itemIcon mr-3" />
                                                                    <h3 className="mr-2">frENS</h3>
                                                                    <img src={ethIconSm} className="mr-2" height="20" />
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.03 ETH</div>
                                                                    <div className="smTxt text-danger boldTxt">-39.11%</div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">11.87 ETH</div>
                                                                    <div className="smTxt text-success boldTxt">+23.87%</div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="lgTxt ylwTxt altFont">5</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={moonRunnersOfficial} className="itemIcon mr-3" />
                                                                    <h3 className="mr-2">Moonrunners Official</h3>
                                                                    <img src={badgeCheck} className="mr-2" height="20" />
                                                                    <img src={ethIconSm} className="mr-2" height="20" />
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.08 ETH</div>
                                                                    <div className="smTxt text-success boldTxt">+0.76%</div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">16 ETH</div>
                                                                    <div className="smTxt text-success boldTxt">+11.32%</div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="lgTxt ylwTxt altFont">6</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={mocaVerse} className="itemIcon mr-3" />
                                                                    <h3 className="mr-2">Mocaverse</h3>
                                                                    <img src={ethIconSm} className="mr-2" height="20" />
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.64 ETH</div>
                                                                    <div className="smTxt text-success boldTxt">+9.83%</div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">128.2 ETH</div>
                                                                    <div className="smTxt text-danger boldTxt">-57.21%</div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="lgTxt ylwTxt altFont">7</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={leagueOfKingdomDragon} className="itemIcon mr-3" />
                                                                    <h3 className="mr-2">League of Kingdoms D...</h3>
                                                                    <img src={bnbIconSm} className="mr-2" height="20" />
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">46.11 BNB</div>
                                                                    <div className="smTxt text-success boldTxt">+0.99%</div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">7.8K BNB</div>
                                                                    <div className="smTxt text-success boldTxt">+54.48%</div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="lgTxt ylwTxt altFont">8</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={deGods} className="itemIcon mr-3" />
                                                                    <h3 className="mr-2">De Gods</h3>
                                                                    <img src={badgeCheck} className="mr-2" height="20" />
                                                                    <img src={ethIconSm} className="mr-2" height="20" />
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">4.4 ETH</div>
                                                                    <div className="smTxt text-danger boldTxt">-13.31%</div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">2.6K ETH</div>
                                                                    <div className="smTxt text-success boldTxt">+1.43%</div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="lgTxt ylwTxt altFont">9</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={sprotoPepes} className="itemIcon mr-3" />
                                                                    <h3 className="mr-2">Sproto Pepes</h3>
                                                                    <img src={ethIconSm} className="mr-2" height="20" />
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.01 ETH</div>
                                                                    <div className="smTxt text-success boldTxt">+46.12%</div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">2.9 ETH</div>
                                                                    <div className="smTxt text-success boldTxt">+158.52%</div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="lgTxt ylwTxt altFont">10</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={remiVision} className="itemIcon mr-3" />
                                                                    <h3 className="mr-2">Remivision</h3>
                                                                    <img src={maticIconSm} className="mr-2" height="20" />
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.06 MATIC</div>
                                                                    <div className="smTxt text-success boldTxt">+0.00%</div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">5.32 MATIC</div>
                                                                    <div className="smTxt text-success boldTxt">+0.00%</div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="card my-1">
                                <div className="d-flex align-items-center mb-3">
                                    <h3 className="gradientHeading">Activity</h3>
                                    <button className="btn gradientBtn ml-auto">View All</button>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Nav tabs className="threeTab">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab2 === '1' })}
                                                onClick={() => { toggle2('1'); }}
                                            >
                                                All
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab2 === '2' })}
                                                onClick={() => { toggle2('2'); }}
                                            >Sales
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab2 === '3' })}
                                                onClick={() => { toggle2('3'); }}
                                            >Listings
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                                <div className="w-100 mt-4">
                                    <TabContent activeTab={activeTab2}>
                                        <TabPane tabId="1">
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Item</th>
                                                            <th className="text-right">Price</th>
                                                            <th className="text-right"><img src={clock} /></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={list} className="mr-2" />
                                                                    List
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={deGods} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">De Gods</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            Dope Bored Ape Bros
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.008 ETH</div>
                                                                    <div className="smTxt gryTxt">$13.71</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">22s</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={list} className="mr-2" />
                                                                    List
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={aiPfpClub} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">AI</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            AI PFP CLUB
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.009 ETH</div>
                                                                    <div className="smTxt gryTxt">$15.48</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">31s</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={cart} className="mr-2" />
                                                                    Sale
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={stonedJobs} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">#642</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            STONED JOBS
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.029 ETH</div>
                                                                    <div className="smTxt gryTxt">$49.85</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">1m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={list} className="mr-2" />
                                                                    List
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={assembler} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">The Assembler</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            Celestial Assembly x Re...
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.125 ETH</div>
                                                                    <div className="smTxt gryTxt">$215.98</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">1m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={cart} className="mr-2" />
                                                                    Sale
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={corruptions} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">0x76F</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            Corruption(s*)
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.0745 ETH</div>
                                                                    <div className="smTxt gryTxt">$128.46</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">1m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={cart} className="mr-2" />
                                                                    Sale
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={devilFrens} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">Devil Frens</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            PFP WORLD
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.005 ETH</div>
                                                                    <div className="smTxt gryTxt">$8.59</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">1m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={cart} className="mr-2" />
                                                                    Sale
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={asuki} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">Asuki #8574</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            WeAsuki
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.021 ETH</div>
                                                                    <div className="smTxt gryTxt">$34.52</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">2m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={cart} className="mr-2" />
                                                                    Sale
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={asuki1} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">Asuki #8574</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            WeAsuki
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.015 ETH</div>
                                                                    <div className="smTxt gryTxt">$34.52</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">3m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={list} className="mr-2" />
                                                                    List
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={dopeApeBros1} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">Dope Ape Bros #9...</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            Dope Ape Bros
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.015 ETH</div>
                                                                    <div className="smTxt gryTxt">$8.59</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">5m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={list} className="mr-2" />
                                                                    List
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={cryptoPankBros} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">532</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            Crypto Pank Bros
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.007 ETH</div>
                                                                    <div className="smTxt gryTxt">$12.01</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">10m</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Item</th>
                                                            <th className="text-right">Price</th>
                                                            <th className="text-right"><img src={clock} /></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={list} className="mr-2" />
                                                                    List
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={cryptoPankBros} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">532</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            Crypto Pank Bros
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.007 ETH</div>
                                                                    <div className="smTxt gryTxt">$12.01</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">10m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={list} className="mr-2" />
                                                                    List
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={dopeApeBros1} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">Dope Ape Bros #9...</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            Dope Ape Bros
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.015 ETH</div>
                                                                    <div className="smTxt gryTxt">$8.59</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">5m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={cart} className="mr-2" />
                                                                    Sale
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={asuki} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">Asuki #8574</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            WeAsuki
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.021 ETH</div>
                                                                    <div className="smTxt gryTxt">$34.52</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">2m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={cart} className="mr-2" />
                                                                    Sale
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={stonedJobs} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">#642</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            STONED JOBS
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.029 ETH</div>
                                                                    <div className="smTxt gryTxt">$49.85</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">1m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={list} className="mr-2" />
                                                                    List
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={assembler} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">The Assembler</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            Celestial Assembly x Re...
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.125 ETH</div>
                                                                    <div className="smTxt gryTxt">$215.98</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">1m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={cart} className="mr-2" />
                                                                    Sale
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={corruptions} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">0x76F</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            Corruption(s*)
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.0745 ETH</div>
                                                                    <div className="smTxt gryTxt">$128.46</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">1m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={cart} className="mr-2" />
                                                                    Sale
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={devilFrens} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">Devil Frens</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            PFP WORLD
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.005 ETH</div>
                                                                    <div className="smTxt gryTxt">$8.59</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">1m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={cart} className="mr-2" />
                                                                    Sale
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={asuki1} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">Asuki #8574</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            WeAsuki
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.015 ETH</div>
                                                                    <div className="smTxt gryTxt">$34.52</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">3m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={list} className="mr-2" />
                                                                    List
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={aiPfpClub} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">AI</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            AI PFP CLUB
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.009 ETH</div>
                                                                    <div className="smTxt gryTxt">$15.48</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">31s</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={list} className="mr-2" />
                                                                    List
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={dopeBoredApeBros} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">De Gods</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            Dope Bored Ape Bros
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.008 ETH</div>
                                                                    <div className="smTxt gryTxt">$13.71</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">22s</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Item</th>
                                                            <th className="text-right">Price</th>
                                                            <th className="text-right"><img src={clock} /></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={cart} className="mr-2" />
                                                                    Sale
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={devilFrens} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">Devil Frens</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            PFP WORLD
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.005 ETH</div>
                                                                    <div className="smTxt gryTxt">$8.59</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">1m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={cart} className="mr-2" />
                                                                    Sale
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={asuki1} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">Asuki #8574</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            WeAsuki
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.015 ETH</div>
                                                                    <div className="smTxt gryTxt">$34.52</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">3m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={list} className="mr-2" />
                                                                    List
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={cryptoPankBros} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">532</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            Crypto Pank Bros
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.007 ETH</div>
                                                                    <div className="smTxt gryTxt">$12.01</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">10m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={list} className="mr-2" />
                                                                    List
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={dopeBoredApeBros} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">De Gods</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            Dope Bored Ape Bros
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.008 ETH</div>
                                                                    <div className="smTxt gryTxt">$13.71</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">22s</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={list} className="mr-2" />
                                                                    List
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={deGods} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">De Gods</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            Dope Bored Ape Bros
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.008 ETH</div>
                                                                    <div className="smTxt gryTxt">$13.71</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">22s</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={cart} className="mr-2" />
                                                                    Sale
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={asuki} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">Asuki #8574</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            WeAsuki
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.021 ETH</div>
                                                                    <div className="smTxt gryTxt">$34.52</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">2m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={cart} className="mr-2" />
                                                                    Sale
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={stonedJobs} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">#642</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            STONED JOBS
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.029 ETH</div>
                                                                    <div className="smTxt gryTxt">$49.85</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">1m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={list} className="mr-2" />
                                                                    List
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={assembler} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">The Assembler</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            Celestial Assembly x Re...
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.125 ETH</div>
                                                                    <div className="smTxt gryTxt">$215.98</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">1m</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={list} className="mr-2" />
                                                                    List
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={aiPfpClub} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">AI</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            AI PFP CLUB
                                                                            <img src={badgeCheck} className="ml-2" height="20" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.009 ETH</div>
                                                                    <div className="smTxt gryTxt">$15.48</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">31s</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center labelCnt">
                                                                    <img src={cart} className="mr-2" />
                                                                    Sale
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={corruptions} className="itemIcon mr-3" />
                                                                    <div className="d-flex flex-column">
                                                                        <h3 className="mr-2">0x76F</h3>
                                                                        <div className="d-flex align-items-center smTxt gryTxt">
                                                                            Corruption(s*)
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="d-flex flex-column">
                                                                    <div className="">0.0745 ETH</div>
                                                                    <div className="smTxt gryTxt">$128.46</div>
                                                                </div>
                                                            </td>
                                                            <td className="gryTxt text-right">1m</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tabSliderSec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab3 === '1' })}
                                        onClick={() => { toggle3('1'); }}
                                    >
                                        All
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab3 === '2' })}
                                        onClick={() => { toggle3('2'); }}
                                    >
                                        Art
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab3 === '3' })}
                                        onClick={() => { toggle3('3'); }}
                                    >
                                        Gaming
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab3 === '4' })}
                                        onClick={() => { toggle3('4'); }}
                                    >
                                        Photography
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab3 === '5' })}
                                        onClick={() => { toggle3('5'); }}
                                    >
                                        Music
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab3 === '6' })}
                                        onClick={() => { toggle3('6'); }}
                                    >
                                        Virtual Words
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab3 === '7' })}
                                        onClick={() => { toggle3('7'); }}
                                    >
                                        PFPs
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                        <div className="col-12 mt-4">
                            <TabContent activeTab={activeTab3}>
                                <TabPane tabId="1">
                                    <Slider {...settings}>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider1} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">MintPassFactory</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>259.4K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>1.4 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider2} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Ecumenopolis by Joshua Bagl...</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>32.4 BNB</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>10.2 BNB</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider3} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">The Lonely Astronaut</h3>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>213.5K MATIC</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>14.2 MATIC</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider4} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Salt V4</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider2} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Ecumenopolis by Joshua Bagl...</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>32.4 BNB</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>10.2 BNB</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider4} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Salt V4</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Slider {...settings}>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider1} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">MintPassFactory</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>259.4K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>1.4 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider2} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Ecumenopolis by Joshua Bagl...</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>32.4 BNB</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>10.2 BNB</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider3} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">The Lonely Astronaut</h3>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>213.5K MATIC</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>14.2 MATIC</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider4} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Salt V4</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider2} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Ecumenopolis by Joshua Bagl...</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>32.4 BNB</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>10.2 BNB</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider4} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Salt V4</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Slider {...settings}>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider1} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">MintPassFactory</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>259.4K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>1.4 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider2} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Ecumenopolis by Joshua Bagl...</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>32.4 BNB</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>10.2 BNB</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider3} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">The Lonely Astronaut</h3>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>213.5K MATIC</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>14.2 MATIC</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider4} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Salt V4</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider2} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Ecumenopolis by Joshua Bagl...</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>32.4 BNB</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>10.2 BNB</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider4} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Salt V4</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </TabPane>
                                <TabPane tabId="4">
                                    <Slider {...settings}>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider1} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">MintPassFactory</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>259.4K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>1.4 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider2} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Ecumenopolis by Joshua Bagl...</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>32.4 BNB</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>10.2 BNB</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider3} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">The Lonely Astronaut</h3>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>213.5K MATIC</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>14.2 MATIC</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider4} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Salt V4</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider2} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Ecumenopolis by Joshua Bagl...</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>32.4 BNB</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>10.2 BNB</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider4} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Salt V4</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </TabPane>
                                <TabPane tabId="5">
                                    <Slider {...settings}>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider1} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">MintPassFactory</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>259.4K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>1.4 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider2} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Ecumenopolis by Joshua Bagl...</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>32.4 BNB</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>10.2 BNB</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider3} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">The Lonely Astronaut</h3>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>213.5K MATIC</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>14.2 MATIC</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider4} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Salt V4</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider2} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Ecumenopolis by Joshua Bagl...</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>32.4 BNB</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>10.2 BNB</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider4} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Salt V4</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </TabPane>
                                <TabPane tabId="6">
                                    <Slider {...settings}>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider1} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">MintPassFactory</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>259.4K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>1.4 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider2} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Ecumenopolis by Joshua Bagl...</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>32.4 BNB</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>10.2 BNB</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider3} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">The Lonely Astronaut</h3>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>213.5K MATIC</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>14.2 MATIC</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider4} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Salt V4</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider2} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Ecumenopolis by Joshua Bagl...</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>32.4 BNB</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>10.2 BNB</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider4} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Salt V4</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </TabPane>
                                <TabPane tabId="7">
                                    <Slider {...settings}>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider1} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">MintPassFactory</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>259.4K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>1.4 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider2} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Ecumenopolis by Joshua Bagl...</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>32.4 BNB</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>10.2 BNB</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider3} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">The Lonely Astronaut</h3>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>213.5K MATIC</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>14.2 MATIC</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider4} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Salt V4</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider2} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Ecumenopolis by Joshua Bagl...</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>32.4 BNB</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>10.2 BNB</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card">
                                                <img src={homeBannerSlider4} className="banner" />
                                                <div className="infoCnt">
                                                    <div className="d-flex align-items-center mb-1">
                                                        <h3 className="heading">Salt V4</h3>
                                                        <img src={badgeCheck} className="mr-2" height="20" />
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                        <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </section>

            <section className="FeaturedSec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="gradientHeading">Featured.</h3>
                        </div>
                        <div className="col-12">
                            <Slider {...settings1}>
                                <div>
                                    <div className="card">
                                        <img src={bannerSliderImage} className="banner" />
                                        <div className="infoCnt">
                                            <div className="d-flex align-items-end mb-1 infoTop">
                                                <img src={bannerItemIcon} className="profPic mr-2" />
                                                <div className="d-flex align-items-center mb-2">
                                                    <h3 className="heading">ICONS by Parker Day</h3>
                                                    <img src={badgeCheck} className="mr-2" height="20" />
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="valueCnt my-1">Volume <span>13.4K ETH</span></div>
                                                <div className="valueCnt my-1 ml-auto">Floor <span>544.2 ETH</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <img src={homeFeaturedSliderBanner2} className="banner" />
                                        <div className="infoCnt">
                                            <div className="d-flex align-items-end mb-1 infoTop">
                                                <img src={featuredPFIcon2} className="profPic mr-2" />
                                                <div className="d-flex align-items-center mb-2">
                                                    <h3 className="heading">Wreck League Majestics</h3>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="valueCnt my-1">Volume <span>263.4 ETH</span></div>
                                                <div className="valueCnt my-1 ml-auto">Floor <span>0.51 ETH</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <img src={homeFeaturedSliderBanner3} className="banner" />
                                        <div className="infoCnt">
                                            <div className="d-flex align-items-end mb-1 infoTop">
                                                <img src={featuredPFIcon3} className="profPic mr-2" />
                                                <div className="d-flex align-items-center mb-2">
                                                    <h3 className="heading">Nahemah Supernatural Beings</h3>
                                                    <img src={badgeCheck} className="mr-2" height="20" />
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="valueCnt my-1">Volume <span>0.7223 ETH</span></div>
                                                <div className="valueCnt my-1 ml-auto">Floor <span>0.001 ETH</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <img src={homeBannerSlider4} className="banner" />
                                        <div className="infoCnt">
                                            <div className="d-flex align-items-center mb-1">
                                                <h3 className="heading">Salt V4</h3>
                                                <img src={badgeCheck} className="mr-2" height="20" />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <img src={homeBannerSlider2} className="banner" />
                                        <div className="infoCnt">
                                            <div className="d-flex align-items-center mb-1">
                                                <h3 className="heading">Ecumenopolis by Joshua Bagl...</h3>
                                                <img src={badgeCheck} className="mr-2" height="20" />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="valueCnt my-1">Volume <span>32.4 BNB</span></div>
                                                <div className="valueCnt my-1 ml-auto">Floor <span>10.2 BNB</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <img src={homeBannerSlider4} className="banner" />
                                        <div className="infoCnt">
                                            <div className="d-flex align-items-center mb-1">
                                                <h3 className="heading">Salt V4</h3>
                                                <img src={badgeCheck} className="mr-2" height="20" />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className="notableSec tabSliderSec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="gradientHeading">Notable Collections.</h3>
                        </div>
                        <div className="col-12">
                            <Slider {...settings2}>
                                <div>
                                    <div className="card">
                                        <img src={homeCollectionBanner1} className="banner" />
                                        <div className="infoCnt">
                                            <div className="d-flex align-items-center mb-1">
                                                <h3 className="heading">Opepen Edition</h3>
                                                <img src={badgeCheck} className="mr-2" height="20" />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="valueCnt my-1">Volume <span>70.34 ETH</span></div>
                                                <div className="valueCnt my-1 ml-auto">Floor <span>1.4 ETH</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <img src={homeCollectionBanner2} className="banner" />
                                        <div className="infoCnt">
                                            <div className="d-flex align-items-center mb-1">
                                                <h3 className="heading">Arcus by Rik Oostenbroek</h3>
                                                <img src={badgeCheck} className="mr-2" height="20" />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="valueCnt my-1">Volume <span>369.01 ETH</span></div>
                                                <div className="valueCnt my-1 ml-auto">Floor <span>3.66 ETH</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <img src={homeCollectionBanner3} className="banner" />
                                        <div className="infoCnt">
                                            <div className="d-flex align-items-center mb-1">
                                                <h3 className="heading">Yue Minjun - Kingdom of the L...</h3>
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="valueCnt my-1">Volume <span>525.12K ETH</span></div>
                                                <div className="valueCnt my-1 ml-auto">Floor <span>0.26 ETH</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <img src={homeCollectionBanner4} className="banner" />
                                        <div className="infoCnt">
                                            <div className="d-flex align-items-center mb-1">
                                                <h3 className="heading">Terraforms by Mathcastles</h3>
                                                <img src={badgeCheck} className="mr-2" height="20" />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="valueCnt my-1">Volume <span>24.47 ETH</span></div>
                                                <div className="valueCnt my-1 ml-auto">Floor <span>1.31ETH</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <img src={homeCollectionBanner3} className="banner" />
                                        <div className="infoCnt">
                                            <div className="d-flex align-items-center mb-1">
                                                <h3 className="heading">Yue Minjun - Kingdom of the L...</h3>
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="valueCnt my-1">Volume <span>525.12K ETH</span></div>
                                                <div className="valueCnt my-1 ml-auto">Floor <span>0.26 ETH</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <img src={homeBannerSlider4} className="banner" />
                                        <div className="infoCnt">
                                            <div className="d-flex align-items-center mb-1">
                                                <h3 className="heading">Salt V4</h3>
                                                <img src={badgeCheck} className="mr-2" height="20" />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="valueCnt my-1">Volume <span>1.022K ETH</span></div>
                                                <div className="valueCnt my-1 ml-auto">Floor <span>7.5 ETH</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            {/* <Modal isOpen={modal} toggle={toggle} className="modal-dialog-centered modal-lg" modalClassName="fade disclModal">
                <div class="modal-header fliter-header">
                    <div>
                        <h2 class="mb-0 discTitle">Disclaimer</h2>
                    </div>
                    <div class="singup-close" onClick={toggle}>
                        <a href="#">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="11" r="11" fill="url(#paint0_linear_1501_302)" />
                                <path d="M7 7L15 15" stroke="black" />
                                <path d="M7 15L15 7" stroke="black" />
                                <defs>
                                    <linearGradient id="paint0_linear_1501_302" x1="10.6233" y1="2.56727"
                                        x2="30.9048" y2="27.5665" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F4C247" />
                                        <stop offset="0.23" stop-color="#EAB144" />
                                        <stop offset="0.68" stop-color="#D1843D" />
                                        <stop offset="1" stop-color="#BD6137" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="modal-body ">
                    <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions</p>
                    <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged It was popularised in the 1960s with the release </p>
                </div>
                <div className="d-flex justify-content-center CmnBtnFrSt text-center my-3">
                    <button class="btn btn-primary m-2">Accept</button>
                </div>
            </Modal> */}
        </Fragment>
    );

}

export default Home;