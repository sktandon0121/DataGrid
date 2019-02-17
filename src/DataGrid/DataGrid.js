import React,{Component} from 'react';
import Axios from 'axios';
import TableBody from './TableBody';
import TableHeader from "./TableHeader";

class DataGrid extends Component {
    constructor(props){
        super(props);
        this.url = props.url;
        this.columns = props.columns;

        this.state = {
            error : false,
            data : []
        }
    }

    componentDidMount() {
        // console.log(this.url);
        Axios.get(this.url).then(res =>{
            // console.log(res.data);
            this.setState({data : res.data});
        }).catch(error => {
            this.setState({error : true});
        });
    }

   
    render(){
        //console.log(this.state);

        const tableData = this.state.data;
        return (
            <table className="table">
                <TableHeader columns={this.columns}></TableHeader>
            <tbody>
                <TableBody data={tableData}></TableBody>
            </tbody>
            </table>
        );
    }
}


export default DataGrid;