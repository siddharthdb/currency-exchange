import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Container, Grid, hexToRgb, useMediaQuery, createMuiTheme, ThemeProvider, FormControl, InputLabel, Select, MenuItem
} from '@material-ui/core';

import { NavBar } from './NavBar';
import { ExchangeRates } from './components/exchange-rates';

import { getCurrency, getFlags } from './helper/helper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 350,
      color: hexToRgb("#ffffff")
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      color: hexToRgb("#ffffff")
    },
  }),
);

export const App = () => {
  const classes = useStyles();

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const currencies = getCurrency().sort();

  return (

    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <Container className={classes.root}>

          <FormControl className={classes.formControl}>
            <InputLabel id="base">Base Currency</InputLabel>
            <Select className="currency-selector"
              labelId="base-select-currency"
              id="baseSelect"
              value={baseCurrency}
              onChange={(e) => setBaseCurrency(e.target.value as string)}
            >
              {
                currencies.map((c, idx) => {
                  return <MenuItem key={idx} value={c}>
                    <div className={getFlags(c)} style={{ marginRight: 40, verticalAlign: 'middle' }}></div> {c}
                  </MenuItem>
                })
              }
            </Select>
          
            <ExchangeRates base={baseCurrency}></ExchangeRates>
          </FormControl>
        </Container>
      </ThemeProvider>
    </div>

  );
}