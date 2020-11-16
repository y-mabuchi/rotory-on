import React, { FC } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 80,
    },
  }),
);

const WinnerList: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>This is WinnerList component.</p>
    </div>
  );
};

export default WinnerList;