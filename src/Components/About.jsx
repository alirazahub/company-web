import React from 'react';
import ProfileCard from './ProfileCard';

function About() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto ">
            <h1 className="text-center custom_title"> About <span> Us </span></h1>
            <div class="container">
              <h3>"Our Team"</h3>
              <div className="row">
                <ProfileCard position="CEO" name="Ali Raza" description="He is  The Chief Executive Officer (CEO) of the company"/>
                <ProfileCard position="HOD Development" name="Usman Khan" description="He is  HOD Development of our Comapany he is very talanted"/>
                <ProfileCard position="HR" name="Ubaid Ali" description="He is  HR of our Comapany he is very talanted"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;