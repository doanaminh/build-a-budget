import "./Navbar.css";
import HamburgerMenu from "./HamburgerMenu";

export default function () {
  return (
    <>
      <div className="Navbar">
        <div className="navItems">
          <h2 className="item-a">
            <a href="/" className="asdf">
              <span>BaB</span>
            </a>
          </h2>
          <ul className="navLinks">
            <li>
              <a href="/calculator">Calculator</a>
            </li>
            <li>
              <a href="/learn">Learn</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/glossary">Glossary</a>
            </li>
          </ul>
        </div>
        <HamburgerMenu />
      </div>
    </>
  );
}
