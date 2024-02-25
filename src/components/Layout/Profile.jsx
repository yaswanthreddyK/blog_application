import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import "./Profile.css"
function Profile({profileRef}) {
  return (
    <div className='profile-island' ref={profileRef}>
      <ul>
        <Link to="profile">
        <li>
          <div className='profile-list-img-container'>
            <img src="../../../Public/person.svg" alt="" />
          </div>
          <div className='profile-list-category'>Profile</div>
        </li>
        </Link>
        <Link to="library">
        <li>
          <div className='profile-list-img-container'>
            <img src="../../../Public/library.svg" alt="" />
          </div>
          <div>Library</div>
        </li>
        </Link>
        <Link to="stories">
        <li>
          <div className='profile-list-img-container'>
            <img src="../../../Public/story.svg" alt="" />
          </div>
          <div>Stories</div>
        </li>
        </Link>
        <Link to="settings">
        <li>
          <div className='profile-list-img-container'>
            <img src="../../../Public/settings.svg" alt="" />
          </div>
          <div>Settings</div>
        </li>
        </Link>

      </ul>
      <div className='logout-btn'>
        <Button text='Log out' className="danger"/>
      </div>
    </div>
  )
}

export default Profile