import React from "react";

interface Props {
  backgroundColor: string;
  color: string;
  children?: React.ReactNode;
  fontSize: string;
  height: string;
  onClick: () => void;
  width: string;
}

const Button: React.FC<Props> = ({ 
    backgroundColor,
    color,
    children,
    fontSize,
    height,
    onClick, 
    width,
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor,
        color,
        fontSize,
        height,
        width
      }}
    >
      {children}
    </button>
  );
}

export default Button;
