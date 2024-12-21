import React from 'react'

function Custombackground(props) {
    const {children,style,className}=props
  return (
    <div className={`btn ${props.className}`} style={props.style}>
      {props.children}
      </div>
  );
}

export default Custombackground