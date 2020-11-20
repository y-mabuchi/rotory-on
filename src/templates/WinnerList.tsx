// React
import React, { FC, useEffect, useState } from 'react'
import { WinnerItem } from '../components/Winner';
// Material-UI
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
// Firestore
import {
  db
} from '../firebase';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 80,
    },
  }),
);

type User = {
  avatarString: string;
  name: string;
  uid: string;
};

const WinnerList: FC = () => {
  const classes = useStyles();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const userList: User[] = [];

    db.collection('users')
      .get()
      .then(snapshots => {
        snapshots.forEach(snapshot => {
          const user = snapshot.data();
          userList.push(user as User);
        })
        setUsers(userList);
      });
  }, []);

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
          {users.map(user => (
            <div key={user.uid}>
              <WinnerItem avatarString={user.avatarString} name={user.name} />
              <Divider />
            </div>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default WinnerList;