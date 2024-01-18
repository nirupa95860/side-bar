import { Link } from 'react-router-dom'
import style from '../css/sideBar.module.css'
import logoImg from '../img/logo.svg'
import { PiFolderDuotone ,PiCaretCircleUpDown,PiBriefcaseDuotone ,PiBinocularsDuotone,PiLockKeyDuotone,PiShieldCheckDuotone,PiCubeDuotone,PiShoppingCartSimpleDuotone,PiHeadsetDuotone ,PiHammerDuotone,PiAirplaneTiltDuotone ,PiNoteBlank,PiBellRingingDuotone, PiCurrencyCircleDollarDuotone,PiGridFourDuotone,PiChartBarDuotone,PiShootingStarDuotone,PiRocketLaunchDuotone ,PiCurrencyDollarBold,PiStepsDuotone,PiCalendarPlusBold,PiCreditCardDuotone,PiDatabaseDuotone,PiLeafDuotone,PiMapPinLineDuotone,PiChartLineUpLight} from "react-icons/pi";
import { FaAngleRight , FaAngleDown } from "react-icons/fa";
import { AiTwotoneMail,AiTwotoneHome } from "react-icons/ai";
import { MdOutlineAccountCircle,MdOutlineMessage } from "react-icons/md";
import {GrDocumentLocked} from 'react-icons/gr';
import { GoPerson,GoCreditCard } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsGrid,BsCardList } from "react-icons/bs";
import { RiListOrdered2 } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CgSandClock } from "react-icons/cg";
import { useState } from 'react';

const SideBar = () => {
  
  const [link, setLink] = useState<string | null>("/");
  const [data, setData] = useState<{ [key: string]: boolean }>({
    '/commerce': false,
    '/support': false,
    '/invoice':false,
  });
  const handleClick = (link: string) => {
    setLink(link);

  }

  const ClickDropDown =(link: string)=>{
    setLink(link);
    setData((prevVisibility) => ({
      ...Object.keys(prevVisibility).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
      [link]: !prevVisibility[link],
    }));
  }
  
  return (
    <div className={style.sideBar_main}>
      <div className={style.fixLogo}>
        <Link to="/" className={style.logo}>
            <img src={logoImg} alt="logo image" />
        </Link>
        </div>
        <div className={style.bottomSide}>
        <h6>Overview</h6>
        <Link to="/" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/' ? style.active : ''}`} onClick={() => handleClick('/')}><PiFolderDuotone className={`${link === '/' ? style.active : ''} ${style.icon}`}  /> <span>File Manager</span></Link>
        <Link to="/executive" className={`${style.sidebar_main_Justi} ${link === '/executive' ? style.active:''}`} onClick={()=>handleClick('/executive')}><div className={style.sidebar_main_Link}><PiBriefcaseDuotone className={`${style.icon} ${link === '/executive' ? style.active : ''}`} /> <span>Executive</span></div><span className={style.new}>New</span></Link>
        <Link to="/financial" className={`${style.sidebar_main_Justi} ${link === '/financial'?style.active:""}`} onClick={()=>{handleClick('/financial')}}><div className={style.sidebar_main_Link} ><PiCurrencyCircleDollarDuotone className={`${style.icon} ${link === '/linancial' ? style.active:''}`} />  <span>Financial</span></div><span className={style.new}>New</span></Link>
        <Link to="/logistics" className={`${style.sidebar_main_Link} ${link === '/logistics'}`} onClick={()=>handleClick("/logistics")}><PiCubeDuotone className={`${style.icon} ${link === '/logistics'? style.active:''}`} /><span>Logistics</span></Link>
        <Link to="/ecommerce" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === "/ecommerce"?style.active:''}`} onClick={()=>{handleClick('/ecommerce')}}><PiShoppingCartSimpleDuotone className={`${style.icon} ${link === '/ecommerce' ? style.active :''}`}/> <span>E-Commerce</span></Link>
        <Link to="/analytics" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === "/analytics"?style.active:''}`} onClick={()=>handleClick("/analytics")}><PiChartBarDuotone className={`${style.icon} ${link === '/analytics' ? style.active :''}`}/> <span>Analytics</span></Link>
        <Link to="/support" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === "/support"?style.active:''}`} onClick={()=>handleClick("/support")}><PiHeadsetDuotone className={`${style.icon} ${link === '/support' ? style.active :''}`}/> <span>Support</span></Link>
        <h6 className={style.Appkit}>Apps Kit</h6>
        <Link to="/commerce" className={`${style.sidebar_main_Justi} ${link === '/commerce' ? style.active :''}`} onClick={()=>ClickDropDown("/commerce")} ><div className={style.sidebar_main_Link}><PiShoppingCartSimpleDuotone className={`${style.icon} ${link === '/commerce' ? style.active :''}`}/> <span>E-Commerce</span></div><span> {data['/commerce'] ? <FaAngleDown /> : <FaAngleRight />}</span> </Link>
        {data['/commerce'] && (
        <div>
          <Link to="/product" className={`${style.collapse} ${link === '/product' ?style.active :''}`} onClick={()=>handleClick("/product")}>Products</Link>
          <Link to="/productDetails" className={`${style.collapse} ${link === '/productDetails' ?style.active :''}`} onClick={()=>handleClick("/productDetails")}>Product Details</Link>
          <Link to="/creatProduct" className={`${style.collapse} ${link === '/creatProduct' ?style.active :''}`} onClick={()=>handleClick("/creatProduct")}>Create Product</Link>
          <Link to="/editProduct" className={`${style.collapse} ${link === '/editProduct' ?style.active :''}`} onClick={()=>handleClick("/editProduct")}>Edit Product</Link>
          <Link to="/categories" className={`${style.collapse} ${link === '/categories' ?style.active :''}`} onClick={()=>handleClick("/categories")}>Categories</Link>
          <Link to="/createCategory" className={`${style.collapse} ${link === '/createCategory' ?style.active :''}`} onClick={()=>handleClick("/createCategory")}>Create Category</Link>
          <Link to="/editCategory" className={`${style.collapse} ${link === '/editCategory' ?style.active :''}`} onClick={()=>handleClick("/editCategory")}>Edit Category</Link>
          <Link to="/reviews" className={`${style.collapse} ${link === '/reviews' ?style.active :''}`} onClick={()=>handleClick("/reviews")}>Reviews</Link>
          <Link to="/shop" className={`${style.collapse} ${link === '/shop' ?style.active :''}`} onClick={()=>handleClick("/shop")}>Shop</Link>
          <Link to="/cart" className={`${style.collapse} ${link === '/cart' ?style.active :''}`} onClick={()=>handleClick("/cart")}>Cart</Link>
          <Link to="/checkoutPayment" className={`${style.collapse} ${link === '/checkoutPayment' ?style.active :''}`} onClick={()=>handleClick("/checkoutPayment")}>Checkout & Payment</Link>
        
        </div>
      )}
       
        <Link to="/support" className={`${style.sidebar_main_Justi} ${link === '/support' ?style.active :''}`} onClick={()=>ClickDropDown("/support")}><div className={style.sidebar_main_Link}><PiHeadsetDuotone className={`${style.icon} ${link === '/support' ? style.active :''}`}/> <span>Support</span></div> <span>{data['/support'] ? <FaAngleDown /> : <FaAngleRight />}</span></Link>
        {data['/support'] && (
        <div>
         <Link to="/inbox" className={`${style.collapse} ${link === '/inbox' ?style.active :''}`} onClick={()=>handleClick("/inbox")}>Inbox</Link>
          <Link to="/snippets" className={`${style.collapse} ${link === '/snippets' ?style.active :''}`} onClick={()=>handleClick("/snippets")}>Snippets</Link>
          <Link to="/templates" className={`${style.collapse} ${link === '/templates' ?style.active :''}`} onClick={()=>handleClick("/templates")}>Templates</Link>
        </div>
      )}
        <Link to="/invoice" className={`${style.sidebar_main_Justi} ${link === '/invoice' ?style.active :''}`} onClick={()=>ClickDropDown("/invoice")}><div className={style.sidebar_main_Link}><PiCurrencyDollarBold className={`${style.icon} ${link === '/invoice' ? style.active :''}`}/> <span>Invoice</span></div> <span>{data['/invoice'] ? <FaAngleDown /> : <FaAngleRight />}</span></Link>
        {data['/invoice'] && (
        <div>
         <Link to="/list" className={`${style.collapse}${link === '/list' ?style.active :''}`} onClick={()=>handleClick("/list")}>List</Link>
          <Link to="/details" className={`${style.collapse}${link === '/details' ?style.active :''}`} onClick={()=>handleClick("/details")}>Details</Link>
          <Link to="/create" className={`${style.collapse}${link === '/create' ?style.active :''}`} onClick={()=>handleClick("/create")}>Create</Link>
          <Link to="/edit" className={`${style.collapse}${link === '/edit' ?style.active :''}`} onClick={()=>handleClick("/edit")}>Edit</Link>
        </div>
      )}
        <Link to="/logistics" className={`${style.sidebar_main_Justi} ${link === '/shipmentList' ?style.active :''}`} onClick={()=>ClickDropDown("/logistics")}><div className={style.sidebar_main_Link}><PiCubeDuotone className={`${style.icon} ${link === '/logistics' ? style.active :''}`} /><span>Logistics</span></div> <span><FaAngleRight /></span></Link>
        {data['/logistics'] && (
        <div>
         <Link to="/shipmentList" className={`${style.collapse} ${link === '/shipmentList' ?style.active :''}`} onClick={()=>handleClick("/shipmentList")}>Shipment List</Link>
          <Link to="/shipmentdetails" className={`${style.collapse} ${link === '/shipmentdetails' ?style.active :''}`} onClick={()=>handleClick("/shipmentdetails")}>Shipment Details</Link>
          <Link to="/createShipment" className={`${style.collapse} ${link === '/createShipment' ?style.active :''}`} onClick={()=>handleClick("/createShipment")}>Create Shipment</Link>
          <Link to="/Shipment" className={`${style.collapse} ${link === '/Shipment' ?style.active :''}`} onClick={()=>handleClick("/Shipment")}>Edit Shipment</Link>
          <Link to="/customerProfile" className={`${style.collapse} ${link === '/customerProfile' ?style.active :''}`} onClick={()=>handleClick("/customerProfile")}>Customer Profile</Link>
          <Link to="/tracking" className={`${style.collapse} ${link === '/tracking' ?style.active :''}`} onClick={()=>handleClick("/tracking")}>Tracking</Link>
          
        </div>
      )}
        <Link to="/fileManager" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/fileManager' ?style.active :''}`} onClick={()=>handleClick("/fileManager")}><PiFolderDuotone className={`${style.icon} ${link === '/fileManager' ? style.active :''}`} /> <span>File Manager</span></Link>
        <Link to="/eventCalendar" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/eventCalendar' ?style.active :''}`} onClick={()=>handleClick("/eventCalendar")}><PiCalendarPlusBold  className={`${style.icon} ${link === '/eventCalendar' ? style.active :''}`} /> <span>Event Calendar</span></Link>
        <Link to="/roles" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/roles' ?style.active :''}`} onClick={()=>handleClick("/roles")}><GrDocumentLocked  className={`${style.icon} ${link === '/roles' ? style.active :''}`} /> <span>Roles & Permissions</span></Link>
        <Link to="/point" className={`${style.sidebar_main_Justi} ${link === '/point' ?style.active :''}`} onClick={()=>handleClick("/point")}><div className={style.sidebar_main_Link} ><PiCreditCardDuotone className={`${style.icon} ${link === '/point' ? style.active :''}`} /> <span>Point of Sale</span></div><span className={style.update}>Update</span></Link>
        <h6 className={style.Appkit}>SEARCH & FILTERS</h6>
        <Link to="/realEstate" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/realEstate' ?style.active :''}`} onClick={()=>handleClick("/realEstate")}><AiTwotoneHome className={`${style.icon} ${link === '/realEstate' ? style.active :''}`}  /> <span>Real Estate</span></Link>
        <Link to="/flightBook" className={`${style.sidebar_main_Justi} ${link === '/flightBook' ?style.active :''}`} onClick={()=>handleClick("/flightBook")} ><div className={style.sidebar_main_Link}><PiAirplaneTiltDuotone className={`${style.icon} ${link === '/flightBook' ? style.active :''}`}/> <span>Flight Booking</span></div><span className={style.update}>Update</span></Link>
        <Link to="/nft" className={`${style.sidebar_main_Link} ${link === '/nft' ?style.active :''}`} onClick={()=>handleClick("/nft")}><PiDatabaseDuotone className={`${style.icon} ${link === '/nft' ? style.active :''}`}/> <span>NFT</span></Link>
        <h6 className={style.Appkit}>WIDGETS</h6>
        <Link to="/cards" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/cards' ? style.active :''}`} onClick={()=>handleClick("/cards")}><BsGrid className={`${style.icon} ${link === '/cards' ? style.active :''}`} /><span>Cards</span></Link>
        <Link to="/icon" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/icon' ?style.active :''}`} onClick={()=>handleClick("/icon")}><PiLeafDuotone className={`${style.icon} ${link === '/icon' ? style.active :''}`}/><span>Icons</span></Link>
        <Link to="/charts" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/charts' ?style.active :''}`} onClick={()=>handleClick("/charts")}><PiChartLineUpLight className={`${style.icon} ${link === '/charts' ? style.active :''}`} /><span>Charts</span></Link>
        <Link to="/maps" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/maps' ?style.active :''}`} onClick={()=>handleClick("/maps")}><PiMapPinLineDuotone className={`${style.icon} ${link === '/maps' ? style.active :''}`} /><span>Maps</span></Link>
        <Link to="/email" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/email' ?style.active :''}`} onClick={()=>handleClick("/email")}><AiTwotoneMail className={`${style.icon} ${link === '/email' ? style.active :''}`} /><span>Email Templates</span></Link>
        <h6 className={style.Appkit}>FORMS</h6>
        <Link to="/account" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/account' ?style.active :''}`} onClick={()=>handleClick("/account")}><MdOutlineAccountCircle className={`${style.icon} ${link === '/account' ? style.active :''}`} /><span>Account Settings</span></Link>
        <Link to="/notification" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/notification' ?style.active :''}`} onClick={()=>handleClick("/notification")}><PiBellRingingDuotone className={`${style.icon} ${link === '/notification' ? style.active :''}`} /><span>Notification Preference</span></Link>
        <Link to="/personalInfo" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/personalInfo' ?style.active :''}`} onClick={()=>handleClick("/personalInfo")}><GoPerson className={`${style.icon} ${link === '/personalInfo' ? style.active :''}`} /><span>Personal Information</span></Link>
        <Link to="/newsletter" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/newsletter' ?style.active :''}`} onClick={()=>handleClick("/newsletter")}><HiOutlineMailOpen  className={`${style.icon} ${link === '/newsletter' ? style.active :''}`} /><span>Newsletter</span></Link>
        <Link to="/multiStep" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/multiStep' ?style.active :''}`} onClick={()=>handleClick("/multiStep")}><PiStepsDuotone className={`${style.icon} ${link === '/multiStep' ? style.active :''}`}/><span>Multi Step</span></Link>
        <Link to="/payment" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/payment' ?style.active :''}`} onClick={()=>handleClick("/payment")}><PiCreditCardDuotone className={`${style.icon} ${link === '/payment' ? style.active :''}`}/><span>Payment Checkout</span></Link>
        <h6 className={style.Appkit}>TABLES</h6>
        <Link to="/basic" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/basic' ?style.active :''}`} onClick={()=>handleClick("/basic")}><PiGridFourDuotone className={`${style.icon} ${link === '/basic' ? style.active :''}`} /><span>Basic</span></Link>
        <Link to="/collapsible" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/collapsible' ?style.active :''}`} onClick={()=>handleClick("/collapsible")}><PiCaretCircleUpDown   className={`${style.icon} ${link === '/collapsible' ? style.active :''}`} /><span>Collapsible</span></Link>
        <Link to="/enhanced" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/enhanced' ?style.active :''}`} onClick={()=>handleClick("/enhanced")}><BsCardList  className={`${style.icon} ${link === '/enhanced' ? style.active :''}`} /><span>Enhanced</span></Link>
        <Link to="/stickyHeader" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/stickyHeader' ?style.active :''}`} onClick={()=>handleClick("/stickyHeader")}><GoCreditCard  className={`${style.icon} ${link === '/stickyHeader' ? style.active :''}`} /><span>Sticky Header</span></Link>
        <Link to="/pagination" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/pagination' ?style.active :''}`} onClick={()=>handleClick("/pagination")}><RiListOrdered2  className={`${style.icon} ${link === '/pagination' ? style.active :''}`} /><span>Pagination</span></Link>
        <Link to="/search" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/search' ?style.active :''}`} onClick={()=>handleClick("/search")}><CgSandClock className={`${style.icon} ${link === '/search' ? style.active :''}`} /><span>Search</span></Link>
        <h6 className={style.Appkit}>Pages</h6>
        <Link to="/profile" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/profile' ? style.active :''}`} onClick={()=>handleClick("/profile")}><IoPersonCircleOutline className={`${style.icon} ${link === '/profile' ? style.active :''}`} /><span>Profile</span></Link>
        <Link to="/welcome" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/welcome' ? style.active :''}`} onClick={()=>handleClick("/welcome")}><PiShootingStarDuotone   className={`${style.icon} ${link === '/welcome' ? style.active :''}`} /><span>Welcome</span></Link>
        <Link to="/comingSoon" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/comingSoon' ?style.active :''}`} onClick={()=>handleClick("/comingSoon")}><PiRocketLaunchDuotone   className={`${style.icon} ${link === '/comingSoon' ? style.active :''}`} /><span>Coming soon</span></Link>
        <Link to="/access" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/access' ?style.active :''}`} onClick={()=>handleClick("/access")}><GrDocumentLocked  className={`${style.icon} ${link === '/access' ? style.active :''}`} /><span>Access Denied</span></Link>
        <Link to="/notFound" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/notFound' ?style.active :''}`} onClick={()=>handleClick("/notFound")}><PiBinocularsDuotone   className={`${style.icon} ${link === '/notFound' ? style.active :''}`} /><span>Not Found</span></Link>
        <Link to="/maintenance" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/maintenance' ?style.active :''}`} onClick={()=>handleClick("/maintenance")}><PiHammerDuotone  className={`${style.icon} ${link === '/maintenance' ? style.active :''}`} /><span>Maintenance</span></Link>
        <Link to="/blank" className={`${style.sidebar_main_Link} ${style.linkInner} ${link === '/blank' ?style.active :''}`} onClick={()=>handleClick("/blank")}><PiNoteBlank className={`${style.icon} ${link === '/blank' ? style.active :''}`} /><span>Blank</span></Link>
        <h6 className={style.Appkit}>Authentication</h6>
        <Link to="/singUp" className={`${style.sidebar_main_Justi} ${link === '/singUp'? style.active : ''}`}><div className={style.sidebar_main_Link}><MdOutlineAccountCircle className={style.icon} /><span>Sign Up</span></div> <span><FaAngleRight /></span></Link>
        <Link to="/singIn" className={`${style.sidebar_main_Justi} ${link === '/singIn'? style.active : ''}`}><div className={style.sidebar_main_Link}><PiShieldCheckDuotone className={style.icon} /><span>Sign In</span></div> <span><FaAngleRight /></span></Link>
        <Link to="/forgotPass" className={`${style.sidebar_main_Justi} ${link === '/forgotPass'? style.active : ''}`}><div className={style.sidebar_main_Link}><PiLockKeyDuotone className={style.icon} /><span>Forgot Password</span></div> <span><FaAngleRight /></span></Link>
        <Link to="/optPage" className={`${style.sidebar_main_Justi} ${link === '/optPage'? style.active : ''}`}><div className={style.sidebar_main_Link}><MdOutlineMessage className={style.icon} /><span>OTP Pages</span></div> <span><FaAngleRight /></span></Link>
        </div>
    </div>
  )
}

export default SideBar