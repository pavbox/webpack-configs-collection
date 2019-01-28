import React from 'react'
import ReactDOM from 'react-dom'

import Button from './components/Button'
import Table from './components/Table'

ReactDOM.render(
  <div>
    <h1>some title</h1>
    <Table
      name="properties from parent"
    />
    <Button />
  </div>
  , document.getElementById("root")
)
