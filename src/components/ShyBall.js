// Media
import Ball from "../assets/ball.png";

// Styles
import styles from "./ShyBall.module.css";

const ShyBall = () => {

  // Função que move a bola na tela
  const moveBall = () => {

    // Seleção da div que contém a imagem da bola
    let ball = document.querySelector("#ball");
    
    // Definição de valores aletórios para mover a bola
    let top = Math.floor(Math.random() * (80) + 2);
    let left = Math.floor(Math.random() * (80) + 2);

    // Atribuição de estilo dinâmico, com base nos valores aletórios gerados
    ball.style.top = `${top}%`
    ball.style.left = `${left}%`

  };

  return (
    <div className={styles.shy_ball}>
      <div className={styles.ball} id="ball" onMouseOver={() => moveBall()}>
        <img src={Ball} alt="Geopixel Ball" />
      </div>
    </div>
  );
};

export default ShyBall;