import React, { useState, useRef } from "react";
import { ImGithub } from "react-icons/im";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { logoLight, paymentLogo } from "../assets";
import emailjs from '@emailjs/browser';
// import './Footer.CSS';

const Footer = () => {

  const form = useRef();
  const SERVICE_ID = 'service_2l81t59'
  const TEMPLATE_ID = 'template_41pvklg'
  const PUBLIC_KEY = '2L4M2qkbNJ8NpHjBF'

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text)
        document.getElementById("form").reset();
      }, (error) => {
        console.error('Failed to send message:', error.text);
      });
  };

  return (
    <div id="footer" className="bg-blue-800 text-white py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-8">
        {/* LogoIcon Start here */}
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logoLight} alt="logoLight" />
          <p className="text-white text-sm tracking-wide">© MindBendersTeam.com</p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>

        {/* LocateUs Start here */}
        <div>
          <h2 className="text-2xl font-semibold mb-4"> Locate us </h2>
          <div className="text-base flex flex-col gap-2">
            <p>IIUC, Kumira, Chattogram-Bangladesh</p>
            <p>phone: 01748595454</p>
            <p>phone: 01830065110</p>
            <p>e-mail: nomanrooks@gmail.com</p>
          </div>
        </div>

        {/* Profile Start here */}
        <div>
          <h2 className="text-2xl font-semibold mb-4"> Profile </h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>

        {/* Contact Me Start here */}
        <div className="text-white">
          <h2 className="text-2xl font-semibold mb-4"> Contact Me </h2>
          <div className="flex flex-col gap-4">
            <form ref={form} onSubmit={sendEmail} id="form">
              <input
                className="bg-transparent border-b border-white px-4 py-2 text-sm text-white w-full"
                placeholder="Your Name"
                type="text"
                name="name"
                required
              />
              <input
                className="bg-transparent border-b border-white px-4 py-2 text-sm text-white w-full"
                placeholder="Your Email"
                type="email"
                name="email"
                required
              />
              <textarea
                className="bg-transparent border-b border-white px-4 py-2 text-sm text-white w-full"
                placeholder="Your Message"
                name="message"
                required
              ></textarea>
              <button
                type="submit" value="Send"
                className="bg-white text-black py-2 px-4 rounded-full text-sm hover:bg-gray-900 transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>


        {/* Embedded Google Map */}
        <div style={{ margin: '20px 0' }}>
          <iframe
            src="https://mapcarta.com/W276731950/Map"
            width="430%"
            height="260"
            frameBorder="0"
            style={{ border: 0, margin: 'auto', display: 'block' }}
            allowFullScreen=""
            title="IIUC,Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;


{/* <form ref={form} onSubmit={sendEmail} style={{ display: 'inline-grid' }}>
<input
  className="bg-transparent border px-4 py-2 text-sm"
  placeholder="e-mail"
  type="email"
  name="user_email"
/>
<button type="submit" value="Subscribe" className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
  Subscribe
</button>
</form> */}