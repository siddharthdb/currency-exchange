import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

import {
  getCurrency,
  getFlags,
  getCurrencySymbol,
} from "../helper/helper";
import { FxRates } from "../models/fxrates";
import { getFXRates } from "../services/FxRates.service";

export const ExchangeRates = (props: any) => {
  const currencies = getCurrency().sort();
  const [fxRates, setFxRates] = useState<FxRates>();

  const symbols: any = getCurrencySymbol();

  useEffect(() => {
    const response = getFXRates(props.base, "");
    response.then((res: FxRates) => {
      setFxRates(res);
    });
  }, [props.base]);

  return (
    <div className="container currency-container">
      {currencies.map((c: string[], key: number) => {
        return c[0] === fxRates?.base ? (
          ""
        ) : (
          <Card key={key} style={{ marginTop: 10 }}>
            <div className="row">
              <div
                className="col-7"
                style={{
                  paddingLeft: 50,
                  textAlign: "left",
                }}
              >
                <div
                  className={getFlags(c[0])}
                  style={{
                    marginRight: 20,
                    verticalAlign: "middle",
                  }}
                ></div>{" "}
                <span>{c[0]}</span> <br />
                <div
                  className="pt-1"
                  style={{
                    textAlign: "left",
                    fontSize: 14,
                  }}
                >
                  {c[1]}
                </div>
              </div>
              <div className="col-5">
                {fxRates && fxRates.rates ? (
                  <>
                    <span>{symbols[c[0]]}</span>
                    <span>
                      {fxRates.rates[c[0]].toFixed(4)}
                    </span>
                  </>
                ) : null}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
