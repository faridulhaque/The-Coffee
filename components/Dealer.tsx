import React from "react";
import styles from "@/styles/main/Dealer.module.css";
import { GlobalContext } from "@/app/layout";
import Image from "next/image";

function Dealer() {
  const { language } = React.useContext(GlobalContext);

  return (
    <div className={styles.testimonials}>
      <div>
        {/* here the first-of-type of testimonials started */}
        <div>
          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className={styles.textContainer}
          >
            {language === "ARABIC" ? (
              <>
                <p className="arabic-text">أكثر من</p>
                <h1 className="arabic-text">999+</h1>
                <h2 className="arabic-text">
                  العملاء <br /> يثقون بنا
                </h2>
              </>
            ) : (
              <>
                <p>More than</p>
                <h1>999+</h1>
                <h2>
                  Customers <br /> Trust Us
                </h2>
              </>
            )}
          </div>

          <div className={styles.imageContainer}>
            <Image
              className={styles.testimonialImage}
              width={350}
              height={350}
              alt="coffee_cup"
              src='/assets/dealer/dealer.png'
            ></Image>
          </div>
        </div>

        {/* this div is for the dealer part */}
        {language === "ARABIC" ? (
          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className={language === "ARABIC" ? "arabic-element" : ""}
          >
            <p>كن</p>
            <h1>وكيلنا</h1>
            <p>
              سيدي العزيز، إذا كنت ترغب في الانضمام إلينا كوكيل، فالرجاء ملء
              النموذج المرفق وسيتصل بك أحد ممثلي المبيعات لدينا في أقرب وقت
              ممكن.
            </p>
            <div className={styles.buttonContainer}>
              <button>كن وكيلاً</button>

              <button>اتصل بنا</button>
            </div>
          </div>
        ) : (
          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p>Become</p>
            <h1>Our Dealer</h1>
            <p>
              Sed a dui at sapien porttitor placer pendssee rutrumor efficitur
              nibh condimentum aci Nam lorem libero, impimat, fermentumy
              vehicula nulla. Aenean gravida lnon lorem egesta tristque extin.
              Morbiat libero eleifematae vitae, lacnelis.
            </p>
            <div className={styles.buttonContainer}>
              <button>Become a dealer</button>

              <button>Contact Us</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dealer;
