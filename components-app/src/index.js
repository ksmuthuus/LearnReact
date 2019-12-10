import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = function () {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Muthu" timeAgo="Today at 5:00 PM" avatar={faker.image.avatar()} content="Nice post!"/>    
      </ApprovalCard>  
      <ApprovalCard>
        <CommentDetail author="Raj" timeAgo="Yesterday at 5:00 PM" avatar={faker.image.avatar()} content="Couldt have been post!"/>
      </ApprovalCard>  
      <ApprovalCard>
        <CommentDetail author="Ravi" timeAgo="Yesterday at 1:00 PM" avatar={faker.image.avatar()} content="Nice post!"/>
      </ApprovalCard>
        
    </div>
  );
}

ReactDOM.render(
<App/>, document.querySelector('#root')
)