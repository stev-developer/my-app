import styles from "./bulkOrders.module.css";
import "../globals.css";


export default function BulkOrders() {
  return (
    <div style={{ width: "100%", height: "100%", padding: "10px" }}>
      <div className={styles.header} style={{ padding: "10px" }}>
        <div style={{ padding: "10px" }}>Looking For Bulk Orders?</div>
      </div>
      <div style={{ padding: "10px" }} className={styles.img}>
        <img
          style={{ padding: "10px" }}
          src="./img.jpg"
          alt="Bulk Order"
          width="100%"
          height="450"
        />
      </div>
      <div style={{ padding: "10px" }} className={styles.content}>
        Upload your <span>Bulk Order</span>
        <br /> list and get a call back in a minute
      </div>
      <div style={{ padding: "10px" }} className={styles.container}>
        <div style={{ padding: "10px" }} className={styles.boxOne}>
          <p style={{ padding: "10px" }}>
            We prioritize quality in each of our grocery products. Just order a
            product and get it delivered at your doorstep.
          </p>
          <button style={{ padding: "10px" }}>Upload</button>
        </div>
        <div style={{ padding: "10px" }} className={styles.boxTwo}>
          <div>
            <h3 style={{ padding: "10px" }}>
              Upload your grocery photo or PDF
            </h3>
            <p style={{ padding: "10px" }}>
              Upload your grocery list photo and we'll call you back in a
              minute.
            </p>
            <div style={{ padding: "10px" }} className={styles.upload}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <img
                  src="./Groupicon.png"
                  alt="icon"
                  width="80"
                  height="80"
                  style={{ padding: "10px" }}
                />
                <span style={{ display: "block", padding:"10px" }}>Upload</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
