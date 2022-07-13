// React Hooks
import { useState } from 'react';

// Styles
import styles from "./Clock.module.css";

const Clock = () => {

  const [time, setTime] = useState('');

  setInterval(() => {
    let date = new Date();
    let nowTime = date.toLocaleTimeString('pt-BR');
    setTime(nowTime);
  }, 1000);

  return (
    <div className={styles.clock}>
      {time ? (<h2>{time}</h2>) : (<h2>Carregando...</h2>)}
    </div>
  );
};

export default Clock;