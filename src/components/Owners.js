import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Owners extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : props.name,
            columnDefs :[
                {headername : 'Name', field:'NAME', sortable:true, filter : true, resizable:true},
                {headername : 'ID_CARD', field:'ID_CARD', sortable:true, filter:true,resizable:true},
                {headername : 'ID_CARD_NO', field:'ID_CARD_NO', sortable:true, filter:true,resizable:true},
                {headername : 'PERMANENT_ADDRESS', field:'PERMANENT_ADDRESS', sortable:true, filter : true,resizable:true},
                {headername : 'CONTACT_NUMBER', field:'CONTACT_NUMBER', sortable:true, filter:true,resizable:true},
                {headername : 'EMAIL', field:'EMAIL', sortable:true, filter:true, resizable:true}
            ],           
        };
    }

    componentDidMount(){
        fetch('http://localhost:5000/member/')
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
              <h1>{this.state.name}</h1> 
          <AgGridReact 
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData} />
          
          </div>
      )
    }
  }

  export default Owners;