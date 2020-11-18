// Ract
import React, { FC } from 'react';
// Material-UI
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { GiftItem } from '../components/Gift';

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

const GiftList: FC = () => {
  const classes = useStyles();
  const gifts = [
    {
      award: '特賞',
      name: 'リュークのデスノート',
      description: 'このノートに名前を書くと...',
      supplier: 'リューク',
      path: 'https://firebasestorage.googleapis.com/v0/b/rotory-on.appspot.com/o/death-note.png?alt=media&token=8f7f3625-7375-4f65-9e53-f86b817b19bf',
    },
    {
      award: '1等',
      name: '死神の目',
      description: '名前と寿命がわかる死神の目です。',
      supplier: '弥海砂',
      path: 'https://firebasestorage.googleapis.com/v0/b/rotory-on.appspot.com/o/grim-reapers-eye.png?alt=media&token=5fa41a77-41fa-4040-b160-38afac987a42',
    },
    {
      award: '2等',
      name: '裏蓋仕込み付き腕時計',
      description: '針とノートの切れ端を仕込んでおきましょう。',
      supplier: '夜神月',
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
