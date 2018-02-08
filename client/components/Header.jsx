import React from 'react';




export default class Header extends React.Component {

  render() {
    return (
      <div>
        <h3>I am the header, and I was made by {this.props.name}</h3>
        <button onClick={this.props.changeThis}>I am the header button, and I demand to be clicked!</button>
        <Item1 heading="Are you or a loved one a honorably discharged veteran?" sentence="Attention: If you or a loved one has been diagnosed with mesothelioma, you may be entitled to financial compensation" itemClass="class1"/>
        <Item1 heading="¿Es usted o un ser querido un veterano con una licencia honorable?" sentence="Atención: Si usted o un ser querido ha sido diagnosticado con mesotelioma, puede tener derecho a una compensación financiera" itemClass="class2"/>
      </div>
    );
  }
}

class Item1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: true, clicked: false};
    this.hideMe = this.hideMe.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  hideMe() {
    this.setState({
      visible: !this.state.visible
    });
  };
  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    let elementClass = this.state.clicked ? 'clicked' : 'notClicked';
    if (this.state.visible) {
      return (
        <div className={this.props.itemClass}>
          <h2 className={elementClass}>{this.props.heading}</h2>
          <button onClick={this.handleClick}>Change Class</button>
          <p>{this.props.sentence}</p>
          <button onClick={this.hideMe}>Hide me</button>
        </div>
      );
    } else {
      return (
        <div className={this.props.itemClass}>
          <p>You can't see me! Right?</p>
          <button onClick={this.hideMe}>Show me</button>
        </div>
      );
    }
  }
}
