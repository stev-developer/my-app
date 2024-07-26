"use client";

import { useEffect } from "react";


export default function payment() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/confetti.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleButtonClick = () => {
    if (typeof window !== "undefined") {
      import("./popperEffect").then((module) => {
        module.triggerConfetti();
      });
    }
  };

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", padding:"10px"}}>
      <button  style={{padding:"10px"}}onClick={handleButtonClick}>Click</button>
    </div>
  );
}