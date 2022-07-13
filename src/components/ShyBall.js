// Media
import Ball from "../assets/ball.png";

import styles from "./ShyBall.module.css";

const ShyBall = () => {

  const moveBall = () => {

    let ball = document.querySelector("#ball");
    let top = Math.floor(Math.random() * (80) + 2);
    let left = Math.floor(Math.random() * (80) + 2);

    console.log(top, left);

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