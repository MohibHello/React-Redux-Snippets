import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { fetchCategory } from '../redux/category/category-action';
import '../css/category.css';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Categories = () => {
  const classes = useStyles();

  const categories = useSelector((state) => state.categories.data);

  const dispatch = useDispatch();

  //   when you provide empty array dependency, your useEffect execute once
  //   when you provide some value as dependency (eg: [name] ), your useEffect execute when name state/prop changes
  //   useEffect executes on every re-render if you don't provide any dependency.
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <div>
      <h2>Categories</h2>
      <div className='category-list'>
        {categories.map((category) => (
          <Card key={category} className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {category}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                CardActions are just a flexbox component that wraps the children
                in 8px of padding and 8px horizontal padding between children.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
              <Button
                size='small'
                color='primary'
              >
                 <NavLink to={`/${category}`} >
                   {category}
                 </NavLink>
              </Button>
              
              <Button size='small' color='secondary'>
                just for show
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Categories;
