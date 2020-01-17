import React, { Component } from 'react'

class CommentBox extends Component{
  
  state={comment:''}
  
  handleChange = event => {
      this.setState({comment: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    //TODO - Action creator
    this.setState({comment:''})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3> Enter a Comment</h3>
          <textarea onChange={this.handleChange} value={this.state.comment}/>
          <div>
            <button>Comment</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentBox