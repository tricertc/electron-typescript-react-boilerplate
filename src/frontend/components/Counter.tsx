import React, { PureComponent } from 'react'

interface Props {}

interface State {
  count: number
}

class Counter extends PureComponent<Props, State> {
  state = {
    count: 0
  }

  increment = (n: number) => () => {
    this.setState({
      count: this.state.count + n
    })
  }

  render() {
    return (
      <div>
        <h3>Counter</h3>
        <p>
          <strong>{this.state.count}</strong>{' '}
          <button onClick={this.increment(-1)}>-</button>
          <button onClick={this.increment(1)}>+</button>
        </p>
      </div>
    )
  }
}

export default Counter
