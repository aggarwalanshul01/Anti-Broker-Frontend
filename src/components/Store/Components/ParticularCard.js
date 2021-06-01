import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
    let val=props.val;
    let setCardOpen=props.setCardOpen; 
    let setCardOpenedD=props.setCardOpenedD;
    let CardOpen=props.CardOpen;
    let CardOpenedD=props.CardOpenedD;
    //console.log(CardOpen+" "+CardOpenedD+" "+setCardOpen+" "+ setCardOpenedD);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            {val.username}
        </Typography>
        <Typography variant="h5" component="h2">
          {val.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {val.Phone}
        </Typography>
        <Typography variant="body2" component="p">
            {val.Description}.
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" color="primary" onClick={()=>{
          if(CardOpen==0){
            setCardOpenedD(val);
            setCardOpen(1);
          }
      }}>
        {'BOOK NOW >'}
      </Button>
      </CardActions>
    </Card>
  );
}
