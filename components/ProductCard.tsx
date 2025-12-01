import React from "react";
import styles from "@/styles/main/Products.module.css";
import Image from "next/image";
import { TProduct } from "@/others/types";
type TProductCardComponent = {
  product: TProduct;
};
function ProductCard({ product }: TProductCardComponent) {
  return (
    <div className={styles.productCard}>
      <Image
        className={styles.productCartImage}
        width={200}
        height={200}
        src="/assets/product/product.jpg"
        alt=""
      />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default ProductCard;
