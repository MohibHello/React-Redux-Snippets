import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchIpAddr } from '../redux/ipAddr/ipaddr-actions';
import { fetchUsers } from '../redux/randomUser/user-action';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
// import store from '../redux/store'

export const HomeButtons = (props) => {


  const fetchData = (type) => {
    if (type === 'USER') {
      props.fetchUsersDetails();
    } else {
      props.fetchIpAddrDetails();
    }
  };

  return (
    <div>
     
      <button type='submit' onClick={() => fetchData('USER')}>
        FETCH USER
      </button>
     
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userList: state,
    ipAddr: state,
    userloading: state.users.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersDetails: () => dispatch(fetchUsers()),
    fetchIpAddrDetails: () => dispatch(fetchIpAddr()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeButtons);
