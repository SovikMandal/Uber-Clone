import { useState, useContext } from "react";
import logo from "../assets/logo2.png"
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/Context.jsx"
import axios from "axios";

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname,
        lastname
      },
      email,
      password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    

    if(response.status === 201) {

      const data = response.data;

      setUser(data.user);

      localStorage.setItem('token', data.token);

      navigate('/home');
    }

    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className="h-screen p-7 flex flex-col justify-between">
      <div>
        <img className='w-16 mb-10' src={logo} alt="" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>

          <h3 className="text-base font-medium mb-2">What's your name</h3>
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

          <h3 className="text-base font-medium mb-2">What's your email</h3>

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

          <button type="submit" className="bg-[#159138] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base">Create Account</button>

          <p className="text-center mb-1">Already have a account?  <Link to='/login' className="text-blue-600">Log in here</Link></p>
        </form>
      </div>

      <div>

        <p className="text-xs leading-tight">This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service apply</span></p>
      </div>
    </div>
  )
}

export default UserSignup
