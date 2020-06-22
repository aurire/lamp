import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {initiateNoteCreate, setAlert} from "../../../../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        initiateNoteCreate: (title, message) => dispatch(initiateNoteCreate(title, message)),
        setAlert: (msg) => dispatch(setAlert(msg))
    };
};

const mapStateToProps = (state) => {
    return {...state};
};

class NotesCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            message: '',
            error: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.initiateNoteCreate(this.state.title, this.state.message);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (true === this.props.loaded) {
            this.props.setAlert('Succesfuly created Note');
            this.props.history.push('/user/');
        }
    }
    render() {
        const error = '';

        return (
            <div>
                <h1>Create Note</h1>
                <form>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input onChange={this.handleChange} name="title" id="title" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <input onChange={this.handleChange} name="message" id="message" />
                    </div>
                    <input onClick={this.handleSubmit} type="submit" value="Create note" />
                    {error}
                </form>
            </div>
        );
    }
}

const connectedNotesCreate = connect(mapStateToProps, mapDispatchToProps)(NotesCreate);
export default withRouter(connectedNotesCreate);
