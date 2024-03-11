import { useState } from 'react';
import './profile.css'

const UserProfileCard = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'Dhanush',
    email: 'dhanush@example.com',
    address: 'Austin City, Bangalore North, Bangalore',
    phoneNumber: '7789906574',
  });

  const [isEditing, setEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <div className="container">
             
        {isEditing ? (
          <div>
            <h1>User Profile</h1>
            <form  className='form11' onSubmit={handleSubmit}>
              <label className='label1' >
                Name:<span className='tab' />
                <input type='text' className='input1' name='name' value={userDetails.name} onChange={handleChange} />
              </label>
              <br />

              <label className='label1' >
                Email:<span className='tab' />
                <input type='email' className='input1' name='email' value={userDetails.email} onChange={handleChange} />
              </label>
              <br />

              <label className='label1' >
                Address:<span className='tab' />
                <input type='text' className='input1' name='address' value={userDetails.address} onChange={handleChange} />
              </label>
              <br />

              <label className='label1' >
                Phone Number:<span className='tab' />
                <input className='input1' type='tel' name='phoneNumber' value={userDetails.phoneNumber} onChange={handleChange} />
              </label>
              <br />
              <br />
              <button className='buttonx' type='submit'>Save Changes</button>
            </form>
          </div>
        ) : (
          <div className='display' >
            <p className='p1'><b>Name:  </b>{userDetails.name}</p>
            <p className='p1'><b>Email:  </b> {userDetails.email}</p>
            <p className='p1'><b>Address:  </b> {userDetails.address}</p>
            <p className='p1'><b>Phone Number:  </b> {userDetails.phoneNumber}</p>
            <br />
            <button onClick={() => setEditing(true)} style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', border: 'none' }}>Edit</button>
          </div>
        )}
    </div>
  );
};

export default UserProfileCard;
