import React, { Component } from 'react';
import Notifications from "./Notifications";

export default class QuestionList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggle: {},
      answer_state: {}
    }
  }

  handleClick = (index) => {
    let toggle = this.state.toggle;
    toggle[index] = true;
    this.setState({
      toggle
    });
  }

  accept = (index) => {
    let answer_state = this.state.answer_state;
    answer_state[index] = true;
    this.setState({
      answer_state
    });
  }

  decline = (index) => {
    let {answer_state , toggle } = this.state;
    answer_state[index] = false;
    toggle[index] = false;
    this.setState({
      answer_state,
      toggle
    });
  }

  render() {
    let { item: { question, answer }, index } = this.props;
    let { toggle, answer_state } = this.state;
    return (
      <div style={{padding:20, backgroundColor:'#f2f3f6', marginTop:20}}>
        {toggle[index] == true && <Notifications message={question} type={'message'} accept={this.accept} decline={this.decline} index={index} />}
        <p className="question">{question}</p>
       
        <div className={"btn btn-primary show-answer " + (answer_state[index] == true ? 'disabled' : '')} onClick={() => { this.handleClick(index) }}>{'Show Answer'}</div> 
        {answer_state[index] == true && <p className="answer">{answer}</p>}
      </div>
    )
  }
}
