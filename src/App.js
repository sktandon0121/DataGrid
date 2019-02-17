import React, { Component } from 'react';
import './App.css';
import DataGrid from './DataGrid/DataGrid';
/* const columns = [
  {id:'id',name:'ID',editable:true},
  {id:'first_name',name:'First Name',editable:true},
  {id:'last_name',name:'Last Name',editable:true},
  {id:'email',name:'Email',editable:true}
]; */
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <DataGrid  url='https://jsonplaceholder.typicode.com/users' />
      </div>
    );
  }
}

export default App;
