import { ButtonBase, createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

import { getCurrency, getFlags } from '../helper/helper';
import { FxRates } from '../models/fxrates';
import { getFXRates } from '../services/FxRates.service';

export const ExchangeRates = (props: any) => {

    const currencies = getCurrency().sort();
    const [fxRates, setFxRates] = useState<FxRates>();


    useEffect(() => {
        const response = getFXRates(props.base, '');
        response.then((res: FxRates) => {
            setFxRates(res)
        });
    }, [props.base])

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing(2),
                margin: 10,
                maxWidth: 550,
            },
            image: {
                width: 48,
                height: 32,
                marginRight: 10,
            },
            img: {
                margin: 'auto',
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
            },
        }),
    );

    const classes = useStyles();

    return (
        <div className={classes.root}>
            { currencies.map((c: string, key: number) => {
                return (c === fxRates?.base) ? '' :
                    <Paper className={classes.paper} key={key}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <div className={getFlags(c)} style={{
                                        margin: 'auto',
                                        display: 'block',
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                    }}></div>
                                </ButtonBase>
                                {c}
                            </Grid>
                            <Grid item xs={12} sm style={{textAlign: "right"}}>                                
                                <Grid item>
                                    {fxRates && fxRates.rates ? fxRates.rates[c] : ''}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
            })
            }
        </div>
    );

}