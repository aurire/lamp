import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import {fetchNotesList, setAlert} from "../../../../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotesList: (page) => dispatch(fetchNotesList(page)),
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
    componentDidMount() {
        this.props.fetchNotesList(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <p>This is user notes list, page: {this.props.match.params.id}</p>
                {this.getNotes()}
            </div>
        );
    }
}

const connectedList = connect(mapStateToProps, mapDispatchToProps)(List);
export default withRouter(connectedList);
