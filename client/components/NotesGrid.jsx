const React = require('react');
const Note = require('./Note.jsx');

require('./NotesGrid.less');

const NotesGrid = React.createClass({
  render() {
    return (
      <div className='NotesGrid'>
        {
          this.props.notes.map(note => {
            return <Note key={note.id}
            title={note.title}
            onDelete={this.props.onNoteDelete.bind(null, note)}
            color={note.color}
            >
            {note.text}
            </Note>
          })
        }
        {
          console.log(this.props)
        }
      </div>
    )
    // return (
    //   <div
    //     className='NotesGrid'
    //   >
    //     {
    //       this.props.notes.map(note => {
    //         <Note
    //           key = {note.id}
    //           title = {note.title}
    //           onDelete = {this.props.onNoteDelete.bind(null, note)}
    //           color = {note.color}
    //         >
    //           {note.text}
    //         </Note>
    //       })
    //     }
    //   </div>
    // );
  }
});

module.exports = NotesGrid;
