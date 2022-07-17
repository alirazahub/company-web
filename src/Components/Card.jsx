import React from 'react'
import { Link } from 'react-router-dom';

function Card(props) {


  return (
    <>
      <div className="col-md-4 card_style col-12 mx-auto">
        <div className="card3 transition">
          <img className="card-img-top" src={props.imgSrc} alt="Card-img" />
          <div className="card-body">
            <h5 className="card-title custom_title">{props.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to={props.url} className="btn btn-outline-warning">Go to Soruce</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;