import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Listado() {

  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(()=>{
    if ( token === null ) {
      navigate("/")
    }
  }, [navigate])

  return (
    <>
    onemovie.map
    <div>

    </div>
    </>
  )
}

export default Listado