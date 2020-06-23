import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import {fetchNotesList, setAlert} from "../../../../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotesList: (owner, page) => dispatch(fetchNotesList(owner, page)),
        setAlert: (msg) => dispatch(setAlert(msg))
    };
};

const mapStateToProps = (state) => {
    return {...state};
};

//http://localhost/api/notes?page=1
class List extends React.Component {
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
                this.props.fetchNotesList(this.props.user, pageId);
            }
        });
        this.props.fetchNotesList(this.props.user, this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <p>This is user notes list, page: {this.props.match.params.id}</p>
                {this.getNotes()}
                {this.getPager()}
            </div>
        );
    }
}

const connectedList = connect(mapStateToProps, mapDispatchToProps)(List);
export default withRouter(connectedList);
