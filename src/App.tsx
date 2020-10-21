import React, { useState } from "react";

import { NavBar } from "./components/NavBar";
import { ExchangeRates } from "./components/exchange-rates";

import { getCurrency, getFlags } from "./helper/helper";
import { Dropdown } from "react-bootstrap";

export const App = () => {
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const currencies = getCurrency().sort();
  const handleSelect = (e: any) => {
    setBaseCurrency(e);
  };

  return (
    <div>
      <NavBar></NavBar>
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
        <ExchangeRates base={baseCurrency}></ExchangeRates>
      </div>
    </div>
  );
};
