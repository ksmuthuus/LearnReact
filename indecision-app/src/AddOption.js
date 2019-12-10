import React from 'react'

class AddOption extends React.Component {

  constructor(props){
    super(props)
    this.hanldeAddoption = this.hanldeAddoption.bind(this)
    this.state = {
      error:undefined 
    }
  }
  
    hanldeAddoption(e){
      e.preventDefault()
      const option = e.target.elements.option.value.trim()
      const error = this.props.hanldeAddoption(option)
      if(error){
        this.setState(() => ({error}))
      }
      else{
        this.setState(() => ({error:undefined}))
      }

      if(!error)
      {
        e.target.elements.option.value=''
      }
    }
  
    render() {
      return (
        <div>
        {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.hanldeAddoption}>     
            <input type='text' name='option'/>
            <button className='button'>Add option</button>
          </form>
        </div>
      );
    }
  }

  export default AddOption