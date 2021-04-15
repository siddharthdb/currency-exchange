import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { getCurrency, getFlags } from "../helper/helper";

export const BaseCurrency = (props: any) => {
  const currencies = getCurrency().sort();
  const [baseCurrency, setBaseCurrency] = useState("EUR");

  const handleSelect = (e: any) => {
    setBaseCurrency(e);
    props.handleSelect(e);
  };

  return (
    <div className="container mt-2">
      <span>Base Currency:</span>
      <Dropdown onSelect={handleSelect}>
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
