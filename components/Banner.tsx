"use client";
import { GlobalContext } from "@/app/layout";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/styles/header/Banner.module.css";
import { bannerImages } from "@/others/constant";
import dynamic from "next/dynamic";

function Banner() {
  const value = React.useContext(GlobalContext);

  const { language } = value;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowImage(false);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % bannerImages.length);
        setShowImage(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div id="home" className={styles.banner}>
      {language === "ARABIC" ? (
        <div className={styles.textContainer}>
          <h2>مقهى</h2>
          <p>صباح بدون قهوة كنومٍ</p>
          <div>
            <button>اقرأ المزيد</button>
          </div>
        </div>
      ) : (
        <div className={styles.textContainer}>
          <h2>Coffee Shop</h2>
          <p>A morning without coffee like sleep</p>
          <div>
            <button>Read More</button>
          </div>
        </div>
      )}

      <div className={styles.imageBottom}>
        <Image
          style={{ width: "100%", height: "100%" }}
          width={800}
          height={100}
          src="/assets/header/banner-bottom.png"
          alt="bg-img"
        ></Image>
      </div>

      <div>
        {bannerImages.map((imageUrl, index) => (
          <Image
            key={imageUrl}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0",
            }}
            width={500}
            height={500}
            src={imageUrl}
            alt={`Image ${index}`}
            className={`${styles.carouselImage} ${
              index === currentIndex && showImage ? styles.fadeIn : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Banner), { ssr: false });
