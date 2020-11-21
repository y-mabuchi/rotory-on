// React
import React, { FC, useEffect, useState } from 'react';
// Material-UI
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import {
  Button,
  CssBaseline,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@material-ui/core';
// Firestore
import { db } from '../firebase';
// Types
import { Gift, User } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 80,
    },
    title: {
      marginBottom: 24,
    },
    formControl: {
      // margin: theme.spacing(1),
      marginBottom: 24,
      width: '100%',
    },
    paper: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      height: 300,
      marginBottom: 24,
      width: '100%',
    },
    btn: {
      width: 'calc(50% - 4px)',
    },
    btnStart: {
      width: 'calc(50% - 4px)',
      marginRight: 8,
    },
  }),
);

const RotoryOn: FC = () => {
  const classes = useStyles();
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

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
      });
    
    const userList: User[] = [];

    db.collection('users')
      .get()
      .then(snapshots => {
        snapshots.forEach(snapshot => {
          const user = snapshot.data();
          userList.push(user as User);
        });
        setUsers(userList);
        setSelectedUser(userList[0].name);
      })
  }, []);

  const choiseUser = () => {
    const index = Math.floor(Math.random() * users.length);
    const user: User = users[index];
    console.log(index);
    console.log(user.name);
    setSelectedUser(user.name);
  };

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
          抽選！
        </Typography>
        <FormControl
          className={classes.formControl}
        >
          <InputLabel
            id="rotory-type"
          >
            抽選する賞を選んでください
          </InputLabel>
          <Select
            labelId="rotory-type"
            id="select-gift"
          >
            {gifts.map(gift => (
              <MenuItem value={gift.uid}>
                {gift.award} : {gift.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Paper className={classes.paper}>
          <Typography variant="h3">
            {selectedUser}
          </Typography>
        </Paper>
        <Button
          className={classes.btnStart}
          color="primary"
          onClick={() => choiseUser()}
          variant="outlined"
        >
          START!
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.btn}
        >
          STOP!
        </Button>
      </Container>
    </div>
  );
};

export default RotoryOn;
