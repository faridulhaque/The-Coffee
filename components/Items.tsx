"use client";
import { GlobalContext } from "@/app/layout";
import { itemCardItemsAr, itemCardItemsEn } from "@/others/constant";
import React from "react";
import styles from "@/styles/main/Items.module.css";
import ItemCard from "./ItemCard";
import { TypeItem } from "@/others/types";
import dynamic from "next/dynamic";

function Items() {
  const { language } = React.useContext(GlobalContext);

  const cardItems =
    language === "ENGLISH"
      ? itemCardItemsEn
      : itemCardItemsAr.slice().reverse();

  return (
    <div
      className={styles.items}
      // data-aos="zoom-in"
    >
      {cardItems.map((item: TypeItem, i: number) => (
        <ItemCard key={i} item={item} index={i}></ItemCard>
      ))}
    </div>
  );
}

export default dynamic(() => Promise.resolve(Items), { ssr: false });
