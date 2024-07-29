import What from "../components/what/What"
import styles from "./SecondScreen.module.css"
import lips from "../Icons/wired-lineal-1597-lips.json"
const SecondScreen=()=>{


    return <>
<div className={styles.title}>אצלי תצאי בלי..</div>
<div className={styles.row}>
<What title="שפתיים עם צלקות" icon={lips}/>
<What title="שפתיים עם פיגמנטציה (נמשים/עישון)" icon={lips}/>
<What title="שפתיים כהות" icon={lips}/>
</div>
<div className={styles.row}>
<What title="שפתיים עם חוסר סימטריה" icon={lips}/>
<What title="שפתיים בהירות" icon={lips}/>
<What title="שפתיים שהמסגרת שלהן נעלמה" icon={lips}/>
</div>
    </>
}
export default SecondScreen