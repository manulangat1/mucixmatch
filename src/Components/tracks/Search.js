import React from 'react'
import axios from 'axios'

import {Consumer} from '../../context'
class Search extends React.Component{
  state = {
    trackTitle:''
  }
  onChange = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }
  findTrack = (dispatch,e) =>{
    e.preventDefault()
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
         .then(res => {
           // console.log(res.data)
           dispatch({
             type:'SEARCH_TRACKS',
             payload: res.data.message.body.track_list
           })
           this.setState({trackTitle:''})
           // this.setState({track_list:res.data.message.body.track_list})
         })
         .catch(err => console.log(err))
  }
  render(){
    return(
      <div>
      <Consumer >
      {value =>{
        const {dispatch} = value;
        return(
          <div>
              <form onSubmit={this.findTrack.bind(this,dispatch)}>
                 <h2>Seacrh for a song</h2>
                 <p>Get the lyrics for any song</p>
                 <div>
                     <input type="text" placeholder="Song Title..." name="trackTitle" value={this.state.trackTitle} onChange={this.onChange.bind(this)}/>
                 </div>
                 <input type="submit" value="Get track Lyrics" />
              </form>
          </div>
        )
      }}
      </Consumer>
      </div>
    )
  }
}
export default Search
