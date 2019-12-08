import React from 'react'
import ReactDOM from 'react-dom'

class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this)
    this.handleSelectOption = this.handleSelectOption.bind(this)
    this.state={
      options:['One', 'Two', 'Three','Four']
    }
  }

  handleRemoveAllOptions(){
    this.setState(() => {
      return{options: []}
    })
  }

  handleSelectOption(){
    const index = Math.floor((Math.random() * this.state.options.length))
    const option = this.state.options[index]
    alert(option)
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
      options={this.state.options}
      />
    <AddOption />
  </div>)
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {

  render() {
    return (
      <div>
        <button 
          onClick={this.props.handleSelectOption}
          disabled={!this.props.hasOptions}
          >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props){
    super(props)
  }

  
  render() {
    return (
      <div>
      <button onClick={this.props.handleRemoveAllOptions}>Remove All</button>
        {
          this.props.options.map(opt => <Option key={opt} optionText={opt}/>)
        }

        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  hanldeAddoption(e){
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    alert(option)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.hanldeAddoption}>
          <input type='text' name='option'/>
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
