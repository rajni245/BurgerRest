import React from "react";

function Discountbutton(props) {
  const { children, style, className } = props;
  return (
    <>
      {/* <div style={style ? style:{background:'red',color:'#fff'} `btn${props.className}`}>{children}</div> */}
      <div className={`btn ${props.className}`} style={props.style}>
        {props.children}
      </div>
      {/* <button className={`btn ${props.className}`} style={props.style}>
      {props.children}
    </button> */}
    </>
  );
}

export default Discountbutton;
