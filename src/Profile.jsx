import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Profile = ({ name, job, image, text }) => {
  return (
    <>
      <div className="profile-img">
        <img src={image} alt={name} />
        <div className="quote">
          <FaQuoteRight className="quotes-icon" />
        </div>
      </div>
      <div className="profile-details">
        <h1 className="profile-name">{name}</h1>
        <p className="profile-job">{job}</p>
        <p className="profile-info">{text}</p>
      </div>
    </>
  );
};

export default Profile;
