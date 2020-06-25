import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {initiateNoteCreate, setAlert, fetchNote, initiateNoteEdit, deleteShare} from "../../../../actions";
import {Link} from "react-router-dom";

const CREATE = 'Create';
const EDIT = 'Edit';

const mapDispatchToProps = (dispatch) => {
    return {
        initiateNoteCreate: (ownerId, title, message) => dispatch(initiateNoteCreate(ownerId, title, message)),
        initiateNoteEdit: (ownerId, id, title, message) => dispatch(initiateNoteEdit(ownerId, id, title, message)),
        deleteShare: (id) => dispatch(deleteShare(id)),
        fetchNote: (id) => dispatch(fetchNote(id)),
        setAlert: (msg) => dispatch(setAlert(msg))
    };
};

const mapStateToProps = (state) => {
    return {...state};
};

class NotesCreateEdit extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            message: '',
            noteShares: null,
            error: null,
            refreshing: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        if (CREATE === this.getCreateOrEdit()) {
            this.props.initiateNoteCreate(
                this.props.user.split('/').pop(),
                this.state.title,
                this.state.message
            );
        } else {
            this.props.initiateNoteEdit(
                this.props.user.split('/').pop(),
                this.getNoteId(),
                this.state.title,
                this.state.message
            );
        }
    }
    handleDelete(event) {
        this.props.deleteShare(event.target.dataset.id.split('/').pop());
    }
    getCreateOrEdit() {
        if (this.props.match.params.id) {
            return EDIT;
        }

        return CREATE;
    }
    getNoteId() {
        if (this.props.match.params.id) {
            return this.props.match.params.id;
        }

        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (true === this.props.loaded) {
            if (true === this.props.mainActionFinished) {
                const msg = this.getCreateOrEdit() === CREATE
                    ? 'Succesfuly created Note'
                    : 'Succesfuly updated Note';
                this.props.setAlert(msg);
                this.props.history.push('/user/');
            } else if (true === this.props.dataFetchFinished) {
                const thisNote = this.props.note[this.getNoteId()];
                if (thisNote && this.state.refreshing) {
                    this.setState(
                        {
                            ...this.state,
                            refreshing: false,
                            title: thisNote.title,
                            message: thisNote.message,
                            noteShares: thisNote.noteShares
                        }
                    );
                }
            }
            //need to check if main action is finished
        }
    }
    componentDidMount() {
        this._isMounted = true;
        if (EDIT === this.getCreateOrEdit()) {
            const nid = this.getNoteId();
            if (nid !== 'create') {
                this.setState({...this.setState, refreshing: true})
                this.props.fetchNote(nid);
            }
        }
        this.props.history.listen((location) => {
            if (location.pathname.split('/').pop() === 'create') {
                if (this._isMounted) {
                    this.setState({
                        title: '',
                        message: '',
                        error: null,
                        refreshing: false
                    });
                }
            }
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    getForm() {
        const error = '';
        if (this.state.refreshing) {
            return <div>Refreshing Note data for editing</div>
        }

        return <form>
            <div>
                <label htmlFor="title">Title</label>
                <input onChange={this.handleChange} value={this.state.title} name="title" id="title" />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <input onChange={this.handleChange} value={this.state.message} name="message" id="message" />
            </div>
            <input onClick={this.handleSubmit} type="submit" value={this.getCreateOrEdit() + " Note"} />
            {error}
        </form>;
    }
    getNoteShares() {
        if (null === this.state.noteShares) {
            return '';
        }
        const items = this.state.noteShares.map((noteShare) =>
            <div key={noteShare['@id']}>
                {noteShare['user']['email']}
                {
                    this.props.deleted.hasOwnProperty(noteShare['@id'].split('/').pop())
                    ? ' - Sharing removed '
                    : <button onClick={this.handleDelete} className="share-delete" data-id={noteShare['@id']}>
                        Remove sharing</button>
                }
            </div>
        );

        return <div>
            <h2>Shared with:</h2>
            {items}
        </div>;
    }
    render() {

        return (
            <div>
                <h1>{this.getCreateOrEdit()} Note</h1>
                {this.getForm()}
                {this.getNoteShares()}
                <Link to={"/user/notes/share/" + this.props.match.params.id}>Share this note</Link>
            </div>
        );
    }
}

const connectedNotesCreateEdit = connect(mapStateToProps, mapDispatchToProps)(NotesCreateEdit);
export default withRouter(connectedNotesCreateEdit);
