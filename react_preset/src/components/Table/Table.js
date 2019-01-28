import React from 'react'
import './Table.css'

class Table extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="table">
        <div className="table__row">i'm {this.props.name}</div>
      </div>
    )
  }
}

export default Table
