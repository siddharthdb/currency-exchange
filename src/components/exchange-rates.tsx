import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

import { getCurrency, getFlags } from "../helper/helper";
import { FxRates } from "../models/fxrates";
import { getFXRates } from "../services/FxRates.service";

export const ExchangeRates = (props: any) => {
  const currencies = getCurrency().sort();
  const [fxRates, setFxRates] = useState<FxRates>();

  useEffect(() => {
    const response = getFXRates(props.base, "");
    response.then((res: FxRates) => {
      setFxRates(res);
    });
  }, [props.base]);

  return (
    <div>
      {currencies.map((c: string, key: number) => {
        return c === fxRates?.base ? (
          ""
        ) : (
          <Card className="currency-container" key={key} style={{ marginTop: 10 }}>
            <div className="row">
              <div className="col-4" style={{ paddingLeft: 50, textAlign: 'left' }}>
              <div
                className={getFlags(c)}
                style={{
                  marginRight: 20,
                  verticalAlign: "middle",
                }}
              ></div>{" "}
              {c}
              </div>
              <div className="col-5"></div>
              <div className="col-3">
                {fxRates && fxRates.rates
                  ? fxRates.rates[c].toFixed(2)
                  : ""}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
