import styles from "./FirstScreen.module.css"
import orel from "../images/אוראליפס.png"
import Circle from "../components/circle/Circle"
import lips from "../Icons/wired-outline-1597-lips (1).json"
import teach from "../Icons/wired-outline-689-speaker-lecturer-female.json"
import eyebrow from "../Icons/wired-outline-1563-hair-clip.json"
const FirstScreen=(props)=>{
   

return <>
<div className={props.scrolled?styles.descriptionP:styles.description}>את יכולה להסתכל במראה ולראות את השפתיים שתמיד חלמת עליהן! ללא פגמים,ללא תחזוק יומי וב-0 כאב </div>

<h1 className={styles.title}>אוראליפס</h1>
<div className={styles.center}><img className={styles.image} src={orel} alt="אוראל דרעי"/></div>
<div className={styles.row}>
<Circle text="שפתיים" icon={lips}/>
<Circle text="עיצוב גבות טבעיות" icon={eyebrow}/>
<Circle text="השתלמויות שפתיים" icon={teach}/>
</div>
</>


}
export default FirstScreen