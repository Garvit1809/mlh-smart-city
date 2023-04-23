import React from "react";
import "./profile.css";
import Details from "../../components/details/details";

import Shanks from "../../assets/shanks.jpg";
import Navbar from "../../components/navbar/navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className='profile'>
        <div className='profile-img'>
          <img src={Shanks} alt='background-img' />
        </div>
        <div className='profile-details'>
          <h3>Details</h3>
          <Details title='Name' detail='Lorem Ipsum' />
          <Details title='Email Id' detail='Lorem Ipsum' />
          <Details title='Issues Raised' detail='5' />
          <Details title='Issues Resolved' detail='3' />
        </div>
      </div>
    </>
  );
};

export default Profile;
