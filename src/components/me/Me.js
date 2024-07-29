import React from 'react';
import styles from './Me.module.css';
import orel from "../../images/אוראל דרעי.png"
const AboutMe = () => {
  return <>
      <div className={styles.header} id="קצת עלי">קצת עלי</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={orel} alt="אוראל דרעי" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>אוראל דרעי</h1>
        <h2 className={styles.subtitle}>
          𝐏𝐌𝐔 𝐄𝐗𝐏𝐄𝐑𝐓 | שפתיים | גבות
        </h2>
        <p className={styles.description}>
          כבר מגיל קטן התאהבתי בתחום וידעתי שאני אעסוק בו!
          והיום, כשהגשמתי את החלום והפכתי מאות בחורות למאושרות
          אני בטוחה שהייעוד שלי זה למקצע אתכן בתחום!
        </p>
      </div>
    </div>
    </>
};

export default AboutMe;