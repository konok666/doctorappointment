import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Style/MyProfile.css";

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Bishal Kumar",
    email: "bishalkumar@gmail.com",
    phone: "+977 9804736211",
    address: "Nepal",
    gender: "Male",
    birthday: "2001-02-07",
    profileImage: "profile_pic.png", // Default profile image
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileData({ ...profileData, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!profileData.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (profileData.phone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }
    setIsEditing(false);
    // Save logic here (e.g., API call)
  };

  const handleLogout = () => {
    // Logic to handle logout
    alert("You have logged out.");
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="profile-container">
      {/* Top-right buttons: Logout and Edit */}
      <div className="top-right-buttons">
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
        {!isEditing && (
          <button onClick={handleEdit} className="edit-btn">
            Edit
          </button>
        )}
      </div>

      <div className="profile-header">
        <div className="profile-image-container">
          <img
            src={profileData.profileImage}
            alt="Profile"
            className="profile-image"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="profile-image-input"
            />
          )}
        </div>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
            className="profile-input name-input"
          />
        ) : (
          <h2 className="profile-name">{profileData.name}</h2>
        )}
      </div>

      <hr className="divider" />

      <div className="profile-sections">
        <div className="profile-section">
          <h3 className="section-title">Contact Information</h3>
          <label htmlFor="email">Email:</label>
          <p className="profile-info">
            {isEditing ? (
              <input
                id="email"
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
                className="profile-input"
              />
            ) : (
              <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
            )}
          </p>
          <label htmlFor="phone">Phone:</label>
          <p className="profile-info">
            {isEditing ? (
              <input
                id="phone"
                type="text"
                name="phone"
                value={profileData.phone}
                onChange={handleInputChange}
                className="profile-input"
              />
            ) : (
              <a href={`tel:${profileData.phone}`}>{profileData.phone}</a>
            )}
          </p>
          <label htmlFor="address">Address:</label>
          <p className="profile-info">
            {isEditing ? (
              <input
                id="address"
                type="text"
                name="address"
                value={profileData.address}
                onChange={handleInputChange}
                className="profile-input"
              />
            ) : (
              <span>{profileData.address}</span>
            )}
          </p>
        </div>

        <div className="profile-section">
          <h3 className="section-title">Basic Information</h3>
          <label htmlFor="gender">Gender:</label>
          <p className="profile-info">
            {isEditing ? (
              <select
                id="gender"
                name="gender"
                value={profileData.gender}
                onChange={handleInputChange}
                className="profile-select"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <span>{profileData.gender}</span>
            )}
          </p>
          <label htmlFor="birthday">Birthday:</label>
          <p className="profile-info">
            {isEditing ? (
              <input
                id="birthday"
                type="date"
                name="birthday"
                value={profileData.birthday}
                onChange={handleInputChange}
                className="profile-input"
              />
            ) : (
              <span>
                {new Date(profileData.birthday).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="profile-buttons">
        {isEditing && (
          <button onClick={handleSave} className="save-button">
            Save Information
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
