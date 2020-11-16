import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ToysIcon from '@material-ui/icons/Toys';

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: 256,
        flexShrink: 0,
      }
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: 256,
    },
    listItem: {
      cursor: 'pointer',
    },
  }),
);

type Props = {
  open: boolean;
  onClose: (e: object) => void;
}

const ClosableDrawer: FC<Props> = ({ open, onClose }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (path: string) => {
    history.push(path);
  };

  return (
    <nav className={classes.drawer} area-label="mailbox folders">
      <Drawer
        variant="temporary"
        anchor="right"
        open={open}
        onClose={(e) => onClose(e)}
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{ keepMounted: true }}
      >
        <List>
          <ListItem
            className={classes.listItem}
            onClick={(e) => {
              handleClick('/');
              onClose(e);
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              primary="トップへ戻る"
            />
          </ListItem>

          <Divider />

          <ListItem
            className={classes.listItem}
            onClick={(e) => {
              handleClick('/rotory-on');
              onClose(e);
            }}
          >
            <ListItemIcon>
              <ToysIcon />
            </ListItemIcon>
            <ListItemText
              primary="抽選"
            />
          </ListItem>

          <ListItem
            className={classes.listItem}
            onClick={(e) => {
              handleClick('/winner');
              onClose(e);
            }}
          >
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText
              primary="当選者一覧"
            />
          </ListItem>

          <ListItem
            className={classes.listItem}
            onClick={(e) => {
              handleClick('/gift');
              onClose(e);
            }}
          >
            <ListItemIcon>
              <CardGiftcardIcon />
            </ListItemIcon>
            <ListItemText
              primary="景品一覧"
            />
          </ListItem>
        </List>
      </Drawer>
    </nav>
  );
};

export default ClosableDrawer;
