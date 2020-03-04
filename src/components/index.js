import React, { Component } from 'react';
import QuestionList from "./QuestionList";

const Questions = [
  {
    question: 'What is the average the airspeed velocity of a (European) unladen swallow ?',
    answer: '11 meters per second'
  },
  {
    question: 'What are the first 10 digits of PI ?',
    answer: '3.141592653'
  },
  {
    question: 'Country that has the highest in Barley Production ?',
    answer: 'Russia'
  },
  {
    question: 'The metal whose salts are sensitive to light is ?',
    answer: 'Silver'
  },
  {
    question: 'The Central Rice Research Station is situated in ?',
    answer: 'Cuttack'
  }
]

export default class QuestionContainer extends Component {

  render() {
    return (
      <div className="container">
        {Array.isArray(Questions) && Questions.length > 0
          ? Questions.map((item, index) => (
            <QuestionList item={item} index={index} />
          )) : null}
      </div>
    )
  }
}
