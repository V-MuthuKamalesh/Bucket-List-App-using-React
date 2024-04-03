import React from 'react'

const Header = (props) => {
  
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
    
  )
}
Header.defaultProps={
  title:"Bucket List of Me"
}
export default Header