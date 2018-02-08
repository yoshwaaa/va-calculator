class AnimateStuff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleMouseDown = this.handleMouseDown.bind(this);
  };
  handleMouseDown() {
    this.setState({open: !this.state.open});
  };
  render() {
    var divStyle = {
      backgroundColor: 'tomato',
      height: '100px',
      width: '100px'
    };
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}>
        </button>
        <Motion defaultStyle={{x: 0, y: 0}} style={{x: spring(100, {stiffness: 180, damping: 12}), y: spring(50, {stiffness: 180, damping: 12})}}>
          {value => <div style={{transform: `translate3d(0px, ${value.x}px, 0)`}}>{value.x}<br/>{value.y}</div>}
        </Motion>
        <div style={divStyle}></div>
      </div>
    );
  }
}
