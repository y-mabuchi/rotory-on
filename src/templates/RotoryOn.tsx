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
import { db, FirebaseTimestamp } from '../firebase';
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

const giftsRef = db.collection('gifts');
const usersRef = db.collection('users');

const RotoryOn: FC = () => {
  const classes = useStyles();
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [targetUsers, setTargetUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedGiftId, setSelectedGiftId] = useState('');
  const [timerId, setTimerId] = useState(0);

  useEffect(() => {
    const giftList: Gift[] = [];

    giftsRef
      .orderBy('order')
      .get()
      .then(snapshots => {
        snapshots.forEach(snapshot => {
          const gift = snapshot.data();
          giftList.push(gift as Gift);
        });
        setGifts(giftList);
      });
    
    const userList: User[] = [];

    usersRef
      .get()
      .then(snapshots => {
        snapshots.forEach(snapshot => {
          const user = snapshot.data();
          userList.push(user as User);
        });
        setUsers(userList);
      })
  }, []);

  const choiseUser = () => {
    if (!selectedGiftId) {
      alert('賞を選択してください。');
      return;
    }
    const id = window.setInterval(() => {
      const index = Math.floor(Math.random() * targetUsers.length);
      const user: User = targetUsers[index];
      setSelectedUser(user.name);
    }, 10);
    setTimerId(id);
  };

  const stopChoise = async () => {
    clearInterval(timerId);
    setTimerId(0);
    await giftsRef.doc(selectedGiftId).update({
      winner: selectedUser,
      updated_at: FirebaseTimestamp.now()
    });
  }

  const handleChange = ((e: React.ChangeEvent<{value: unknown}>) => {
    const giftId = e.target.value as string;
    setSelectedGiftId(giftId);
    const supplier = gifts.filter(gift => gift.uid === giftId)[0].supplier;
    const userList = users.filter(user => user.name !== supplier);
    setTargetUsers(userList);
  });

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
            id="select-gift"
            labelId="rotory-type"
            onChange={handleChange}
            value={selectedGiftId}
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
          disabled={(timerId !== 0) ? true : false}
          onClick={() => choiseUser()}
          variant="outlined"
        >
          START!
        </Button>
        <Button
          className={classes.btn}
          color="secondary"
          onClick={() => stopChoise()}
          variant="outlined"
        >
          STOP!
        </Button>
      </Container>
    </div>
  );
};

export default RotoryOn;
