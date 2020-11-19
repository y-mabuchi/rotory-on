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
  InputLabel,
  MenuItem,
  Select,
  Typography,
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
      width: '100%',
      // minWidth: 320,
    },
  }),
);

const RotoryOn: FC = () => {
  const classes = useStyles();
  const gifts = [
    {
      id: 0,
      name: '特賞:デスノート',
    },
    {
      id: 1,
      name: '1等:死神の目',
    },
    {
      id: 2,
      name: '2等:裏蓋仕込み付き腕時計',
    },
  ];

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
              <MenuItem value={gift.id}>
                {gift.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
    </div>
  );
};

export default RotoryOn;
