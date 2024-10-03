import React from 'react'
import { MdModeEdit } from "react-icons/md";


const Profile = () => {
  return (
    <div className='profile-1'>
      <div className='P1-card'>
        <img className='P1-bg' src="https://images.unsplash.com/photo-1486182810355-b1c079a9e78b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <img className="P1-img"src="https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=2048x2048&w=is&k=20&c=q-EcvtGhj2_Tf2w2-PVN4dZ4rjdhAprChJelEEz1oQA=" />
        <span className='P1-data'>
        <p><span className='P1-tags'>Name</span> : G.Sriram</p>
        <p><span className='P1-tags'>Added Products</span> : 9</p>
        <p><span className='P1-tags'>Profession</span> : Student</p>
        <p><span className='P1-tags'>Location</span> : Allahabad, Uttar Pradesh</p>
        <p><span className='P1-tags'>Contact</span> : 6309372637</p>
        </span>
        <button className='P1-edit'><span>Edit Profile</span>{<MdModeEdit className='edit-icon' />}</button>
      
      </div>
    </div>
  )
}

export default Profile
