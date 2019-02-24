import React,{Component} from 'react';
import Axios from 'axios';
import TableBody from './TableBody';
import TableHeader from "./TableHeader";
import InputForm from './InputForm';
import ReactDOMServer from 'react-dom/server';

class DataGrid extends Component {
    constructor(props){
        super(props);
        this.url = props.url;
        this.columns = props.columns;
       
        this.state = {
            error : false,
            data : [],
            showForm : false
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

    nameChangeHandler = (e) => {
        console.log(this.state);
        console.log('skdkkd');
    }
    cellInputForm = (e) => {
        console.log(e.target.innerText);
        e.target.innerHTML = ReactDOMServer.renderToStaticMarkup(<InputForm data={e.target.innerText} change={this.nameChangeHandler} id={e.target.getAttribute('field-name')} />);
        
        
    }
   
    render(){
        //console.log(this.state);

        const tableData = this.state.data;
        return (
            <table className="table">
                <TableHeader columns={this.columns}></TableHeader>
            <tbody>
                    <TableBody data={tableData} show={this.state.showForm} handle={this.cellInputForm}></TableBody>
            </tbody>
            </table>
        );
    }
}


export default DataGrid;