import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Flat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : props.name,
            columnDefs :[
                {headername : 'FLOOR', field:'FLOOR', sortable:true, filter : true, resizable:true},
                {headername : 'FLAT_NO', field:'FLAT_NO', sortable:true, filter:true,resizable:true},
                {headername : 'SOLD', field:'SOLD', sortable:true, filter:true,resizable:true},
                {headername : 'AREA', field:'AREA', sortable:true, filter : true,resizable:true},
                {headername : 'NO_BEDROOMS', field:'NO_BEDROOMS', sortable:true, filter:true,resizable:true},
                {headername : 'NO_BATHROOM', field:'NO_BATHROOM', sortable:true, filter:true, resizable:true},
                {headername : 'NO_BALCONY', field:'NO_BALCONY', sortable:true, filter : true,resizable:true},
                {headername : 'NO_UTILITY', field:'NO_UTILITY', sortable:true, filter:true,resizable:true},
                {headername : 'HALL', field:'HALL', sortable:true, filter:true, resizable:true},
                {headername: 'FLAT_FACING', field:'FLAT_FACING', filter:true, resizable:true}
            ],           
                   
        };
    }

    componentDidMount(){
        fetch('http://localhost:5000/flat/')
        .then(res=> res.json())
        .then(rowData=>this.setState({rowData}))
        .catch(err=>console.log(err))
    }

    render() {
      return (
          <div className="ag-theme-balham"
          style = {{
              width : 850,
              height : 200
          }}
          >
              <h1 >{this.state.name}</h1>
          <AgGridReact 
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData} />
          
          </div>
      )
    }
  }

  export default Flat;