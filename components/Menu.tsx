"use client";
import { GlobalContext } from "@/app/layout";
import { menuItemsAr, menuItemsEn } from "@/others/constant";
import { TMenuItems } from "@/others/types";
import React from "react";
import styles from "@/styles/main/Menu.module.css";
import MenuCard from "./MenuCard";
import dynamic from "next/dynamic";

function Menu() {
  const { language } = React.useContext(GlobalContext);

  const [items, setItems] = React.useState<TMenuItems[]>([]);

  React.useEffect(() => {
    const updatedItems = language === "ARABIC" ? menuItemsAr : menuItemsEn;
    setItems(updatedItems);
  }, [language]);

  return (
    <div id="menu" className={styles.menu}>
      <p>{language === "ARABIC" ? "استكشف ما لدينا" : "Explore our"}</p>
      <h2>{language === "ARABIC" ? "القائمة" : "Menu"}</h2>
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        {items.map((item: TMenuItems, i: number) => (
          <MenuCard key={i} item={item}></MenuCard>
        ))}
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Menu), { ssr: false });
