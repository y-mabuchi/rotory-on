// React
import React, { FC } from 'react';
// Material-UI
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      marginBottom: 24,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
  }),
);

type Props = {
  award: string;
  name: string;
  winner: string;
  path: string;
};

const RotoryItem: FC<Props> = ({ award, name, winner, path }) => {
  const classes = useStyles(); 

  return (
    <Card>
      <CardHeader
        title={`${award} : ${name}`}
      />
      <CardMedia
        className={classes.media}
        image={path}
      />
      <CardContent>
        <Typography
          variant="h5"
          component="p"
          align="center"
        >
          {`当選者 : ${winner}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RotoryItem;
