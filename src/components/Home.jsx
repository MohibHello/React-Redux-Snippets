import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import HomeButtons from './HomeButtons';
import { HomeTable } from './HomeTable';

export const Home = (props) => {
  return (
    <div>
        {props.userloading && <Loader
        type='Puff'
        color='#00BFFF'
        height={100}
        width={100}
      />}
      <h1>Home</h1>
      <HomeButtons />
      <div>
        <HomeTable data={props.userList} load={props.userloading} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    console.log("HOME ",state)
  return {
    userList: state.users.users,
    userloading: state.users.loading,
  };
};

export default connect(mapStateToProps)(Home);
