"use client";
import { useState, useEffect } from "react";
import style from "./paymentSummary.module.css";
import "../globals.css";

export default function PaymentSummary() {
  const getRandomArrivalTime = () => Math.floor(Math.random() * 11) + 40;

  const [arrivalTime, setArrivalTime] = useState(0);

  useEffect(() => {
    const time = getRandomArrivalTime();
    setArrivalTime(time);
  }, []);

  return (
    <>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.name}>
            <div className={style.order}>
              <span> &#10094;</span> Order #C4VH4H3V5JH4B
            </div>
            <div className={style.help}>
              <p>Help</p>
            </div>
          </div>
          <div className={style.box1}>
            <div className={style.time}>
              <div className={style.orderConfirmed}>
                <img src="./tick.png" alt="tick" width={60} height={60} />
                <p>Order Confirmed</p>
              </div>
              <div className={style.timeMin}>
                <p>Arriving in</p>
                <span> {arrivalTime} min<span className={style.min}>utes</span></span>
              </div>
            </div>
            <div className={style.animetion}>
              <div className={style.images}>
                <img
                  src="./p-11.png"
                  alt="Image 1"
                  width={80}
                  height={80}
                  className={`${style.image} ${style.image1}`}
                />
                <img
                  src="./p-13.png"
                  alt="Image 2"
                  width={80}
                  height={80}
                  className={`${style.image} ${style.image2}`}
                />
                <img
                  src="./p-14.png"
                  alt="Image 3"
                  width={80}
                  height={80}
                  className={`${style.image} ${style.image3}`}
                />
              </div>
              <div className={style.line}></div>
            </div>
            <div className={style.summary}>
              <div>
                <span></span>CONFIRMED
              </div>
              <div>
                <span></span>ON THE WAY
              </div>
              <div>
                <span></span>ARRIVED
              </div>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.onTime}>
            <div>On Time</div>
            <p>Your order is getting packed</p>
          </div>
          <div className={style.deliveryPartner}>
            <div className={style.avatar}>
              <img
                src="./avater.jpg"
                alt="Avatar"
                className={style.avatarImage}
              />
            </div>
            <div className={style.partnerDetails}>
              <div className={style.partnerName}>
                Hi, I'm Stephen <span>(Delivery partner)</span>
              </div>
              <div className={style.vaccinated}>
                <p>Vaccinated</p>
              </div>
            </div>
          </div>
          <div className={style.safe}>
            <p>Helping delivery paetners stay safe</p>
            <span>Know More &#10095;</span>
          </div>
          <div className={style.add}>
            <div className={style.ad}>
              <div>
                <p>Order faster & easier everytime</p>
                <span>with the Byzo App</span>
              </div>
              <div>
                <img />
              </div>
            </div>
            <div className={style.button}>
              <span>Get the Byzo App</span>
            </div>
          </div>
          <div className={style.orderDetails}>
            <div className={style.items}>
              <img
                src="./shoping1.png"
                alt="Order Item"
                className={style.orderImage}
              />
              <p>
                1 Items <span className={style.dots}></span>{" "}
                <span>
                  &#8377; 324.00 <span className={style.saved}>saved</span>
                </span>
              </p>
            </div>
            <div className={style.detail}>Order Details &#10095;</div>
          </div>
          <div className={style.address}>
            <img src="./location.png" alt="Location Icon" />
            <div className={style.addressDetails}>
              <p>
                Delivering To:{" "}
                <span>
                  something 11/32,East st,vdhdbdbdbdbdbdbdbdggrtyrthrtyrtyrty
                </span>
              </p>
            </div>
          </div>
          <div className={style.total}>
            <p>Total Amount: &#8377;106.94</p>
            <button>View Order Details</button>
          </div>
        </div>
        <div className={style.footer}>
          <div className={style.footer1}></div>
          <div className={style.footer2}>
            <div>
              <h3>Track Your Order</h3>
              <p>Download iOS or Andriod app to track your live order</p>
            </div>
            <div className={style.appButtons}>
              <img
                src="./app5.png"
                alt="Apple Store"
                className={style.appIcon}
                width={190}
                height={80}
              />

              <img
                src="./play2.png"
                alt="Google Play Store"
                className={style.appIcon}
                width={190}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
