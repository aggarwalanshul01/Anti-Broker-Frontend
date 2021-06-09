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
        let data=props.data;
        console.log(data);
      const classes = useStyles();
      const bull = <span className={classes.bullet}>•</span>;
    
      return (
          <div className='parti_his_main'>
        <Card className={classes.root} variant="outlined" style={{paddingTop:'15px' ,width:'70%',marginBottom:20,backgroundColor:'rgba(248, 248, 164, 0.637)',textAlign:'center'}} >
          {/* ><CardContent */}
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Complaint No - {data.ComplaintNo} {data.IsDone==0?<FiberManualRecordIcon style={{color:'red', marginTop:'-3px'}}/>:<FiberManualRecordIcon style={{color:'green', marginTop:'-3px'}}/>}
            </Typography>
            <Typography variant="h5" component="h2">
             {data.usernameStore}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            {data.MachineName+", "}{data.Problem}
            </Typography>
            
          {/* </CardContent> */}
          
        </Card>
        </div>
      );
    }
    