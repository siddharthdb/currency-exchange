import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, InputLabel, MenuItem, FormControl, Select, Grid } from '@material-ui/core';

import './App.css';
import { getCurrency } from './helper/helper';
import { NavBar } from './NavBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export const App = () => {
  const classes = useStyles();

  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [targetCurrency, setTargetCurrency] = useState('USD');

  const currencies = getCurrency();

  const images = require.context('./assets', true,  /.gif$/);

  
  const flags: any = {};
  images.keys().forEach((key: string) => {
    const countryCode = key.replace('./', '').substring(0, key.length - 6);
    flags[countryCode] = images(key);
  });
  console.log(flags)
  return (
    <div className="">
      <NavBar></NavBar>
      <Container className={classes.root}>
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="base">Base Currency</InputLabel>
              <Select
                labelId="base-select-currency"
                id="baseSelect"
                value={baseCurrency}
                onChange={(e) => setBaseCurrency(e.target.value as string)}
              >
                {
                  currencies.map((c, idx) => {
                    return <MenuItem key={idx} value={c}>
                      <img src={flags[c]} width={32} alt="base" /> {c}
                    </MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="base">Target Currency</InputLabel>
              <Select
                labelId="target-currency"
                id="targetCurrency"
                value={targetCurrency}
                onChange={(e) => setTargetCurrency(e.target.value as string)}
              >
                {
                  currencies.map((c, idx) => {
                    return <MenuItem key={idx} value={c}>
                      <img src={flags[c]} width={32} alt="target" /> {c}
                    </MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </Grid>

        </Grid>

      </Container>

    </div>
  );
}