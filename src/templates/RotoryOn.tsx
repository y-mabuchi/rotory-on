// React
import React, { FC } from 'react';
// Material-UI
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import {
  CssBaseline,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  ThemeProvider,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 80,
    },
    title: {
      marginBottom: 24,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 320,
    },
  }),
);

const RotoryOn: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="md">
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
            <MenuItem
              value={0}
            >
              特賞
            </MenuItem>
            <MenuItem
              value={1}
            >
              1等
            </MenuItem>
            <MenuItem
              value={2}
            >
              2等
            </MenuItem>
          </Select>
        </FormControl>
      </Container>
    </div>
  );
};

export default RotoryOn;
