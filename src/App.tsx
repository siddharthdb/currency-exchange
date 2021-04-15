import React, { useState } from "react";

import { NavBar } from "./components/NavBar";
import { ExchangeRates } from "./components/exchange-rates";
import { BaseCurrency } from "./components/base-currency";

export const App = () => {
  const [baseCurrency, setBaseCurrency] = useState(process.env.REACT_APP_BASE_CURRENCY);
  
  const handleSelect = (e: any) => {
    setBaseCurrency(e);
  };

  return (
    <div className="app--container">
      <NavBar></NavBar>
        <BaseCurrency handleSelect={handleSelect}></BaseCurrency>
        <ExchangeRates base={baseCurrency}></ExchangeRates>
    </div>
  );
};
