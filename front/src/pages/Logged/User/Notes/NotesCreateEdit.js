import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {initiateNoteCreate, setAlert, fetchNote, initiateNoteEdit} from "../../../../actions";

const CREATE = 'Create';
const EDIT = 'Edit';

const mapDispatchToProps = (dispatch) => {
    return {
        initiateNoteCreate: (ownerId, title, message) => dispatch(initiateNoteCreate(ownerId, title, message)),
        initiateNoteEdit: (ownerId, id, title, message) => dispatch(initiateNoteEdit(ownerId, id, title, message)),
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
            error: null,
            refreshing: false
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
                            message: thisNote.message
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
            const ur = location.pathname.split('/').pop();
            console.log('ur');
            console.log(ur);
            if (ur === 'create') {
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
    render() {
        return (
            <div>
                <h1>{this.getCreateOrEdit()} Note</h1>
                {this.getForm()}
            </div>
        );
    }
}

const connectedNotesCreateEdit = connect(mapStateToProps, mapDispatchToProps)(NotesCreateEdit);
export default withRouter(connectedNotesCreateEdit);
