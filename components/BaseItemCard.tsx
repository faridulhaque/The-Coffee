"use client";
import React from "react";
import styles from "@/styles/main/BaseDetails.module.css";
import Image from "next/image";
import { TBaseDetails } from "@/others/types";

type TBaseItemCardComponent = {
  item: TBaseDetails;
};

function BaseItemCard({ item }: TBaseItemCardComponent) {
  return (
    <div className={styles.baseItemCard}>
      <div>
        <h2>{item.title}</h2>
        <p>{item.des}</p>
      </div>
      <Image
        className={styles.baseItemCardImage}
        src={item.img}
        width={60}
        height={60}
        alt="hello"
      ></Image>
    </div>
  );
}

export default BaseItemCard;
