import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
  state={lat: null, long: null, errorMessage:null}

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => {
        //Used to simulate delay so as to view Loadng sreen
        setTimeout(() => {
          this.setState({
            //errorMessage:err.message,
    
            lat:31})
        }, 3000)
        });
  }

  getSeasonData(){
    if(this.state.errorMessage && !this.state.lat)
    return <div>Error: {this.state.errorMessage}</div>

    if(!this.state.errorMessage && this.state.lat)
    return <SeasonDisplay lat={this.state.lat}/>

    return <Spinner message='Please acccept location access'/>
  }

  render() {
    return <div>{this.getSeasonData()}</div>;

  }
}

ReactDOM.render( 
  <App/> , document.querySelector('#root')
)