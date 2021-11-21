import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIpAddr } from '../redux/ipAddr/ipaddr-actions';

export const IpAddr = () => {
  const ipAddr = useSelector((state) => state.ipAddr.data);
  const error = useSelector((state) => state.ipAddr.error);

  const dispatch = useDispatch();

  const fetchJokeData = () => {
    console.log('asd', ipAddr);
    dispatch(fetchIpAddr());
  };

  useEffect(() => {
    console.log('error', error);
  }, [error]);

  return (
    <div>
      <button type='submit' onClick={fetchJokeData}>
        FETCH IPADDR
      </button>
      <table>
        <caption>ZipCode</caption>

        {ipAddr.map((data) => (
          <tbody>
            <tr>{data.latitude}</tr>
            <tr>{data.longitude}</tr>
            <tr>{data.placename}</tr>
            <tr>{data.state}</tr>
          </tbody>
        ))}
      </table>
      <span>{error}</span>
    </div>
  );
};
