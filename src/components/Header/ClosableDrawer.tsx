// React
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
// Material-UI
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Home,
  Group,
  CardGiftcard,
  Toys,
  Check,
} from '@material-ui/icons';

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
              <Home />
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
              <Toys />
            </ListItemIcon>
            <ListItemText
              primary="抽選"
            />
          </ListItem>

          <ListItem
            className={classes.listItem}
            onClick={(e) => {
              handleClick('/rotory');
              onClose(e);
            }}
          >
            <ListItemIcon>
              <Check />
            </ListItemIcon>
            <ListItemText
              primary="抽選結果"
            />
          </ListItem>

          <Divider />

          <ListItem
            className={classes.listItem}
            onClick={(e) => {
              handleClick('/winner');
              onClose(e);
            }}
          >
            <ListItemIcon>
              <Group />
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
              <CardGiftcard />
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
