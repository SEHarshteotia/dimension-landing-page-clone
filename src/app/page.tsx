"use client";
//@ts-expect-error
import AOS from 'aos';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";
import CTA from "./CTA";

import { useEffect } from "react";
import 'aos/dist/aos.css';


function Page() {
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
    <Footer/>
   
    </>
    
      
  );
   
}
export default Page;
