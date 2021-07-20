import React from 'react';
import Config from './Config';
import ConfigForm from './ConfigForm';


export default class ConfigHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'code':'',
            'desc':'',
            'type':''
        };
    }


    render() {
        
        return (
            <div>
                <table>
               <tr>
                   <td><Config name = "Config Detail"/><br/><br/></td>
                   <td><ConfigForm name ="ADD new Config"/></td></tr>
               </table>
            </div>
        );

    }

}