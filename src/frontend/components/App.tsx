import React from 'react'
import { hot } from 'react-hot-loader'
import Counter from './Counter'

interface Props {
  header: string
}

const App = ({ header }: Props) => (
  <div>
    <h1>{header}</h1>
    <h2>React with HMR works!</h2>
    <Counter />
  </div>
)

export default hot(module)(App)
