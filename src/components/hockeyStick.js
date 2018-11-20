import React, {Component} from "react";

export default class HockeyStick extends Component{
    state = {
        oneProperty:"Stop Copying Me"
    }
    render(){
        return(
            <div>
                {this.state.oneProperty}
            </div>
        )
    }
}
