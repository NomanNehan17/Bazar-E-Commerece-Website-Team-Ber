import React from 'react';
import { logoDark, Home, deliverylogo, ContactUs, Shop, Favourites} from "../assets/index";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll'; // Import animateScroll from react-scroll
import {cart,  Blogicon } from "../assets/index";
import { useSelector } from "react-redux";
import { ToastContainer , toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Header = () => {

  const productData = useSelector((state) => state.bazar.productData);
const userInfo = useSelector((state) => state.bazar.userInfo);  
console.log(userInfo);

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
        <div>
          <img className="w-12" src={logoDark} alt="logoDark" />
        </div>
        </Link>
        <div className="flex items-center gap-8">
        <ul  className="flex items-center gap-8">
        
        <Link to={"/"}>
        <li className="text-base text-black font-bold group hover:text-orange-900
           hover:underline underline-offset-2 decoration-[1px] cursor-pointer
         duration-300 flex items-center">
        <img src={Home} alt="HomeLogo" className="w-8 h-8 mr-2 group-hover:w-10 group-hover:h-10 
        transition-all" />
          </li>
          </Link>
             
           

               <Link to="/favourites" >
             <li className="text-base text-black font-bold group hover:text-orange-900
           hover:underline underline-offset-2 decoration-[1px] cursor-pointer
         duration-300 flex items-center">
        <img src={Favourites} alt="FavouritesLogo" className="w-8 h-8 mr-2 group-hover:w-10 group-hover:h-10 
        transition-all" />
          </li>
         </Link>


                      
                          
         <ScrollLink to="Shop" smooth={true} duration={500} debug="true">
      <li className="text-base text-black font-bold group hover:text-orange-900
        hover:underline underline-offset-2 decoration-[1px] cursor-pointer
        duration-300 flex items-center">

        <img src={Shop} alt="ShopLogo" className="w-8 h-8 mr-2 group-hover:w-10 group-hover:h-10 
          transition-all" />
      </li>
    </ScrollLink>
            <ScrollLink to="footer" smooth={true} duration={500}>
            <li className="text-base text-black font-bold group hover:text-orange-900
           hover:underline underline-offset-2 decoration-[1px] cursor-pointer
         duration-300 flex items-center">
          <img src={ContactUs} alt="ContactUsLogo" className="w-8 h-8 mr-2 group-hover:w-10 group-hover:h-10 
        transition-all" />
          </li>
        </ScrollLink>
          
            
            <Link to="/blog">
           <li className="text-base text-black font-bold group hover:text-orange-900
           hover:underline underline-offset-2 decoration-[1px] cursor-pointer
         duration-300 flex items-center">
        <img src={Blogicon} alt="BlogIcon" className="w-8 h-8 mr-2 group-hover:w-10 group-hover:h-10 
        transition-all" />
   
          </li>
           </Link>



           <Link to="/free-delivery">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                <img
                  className="w-12 h-12 mx-2 transition-transform transform hover:scale-110"
                  src={deliverylogo}
                  alt="deliveryLogo"
                />
              </li>
            </Link>


                

             

        </ul>
       <Link to="/cart ">
       <div className="relative">
        <img className="w-6" src={cart} alt="cart" />
        <span className="absolute w-6 top-2 left-0 text-sm flex items-sm felx items-center justify-center font-semibold " >
          {productData.length}
          </span>
        </div>
       </Link>
        <Link to="/login">
        <img 
        className="w-8 h-8 rounded-full"
        src={
          userInfo?userInfo.image :
          "https://images.pexels.com/photos/6214477/pexels-photo-6214477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        } 
        alt="userLogo" />
        </Link>

          {
            userInfo &&
             <p className="text-base font-titleFont 
             font-semibold  underline underline-offset-2">
              {userInfo.name}
            </p>
          }

        </div>
      </div>


    </div>
  );
};

export default Header;