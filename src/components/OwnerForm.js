import React from 'react';


export default class OwnerForm extends React.Component {

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
        fetch('http://localhost:5000/member/addMember', requestOptions)
            .then(response => response.json())
           .then(data => {console.log(data)})
            .catch(err => {console.log(err)});
        }

    render() {
        const  {name,idCard,idCardNo,address,contactNo,email} = this.state;
        return (
            <div>
                <form onSubmit = {this.submitHandler} >
                    <table>
                        <tr><td>Name : <input type='text' name='name' value={name} onChange={this.onChangeHandler}/></td>
                        <td>Id Card Type : <input type='text' name='idCard' value={idCard} onChange={this.onChangeHandler} /></td></tr>
                        <tr><td>Id Card Number : <input type='text' name='idCardNo' value={idCardNo} onChange={this.onChangeHandler}/></td>
                        <td>Address : <input type='text' name='address' value={address} onChange={this.onChangeHandler}/></td></tr>
                        <tr><td>Contact : <input type='text' name='contactNo' value={contactNo} onChange={this.onChangeHandler}/></td>
                        <td>Email id : <input type='text' name='email' value={email} onChange={this.onChangeHandler}/></td></tr>
                    </table>
                    <button type = 'submit'>Add</button>

                </form>
            </div>
        );

    }

}