import React from 'react'

function Customabout(props) {
  return (
    <div className=' '>
         <section className="History  bg-light">
      <div className="container-fluid   text-center ">
        <h5 className="fw-bold text-black">{props.children}</h5>
        {/* <h1 className="fw-bold">{props.shortdesciption}</h1> */}
      </div>
      <div className="d-flex justify-content-center">
      <div class="d-flex" style={{height: "70px"}}>
  <div class="vr"></div>
</div>
  </div>
  <div class="d-flex justify-content-center p-5">
  <div class="row">
    <div class="col d-flex align-items-start justify-content-end pe-4">
      <div>
        <h1 className="fw-bold text-danger">Origins</h1>
        <h6 className="">
          Lorem ipsum integer aptent aliquet felis turpis interdum rutrum, pre enectus lorem litora senectus aptent vehicula velit eget, id placerat habitant neque ligula vivamus nulla euismod arcu. Tristique egestas posuere inceptos vitae eleifend commo, nisit quam, scelerisque.
        </h6>
      </div>
    </div>
    
  
    <div class="col-auto d-flex align-items-start justify-content-center">
      <div
        style={{
          width: "0.5px",
          height: "105%",
          backgroundColor: "grey",
        }}
      ></div>
    </div>

    <div class="col d-flex align-items-start justify-content-start ps-4">
      <div>
        <h1 className="fw-bold text-danger">Story</h1>
        <h6>
          Lorem ipsum integer aptent aliquet enectus lorem litora senectus aptent vehicula velit eget, id placerat habitant neque ligula vivamus nulla euismod arcu. Tristique egestas posuere inceptos vitae eleifend commodo ante lectus, nisi felis turpis interdum rutrum, pretium nibh placerat metus rhoncus sit quam, scelerisque placerat sagittis facilisis nisi litora cras. Lacinia elit leo scelerisque.
        </h6>
      </div>
    </div>
  </div>
</div>

      </section>
    </div>
  )
}

export default Customabout