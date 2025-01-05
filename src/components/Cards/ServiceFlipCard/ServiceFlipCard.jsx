import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
export default function ServiceFlipCard({serviceTitle, serviceContent, image}) {
  return (
    <div className={styles.d_card}>
        <div className={`position-relative ${styles.face} ${styles.front}`}>
          <div className={styles.card_image}>
            <Image src={image} alt='' height={500} />
          </div>
          <p className={`text-center ${styles.user_profession}`}>
            {serviceTitle}
          </p>
        </div>

        <div className={`${styles.face} ${styles.back}`}>
          <h5 className={`${styles.user_name}`}>{serviceTitle}</h5>
          <h6 className={`${styles.user_profession}`}>{serviceContent}</h6>
        </div>
      </div>
  );
}
