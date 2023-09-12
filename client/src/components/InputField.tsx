import { useState } from "react";
import "./InputField.css";

interface Props {
  children?: React.ReactNode;
  title: string;
  symbol: string;
  inputName: string;
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
      <div className={`inputComp`}>
        <label>{title}</label>
        <div className={`${nameClass} inputField`}>
          <div className={`inputBox`}>
            <span className="symbol">{symbol}</span>
            <input
              className={`inputArea ${invalidInput ? "inputBoxInvalid" : ""}`}
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

          {invalidInput && (
            <span className="invalidWarning">{`Please enter a number between ${minimum} and ${maximum}`}</span>
          )}
        </div>
      </div>
    </>
  );
};
export default InputField;
