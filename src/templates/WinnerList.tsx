import React, { FC } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { WinnerItem } from '../components/Winner';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 80,
    },
    text: {
      flexGrow: 1,
    },
  }),
);

const WinnerList: FC = () => {
  const classes = useStyles();
  const winners = [
    {
      avatarString: 'light',
      name: '夜神 月',
    },
    {
      avatarString: 'l',
      name: 'エル',
    },
    {
      avatarString: 'ryuk',
      name: 'リューク',
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm">
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