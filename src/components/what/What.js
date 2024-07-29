import React, { useRef, useEffect } from 'react';
import styles from './What.module.css';
import { Player } from '@lordicon/react';

const What = (props) => {
    const playerRef1 = useRef(null);

    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
    };

    useEffect(() => {
      playerRef1?.current?.playFromBeginning();
    }, []);
    
    return (
        <div className={styles.container}>
            <div className={styles.circle}>
                <div className={styles.icon}>
                    <Player 
                        icon={props.icon} 
                        ref={playerRef1} 
                        size="100%" 
                        loop={true} 
                        onComplete={handleComplete}
                    />
                </div>
            </div>
          <h2 className={styles.title}>{props.title}</h2>
        </div>
    );
};

export default What;