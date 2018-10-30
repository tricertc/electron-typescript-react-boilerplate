import React from 'react'
import Counter from './Counter'

interface Props {
  header: string
}

const App = ({ header }: Props) => (
  <div>
    <h1>{header}</h1>
    <h2>React works!</h2>
    <Counter />
  </div>
)

export default App
