import React, { Component } from 'react'
import {connect} from 'react-redux'
import {postCommentAction, getCommentAction} from 'actions'

class CommentBox extends Component{
  
  state={comment:''}
  
  handleChange = event => {
      this.setState({comment: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.postCommentAction(this.state.comment)
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
        <button className='fetchComments' onClick={this.props.getCommentAction}>Fetch</button>
      </div>
    )
  }
}

export default connect(null, {postCommentAction, getCommentAction})(CommentBox)