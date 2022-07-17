import React from 'react'
import { Link } from 'react-router-dom';

function ProfileCard(props) {
    return (
        <>
                    <div className="col-md-4">
                        <div class="card2 ">
                            <div class="slide slide1">
                                <div class="content">
                                    <div class="icon  text-center card_name">{props.position}
                                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="slide slide2">
                                <div class="content">
                                    <h3>
                                        {props.name}
                                    </h3>
                                    <p>{props.description}</p>
                                    <div className="text-center mt-3 ">
                                    <Link to="" className="btn btn-outline-warning">Profile</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default ProfileCard;