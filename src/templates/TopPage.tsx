import React, { FC } from 'react'
import { createStyles, makeStyles } from '@material-ui/core';
import ToppageBg from '../assets/images/toppage-bg.jpg';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      alignItems: 'center',
      backgroundBlendMode: 'lighten',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backgroundImage: `url(${ToppageBg})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
    },
    catch: {
      fontWeight: 'normal',
    },
  }),
);

const TopPage: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.catch}>
        Rotory On!は、抽選会のできるWebアプリです
      </h1>
    </div>
  );
};

export default TopPage;