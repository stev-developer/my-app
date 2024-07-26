import styles from "./cartItem.module.css";

export default function CartItem() {
  return (
    <div className={styles.container}>
      <div>1 Items &#x7c; &#x20B9;50</div>
      <div className={styles.cartView}>
        <svg
          className={styles.icon}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.70591 12.5294L8.70591 8.76472C8.70591 6.68553 10.3914 5.00001 12.4706 5.00001V5.00001C14.5498 5.00001 16.2353 6.68553 16.2353 8.76472L16.2353 12.5294"
            stroke="white"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
          <path
            d="M4.6535 13.1579C4.79005 11.5194 4.85832 10.7001 5.39863 10.203C5.93895 9.70581 6.76103 9.70581 8.40521 9.70581H16.536C18.1801 9.70581 19.0022 9.70581 19.5425 10.203C20.0829 10.7001 20.1511 11.5194 20.2877 13.1579L20.7713 18.9613C20.8508 19.9152 20.8905 20.3921 20.6109 20.696C20.3313 20.9999 19.8527 20.9999 18.8954 20.9999H6.04574C5.08851 20.9999 4.6099 20.9999 4.33028 20.696C4.05065 20.3921 4.0904 19.9152 4.16989 18.9613L4.6535 13.1579Z"
            stroke="white"
            strokeWidth="1.8"
          />
        </svg>
        <span>View Cart</span>
      </div>
    </div>
  );
}
