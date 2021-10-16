import React from "react";
import Heading from "./Header.css";

export default function Header() {
  return (
    <div className="headre-container">
      <img
        src="https://static.wixstatic.com/media/693073_ee31d3dcd4064037a097ec905d0c841b~mv2.jpg/v1/fill/w_125,h_100,al_c,q_80,usm_0.66_1.00_0.01/pp_edited.webp"
        alt="pp_edited.jpg"
        style={{
          border: "1px solid red",
          width: "100px",
          margin: "10px",
          height: "80px",
          objectFit: "cover",
          objectPosition: "50% 50%",
        }}
      ></img>
      <div style={{ flex: "1" }}>
        <div className="heading">
          <span style={{ color: "#000000" }}>T</span>
          <span style={{ color: "#E81038" }}>he</span>
        </div>
        <div className="heading">
          <span style={{ color: "#000000" }}>E</span>
          <span style={{ color: "#E81038" }}>ntrepreneurship</span>
        </div>
        <div className="heading">
          <span style={{ color: "#000000" }}>N</span>
          <span style={{ color: "#E81038" }}>etwork</span>
        </div>
      </div>
      <div className="head-comp-cart">
        <div className="cart-logo">
          <img alt="cart" />
          <div className="loin-btn">Login</div>
        </div>
        <div className="head-comp-search">sreaRCH</div>
      </div>
    </div>
  );
}
