import React from "react";
import {connect} from 'react-redux';
import {fetchNote, initiateNoteShare, setAlert} from "../../../../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        initiateNoteShare: (note, user) => dispatch(initiateNoteShare(note, user)),
        fetchNote: (id) => dispatch(fetchNote(id)),
        setAlert: (msg) => dispatch(setAlert(msg))
    };
};

const mapStateToProps = (state) => {
    return {...state};
};

class NotesShare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
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
        this.props.initiateNoteShare(
            "/api/notes/" + this.props.match.params.id,
            this.state.user
        );

        return false;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (true === this.props.loaded) {
            if (true === this.props.mainActionFinished) {
                this.props.setAlert('Note shared succesfuly');
                this.props.history.push('/user/');
            }
        }
    }

    getForm() {
        let error = '';
        if (this.props.error !== null) {
            if (
                this.props.error.response
                && this.props.error.response.data
                && this.props.error.response.data.error
            ) {
                error = <p>{this.props.error.response.data.error}</p>
            } else if (
                this.props.error.response
                && this.props.error.response.data
            ) {
                error = <p>{this.props.error.response.data['hydra:description'].replace(/^note\:\s/, "")}</p>
            } else {
                error = <p>{this.props.error.message}</p>
            }
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="user">User</label>
                    <input name="user" onChange={this.handleChange} id="user" value={this.state.user} />
                    <input type="submit" value="Share" />
                </form>
                <p>{error}</p>
            </div>
        );
    }
    render() {
        return (
            <div>
                <p>PlaceholderNotesShare{this.props.match.params.id}</p>
                {this.getForm()}
            </div>
        );
    }
}

const ConnectedNotesShare = connect(mapStateToProps, mapDispatchToProps)(NotesShare);
export default ConnectedNotesShare;
