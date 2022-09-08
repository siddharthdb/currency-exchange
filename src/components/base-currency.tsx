import React, { FC, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { getCurrency, getFlags } from "../helper/helper";

interface BaseCurrencyProps {
  handleSelect: (e: string) => void;
}

export const BaseCurrency: FC<BaseCurrencyProps> = ({ handleSelect }) => {
  const currencies = getCurrency().sort();
  const [baseCurrency, setBaseCurrency] = useState("EUR");

  const onCurrencySelect = (curr: string | null) => {
    if (curr) {
      setBaseCurrency(curr);
      handleSelect(curr);
    }
  };

  return (
    <div className="container mt-2">
      <span>Base Currency:</span>
      <Dropdown onSelect={onCurrencySelect}>
        <Dropdown.Toggle>
          {
            <>
              <div
                className={getFlags(baseCurrency)}
                style={{
                  marginRight: 40,
                  verticalAlign: "middle",
                }}
              ></div>{" "}
              {baseCurrency}
            </>
          }
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {currencies.map((c, idx) => {
            return (
              <Dropdown.Item key={idx} eventKey={c[0]}>
                <div
                  className={getFlags(c[0])}
                  style={{
                    marginRight: 40,
                    verticalAlign: "middle",
                  }}
                ></div>{" "}
                {c[0]}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
