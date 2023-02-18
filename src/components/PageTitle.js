import React from "react";
import "../styles/header.css";

function PageTitle({ text, subText }) {
  return (
    <div className="titleSection">
      <div className="title">{text}</div>
      <div className="subTitle">{subText}</div>
    </div>
  );
}

export default PageTitle;
