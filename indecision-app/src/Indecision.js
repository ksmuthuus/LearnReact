import React from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'

class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this)
    this.handleSelectOption = this.handleSelectOption.bind(this)
    this.hanldeAddoption = this.hanldeAddoption.bind(this)
    this.handleRemoveOption = this.handleRemoveOption.bind(this)
    this.state={
      options: props.options
    }
  }

  componentDidMount(){
    try{
      const options = localStorage.getItem('options')
      const json = JSON.parse(options)
      if(json){
        this.setState(() => ({options: json}))
      }
    }
    catch(err){
      //Do nothing
    }
    console.log('Storage Restored!')
  }

  componentDidUpdate(prevProps, prevState){
   
    if(prevState.options.length !== this.state.options.length){
      const options = JSON.stringify(this.state.options) 
      localStorage.setItem('options',options)
      console.log('Storage Updated!')
    }
   
  }

  handleRemoveAllOptions(){
    this.setState(() => ({options:[]}))
  }

  handleRemoveOption(optionToRemove){
    this.setState(prevState => ({     
          options: prevState.options.filter(option => option!==optionToRemove)}))
  }

  handleSelectOption(){
    const index = Math.floor((Math.random() * this.state.options.length))
    const option = this.state.options[index]
    alert(option)
  }

  hanldeAddoption(option){
    if(!option){
      return 'Provide valid option!'
    }
    else if(this.state.options.indexOf(option) > -1){
      return 'Option already exists!'
    }
    this.setState((prevState) => ({options: prevState.options.concat(option)}))

  }

  render() {
    const data={
      title:'Indecision',
      subtitle:'Put your life in the hands of a computer'
    }

    return (<div>
    <Header title={data.title} subtitle={data.subtitle}/>
    <Action 
      hasOptions={this.state.options.length > 0}
      handleSelectOption={this.handleSelectOption}
      />
    <Options 
      handleRemoveAllOptions={this.handleRemoveAllOptions} 
      handleRemoveOption={this.handleRemoveOption}
      options={this.state.options}
      />
    <AddOption 
    hanldeAddoption={this.hanldeAddoption}
    />
  </div>)
  }
}

IndecisionApp.defaultProps ={
  options:['One', 'Two', 'Three']
}

export default IndecisionApp
