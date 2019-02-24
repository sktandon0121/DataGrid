import React from 'react';


let tablebody = (props) => {
  const tr = props.data.map(item => {return (
    <tr key={item.id} data-id ={item.id}>
        <th scope="row">{item.id}</th>
      <td onDoubleClick={props.handle} field-name='name'>
       {item.name}
      </td>
      <td field-name='username'>{item.username}</td>
      <td field-name='email'>{item.email}</td>
    </tr>
  ) });
  return tr;
};


export default tablebody;