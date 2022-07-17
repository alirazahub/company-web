import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>

  <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-9 text-center">
          <h1>Ali's Best and Awesome Projects Keeper</h1>
          <h2>We are team of talented designers</h2>
        </div>
      </div>
      <div class="text-center">
        <Link to="/about" class="btn mt-5 mb-5 btn-outline-warning ">Get Started</Link>
      </div>
    </div>
  </section>
    </>
  )
}

export default Home;