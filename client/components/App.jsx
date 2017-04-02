const React = require('react');
const NoteEditor = require('./NoteEditor.jsx');
const NotesGrid = require('./NotesGrid.jsx');
const NotesActions = require('../actions/NotesActions.js');
const NotesStore = require('../stores/NotesStore.js');

require('./App.less');

function getStateFromFlux() {
  return {
    isLoading: NotesStore.isLoading(),
    notes: NotesStore.getNotes()
  };
}

const App = React.createClass({
  getInitialState() {
      return getStateFromFlux();
  },

  componentWillMount() {
    NotesActions.loadNotes();
  },

  componentDidMount() {
    NotesStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    NotesStore.removeChangeListener(this._onChange);
  },

  handleNoteAdd(data) {
    NotesActions.createNote(data)
  },

  handleNoteDelete(note) {
    NotesActions.deleteNote(note.id)
  },

  render() {
    return (
      <div className='App'>
        <h2 className='App_header'> Notes App</h2>
        <NoteEditor onNoteAdd={this.handleNoteAdd} />
        <NotesGrid  notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
      </div>
    )
  },
  _onChange() {
       this.setState(getStateFromFlux());
   }
});

module.exports = App;
