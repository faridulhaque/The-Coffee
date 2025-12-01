import React from "react";
import ProductCard from "./ProductCard";
import { GlobalContext } from "@/app/layout";
import { productItemsAr, productItemsEn } from "@/others/constant";
import styles from "@/styles/main/Products.module.css";
import { TProduct } from "@/others/types";

function Products() {
  const { language } = React.useContext(GlobalContext);

  const items = language === "ARABIC" ? productItemsAr : productItemsEn;

  return (
    <div id="products" className={styles.products}>
      <p>{language === "ARABIC" ? "اختر منتج القهوة" : "Choose your coffee"}</p>
      <h2>{language === "ARABIC" ? " الخاص بك" : "Product"}</h2>

      <div
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        {items.map((item: TProduct, i: number) => (
          <ProductCard key={i} product={item}></ProductCard>
        ))}
      </div>
    </div>
  );
}

export default Products;
