"use client";
import { GlobalContext } from "@/app/layout";
import { baseItemsAr, baseItemsEn } from "@/others/constant";
import { TBaseDetails } from "@/others/types";
import styles from "@/styles/main/BaseDetails.module.css";

import React from "react";
import BaseItemCard from "./BaseItemCard";
import Image from "next/image";

function BaseDetails() {
  const { language } = React.useContext(GlobalContext);

  const items = language === "ARABIC" ? baseItemsAr : baseItemsEn;
  return (
    <div className={styles.baseDetails}>
      <p>{language === "ARABIC" ? "القهوة تبني" : "Coffee Build"}</p>
      <h2>{language === "ARABIC" ? "قاعدتك" : "Your Base"}</h2>
      <div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          {items.slice(0, 3).map((item: TBaseDetails, i: number) => (
            <BaseItemCard key={i} item={item}></BaseItemCard>
          ))}
        </div>
        {/* this image is positionally absolute to the baseDetails section for large devices */}
        <Image
          className={styles.baseDetailsImage}
          src="/assets/base-details/base-details-bg.png"
          width={500}
          height={500}
          alt="coffee_mug"
        ></Image>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          {items.slice(3, 6).map((item: TBaseDetails, i: number) => (
            <BaseItemCard key={i} item={item}></BaseItemCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BaseDetails;
