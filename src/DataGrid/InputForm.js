import React from "react";

const inputform = (props) => {
  console.log(props);
  return (
    <form>
      <div className="form-group">
        <input type="text" className="form-control" id={props.id} name ={props.id}     placeholder="Example input" onChange={props.change} value={props.data}  />
      </div>
    </form>
  );
}


export default inputform;