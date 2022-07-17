import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          
        
            <footer className="text-center text-lg-start nav_bg bg-light text-muted">

                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <Link to="/" className="me-4 links text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="/" className="me-4 links text-reset">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="/" className="me-4 links text-reset">
                            <i className="fab fa-google"></i>
                        </Link>
                        <Link to="/" className="me-4 links text-reset">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="/" className="me-4 links text-reset">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link to="/" className="me-4 links text-reset">
                            <i className="fab fa-github"></i>
                        </Link>
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i><Link  className="navbar-brand" to="/"> <span className='brand_title'> Ali's </span> Project</Link >
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <Link to="/" className="links text-reset">Angular</Link>
                                </p>
                                <p>
                                    <Link to="/" className="links text-reset">React</Link>
                                </p>
                                <p>
                                    <Link to="/" className="links text-reset">Vue</Link>
                                </p>
                                <p>
                                    <Link to="/" className="links text-reset">Laravel</Link>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link to="/" className="links text-reset">Pricing</Link>
                                </p>
                                <p>
                                    <Link to="/" className="links text-reset">Settings</Link>
                                </p>
                                <p>
                                    <Link to="/" className="links text-reset">Orders</Link>
                                </p>
                                <p>
                                    <Link to="/" className="links text-reset">Help</Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p className='links'><i className="fa links  fa-home me-3"></i> New York, NY 10012, US</p>
                                <p className='links'>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p className='links'><i className="fa fa-phone me-3"></i> + 01 234 567 88</p>
                                <p className='links'><i className="fa fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4">
                    © 2022 Copyright:
                    <Link className="text-reset links fw-bold" to="/"> Ali Raza </Link>
                </div>
            </footer>
            </div>
        </div>
        </div>
        </>
    );
}

export default Footer;