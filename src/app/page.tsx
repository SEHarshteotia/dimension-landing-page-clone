"use client";
//@ts-ignore
import AOS from 'aos';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Fotter from "./Footer";
import CTA from "./CTA";

import { useEffect } from "react";
import 'aos/dist/aos.css';


function page() {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true,});
  },[]);



  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
     <CTA/>
    <Fotter/>
   
    </>
    
      
  );
   
}
export default page;
