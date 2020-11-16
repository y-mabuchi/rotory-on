import React, { FC, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ClosableDrawer } from './index'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: "#fff",
      color: "#000",
    },
    logo: {
      cursor: 'pointer',
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Header: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const goToHome = () => {
    console.log('goToHome clicked.');
    history.push('/');
  };

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = useCallback((e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }
    setOpen(!open);
  }, [open, setOpen]);

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={goToHome}
          >
            <span
              className={classes.logo}
            >
              Rotory On!
            </span>
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <ClosableDrawer
        open={open}
        onClose={handleDrawerToggle}
      />
    </div>
  );
};

export default Header;
