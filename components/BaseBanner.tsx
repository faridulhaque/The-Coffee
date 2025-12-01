import React from "react";
import styles from "@/styles/main/BaseBanner.module.css";
import Image from "next/image";
import { GlobalContext } from "@/app/layout";

export default function BaseBanner() {
  const { language } = React.useContext(GlobalContext);

  return (
    <div className={styles.baseBanner}>
      {/* green part */}
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
        <Image
          src="/assets/base-banner/flavor.png"
          height={250}
          width={250}
          alt="item"
        ></Image>
        <h1>{language !== "ARABIC" ? "Special" : "نكهات "}</h1>
        <p>{language !== "ARABIC" ? "Flavors" : "خاصة "}</p>
      </div>

      {/* brown part */}

      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className={styles.brownPart}
      >
        <h5>{language !== "ARABIC" ? "Strong" : "قهوة"}</h5>
        <Image
          src="/assets/base-banner/coffee.png"
          height={250}
          width={250}
          alt="item"
        ></Image>
        <h1>{language !== "ARABIC" ? "Coffee" : "قويّ"}</h1>
        <p>{language !== "ARABIC" ? "Order Now!" : "اطلب الآن!"}</p>

        <div className={styles.brownPartTop}></div>
        <div className={styles.brownPartLeft}></div>
        <div className={styles.brownPartRight}></div>
        <Image
          className={styles.brownCoffee}
          src='/assets/svg/logo-brown.svg'
          height={250}
          width={250}
          alt="coffee"
        ></Image>
      </div>

      {/* yellow part */}
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <Image
          src="/assets/base-banner/flavor.png"
          height={250}
          width={250}
          alt="item"
        ></Image>
        <h1>{language !== "ARABIC" ? "Cookie" : "كوكيز  "}</h1>
        <p>{language !== "ARABIC" ? "& More" : "وأكثر "}</p>
      </div>
    </div>
  );
}
