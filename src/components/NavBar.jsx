import React,{useState} from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoMdMoon, IoMdSunny } from "react-icons/io"
import { CgProfile } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";


const NavBar = () => {
  let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
]
const [selectedState, setSelectedState]= useState("")
const [darkMode, setDarkMode]= useState(false)
const [dropDown, setDropDown] = useState(false)

const handleModeChange = ()=>{
  setDarkMode(!darkMode);
  if(darkMode){
   document.querySelector("body").classList.remove("darkmode")
   document.querySelector(".search-icon").classList.remove("darkmode")
   document.querySelector(".profile").classList.remove("darkmode")
    localStorage.setItem("darkmode","false")
  }
  else{
    document.querySelector("body").classList.add("darkmode")
   document.querySelector(".search-icon").classList.add("darkmode")
   document.querySelector(".profile").classList.add("darkmode")
    localStorage.setItem("darkmode","true")
  }
  
}
const handleProfileChange = ()=>{
  setDropDown(!dropDown);
}


  return (
    <div className='nav'>
      <span className='nav-left'>
      <h1 className='title'>ESHOP</h1>
      <span class="loc">
      
      <select
      className='location'
      value={selectedState}
      onChange={(e)=>{
        setSelectedState(e.target.value)
        
       
      }}
      >
        <option  value="">Select your location</option>
        {states.map((state,index)=>(
          <option value={state} key={index}>{state}</option>
        ))}
      </select>
      <FaLocationDot className='loc-icon' />
      </span>
     
      </span>
      
      <span className='search'>
      <input placeholder='search..' className='search-box' type='text'></input>
      <IoMdSearch className='search-icon' />
      </span>
     

      {darkMode?<IoMdSunny  className='day-mode mode-icon' onClick={handleModeChange} /> : <IoMdMoon className='mode-icon' onClick={handleModeChange} />}
      <span className='login'>
      <a href='/login'>Login</a>
      <p>/</p>
      <a href='/register'>register</a>
      </span>
    
      <IoCartSharp className='cart-icon' />

      <CgProfile onClick={handleProfileChange} className='profile' />
      {dropDown&&( <div className="dropdown">
      <a href='/profile' className='DD-element'>Profile</a>
      <a href='/sell' className='DD-element'>Sell</a>
      <a className='DD-element'>whishlist</a>
      <a className='DD-element'>Logout</a>
      </div>)}
  



      
    </div>
  )
}

export default NavBar
