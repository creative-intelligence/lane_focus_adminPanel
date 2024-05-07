import React, { useState } from 'react';

const Profile = () => {
 
  const [name, setName] = useState('Admin');
  const [email, setEmail] = useState('admin@example.com');
  const [bio, setBio] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  const [image, setImage] = useState('https://via.placeholder.com/150'); L


  const handleEditProfile = () => {
    
    console.log('Profile information updated:', { name, email, bio, image });
   
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Admin Profile</h1>
      <div className="mb-4">
        <label className="block mb-1">Profile Image</label>
        <div className="flex items-center">
          <img src={image} alt="Profile" className="w-20 h-20 rounded-full mr-4" />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onload = () => {
                setImage(reader.result);
              };
              if (file) {
                reader.readAsDataURL(file);
              }
            }}
          />
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            onClick={() => document.getElementById('fileInput').click()}
          >
            Upload
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Bio</label>
        <textarea
          className="w-full px-3 py-2 border rounded"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleEditProfile}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
