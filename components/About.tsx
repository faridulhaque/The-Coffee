"use client";
import React, { useContext } from "react";
import { GlobalContext } from "@/app/layout";
import styles from "@/styles/main/About.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";

function About() {
  const { language } = useContext(GlobalContext);
  return (
    <div id="about" className={styles.about}>
      <div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className={`${styles.textContainer} ${
            language === "ARABIC" ? styles.arabicView : ""
          }`}
        >
          {language === "ARABIC" ? (
            <>
              <p>بضعة كلمات</p>
              <h1>عن المقهى</h1>
              <p>
                {" "}
                نقدّم قهوة جيدة تُحضَّر طازجة كل يوم. لا شيء مُبالغ فيه، فقط
                حبوب عالية الجودة، وخدمة دافئة، ومساحة مريحة يشعر فيها أي شخص
                كأنه في منزله. مرّ بنا، اجلس قليلًا، واستمتع بفنجان مصنوع بكل
                محبة.
              </p>
            </>
          ) : (
            <>
              <p>Few words</p>
              <h1>About Cafe</h1>
              <p>
                We serve good coffee, made fresh every day. Nothing fancy, just
                quality beans, warm service, and a comfortable space where
                anyone can feel at home. Stop by, take a seat, and enjoy a cup
                that’s made with heart.
              </p>
            </>
          )}
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/assets/about/about.jpg"
            alt="coffee_mug"
            className={styles.aboutImage}
            width={800}
            height={500}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(About), { ssr: false });
