import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



const Form = () => {
  const data = { name: "", email: "", password: "" };
  const [InputData, SetInputData] = useState(data);
  const[flag,SetFlag]=useState(false);
  useEffect(()=>{
console.log("register");

  },[flag])

  function handleData(e) {
    SetInputData({ ...InputData, [e.target.name]: e.target.value });
    console.log(InputData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!InputData.name || !InputData.email || !InputData.password) {
      alert("All field are mandatory");
     
  }
  else{
    SetFlag(true)
  }
}

  return (
    <>
      <div className="bg-primary">
      <pre className="">{(flag)?<h2>hello,{InputData.name},you are register</h2>:""}</pre>
        <form className="container" onSubmit={handleSubmit} >
          <div className="header">
            <h1 className="bg-primary d-flex justify-content-center ">
              Registration Form
            </h1>
          </div>
          <div className="">
            <div className="">
              <input
                className=""
                type="value"
                name="name"
                value={InputData.name}
                onChange={handleData}
                placeholder="enter your name"
              ></input>
            </div>

            <br></br>
            <div>
              <input
                className=""
                type="value"
                name="email"
                value={InputData.email}
                onChange={handleData}
                placeholder="enter your email"
              ></input>
            </div>
            <br></br>
            <div>
              <input
                className=""
                type="value"
                name="password"
                value={InputData.password}
                onChange={handleData}
                placeholder="enter your password"
              ></input>
            </div>
          </div>
          <div className=" d-flex justify-content-center mt-5 ">
          <button className="bg-success p-2 m-2 ">Submit</button>
        </div>
        </form>

      
      </div>
      <div className="video-background">
      <video autoPlay muted loop>
        <source src="/aaplevideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Your Content Here</h1>
      </div>
    </div>
    </>
  );
};

export default Form;
