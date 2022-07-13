// React Hooks
import { useState } from 'react';

// Styles
import styles from "./Clock.module.css";

const Clock = () => {

  // Defino o state inicial de "time" como uma string vazia.
  const [time, setTime] = useState('');

  // A cada segundo, a função abaixo atualizará o state de "time", com base na hora corrente.
  setInterval(() => {
    let date = new Date();
    let nowTime = date.toLocaleTimeString('pt-BR');
    setTime(nowTime);
  }, 1000);

  return (
    <div className={styles.clock}>
      {/* Abaixo o valor de state será renderizado, conforme for atualizado. Caso haja algum delay no carregamento, será mostrado um parágrafo com o texto "Carregando" */}
      {time ? (<h2>{time}</h2>) : (<h2>Carregando...</h2>)}
    </div>
  );
};

export default Clock;