import React, { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 80,
    },
  }),
);

const RotoryOn: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>This is RotoryOn.</p>
    </div>
  );
};

export default RotoryOn;
