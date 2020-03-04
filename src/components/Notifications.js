import React, { Component } from 'react';
import Confirmation from "./Confirmation";

export default class Notifications extends Component {


  render() {
    let { message, type } = this.props;

    let classes;

    switch (type) {
      case 'error':
        classes = 'alert-success';

      case 'caution':
        classes = 'alert-success';

      case 'success':
        classes = 'alert-success';

      case 'message':
        classes = 'alert-info';

      default:
        classes = 'alert-info';
    }

    if (message) {
      let { accept, decline, index } = this.props;
      return (
        <div className={`alert ${classes}`}>
          <p>{message}</p>
          <Confirmation accept={accept} decline={decline} index={index}/>
        </div>
      )

    }

    return null;
  }
}
