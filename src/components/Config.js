import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Config extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:props.name,
            columnDefs :[
                {headername : 'TYPE', field:'type', sortable:true, filter:true,  rowGroup: true },
                {headername : 'CODE', field:'code', sortable:true, filter : true},
                {headername : 'DESC', field:'desc', sortable:true, filter:true}               
            ],           
        };
    }

    componentDidMount(){
        fetch('http://localhost:5000/config/')
        .then(res=> res.json())
        .then(rowData=>this.setState({rowData}))
        .catch(err=>console.log(err))
    }

    render() {
      return (
          <div className="ag-theme-balham"
          style = {{
              width : 600,
              height : 200
          }}
          >
              <h1>{this.state.name}</h1>
          <AgGridReact 
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData} />
          
          </div>
      )
    }
  }

  export default Config;