import React from 'react';


export default class ConfigForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'code':'',
            'desc':'',
            'type':''
        };
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e=>{
        e.preventDefault();
        console.log(this.state);
        const requestOptions = {
            method: 'POST',
            headers: {  "Content-Type": "application/json",
                         'Accept': 'application/json, text/plain, */*', },
            body: JSON.stringify(this.state)
        };
        fetch('http://localhost:5000/config/add', requestOptions)
            .then(response => response.json())
           .then(data => {console.log(data)})
            .catch(err => {console.log(err)});
        }

    render() {
        const  {code,desc,type} = this.state;
        return (
            <div>
                <form onSubmit = {this.submitHandler} >
                    <table>
                    <tr><td>Code : <input type='text' name='code' value={code} onChange={this.onChangeHandler}/></td></tr>
                  <tr><td>Desc : <input type='text' name='desc' value={desc} onChange={this.onChangeHandler} /></td></tr>
                  <tr><td>Type : <input type='text' name='type' value={type} onChange={this.onChangeHandler}/></td></tr>
                    </table>
                    <button type = 'submit'>Add</button>

                </form>
            </div>
        );

    }

}