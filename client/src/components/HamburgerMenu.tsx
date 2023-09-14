import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="hamburgerContainer">
        <div className="hamburgerIcon" onClick={handleOpen}>
          <span>&#8213;</span>
          <span>&#8213;</span>
          <span>&#8213;</span>
        </div>
      </div>
      {open && (
        <div className="navOpen">
          <ul className="navOpenLinks">
            <li>
              <a
                onClick={() => {
                  navigate("/calculator");
                  handleOpen();
                }}
              >
                Calculator
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/learn");
                  handleOpen();
                }}
              >
                Learn
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/glossary");
                  handleOpen();
                }}
              >
                Glossary
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
