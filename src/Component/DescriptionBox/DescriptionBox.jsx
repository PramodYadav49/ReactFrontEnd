import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
       <p> E-commerce is a powerful means to connect the unconnected to global
        trade. ... E-commerce is not an industry; e-commerce is a tactic. ... My
        vision is to build an e-commerce ecosystem that allows consumers and
        businesses to do all aspects of business online.</p>
        <p>
        E-commerce is a powerful means to connect the unconnected to global
        trade. ... E-commerce is not an industry; e-commerce is a tactic. ... My
       </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
