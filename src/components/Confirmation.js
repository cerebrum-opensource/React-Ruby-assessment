import React, { Component } from 'react'

export default class Confirmation extends Component {
  render() {
    let { accept, decline, index } = this.props;
    return (
      <React.Fragment>
        <div className="btn btn-primary" style={{marginRight:15}} onClick={() => { accept(index) }}>Sure</div>
        <div className="btn btn-danger" onClick={() => { decline(index) }}>No Thanks</div>
      </React.Fragment>
    )
  }
}
