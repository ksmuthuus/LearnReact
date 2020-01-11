import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectedSong} from '../actions'

class SongList extends Component {

  renderList(){
    return(this.props.songs.map(song => {
      return(
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => {this.props.selectedSong(song)}}>
              Slect
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    }))
  }
  render() {
    console.log('From SongList:',this.props)
    return <div className="ui divided list"> {this.renderList()} </div>
    }
  }

  const mapStateToProps = (state) => {
    return{songs:state.songs, pickSong:state.selectedSong}
  }

  export default connect(mapStateToProps, {selectedSong})(SongList)