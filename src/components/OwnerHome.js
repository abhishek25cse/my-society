import React from 'react';
import Owners from './Owners';
import OwnerForm from './OwnerForm';


export default class OwnerHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'name':'',
            'idCard':'',
            'idCardNo':'',
            'address':'',
            'contactNo':'',
            'email':''
        };
    }


    render() {
        
        return (
            <div>
                <table>
               <tr>
                   <td><Owners name = "Owner Detail"/><br/><br/></td>
                   <td><OwnerForm name ="ADD new Owner"/></td></tr>
               </table>
            </div>
        );

    }

}