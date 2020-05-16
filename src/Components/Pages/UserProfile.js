import React, { useContext } from 'react';
import { UserContext } from '../Auth';
import profile from '../../images/ICON/Group 2.png';

const UserProfile = () => {

  const { user } = useContext(UserContext);

  return (
    <>
      {
        <div className="cart-container">
          <div className="card border-primary m-auto d-block">
            <img className="card-img-top w-25 d-block m-auto" src={profile} alt="" />
            <div className="card-body">
              <p className="card-text text-center">{user.email}</p>
            </div>
          </div>
        </div>
      }
    </>
  );

};

export default UserProfile;