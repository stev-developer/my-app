"use client";


import styles from "../payment/payment.module.css";
import "../globals.css";

export default function payment() {
 

  return (
    <>
      <div className={styles.container} style={{ padding: "10px" }}>
        <img
          src="./tick.png"
          width={80}
          height={80}
          style={{ padding: "10px" }}
        />
        <h1 style={{padding:"10px"}} >
          Payment Successful
        </h1>
        <div className={styles.texts} style={{ padding: "10px" }}>
          <p className={styles.p} style={{ padding: "10px" }}>
            Your payment has been successfully processed.
          </p>
          <p style={{ padding: "10px" }}>
            Your order will be delivered shortly.
          </p>
        </div>
        <a href={"/"} className={styles.home} style={{ padding: "10px" }}>
          Go back to Home <span style={{ padding: "10px" }}>&#10095;</span>
        </a>
        <div className={styles.QR} style={{ padding: "10px" }}>
          <img
            src="./QR code.png"
            alt="byzo.in"
            width={100}
            height={100}
            style={{ padding: "10px" }}
          />
          <h1 style={{ padding: "10px" }}>
            Download our app for the <br /> best user expeience
          </h1>
        </div>
        <div class={styles.flex} style={{ padding: "10px" }}>
          <img
            className={styles.apple}
            src="./apple.png"
            width={200}
            height={90}
            style={{ padding: "10px" }}
          />

          <img
            className={styles.google}
            src="./play2.png"
            width={200}
            height={190}
            style={{ padding: "10px" }}
          />
        </div>
      </div>
    </>
  );
}
