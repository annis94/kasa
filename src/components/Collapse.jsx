import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; 

const Collapse = ({ title, children, variant }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${variant}`}>
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <ChevronDown className={`collapse__icon ${isOpen ? "collapse__icon--open" : ""}`} />
      </div>
      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  );
};

export default Collapse;
