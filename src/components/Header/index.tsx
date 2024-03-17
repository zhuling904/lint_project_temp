import React from "react";

function Header() {
  const add = () => {
    console.log("zhuling ======>");
  };
  add();
  return (
    <div className="header">
      <span>我是header</span>
    </div>
  );
}

export default Header;
