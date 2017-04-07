import React, { Component } from 'react'

export default class StatCounter extends Component {
  render () {
    return (
      <div className="uk-margin-small-left">
        <div className="uk-badge">{this.props.count}</div>
      </div>
    )
  }
}
