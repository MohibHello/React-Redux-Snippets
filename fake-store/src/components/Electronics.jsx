import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { DeleteElectronics, fetchElectronics } from '../redux/electronics/electronics-action';
import '../css/electronics.css';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: '2%',
  },
  media: {
    height: "100px"
  }
});

const Electronics = () => {
  const classes = useStyles();

  const electronics = useSelector((state) => state.electronics.data);

  const dispatch = useDispatch();

  //   when you provide empty array dependency, your useEffect execute once
  //   when you provide some value as dependency (eg: [name] ), your useEffect execute when name state/prop changes
  //   useEffect executes on every re-render if you don't provide any dependency.
  useEffect(() => {
    dispatch(fetchElectronics());
  }, [dispatch]);


  const handleDelete = (id) =>{
    dispatch(DeleteElectronics(id))
  }

  return (
    <div>
      <h1>Electronics</h1>
      <div className='electronics-list'>
        {electronics.map((electronics) => (
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={electronics.image}
              title='Paella dish'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {electronics.title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {electronics.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
              <Button size='small' color='primary'>
                <Link to={`/product-details/${electronics.id}`}>View</Link>
              </Button>
              <Button size='small' color='secondary' onClick={()=>handleDelete(electronics.id)}>
                remove
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
