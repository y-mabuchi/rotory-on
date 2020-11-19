// React
import React, { FC } from 'react';
// Material-UI
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Container,
  Typography,
} from '@material-ui/core';
import { RotoryItem } from '../components/Rotory';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 80,
    },
    title: {
      marginBottom: 24,
    },
    giftItem: {
      margin: '24px 0'
    },
  }),
);

const RotoryList: FC = () => {
  const classes = useStyles();
  const results = [
    {
      award: '特賞',
      name: 'リュークのデスノート',
      winner: '夜神月',
      path: 'https://firebasestorage.googleapis.com/v0/b/rotory-on.appspot.com/o/death-note.png?alt=media&token=8f7f3625-7375-4f65-9e53-f86b817b19bf',
    },
    {
      award: '1等',
      name: '死神の目',
      winner: '弥海砂',
      path: 'https://firebasestorage.googleapis.com/v0/b/rotory-on.appspot.com/o/grim-reapers-eye.png?alt=media&token=5fa41a77-41fa-4040-b160-38afac987a42',
    },
    {
      award: '2等',
      name: '裏蓋仕込み付き腕時計',
      winner: '夜神月',
      path: 'https://firebasestorage.googleapis.com/v0/b/rotory-on.appspot.com/o/watch.jpg?alt=media&token=fda62fbe-0c0d-4fe7-ba5a-60ce8d014d71',
    },
  ];

  return (
        <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          className={classes.title}
          variant="h4"
          component="h2"
          align="center"
        >
          当選一覧
        </Typography>
        {results.map(result => (
          <>
            <div className={classes.giftItem}>
              <RotoryItem
                award={result.award}
                name={result.name}
                winner={result.winner}
                path={result.path}
              />
            </div>
          </>
        ))}
      </Container>
    </div>
  );
};

export default RotoryList;
