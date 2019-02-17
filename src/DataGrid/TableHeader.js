import React from 'react';
// import Hoc from '../hoc/Hoc';

let tableheader = (props)=> {
  return(
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">User Name</th>
        <th scope="col">Email</th>
      </tr>
    </thead >
  );
};

export default tableheader;