import React from 'react'
import Navbar from '../components/Navbar'


const WebLayout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default WebLayout
