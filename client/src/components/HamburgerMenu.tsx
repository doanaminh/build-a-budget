import { useState } from "react";

export default function () {
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
              <a href="/calculator">Calculator</a>
            </li>
            <li>
              <a href="/learn">Learn</a>
            </li>
            <li>
              <a href="/glossary">Glossary</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
