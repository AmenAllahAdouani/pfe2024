import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react'

const Main = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        const isAuthenticated = localStorage.getItem('auth');
        if(isAuthenticated == '1'){
            navigate('/Destination')
        }else{
            navigate('signin')
        }
    },[])
  return (
    <div>Main</div>
  )
}

export default Main