import React from "react";
import Nav from "./Nav";

function NavBar() {
  return (
    <div className="nav">
      <span className="logo">Y</span>
      <span className="heading">Hacker News</span>
      <Nav>
        <span>new</span>
        <span>thread</span>
        <span>comments</span>
        <span>show</span>
        <span>ask</span>
        <span>jobs</span>
        <span>submit</span>
      </Nav>
    </div>
  );
}

export default NavBar;
