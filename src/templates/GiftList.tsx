import React, { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 80,
    },
  }),
);

const GiftList: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>This is GiftList.</p>
    </div>
  );
};

export default GiftList;
