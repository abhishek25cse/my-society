import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Parking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            columnDefs :[
                {headername : 'FLOOR', field:'FLOOR', sortable:true, filter : true},
                {headername : 'SOLD', field:'SOLD', sortable:true, filter:true},
                {headername : 'AREA', field:'AREA', sortable:true, filter:true},
                {headername : 'TYPE', field:'TYPE', sortable:true, filter : true},
                {headername : 'IS_ENCLOSED', field:'IS_ENCLOSED', sortable:true, filter:true}
            ],           
        };
    }

    componentDidMount(){
        fetch('http://localhost:5000/parking/')
        .then(res=> res.json())
        .then(rowData=>this.setState({rowData}))
        .catch(err=>console.log(err))
    }

    render() {
      return (
          <div className="ag-theme-balham"
          style = {{
              width : 1020,
              height : 200
          }}
          >
          <AgGridReact 
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData} />
          
          </div>
      )
    }
  }

  export default Parking;