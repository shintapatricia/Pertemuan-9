import { render } from 'express/lib/response'
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class App extends Component {
    constructor(){
        super()
        this.state={
            firstname : '',
            lastname : '',
            email : ''
        }
    }
}

addGuest(){
    fetch(
        'http://localhost:8000/myguests',
        {
            method: 'POST',
            headers : {
                Accept : 'application/json',
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(this.state)
        }
    ).then((response=>response.json()))
    .then(res=>{
        this.props.history.goBack()
    })
}

setValue(ev){
    this.setState({
        [ev.target.name] : ev.target.value
    })
}

render(){
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Firstname</td>
                        <td><input type="text" name="firstname" value={this.state.firstname} onChange={this.setValue.bind(this)}></input></td>
                    </tr>
                    <tr>
                    <td>Lastname</td>
                        <td><input type="text" name="lastname" value={this.state.lastname} onChange={this.setValue.bind(this)}></input></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="text" name="email" value={this.state.email} onChange={this.setValue.bind(this)}></input></td>
                    </tr>
                    <tr>
                        <td colSpan="3"><button type="button" onClick={this.addGuest.bind(this)}>Save</button></td>
                    </tr> 
                </tbody>
            </table>
        </div>
    )
}

export default withRouter(App)