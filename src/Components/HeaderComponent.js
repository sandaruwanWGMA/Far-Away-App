import React from "react";
import "../Styles/HeaderComponent.css";
import Logo from "./Logo";

function HeaderComponent(props) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Monoton&family=Preahvihear&family=Roboto+Slab:wght@800&display=swap"
        rel="stylesheet"
      ></link>

      <header>
        <nav>
          <h1 className="logo">Far Away</h1>
        </nav>
      </header>
    </>
  );
}

export default HeaderComponent;
