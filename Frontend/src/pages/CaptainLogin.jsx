import React, { useContext, useState } from "react";
import logo from "../assets/uber-driver-svgrepo-com.svg"
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";


const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const {captain, setCaptain} = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, captainData);

    if(response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    setEmail('');
    setPassword('');
  }
  return (
    <div className="h-screen px-7 py-4 flex flex-col justify-between">
      <div>
        <img className='w-20 mb-5' src={logo} alt="" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>

          <input 
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email" 
            placeholder="email@example.com" 
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input 
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="password" 
          />

          <button className="bg-[#159138] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base">Login</button>

          <p className="text-center mb-1">New here?  <Link to='/captain-signup' className="text-blue-600">Register as a Captain</Link></p>
        </form>
      </div>

      <div>
        <Link 
          to='/login'
          className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"> Sign in as a User
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin
