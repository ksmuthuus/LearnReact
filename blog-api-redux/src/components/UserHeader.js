import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUser} from '../actions'

class UserHeader extends Component{
componentDidMount(){
  this.props.getUser(this.props.userId)
}

  render(){
    //Not good to extract data inside component rather keep away from compoenent (to mapStateToProps)
    //const user = this.props.users.find(user => user.id === this.props.userId)
    const {user}=this.props
    if(!user){
      return null
    }
    return <div className="header">{user.name}</div>
  }
}

const mapStateToProps = (state, ownProps) => {return {user: state.users.find(user => user.id === ownProps.userId)}}

export default connect(mapStateToProps,{getUser})(UserHeader)
