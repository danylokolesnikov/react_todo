const React = require('react');

require('./Note.less');

const Note = React.createClass({
  render() {

      const style = {backgroundColor: this.props.color}
      console.log(this.props.color)
      return (
        <div className='Note' style={style}>
          {
            this.props.title ? <h3 className='Note_title'>{this.props.title}</h3> : undefined
          }
          <span className='Note_delete' onClick={this.props.onDelete}>x</span>
          <div className='Note_text'>{this.props.children}</div>
        </div>
      )
  }
});

module.exports = Note;
