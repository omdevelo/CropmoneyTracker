import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { TextField } from '@material-ui/core';
const useStyles = makeStyles({
    root:{
        maxWidth:345,
    },
    media:{
        height:140
    },
});
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    flexGrow:1
  };

function CropsUI({title,image,description}){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return(
         
            <Card className={classes.root}> 
            <CardActionArea>
            <CardMedia 
            className={classes.media}
            image={image}
            title={title}
            />
            <CardContent>
                <Typography  variant='body2' color="textSecondary" component="p" style={{align:"center"}}>
                    {description}
                </Typography>
                <div>
      <Button onClick={handleOpen} variant="" sx={{bgcolor: "#018786",marginTop:2}}>SELL</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography align='center'>ENTER CROP DETAILS</Typography>
          <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item><Typography sx={{ fontWeight: 'bold' }} align="start">NAME:</Typography></Item>
        </Grid>
        <Grid item xs={6} style={{marginTop:-4}}>
          <Item><TextField size="small"/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Typography  align="start">CROP:</Typography></Item>
        </Grid>
        <Grid item xs={6} style={{marginTop:-4}}>
          <Item><TextField size="small"/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Typography align="start">NO. OF KGS:</Typography></Item>
        </Grid>
        <Grid item xs={6} style={{marginTop:-4}}>
          <Item><TextField size="small"/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Typography align="start">COST OF EACH KG:</Typography></Item>
        </Grid>
        <Grid item xs={6} style={{marginTop:-4}}>
          <Item><Typography>20RS</Typography></Item>
        </Grid>
      </Grid>
        <Button variant=" " sx={{bgcolor: "#018786",marginTop:2,marginLeft:18}}>SUBMIT</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
            </CardContent>
            </CardActionArea>
    </Card>
            
    )
}
export default CropsUI;