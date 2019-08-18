import React from 'react'
import axios from 'axios'
// import Moment from 'react-moment'
import {Link } from 'react-router-dom'
import Spinner from '../Layout/Spinner'
class Lyrics extends React.Component{
  state ={
    track:{},
    lyrics:{}
  }
  componentDidMount(){
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
         .then(res =>{
           this.setState({lyrics:res.data.message.body.lyrics});
           return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
         })
         .then(res =>{
           // this.setState({track:res.data.message.body.track})
           this.setState({track:res.data.message.body.track});
           // console.log(this.state.track)
         })
         .catch(err => console.log(err))
  }
  render(){
    const {track,lyrics } = this.state;
    console.log(track)
    if (track === undefined ||
      lyrics ===undefined ||
       Object.keys(track).length===0  ||
       Object.keys(lyrics).length===0){
      return <Spinner />
    } else {
      return (
        <React.Fragment>
          <Link to="/">Go back</Link>
          <div>
           <div>
              <h4>{track.track_name} by<strong> {track.artist_name}</strong></h4>
              <p>{lyrics.lyrics_body}</p>
              <strong>{track.explicit === 0 ? "No" : "Yes"}</strong>
           </div>
          </div>
        </React.Fragment>
      )
    }
  }
}
export default Lyrics
