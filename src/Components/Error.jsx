import React from 'react'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <>
    <div className="container mt-5 mb-5 container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <h1 className="text-center">404! Page not Found</h1>
          <div className="text-center mt-5 mb-5">
          <Link to='/' className='btn btn-outline-warning'> Go Back to Home Page</Link>     
          </div>  
           </div>
        </div>
        </div>
    </>
  )
}

export default Error;