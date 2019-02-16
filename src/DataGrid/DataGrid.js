import React,{Component} from 'react';


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

    componenetDidMount(props){

    }

    render(){
        return (
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
            </table>
        );
    }
}


export default DataGrid;