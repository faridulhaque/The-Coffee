import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/footer/FooterMid.module.css";
import { GlobalContext } from "@/app/layout";
import { galleryItems, navItemsAr, navItemsEn } from "@/others/constant";
import { TNavItem } from "@/others/types";

const FooterMid = () => {
  const { language } = React.useContext(GlobalContext);

  const items = language === "ENGLISH" ? navItemsEn : navItemsAr;

  return (
    <div className={styles.footerMid}>
      <div>
        {/* about coffee shop */}
        <div className={styles.aboutShop}>
          <h2>{language === "ARABIC" ? "حول المقهى" : "About Coffee Shop"}</h2>

          <div className={styles.divider}></div>
          {language === "ARABIC" ? (
            <p>
              مكان دافئ ومريح نقدّم فيه قهوة طازجة، ووجبات خفيفة لذيذة، وأجواء
              هادئة ليستمتع بها الجميع.
            </p>
          ) : (
            <p>
              A warm and welcoming spot where we serve fresh coffee, good
              treats, and a relaxed atmosphere for everyone to enjoy.
            </p>
          )}
        </div>
        {/* quick links */}
        <div className={styles.quickLinks}>
          <h2>{language === "ARABIC" ? "روابط سريعة" : "Quick Links"}</h2>

          <div className={styles.divider}></div>
          {items.map((item: TNavItem, i: number) => (
            <p key={i}>
              <span> </span>
              <Link href={item.link}>{item.title}</Link>
            </p>
          ))}
        </div>
        {/* our gallery */}
        <div className={styles.gallery}>
          <h2>{language === "ARABIC" ? "معرضنا" : "Our Gallery"}</h2>
          <div className={styles.divider}></div>
          <div>
            {galleryItems.map((img: string) => (
              <Link key={img} href={img}>
                <Image width={83} height={83} alt="cup-with-coffee" src={img} />
              </Link>
            ))}
          </div>
        </div>

        {/* contact info */}

        <div className={styles.contact}>
          <h2>{language === "ARABIC" ? "معلومات التواصل" : "Contact Info"}</h2>

          <div className={styles.divider}></div>

          {language === "ARABIC" ? (
            <>
              <p>شارع جديد، الدوحة</p>

              <p>
                نحن دائمًا سعداء بالتواصل معكم. لا تتردد في مراسلتنا أو الاتصال
                بنا لأي استفسار أو مساعدة.
              </p>

              <br />
              <br />
              <p>البريد الإلكتروني: support@thecoffee.dev</p>

              <p>الهاتف : 098765432112</p>
            </>
          ) : (
            <>
              <p>New Street, Doha</p>

              <p>
                We’re always happy to hear from you. Feel free to reach out
                anytime if you need help or have any questions.
              </p>

              <br />
              <br />
              <p>Email: support@thecoffee.dev</p>

              <p>Phone: +098765432112</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(FooterMid), { ssr: false });
