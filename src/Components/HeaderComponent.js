import React from "react";
import "../Styles/HeaderComponent.css";

function HeaderComponent(props) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Monoton&family=Preahvihear&family=Roboto+Slab:wght@800&display=swap"
        rel="stylesheet"
      ></link>

      <header>
        <h1 className="logo">Far Away</h1>
      </header>
    </>
  );
}

export default HeaderComponent;
