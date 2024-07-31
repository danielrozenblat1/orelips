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
        <h1 className={styles.title}>אוראל דרי</h1>
        <h2 className={styles.subtitle}>
          𝐏𝐌𝐔 𝐄𝐗𝐏𝐄𝐑𝐓 | שפתיים | גבות
        </h2>
        <p className={styles.description}>
        הכל התחיל לפני 4 שנים, שניגשתי בעצמי לעשות טיפול שפתיים.
הגעתי לקליניקה בחיפה שאומנם בעלת שם טוב, אך החוויה הייתה פחות נעימה.
פחות הייתי מרוצה ואפילו לא ענו לי על שאלות בהמשך בנוגע להחלמה.
החלטתי לשנות את כל הגישה בעולם המיקרו פיגמנטציה! בעסק שלי אני דוגלת על מקצועיות, נקיון וליווי אישי מההתחלה ועד התוצאה הרצויה.
והיום - לאחר שנים של נסיון ומאות לקוחות אני גאה להגיד שהגעתי ליעד.
אני מזמינה אותך, לבוא אלי ולהגשים את החלום.
        </p>
      </div>
    </div>
    </>
};

export default AboutMe;