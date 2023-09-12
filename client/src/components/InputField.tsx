import { useState } from "react";
import "./InputField.css";

interface Props {
  children?: React.ReactNode;
  title: string;
  symbol: string;
  inputName: string;
  type?: string;
  placeholder?: string;
  minimum: string;
  maximum: string;
  nameClass: string;
  handleValue: any;
  loadedValue: any;
}

const InputField: React.FC<Props> = ({
  title,
  symbol,
  inputName,
  type,
  placeholder,
  minimum,
  maximum,
  nameClass,
  handleValue,
  loadedValue,
}) => {
  const [open, setOpen] = useState(false);
  const selectAll = (e: any) => {
    e.target.select();
  };

  return (
    <>
      <label>{title}</label>
      <div className={`${nameClass}`}>
        <span>{symbol}</span>
        <input
          name={inputName}
          type="number"
          placeholder={placeholder}
          min={minimum}
          max={maximum}
          onInput={handleValue}
          onClick={selectAll}
          defaultValue={loadedValue}
        />
      </div>
    </>
  );
};
export default InputField;
