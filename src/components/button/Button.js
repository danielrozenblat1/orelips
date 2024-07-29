import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {

    const handleClick = () => {
        const phoneNumber = "+972525978933";
        // Set the message content
        const message =props.message?props.message: "היי אוראל ,אני רוצה לשמוע ממך עוד על..";
    
        // Encode the message for the URL
        const encodedMessage = encodeURIComponent(message);
        // Construct the WhatsApp message URL with phone number and message
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
        // Open the URL in a new tab
        window.open(whatsappURL, "_blank");
    
      };
  return (
    <button className={styles.button} onClick={handleClick}>
      {props.text}
    </button>
  );
};

export default Button;