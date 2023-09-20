import "./Navbar.css";
import HamburgerMenu from "./HamburgerMenu";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

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
              <a onClick={() => navigate("/budget-calculator")}>Calculator</a>
            </li>
            <li>
              <a onClick={() => navigate("/learn")}>Learn</a>
            </li>
            <li>
              <a onClick={() => navigate("/glossary")}>Glossary</a>
            </li>
          </ul>
        </div>
        <HamburgerMenu />
      </div>
    </>
  );
}
