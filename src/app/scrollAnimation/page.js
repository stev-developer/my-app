import style from "./scrollAnimetions.module.css";
import "../globals.css";

export default function ScrollAnimetion() {
  return (
    <div className={style.box}>
      <div className={style.one}></div>
      <div className={style.container}>
        <h2>
          <span>Meet Palma</span>
        </h2>
        <p>
          <span>
            Certainly! Here's a sample paragraph with around 8 lines of dummy
            text that you can use in your Next.js application or any other
            context: At Byzo Tech Private Limited, we strive to bring innovative
            solutions to the market, ensuring that our clients always have the
            best tools at their disposal. Our team of dedicated professionals
            works tirelessly to develop cutting-edge technology that meets the
            highest standards of quality and performance. We believe in the
            power of technology to transform businesses and improve lives.
          </span>
        </p>
      </div>
      <div className={style.three}></div>
    </div>
  );
}
