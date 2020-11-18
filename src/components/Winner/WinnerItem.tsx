import React, { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() =>
  createStyles({
    text: {
      flexGrow: 1,
    },
  }),
);

type Props = {
  avatarString: string;
  name: string;
}

const WinnerItem: FC<Props> = ({ avatarString, name }) => {
  const classes = useStyles();

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={avatarString} />
      </ListItemAvatar>
      <ListItemText primary={name} className={classes.text} />
      <ListItemIcon>
        <IconButton>
          <EditIcon />
        </IconButton>
      </ListItemIcon>
      <ListItemIcon>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </ListItemIcon>
    </ListItem> 
  );
};

export default WinnerItem;
