import React from "react";
import createReactClass from "create-react-class"

export default class Button extends React.Component{
    constructor(props){
    super(props);
    
    this.state={
    Cntr:100
    };
    }
    
    render(){
    return (<div><button onClick={this.props.handleClick}>100</button>
    <Resultant new={this.state.Cntr} />
    </div>);
    }
}
    
var Resultant= createReactClass({
    handleClick: function(){
        debugger
    this.setState({Cntr:this.state.Cntr+1});
    },
    
    render: function(){
    return <div><h2>{this.props.new}</h2>
    </div>
    }
})