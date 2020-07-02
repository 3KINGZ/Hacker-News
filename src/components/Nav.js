import React from "react";

function Nav({ children }) {
  let items = React.Children.toArray(children);
  for (let i = items.length - 1; i >= 1; i--) {
    items.splice(i, 0, <span key={i}> | </span>);
  }
  return <span>{items}</span>;
}

export default Nav;
