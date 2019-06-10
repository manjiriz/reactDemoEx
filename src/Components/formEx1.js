import React,{ Component, Fragment} from "react";

export default class FormEx1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            formErrors: {}
        };
        this.getName = this.getName.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate = (event) => {
        if(Object.keys(this.state.formErrors).length > 0) {
            event.preventDefault();
        }
    }

    getName = (event) => {
        this.setState({name: event.target.value});
        let formErrorsCopy = this.state.formErrors;

        if(event.target.value.length < 5) {
            formErrorsCopy.nameErr = "Cannot be less than 5";
        } else {
            delete formErrorsCopy["nameErr"];
        }
        this.setState({formErrors: formErrorsCopy})
    }

    render() {
        return (
            <form onSubmit={this.validate}>
                <label>Name:    </label>
                <input type="text" value={this.state.name} onChange={this.getName} />

                <div>{this.state.formErrors.nameErr}</div>
                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        );
    }
}

// On the click of "Submit" button, the onSubmit event will invoke the function Validate.
// It will validate if there are any error messages. If there are any error messages, then it will prevent submission of form.