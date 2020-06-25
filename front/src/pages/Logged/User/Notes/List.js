import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import {fetchNotesList, setAlert, deleteNote} from "../../../../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotesList: (owner, page) => dispatch(fetchNotesList(owner, page)),
        deleteNote: (id) => dispatch(deleteNote(id)),
        setAlert: (msg) => dispatch(setAlert(msg))
    };
};

const mapStateToProps = (state) => {
    return {...state};
};

//http://localhost/api/notes?page=1
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        };
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    onDeleteClick(event) {
        event.preventDefault();
        this.props.deleteNote(event.target.dataset.id.split('/').pop());
    }
    getNotes() {
        if (this.props.notes[this.props.match.params.id]) {
            let notes = this.props.notes[this.props.match.params.id]['hydra:member'];

            const listItems = notes.map((note) =>
              <div key={note['@id']}>
                  <hr />
                  <p>{note['createdAt']}</p>
                  <p>{note['title']}</p>
                  <p>{note['shortMessage']}</p>
                  <Link to={"/user/notes/edit/" + note['@id'].split('/').pop()}>Edit Note</Link>
                  <span> </span>
                  <Link to={"/user/notes/share/" + note['@id'].split('/').pop()}>Share Note</Link>
                  <span> </span>
                  <a href="#" data-id={note['@id'].split('/').pop()} onClick={this.onDeleteClick} >Delete Note</a>
                  <hr />
              </div>
            );

            return listItems;
        }

        return '';
    }
    getPager() {
        if (this.props.notes[this.props.match.params.id]) {
            let view = this.props.notes[this.props.match.params.id]['hydra:view'];
            if (false === view['@id'].includes('page=')) {
                return '';
            }
            const first = view['hydra:first']
                ? <Link to={"/user/notes/list/" + view['hydra:first'].split('page=').pop()}>First</Link>
                : '';
            const next = view['hydra:next']
                ? <Link to={"/user/notes/list/" + view['hydra:next'].split('page=').pop()}>Next</Link>
                : '';
            const prev = view['hydra:previous']
                ? <Link to={"/user/notes/list/" + view['hydra:previous'].split('page=').pop()}>Previous</Link>
                : '';
            const last = view['hydra:last']
                ? <Link to={"/user/notes/list/" + view['hydra:last'].split('page=').pop()}>Last</Link>
                : '';
            const curPage = view['@id'].split('page=').pop();
            const space = <span> </span>;
            const current = view['@id']
                ? <span> {curPage} </span>
                : '';
            console.log(view);

            return <p>{first} {space} {prev} {space} {current} {space} {next} {space} {last}</p>;
        }
    }
    componentDidMount() {
        this.props.history.listen((location) => {
            let pathParts = location.pathname.split('/');
            const pageId = pathParts.pop();
            const lastPart = pathParts.pop();
            const preLastPart = pathParts.pop();
            if (preLastPart === 'notes' && lastPart === 'list') {
                if (false === this.props.dataFetchFinished && false === this.props.loading) {
                    let user = null === this.props.user ? localStorage.getItem('user') : this.props.user;
                    this.props.fetchNotesList(user, pageId);
                }
            }
        });
        if (false === this.props.dataFetchFinished && false === this.props.loading) {
            let user = null === this.props.user ? localStorage.getItem('user') : this.props.user;
            this.props.fetchNotesList(user, this.props.match.params.id);
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (Object.keys(this.props.deleted).length > 0) {
            let user = null === this.props.user ? localStorage.getItem('user') : this.props.user;
            this.props.fetchNotesList(user, this.props.match.params.id);
            if (this.state.msg !== "Note deleted succesfuly") {
                this.setState({msg: "Note deleted succesfuly"});
            }
        }
    }

    render() {
        return (
            <div>
                <p>This is user notes list, page: {this.props.match.params.id}</p>
                <p>{this.state.msg}</p>
                {this.getNotes()}
                {this.getPager()}
            </div>
        );
    }
}

const connectedList = connect(mapStateToProps, mapDispatchToProps)(List);
export default withRouter(connectedList);
