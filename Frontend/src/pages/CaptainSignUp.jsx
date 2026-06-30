import React, { useContext, useState } from "react";
import logo from "../assets/uber-driver-svgrepo-com.svg"
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const navigate = useNavigate();
  const { captain, setCaptain} = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newCaptain = {
      fullname: {
        firstname,
        lastname
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, newCaptain);

    if(response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);

      localStorage.setItem('token', data.token);

      navigate('/captain-home')
    }

    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  }


  return (
    <div className="h-screen px-7 py-4 flex flex-col justify-between">
      <div>
        <img className='w-20 mb-5' src={logo} alt="" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>

          <h3 className="text-base font-medium mb-2">What's our captain name</h3>
          <div className="flex gap-4 mb-5">
          <input 
            required
            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-base"
            type="text" 
            placeholder="Firstname"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value)
            }} 
          />

          <input 
            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-base"
            type="text" 
            placeholder="Lastname"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value)
            }} 
          />
          </div>

          <h3 className="text-base font-medium mb-2">What's our captain email</h3>

          <input 
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base"
            type="email" 
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }} 
          />

          <h3 className="text-base font-medium mb-2">Enter Password</h3>

          <input 
            type="password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }} 
          />

          <h3 className="text-base font-medium mb-2">Vehicle Informations</h3>

          <div className="flex gap-4 mb-5">
            <input 
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base"
              type="text" 
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }} 
            />


            <input 
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base"
              type="text" 
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }} 
            />
          </div>
          
          <div className="flex gap-4 mb-5">
            <input 
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base"
              type="number" 
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }} 
            />


            <select 
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base" 
              placeholder="Vehicle Type"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }} 
            >
              <option value="" disabled>Select The Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button className="bg-[#159138] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base">Create Account</button>

          <p className="text-center mb-1">Already have a account?  <Link to='/captain-login' className="text-blue-600">Log in here</Link></p>
        </form>
      </div>

      <div>

        <p className="text-xs leading-tight">This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service apply</span></p>
      </div>
    </div>
  );
}

export default CaptainSignup
