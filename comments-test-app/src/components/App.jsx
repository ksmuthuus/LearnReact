import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {changeAuthStatus} from 'actions'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'


class App extends Component{

  renderAuthStatus(){
     console.log('AUTH: ', this.props.auth)
      if(this.props.auth){
        return (<button onClick={() => {this.props.changeAuthStatus(false)}}>SignOut</button>)
      }
      else{
        return (<button onClick={() => {this.props.changeAuthStatus(true)}}>SignIn</button>)
      }

  }

  renderHeader(){
    return(
    <div>
      <nav className="navbar navbar-light bg-light">
        <ul className='nav nav-pills'>
          <li className='nav-item'>
          <span className="navbar-brand mb-0 h1">
            <Link to='/'>Home</Link>
          </span>
          </li>
          <li className='nav-item'>
          <span className="navbar-brand mb-0 h1">
            <Link to='/post'>Post</Link>
          </span>
          </li>
          <li className='nav-item'>
          <span className="navbar-brand mb-0 h1">
          {this.renderAuthStatus()}
          </span>
            
          </li>
        </ul>
      </nav>
    </div>
    )
  }

  render(){
    return(
      <div className='container-fluid'>
        {this.renderHeader()}
        <Route path='/post' component={CommentBox}/>
        <Route path='/' exact component={CommentList}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    auth:state.auth
  }
}

export default connect(mapStateToProps,{changeAuthStatus})(App)