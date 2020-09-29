import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

export const NavBar = () => {

  return <Container>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Currency Exchange
      </Typography>
      </Toolbar>
    </AppBar>
  </Container>;
}