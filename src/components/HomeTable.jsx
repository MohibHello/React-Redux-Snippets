import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';

export const HomeTable = (props) => {

  useEffect(() => {
    // console.log(store.getState())
    console.log('loading',props);
    // setLoading(props.load)
    // setdata(props.users.users.result[0])
  },[props]);

  return (
    <div>
      <table>
        <caption>The Beatles</caption>
       <tbody>
     {
        props.data.map((data)=>(
          <tr>{data.cell}</tr>
        ))
     }
       </tbody>
      </table>
    </div>
  );
};
