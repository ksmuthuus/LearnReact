import React from 'react'
import ReactDOM from 'react-dom'

class IndecisionApp extends React.Component {
  render() {
    const data={
      title:'Indecision',
      subtitle:'Put your life in the hands of a computer',
      options:['One', 'Two', 'Three']
    }

    return (<div>
    <Header title={data.title} subtitle={data.subtitle}/>
    <Action />
    <Options options={data.options}/>
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
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.map(opt => <Option optionText={opt}/>)
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
  render() {
    return (
      <div>
        AddOption component here
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
