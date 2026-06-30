import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios';

const CaptainProtectWrapper = ({
    children
}) => {
  
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(!token) {
      navigate('/captain-login');
      return;
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if(response.status === 200) {
        setCaptain(response.data.captain);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      console.log('Unexpected Response');
      console.log(err);
      localStorage.removeItem('token', token);
      navigate('/captain-login');
    })

  }, []);
  
  if(isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
      {children}
    </>
  )
}

export default CaptainProtectWrapper
