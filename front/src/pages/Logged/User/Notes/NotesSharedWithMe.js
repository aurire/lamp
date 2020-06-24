import React from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {fetchSharedForUser, setAlert} from "../../../../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSharedForUser: (id, page) => dispatch(fetchSharedForUser(id, page)),
        setAlert: (msg) => dispatch(setAlert(msg))
    };
};

const mapStateToProps = (state) => {
    return {...state};
};


class NotesSharedWithMe extends React.Component {
    componentDidMount() {
        let user = this.props.user;
        if (null === user) {
            user = localStorage.getItem('user');
        }
        this.props.fetchSharedForUser(user, 1);
    }

    getNotes() {
        if (this.props.shared[this.props.match.params.id]) {
            let notes = this.props.shared[this.props.match.params.id]['hydra:member'];

            console.log('notes');
            console.log(notes);

            const listItems = notes.map((note) =>
                <div key={note['note']['@id']}>
                    <hr />
                    <p>{note['noteOwner']}</p>
                    <p>{note['note']['createdAt']}</p>
                    <p>{note['note']['title']}</p>
                    <p>{note['note']['message']}</p>
                    <hr />
                </div>
            );

            return listItems;
        }

        return '';
    }

    getPager() {
        return '';
    }

    render() {
        return (
            <div>
                <h1>Notes shared with me</h1>
                {this.getNotes()}
                {this.getPager()}
            </div>
        );
    }
}

const ConnectedNotesSharedWithMe = connect(mapStateToProps, mapDispatchToProps)(NotesSharedWithMe);
export default withRouter(ConnectedNotesSharedWithMe);
