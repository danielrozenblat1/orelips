import LessonBubble from "../components/steps/Step"
import styles from "./ThirdScreen.module.css"

const ThirdScreen=()=>{
 

return <>
<div className={styles.title}>איך הקסם קורה?</div>
<div className={styles.description}>יש שתי שיטות עיקריות שהופכות את השפתיים שלך למושלמות!</div>
<div className={styles.row}>
<LessonBubble title="שיטת האודם" description="שיטה שהפיקסלים הרבה יותר צפופים ונותן מראה יותר מודגש ואחיד. 
ובגלל זה היא נקראת שיטת האודם"/>
<LessonBubble title="שיטת האקוורל" description="שיטה שהפיקסלים מאווררים ובכך השיטה היא יותר עדינה ובכך הפיגמנט נראה יותר אוורירי ויותר עדין בצבע (שיטה זו בדרך כלל הינה צבעים בהירים כגון ניודים, ורוד ואפרסק)"/>
</div>
</>


}
export default ThirdScreen