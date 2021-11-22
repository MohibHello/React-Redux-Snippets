import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
// import { lightGreen, blue, purple, pink } from '@material-ui/core/colors';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, fetchProductFailure } from '../redux/product/product-action';
import '../css/product.css';

const ProductDetails = () => {

  const { id } = useParams();

  const history = useHistory();

  const product = useSelector((state) => state.products.data);

  const dispatch = useDispatch();

  const navigateBack = () => {
    history.goBack();
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
    return () => {
        //remove stored product when compoent is unmounted
        dispatch(fetchProductFailure())
    }
  }, [dispatch, id]);


  return (
    <div>
      <h1>Product Details</h1>
      <Container>
        <Button color='primary' variant='contained'>
          <Link to='/'> Home</Link>
        </Button>
        <Button color='secondary' variant='contained' onClick={navigateBack}>
          Back
        </Button>
      </Container>
      {product && (
        <div className='product-desc'>
          <img className='img-size' src={product.image} alt='product' />
          <div className="inv-desc">
            <div  className="desc-bold">Title:</div>
            <div>{product.title}</div>
          </div>
          <div className="inv-desc">
            <div  className="desc-bold">Price:</div>
            <div>{product.price}</div>
          </div>
          <div className="inv-desc">
            <div  className="desc-bold">Category:</div>
            <div>{product.category}</div>
          </div>
          <div className="inv-desc">
            <div className="desc-bold">Description:</div>
            <div>{product.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
