import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import './styles.scss';

function Header() {
  return (
    <header>
      <AppBar className="AppBar" position="static">
        <Toolbar>
          <Typography variant="h6" className="title-text">
            CLIMABR
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
