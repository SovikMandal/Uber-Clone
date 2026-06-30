import React, {useContext, useEffect, useState} from 'react'
import { UserDataContext } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const UserProtectWrapper = ({
    children
}) => {

  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(!token) {
      navigate('/login');
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      if(res.status === 200) {
        console.log('Response Recived');
        setUser(res.data.user);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      console.log('Unexpected Response');
      console.log(err);
      localStorage.removeItem('token', token);
      navigate('/login');
    })
  }, [token]);

  if(isLoading) {
    return (
      <div>Loading....</div>
    )
  }

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper
