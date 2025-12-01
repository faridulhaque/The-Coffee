import Image from "next/image";
import React from "react";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
import { GlobalContext } from "@/app/layout";
import styles from "@/styles/main/ContactUs.module.css";

const ContactUs = () => {
  const { language } = React.useContext(GlobalContext);

  return (
    <div id="contact" className={styles.contactUs}>
      <Image
        className={styles.contactUsImage}
        alt="bg-image"
        width={500}
        height={500}
        src={"/assets/contact/contact.jpg"}
      ></Image>
      <form
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <h2>{language === "ARABIC" ? "اتصل بنا" : "Contact Us"}</h2>
        <div>
          <input
            placeholder={language === "ARABIC" ? "اسم" : "NAME"}
            type="text"
            name="fullName"
          />
        </div>
        <div>
          <input
            placeholder={language === "ARABIC" ? "البريد الإلكتروني" : "EMAIL"}
            type="text"
            name="email"
          />
        </div>
        <div>
          <textarea
            placeholder={language === "ARABIC" ? " رسالتك" : "YOUR MESSAGE"}
            name="message"
          />
        </div>
        <button>{language !== "ARABIC" ? "SUBMIT" : "إرسال"}</button>
      </form>
      <Image
        className={styles.contactUsImage}
        alt="bg-image"
        width={500}
        height={500}
        src={"/assets/contact/contact.jpg"}
      ></Image>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ContactUs), { ssr: false });
