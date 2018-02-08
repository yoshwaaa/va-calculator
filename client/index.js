import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Box from './components/Box.jsx';
import Box4 from './components/Box4.jsx';
import newState from './state/state.jsx';
import questionState from './state/questionState.jsx';

let vetTracker = [];
let dummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.";

class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {newState, questionState};
    this.updateList = this.updateList.bind(this);
    this.changeAnswer = this.changeAnswer.bind(this);
  };
  changeAnswer(boxID, btnID) {
    console.log(boxID);
    console.log(btnID);
    let removeItems = false;
    let itemsAfterKey = false;
    for (var key in newState) {
      if (removeItems == true) {
        newState[key] = "hide";
        questionState[key] = false;
      }
      if (key == btnID) {
        removeItems = true;
        vetTracker.push(`Jumped back to ${btnID}`);
        console.log(vetTracker);
      }
    }
    removeItems = false;
    this.setState({
      newState,
      questionState
    });
  };
  updateList(value, id) {
    newState[id] = "show";
    questionState[value] = true;
    this.setState({
      newState,
      questionState
    });
    vetTracker.push(value);
    console.log(vetTracker);
  };
  render() {
    return(
      <div>
        <Box dummyText={dummyText} button1="Veteran" button2="Family Member" question="Are you a veteran or family member?" boxID={1} updateList={this.updateList} changeAnswer={this.changeAnswer} testy={this.state.newState.val1} btn1ID="veteran" btn2ID="familyMember" stateValue="val1" showQuestion={questionState.val1}/>
        <Box dummyText={dummyText} button1="Honorably" button2="Dishonorably" question="Were you honorably or dishonorably discharged?" boxID={2} updateList={this.updateList} changeAnswer={this.changeAnswer} testy={this.state.newState.veteran} btn1ID="honorablyDischarged" btn2ID="dishonorablyDischarged" stateValue="veteran" showQuestion={questionState.veteran} possibleEndPoint={true} endPoint="endPoint1" endPointButton="2"/>
        <Box4 dummyText={dummyText} button1="Mesothelioma" button2="Asbestosis" button3="Pleural Plaque" button4="Other" question="What were you diagnosed with?" boxID={11} updateList={this.updateList} changeAnswer={this.changeAnswer} testy={this.state.newState.honorablyDischarged} btn1ID="mesoDiagnosis" btn2ID="lungCancerDiagnosis" btn3ID="asbestotisPPDiagnosis" btn4ID="" stateValue="honorablyDischarged" showQuestion={questionState.honorablyDischarged} possibleEndPoint={true} endPoint="#endPoint2"/>
        <Box dummyText={dummyText} button1="Yes" button2="No" question="Was a biopsy performed?" boxID={4} updateList={this.updateList} changeAnswer={this.changeAnswer} testy={this.state.newState.mesoDiagnosis} btn1ID="asbestotisPPDiagnosis" btn2ID="asbestotisPPDiagnosis" stateValue="mesoDiagnosis" showQuestion={questionState.mesoDiagnosis}/>
        <Box dummyText={dummyText} button1="Yes" button2="No" question="Will your doctor write a letter?" boxID={5} updateList={this.updateList} changeAnswer={this.changeAnswer} testy={this.state.newState.lungCancerDiagnosis} btn1ID="asbestotisPPDiagnosis" btn2ID="asbestotisPPDiagnosis" stateValue="lungCancerDiagnosis" showQuestion={questionState.lungCancerDiagnosis}/>
        <Box dummyText={dummyText} button1="Military" button2="Civilian" question="Where was the majority of your exposure?" boxID={6} updateList={this.updateList} changeAnswer={this.changeAnswer} testy={this.state.newState.asbestotisPPDiagnosis} btn1ID="militaryExposure" btn2ID="civilianExposure" stateValue="asbestotisPPDiagnosis" showQuestion={questionState.asbestotisPPDiagnosis}/>
        <Box dummyText={dummyText} button1="In The Military" button2="Civilian Life" question="How Was Your Family Member Injured?" boxID={10} updateList={this.updateList} changeAnswer={this.changeAnswer} testy={this.state.newState.familyMember} showQuestion={questionState.familyMember}/>
      </div>
    );
  }
}



ReactDOM.render(<CalcApp/>, document.getElementById('root'));
