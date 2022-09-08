import React, { useState } from 'react';

import { NavBar } from "./components/NavBar";
import { ExchangeRates } from "./components/exchange-rates";
// import { BaseCurrency } from "./components/base-currency";

export const App = () => {
  //console.log(process.env.BASE_CURRENCY)
  const [baseCurrency] = useState('EUR');

  // const handleSelect = (e: string) => {
  //   setBaseCurrency(e);
  // };

  return (
    <div className="app--container">
      <NavBar></NavBar>
      {/* <BaseCurrency handleSelect={handleSelect}></BaseCurrency> */}
      <ExchangeRates baseCurrency={baseCurrency}></ExchangeRates>
    </div>
  );
};
