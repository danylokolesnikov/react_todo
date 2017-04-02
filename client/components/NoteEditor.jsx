const React = require('react');
const ColorPicker = require('./ColorPicker.jsx');

require('./NoteEditor.less');

const NoteEditor = React.createClass({
  getInitialState() {
      return {
        title: '',
        text: '',
        color: '#FFFFFF'
      };
  },

  handleTextChange(event) {
    this.setState({ text: event.target.value});

  },

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  },

  handleColorChange(color) {

    this.setState({ color });
    console.log(this.state)
  },

  handleNoteAdd() {
    const newNote = {
      title: this.state.title,
      text: this.state.text,
      color: this.state.color
    };

    this.props.onNoteAdd(newNote);
    // console.log(this.state)
    this.setState({ text:'', title:'', color:'#FFFFFF'});
  },

  render() {
    return (
      <div className='NoteEditor'>
        <input
          className='NoteEditor_title'
          placeholder='Enter title'
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <textarea
          className='NoteEditor_text'
          rows={5}
          placeholder = 'Enter note text'
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <div className='NoteEditor_footer'>
          <ColorPicker
            value={this.state.color}
            onChange={this.handleColorChange}
          >
          </ColorPicker>
          <button
            className='NoteEditor_button'
            disabled={!this.state.text}
            onClick={this.handleNoteAdd}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
});

module.exports = NoteEditor;
