import React, { useEffect } from 'react';
import styles from './Silabus.module.css';
import logo from "../../images/אוראל דרעי לוגו.png"
import ScrollReveal from 'scrollreveal';
const Sillabus = () => {

  useEffect(()=>{
    ScrollReveal().reveal(`.${styles.bulletPointItem}`, {
        duration: 1000,
        distance: "60px",
        origin: "top", // Start from the right side
        easing: "ease-out",
        reset:false,
        viewFactor: 0.2,
        interval: 300, // Delay between each element
        delay: 200, // Delay before the animation starts
        scale: 1, // Set scale to 1 or null
      });
      ScrollReveal().reveal(`.${styles.scheduleItem}`, {
        duration: 1000,
        distance: "60px",
        origin: "top", // Start from the right side
        easing: "ease-out",
        reset:false,
        viewFactor: 0.2,
        interval: 300, // Delay between each element
        delay: 200, // Delay before the animation starts
        scale: 1, // Set scale to 1 or null
      });
      ScrollReveal().reveal(`.${styles.benefitItem}`, {
        duration: 1000,
        distance: "60px",
        origin: "top", // Start from the right side
        easing: "ease-out",
        reset:false,
        viewFactor: 0.2,
        interval: 300, // Delay between each element
        delay: 200, // Delay before the animation starts
        scale: 1, // Set scale to 1 or null
      });
  },[])
  return <>
    <div className={styles.intro} id="הסילבוס המלא">רוצה להפוך להכי טובה בתחום?</div>
    <div className={styles.header}>סילבוס השתלמויות</div>
    <div className={styles.syllabus}>
      <div className={styles.logo}>
        <img src={logo} alt="אוראל דרעי לוגו" />
      </div>
      <h1 className={styles.subtitle}>סילבוס השתלמות למקצועיות</h1>
      <div className={styles.description}>
        <p> ההשתלמות היא יום אחד ממוקד שבו נעבוד על:</p>
      </div>
      <div className={styles.content}>
        <div className={styles.bulletPoints}>
          <div className={styles.bulletPointItem}>
            <span className={styles.vIcon}>✓</span>
            <span>טכניקה וזוית נכונה של היד (90)</span>
          </div>
          <div className={styles.bulletPointItem}>
            <span className={styles.vIcon}>✓</span>
            <span>בניית סקיצה ושרטוט בדרך הקלה והנכונה ביותר</span>
          </div>
          <div className={styles.bulletPointItem}>
            <span className={styles.vIcon}>✓</span>
            <span>איך לנטרל שפתיים כהות</span>
          </div>
          <div className={styles.bulletPointItem}>
            <span className={styles.vIcon}>✓</span>
            <span>שימוש נכון במומרים "פיגמנטים מאלחשים" מחטים</span>
          </div>
          <div className={styles.bulletPointItem}>
            <span className={styles.vIcon}>✓</span>
            <span>איך להמנע מפציעות מיותרות והחלמה יפה ואחידה כבר בטיפול בראשון</span>
          </div>
          <div className={styles.bulletPointItem}>
            <span className={styles.vIcon}>✓</span>
            <span>איך ליצור מראה פיקסלים אחיד ואוורירי (השיטה האוקראינית)</span>
          </div>
          <div className={styles.bulletPointItem}>
            <span className={styles.vIcon}>✓</span>
            <span>צילום נכון של הלקוחה ושימוש באפליקציות עריכה כדי להוציא את התמונה הטובה ביותר</span>
          </div>
          <div className={styles.bulletPointItem}>
            <span className={styles.vIcon}>✓</span>
            <span>תרגול על לטקס</span>
          </div>
          <div className={styles.bulletPointItem}>
            <span className={styles.vIcon}>✓</span>
            <span>יציבות היד</span>
          </div>
          <div className={styles.bulletPointItem}>
            <span className={styles.vIcon}>✓</span>
            <span>אחיזה נכונה ודיוק מקסימלי לתוצאות המושלמות והחלמות אחידות </span>
          </div>
        </div>
        <div className={styles.text}>
          <h2 className={styles.subtitle}>איך יעבור היום?</h2>
          <div className={styles.schedule}>
            <div className={styles.scheduleItem}>
              <span className={styles.time}>9:00-9:30</span>
              <span>קבלת פנים עם יין וכיבוד קל</span>
            </div>
            <div className={styles.scheduleItem}>
              <span className={styles.time}>9:30-11:30</span>
              <span>עוברות על חוברת הלמידה</span>
            </div>
            <div className={styles.scheduleItem}>
              <span className={styles.time}>11:30-12:30</span>
              <span>תרגול מעשי - יציבות היד , קווי מתאר ודיוק</span>
            </div>
            <div className={styles.scheduleItem}>
              <span className={styles.time}>12:30-13:30</span>
              <span>שיעור שיווק</span>
            </div>
            <div className={styles.scheduleItem}>
              <span className={styles.time}>13:30-14:00</span>
              <span>הפסקת אוכל</span>
            </div>
            <div className={styles.scheduleItem}>
              <span className={styles.time}>12:00-17:00</span>
              <span>מודליסטית</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.benefits}>
        <h2 className={styles.subtitle}>בסוף ההשתלמות תקבלי</h2>
        <div className={styles.benefitsList}>
          <div className={styles.benefitItem}>
            <span className={styles.vIcon}>✓</span>
            <span>תעודת השתתפות מקצועית</span>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.vIcon}>✓</span>
            <span>חוברת הדרכה מפורטת</span>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.vIcon}>✓</span>
            <span>ערכת כלים בסיסית</span>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.vIcon}>✓</span>
            <span>גישה לקבוצת תמיכה מקצועית</span>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.vIcon}>✓</span>
            <span>הנחה על קורסים עתידיים</span>
          </div>
        </div>
      </div>
    </div>
  </>
};

export default Sillabus;