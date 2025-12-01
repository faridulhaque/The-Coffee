"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Items from "./Items";
import About from "./About";
import Menu from "./Menu";
import BaseBanner from "./BaseBanner";
import BaseDetails from "./BaseDetails";
import Products from "./Products";
import Dealer from "./Dealer";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import FooterMid from "./FooterMid";
import ContactUs from "./ContactUs";

function HomeContainer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 0.75 * window.innerHeight) {
        setShowScroll(true);
      } else if (
        showScroll &&
        window.pageYOffset <= 0.75 * window.innerHeight
      ) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <main>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <section>
        <Items></Items>
        <About></About>
        <Menu></Menu>
        <BaseBanner></BaseBanner>
        <BaseDetails></BaseDetails>
        <Products></Products>
        <Dealer></Dealer>
        <ContactUs></ContactUs>
      </section>
      {/* footer tag's and the image inside it have styles in the global css file  */}
      <footer className="footer">
        <FooterTop></FooterTop>
        <FooterMid></FooterMid>
        <FooterBottom></FooterBottom>
      </footer>

      {/* <span
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className={`puller ${!showScroll ? "onTop" : "onScroll"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="chevron-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
      </span> */}
    </main>
  );
}

export default HomeContainer;
