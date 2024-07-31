import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (

    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 2px 5px 0px #333',
          width: "100%",
          margin: "auto",
          background:"linear-gradient(120deg, #FFACAF 0%, #FFEEEF 100%);",
  
          display: "flex",
          flexDirection: "column",
          
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              padding:"5px 0",
              color: 'black', // Apply black color to content
              fontFamily: 'AssistantR',
              direction: "rtl",
              fontSize:18
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography itemProp="headline">{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply black color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'AssistantR' , fontSize:18}} itemProp="description">{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
    },[])
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
      {/* Center parent container */}
     
    <div className={styles.title} id="שאלות נפוצות" itemProp="mainEntity" itemScope itemType="https://schema.org/WebPage">שאלות נפוצות</div>
      <DropdownAccordion title="איך עובד תהליך ההחלמה של השפתיים" content="חודש ושבועיים לאחר הטיפול הראשון מגיעים לטיפול השני ובטיפול השני ניתן לראות את ההחלמה של התוצאה בטיפול הראשון
בתקופת ההחלמה שהיא בערך עד כשבוע וחצי מתום הטיפול הראשון 
השפתיים מתקלפות והפיגמנט מתקלף 
חשוב מאוד! 
לא לקלף את הפיגמנט , אלא לתת לו להתקלף לבד עם השמן קוקוס שאת מקבלת ממני בקיט ההחלמה. 
תוצאה מלאה נקבל כחודשיים לאחר הטיפול הראשון" />
      <DropdownAccordion title="למי הטיפול לא מתאים?" content="לבנות שעברו חומצה/בוטוקוס רק חודש לאחר הטיפול או לפני 
לבנות שנוטלות אנטיביוטיקה
לבנות היריוניות 
לחולות סרטן 
לחולות אפילפסיה 
לחולות מחלת העור ויטילגו" />
      <DropdownAccordion title="הטיפול כואב?" content="לא! הטיפול מעקצץ - (בכל זאת מעורבת בו מחט) :) , אבל כל המיתוס הזה סביב הכאב הוא נטו בגלל טכניקות לא נכונות של מטפלות אחרות - אם כואב סימן שהטכניקה לא טובה ושהיד לא מונחת בצורת ^90. 
או חדירת המחט עמוקה מדי ולא לשכבה הראשונה של העור (אפידרמיס)." />
     
     
    </div>
  
  );
}
