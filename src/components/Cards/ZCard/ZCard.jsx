import React from 'react'
import styles from './styles.module.scss'
import BootStrapModal from "../../Modal";
import Image from 'next/image';
export default function ZCard() {
  return (
    <div className={styles.card_item}>
        <div className={styles.eff}>
            <div className={styles.client_image}>
            <Image src="/images/client-img.jpg" alt="" height={500} width={600}/>
            <div className={styles.yt_logo}>
                {/* <img src="/images/logo/yt.png" alt="" /> */}
            </div>
            </div>
            <h5 className={styles.user_name}>Sahil Mahajan</h5>
            <p className={styles.user_profession}>Marketing Head</p>
            <div className='d-flex justify-content-center'>
              <BootStrapModal
                title={"Youtube"}
                link={
                  "https://www.youtube.com/embed/pY3WhHALiL0?si=-Zv8ufIU5nt4M1bt?autoplay=1"
                }
              />
            </div>
        </div>
    </div>
  )
}
