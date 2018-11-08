import React, { Component } from "react"
import { Button } from 'antd'

export default class Counter extends Component {
  increment = () => {
    this.props.increment()
  }

  decrement = () => {
    this.props.decrement()
  }

  reset = () => {
    this.props.reset()
  }

  render() {
    const { count } = this.props

    return (
      <div>
        <h1>Count: <span>{count}</span></h1>
        <Button onClick={this.increment}>+1</Button>
        <Button onClick={this.decrement}>-1</Button>
        <Button onClick={this.reset}>Reset</Button>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
      </div>

      
    )
  }
}