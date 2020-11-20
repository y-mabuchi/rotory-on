// React
import React, { FC, useEffect, useState } from 'react';
// Material-UI
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { GiftItem } from '../components/Gift';
// Firestore
import { db } from '../firebase';

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

type Gift = {
  award: string;
  created_at: string;
  description: string;
  name: string;
  order: number;
  path: string;
  supplier: string;
  uid: string;
  updated_at: string;
};

const GiftList: FC = () => {
  const classes = useStyles();
  const [gifts, setGifts] = useState<Gift[]>([]);

  useEffect(() => {
    const giftList: Gift[] = [];

    db.collection('gifts')
      .orderBy('order', 'asc')
      .get()
      .then(snapshots => {
        snapshots.forEach(snapshot => {
          const gift = snapshot.data();
          giftList.push(gift as Gift);
        });
        setGifts(giftList);
      })
  }, []);

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
          景品一覧
        </Typography>
        {gifts.map(gift => (
          <>
            <div className={classes.giftItem}>
              <GiftItem
                award={gift.award}
                name={gift.name}
                description={gift.description}
                supplier={gift.supplier}
                path={gift.path}
              />
            </div>
          </>
        ))}
      </Container>
    </div>
  );
};

export default GiftList;
