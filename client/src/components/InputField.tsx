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
  invalidInput: Boolean;
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
  invalidInput,
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
      <div className={`inputField`}>
        <label>{title}</label>
        <div className={`${nameClass}`}>
          <span className="symbol">{symbol}</span>
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
          {invalidInput && (
            <span className="invalidWarning">{`Please enter a number between ${minimum} and ${maximum}`}</span>
          )}
        </div>
      </div>
    </>
  );
};
export default InputField;
