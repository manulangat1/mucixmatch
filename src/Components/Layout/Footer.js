import React from 'react'

class Footer extends React.Component{
  render(){
    return(
      <div style={footer}>
          <p style={footerp}>&copy;2019 langat designs</p>
      </div>
    )
  }
}
const footer = {
  backgroundColor:'#96221d'
}
const footerp ={
  padding: '2rem',
  margin: '0'
}
export default Footer
