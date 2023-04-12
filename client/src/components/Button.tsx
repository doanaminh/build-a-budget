import React from "react";

interface Props {
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
}

const Button: React.FC<Props> = ({ 
    children,
    height,
    onClick, 
    width
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         height,
         width
      }}
    >
    {children}
    </button>
  );
}

export default Button;
