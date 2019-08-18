import React from 'react'
import {Link} from 'react-router-dom'
const Track =  (props) =>{
  const {track} = props
  return (
    <div style={col}>
      <h5>{track.artist_name}</h5>
      <p >
        <strong>
        <i className="fas fa-play"></i>
        Track
        </strong>:{track.track_name}
      </p>
      <p >
        <strong>
        <i className="fas fa-compact-disc"></i>
        Album
        </strong>:{track.album_name}
      </p>
      <Link style={btn} to={`lyrics/track/${track.track_id}`}>
         <i className="fas fa-chevron-right"></i> View lyrics
      </Link>
    </div>
  );
}
const col = {
  gridTemplateColumns:'repeat(2,1fr)',
  marginBottom:'1rem',
  padding:'1rem',
  border:'0.15rem dotted #181818',
  borderRadius: '20px',
  backgroundColor:'steelBlue'
}
const btn={
  border:'none',
  textDecoration:'none',
  backgroundColor:'#181818',
  padding:'0.5rem',
  display:'block',
  borderRadius:'10px'
}
export default Track
