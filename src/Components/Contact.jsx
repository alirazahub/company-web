import React, { useState } from 'react'

function Contact() {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    phone: '',
    msg: '',
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevData) =>{
      return{
        ...prevData,
        [name]: value,
      };
    });
  }
  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`My name is ${data.fullName} my phone number is ${data.phone} and my email is ${data.email} and u have following message ${data.msg}`);
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center custom_title"> Contact <span> Us </span></h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your FullName" required name= "fullName" value = {data.fullName} onChange={inputEvent}/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">PhoneNumber</label>
                <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Mobile Number" required name= "phone" value = {data.phone} onChange={inputEvent}/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required name= "email" value = {data.email} onChange={inputEvent}/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required name= "msg" value = {data.msg} onChange={inputEvent}></textarea>
              </div>

              <div className="mb-3">
                <button className="btn btn-outline-warning" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;