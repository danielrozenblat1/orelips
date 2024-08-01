import styles from "./ForthScreen.module.css"
import happy from "../images/אורליפס שפתיים דוגמא.png"
import orelips from "../images/אוראל דרי.png"
import FormScreen from "../components/form/FormScreen"
const ForthScreen=(props)=>{

    return <>
    <div className={styles.title}>חשוב לי שתביני</div>
    <div className={styles.description}><strong>שפתיים הן אחד מהאיברים המושכים ביותר בגוף האישה!</strong></div>
    <div className={styles.description}>אז מדוע שתשארי עם שפתיים שאת לא שלמה איתן?</div>
    <div className={styles.description}>דמייני את עצמך קמה בבוקר, נגשת למראה ופוגשת את עצמך עם החיוך שהיית רוצה שיהיה שם, עם שפתיים מלאות וסקסיות <strong>איך זה ישפיע על האנרגיה שלך ? 
    על תחושת הביטחון ?על החיים הזוגיים שלך? על האופן שבו את מצטלמת? האופן שבו הסביבה תופסת אותך?</strong></div>
    <div className={styles.center}><img className={styles.image} src={happy} alt="מול המראה"/></div>
    <div className={styles.description}>לא מעט נשים חושבת על ביצוע התהליך כבר לא מעט זמן, חלקן אפילו כבר יודעות שהן יעברו אותו, הן החליטו שזה מגיע להן אחרי אינספור נשים שעברו אצלי תהליך של הגדרת צורת השפתיים מחדש באמצעות מחט דקיקה וצבעי פיגמנט מעולים!</div>
    <div className={styles.center}><img className={styles.image} src={orelips} alt="אוראליפס"/></div>
    <div className={styles.description}>אני יכולה להגיד בביטחון מלא ששפתיים מלאות המצויירות ביד אומנית הן סקסיות וחושניות והן גורם שמשנה חיים עבור כל אישה שבוחרת להעניק לעצמה את המתנה הזו ובוחרת להפסיק להגדיל ולצייר את השפתיים בעזרת ליפסטיק או פילטרים באינסטגרם</div>
    <div className={styles.description}><strong>היום, כבר אינך צריכה " להסתפק במה שיש ". היום את יכולה להגשים את החלום שלך ! מעוניינת לקבל עוד מידע על פיגמנט שפתיים?</strong></div>
    <FormScreen/>
    </>

}
export default ForthScreen