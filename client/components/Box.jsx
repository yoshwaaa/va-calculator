import React from 'react';
import {Motion, spring} from 'react-motion';

export default class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {openSmall: this.props.showQuestion, choiceText: '', revisedAnswer: false};
    this.buttonClick = this.buttonClick.bind(this);
  };
  componentDidMount(){
    this.setState({openSmall: false});
	};
  componentWillReceiveProps(nextProps) {
    this.setState({
      openSmall: nextProps.showQuestion
    });
  };
  buttonClick(e) {
    let buttonClicked = e.target.value;
    if (this.props.possibleEndPoint == true) {
      if (buttonClicked == "Second One" && this.props.endPointButton == "2") {
        $('#root').fadeOut();
        enterEndPoint(this.props.endPoint);
      } else if (buttonClicked == "First One" && this.props.endPointButton == "1") {
        $('#root').fadeOut();
        enterEndPoint(this.props.endPoint);
      } else if (this.props.endPointButton == "Both") {
        $('#root').fadeOut();
        enterEndPoint(this.props.endPoint);
      }
    }
    this.setState({openSmall: !this.state.openSmall});
    switch(buttonClicked) {
      case "First One":
        if (this.state.choiceText == this.props.button2) {
          console.log("changed answer");
          this.props.changeAnswer(this.props.boxID, this.props.stateValue);
        }
        this.setState({choiceText: this.props.button1});
        this.props.updateList(this.props.stateValue, this.props.btn1ID);
        break;
      case "Second One":
        if (this.state.choiceText == this.props.button1) {
          console.log("changed answer");
          this.props.changeAnswer(this.props.boxID, this.props.stateValue);
        }
        console.log(this.props.button2);
        this.setState({choiceText: this.props.button2});
        this.props.updateList(this.props.stateValue, this.props.btn2ID);
        break;
      case "Bring em back":
        console.log("changing answer!");
        this.setState({
          revisedAnswer: true
        });
        break;
      default:
        console.log("Nothing is programmed for this");
    };
  };
  render() {
    let parentBoxClass = this.props.testy;
    let boxClass = this.state.openSmall ? 'box little' : 'box';
    let smallBoxClass = this.state.openSmall ? 'open smallBox' : 'closed smallBox';
    let bigBoxClass = this.state.openSmall ? 'closed bigBox' : 'open bigBox';
    return(
      <div className={parentBoxClass}>
        <div className={boxClass}>
          <Motion style={{x: spring(this.state.openSmall ? 0 : -140, {stiffness: 200, damping: 16})}}>
            {({x}) =>
            <div className={smallBoxClass} style={{
                  WebkitTransform: `translate3d(0px, ${x}px, 0)`,
                  transform: `translate3d($0px, ${x}px, 0)`,
                }}>
              <h2 className="prevAnswerQuestion">{this.props.question}</h2>
              <div className="prevAnswer">
                <p>{this.state.choiceText}</p>
                <button onClick={this.buttonClick} value="Bring em back">Change Answer</button>
              </div>
            </div>
            }
          </Motion>
          <Motion style={{x: spring(this.state.openSmall ? 140 : -80, {stiffness: 200, damping: 16})}}>
            {({x}) =>
            <div className={bigBoxClass} style={{
                WebkitTransform: `translate3d(0px, ${x}px, 0)`,
                transform: `translate3d($0px, ${x}px, 0)`,
              }}>
              <h2 className="explanationHeader">{this.props.question}</h2>
              <p className="explanationText">{this.props.dummyText}</p>
              <button className={this.state.choiceText == this.props.button1 ? "activeButton" : ""} onClick={this.buttonClick} id={this.props.btn1ID} value="First One">{this.props.button1}</button>
              <button className={this.state.choiceText == this.props.button2 ? "activeButton" : ""} onClick={this.buttonClick} id={this.props.btn2ID} value="Second One">{this.props.button2}</button>
            </div>
            }
          </Motion>
        </div>
      </div>
    );
  }
}
