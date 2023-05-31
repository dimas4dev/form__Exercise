import React, { ChangeEvent, useEffect, useState } from 'react';
import Button from "../Button/index";

import closedEye from "../../assets/images/esconder.png"
import openEye from "../../assets/images/ojo.png"

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  type: string;
  placeholder: string;
  label: string;
  required?: boolean;
  name?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, type, label, placeholder, required = false, name }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    setInputType(type);
  }, [type]);

  const handleClick = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <>
      <div className='Input' >
        <label htmlFor={inputType} className="Input__Label">
          {label}
        </label>
        <div className="Input__Class">
          {inputType === "email" && (
            <input
              type={inputType}
              value={value}
              onChange={handleInputChange}
              className="Input__Class--input"
              placeholder={placeholder}
              required={required}
              name={name}
            />
          )}
        </div>
      </div>

      <div className='Input'>
        {inputType === "password" && (
          <>
            <div className='Input__Label'>
              <div className="Input__Class">
                <input
                  type={inputType}
                  value={value}
                  onChange={handleInputChange}
                  className="Input__Class--input"
                  placeholder={placeholder}
                  required={required}
                  name={name}
                />
                <Button className="" onClick={handleClick}>
                  <img className="IconEye" src={openEye} alt="Icon Eye" />{" "}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className='Input'>
        <div className="Input__Class">
          {inputType === "text" && (
            <>

              <input
                type={inputType}
                value={value}
                onChange={handleInputChange}
                className="Input__Class--input"
                placeholder={placeholder}
                required={required}
                name={name}
              />
              <Button className="" onClick={handleClick}>
                <img className="IconEye" src={closedEye} alt="Icon Eye" />{" "}
              </Button>

            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
