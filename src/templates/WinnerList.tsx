// React
import React, { FC } from 'react'
import { WinnerItem } from '../components/Winner';
// Material-UI
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 80,
    },
  }),
);

const WinnerList: FC = () => {
  const classes = useStyles();
  const winners = [
    {
      avatarString: 'light',
      name: '夜神月',
    },
    {
      avatarString: 'l',
      name: 'エル',
    },
    {
      avatarString: 'ryuk',
      name: 'リューク',
    },
    {
      avatarString: 'misa',
      name: '弥海砂',
    },
    {
      avatarString: 'watari',
      name: 'ワタリ',
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          component="h2"
          align="center"
        >
          当選者一覧
        </Typography>
        <List>
          {winners.map(winner => (
            <>
              <WinnerItem avatarString={winner.avatarString} name={winner.name} />
              <Divider />
            </>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default WinnerList;