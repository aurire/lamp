import React from "react";
import {connect} from 'react-redux';
import {initiateNoteShare, setAlert, fetchByEmail} from "../../../../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        initiateNoteShare: (note, user) => dispatch(initiateNoteShare(note, user)),
        setAlert: (msg) => dispatch(setAlert(msg)),
        fetchByEmail: (email, page) => dispatch(fetchByEmail(email, page))
    };
};

const mapStateToProps = (state) => {
    return {...state};
};

class NotesShare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            userid: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleShareSubmit = this.handleShareSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        });
    }
    handleSearchSubmit(event) {
        event.preventDefault();
        this.props.fetchByEmail(this.state.user, 1);

        return false;
    }
    handleShareSubmit(event) {
        event.preventDefault();
        this.props.initiateNoteShare(
            "/api/notes/" + this.props.match.params.id,
            this.state.userid
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
                <form onSubmit={this.handleSearchSubmit}>
                    <label htmlFor="user">Email</label>
                    <input name="user" onChange={this.handleChange} id="user" value={this.state.user} />
                    <input type="submit" value="Search" />
                </form>
                <p>{error}</p>
            </div>
        );
    }
    getResults() {
        if (this.props.search[this.state.user]) {
            let res = this.props.search[this.state.user][1]['hydra:member'];

            var results = res.filter(function(result) {
                if (result.isMe) {
                    return false;
                }
                return true;
            }).map(function(result) {
                return <option value={result['@id']} key={result['@id']}>{result.email}</option>;
            });

            return (
                <form onSubmit={this.handleShareSubmit}>
                    <select id="userid" name="userid" onChange={this.handleChange}>
                        {results}
                    </select>
                    <input type="submit" value="Share" />
                </form>
            );
        }

        return '';
    }
    render() {
        return (
            <div>
                <h1>Share a note</h1>
                <p>Begin by searching for a user by his email. Then hit share to share with him.</p>
                {this.getForm()}
                {this.getResults()}
            </div>
        );
    }
}

const ConnectedNotesShare = connect(mapStateToProps, mapDispatchToProps)(NotesShare);
export default ConnectedNotesShare;
