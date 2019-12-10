import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
    <button onClick={props.handleRemoveAllOptions}>Remove All</button>
      {props.options.length === 0 && <p>Add few options to get started!</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleRemoveOption={props.handleRemoveOption}
          />
        ))
      }
    </div>
  )

export default Options