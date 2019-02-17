import React from 'react';

let tablebody = (props) => {
  console.log(props.data);
  const tr = props.data.map(item => {return (
    <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
    </tr>
  ) });
  return tr;
};


export default tablebody;