interface Props {
  backgroundColor: string;
  color: string;
  children?: React.ReactNode;
  fontSize: string;
  height: string;
  onClick?: () => any;
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
    type='button'
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
