import React, { Component } from "react";
import "./smart.css";

export default class Smart extends Component {
    state = {
        username: "",
        password: "",
        isLoggedIn: false
    }
    onInputChange = (event) => {
        console.log(event.target.name, event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onLogin = (event) => {
        event.preventDefault();
        console.log("Logging In");
        console.log(this.state)
        this.setState({
            isLoggedIn:!this.state.isLoggedIn
        })
    }
    render() {
        return (
            <div>
                <div className={this.state.isLoggedIn ? "show" : "noShow"}>I am Logged In</div>
                <button className="btn btn-primary" onClick={this.onLogin}>Logging In</button>
                <input onChange={this.onInputChange} type="text" name="username" />
                <input onChange={this.onInputChange} type="password" name="password" />
            </div>
        )
    }
}
