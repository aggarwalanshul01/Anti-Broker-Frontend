import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles({
  
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
    let data=props.val;
    console.log(data);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined" style={{width:'80%',marginBottom:50,backgroundColor:'rgba(248, 248, 164, 0.637)'}} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Complaint No - {data.ComplaintNo} {data.IsDone==0?<FiberManualRecordIcon style={{color:'red', marginTop:'-3px'}}/>:<FiberManualRecordIcon style={{color:'green', marginTop:'-3px'}}/>}
        </Typography>
        <Typography variant="h5" component="h2">
         {data.MachineName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {data.Problem}
        </Typography>
        <Typography variant="body2" component="p">
        Service Provider Username - {data.username}
          <br />
          Service Number - {data._id}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
