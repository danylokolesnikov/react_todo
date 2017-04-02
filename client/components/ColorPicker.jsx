const React = require('react');
require ('./ColorPicker.less');

const ColorPicker = React.createClass({
  render() {

    const colors = ['#FFFFFF', '#446CB3', '#2C3E50', '#36D7B7', '#E67E22'];

    return <div
      className="Color_picker">
      {
        colors.map( color => {
          return <div
            key={color}
            className={this.props.value === color ? `Color_item selected` : `Color_item` }
            style={{backgroundColor: color}}
            onClick={this.props.onChange.bind(null,color)}
            />
        })
      }
    </div>
  }
})

module.exports = ColorPicker;
