import React from 'react'

class Header extends React.Component{
  render(){
    return(
      <React.Fragment>
      <div style={navbar}>
        <ul style={navItems}>
           <li>Home</li>
           <li>About</li>
        </ul>
      </div>
      </React.Fragment>
    )
  }
}
export default Header
const navbar = {
  width: '100%',
  height:'60px',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#181818',
}
const navItems = {
  listStyleType:'none',
  margin:'0',
  // padding:'0',
  padding:'14px 16px',
  marginLeft:'auto',
  marginRight:'auto',
  color: '#f4f4f4',
  display:'flex'
}
