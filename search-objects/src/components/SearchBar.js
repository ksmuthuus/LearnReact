import React from 'react'

class SearchBar extends React.Component{
  state = {searchFor:''}

  onFormSubmit= (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.searchFor)
  }

  render(){
    return (
        <div className="ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label>Image Search</label>
              <input type="text" value={this.state.searchFor} onChange={e => this.setState({searchFor:e.target.value})}/>
            </div>
          </form>
        </div>)
  }
}

export default SearchBar