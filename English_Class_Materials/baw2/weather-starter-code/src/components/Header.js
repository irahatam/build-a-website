import React from "react";

function Header() {
  return (
    <header className="Header">
      <div>
        <h1> Title Here </h1>
      </div>
      <nav>
        <a href="/?city=#"> City 1 </a>
        <a href="/?city=#"> City 2 </a>
        <a href="/?city=#"> City 3 </a>
        <a href="/?city=#"> City 4 </a>
      </nav>
    </header>
  );
}

export default Header;
