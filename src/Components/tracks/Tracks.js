import React from 'react'
import {Consumer} from '../../context'
import Spinner from '../Layout/Spinner'
import Track from './Track'
class Tracks extends React.Component{
  render(){
    return(
      <div>
        <Consumer>
           {value =>{
             console.log(value)
             const {track_list,heading } = value
             if (track_list === undefined || track_list.length === 0) {
               return <Spinner />
             } else {
               return  (
                 <React.Fragment>
                 <h3 style={center}>{heading}</h3>
                 <div style={row}>
                 {track_list.map(item =>(
                   <Track track={item.track} key={item.track.track_id}/>
                 ))}
                 </div>
                 </React.Fragment>
               )
             }
           }}
        </Consumer>
      </div>
    )
  }
}
const row = {
  display:'grid',
  gridTemplateColumns:'repeat(2,1fr)',
  gridGap:'1rem'
}
const center = {
  marginBottom:'1rem',
  textAlign:'center'
}
export default Tracks
