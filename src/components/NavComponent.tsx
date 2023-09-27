import React from "react";

export const NavComponent = () => {
  return (
    <>
      <nav
        style={{
          width: "100%",
          height: "3.5em",
          display: "flex",
          justifyContent: "space-evenly",
          background: "#f9f9f9",
          paddingTop: "1.2em",
          textTransform: "uppercase"
        }}>
        <a style={{ textDecoration: "none" }} href="">
          Phone
        </a>
        <a style={{ textDecoration: "none" }} href="">
          Mail
        </a>
        <a style={{ textDecoration: "none" }} href="">
          Github
        </a>
      </nav>
    </>
  );
};
