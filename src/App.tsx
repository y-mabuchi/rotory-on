import React, { FC } from 'react';
import Router from './Router';
// import Header from './components/Header/Header';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    offset: theme.mixins.toolbar,
  }),
);

const App: FC = () => {
  const classes = useStyles();

  return (
    <>
      {/* <Header /> */}
      <div className={classes.offset}>
        <Router />
      </div>
    </>
  );
}

export default App;
