import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WebLayout = ({ children }) => {
  return (
    <>
    <Navbar />
    <div>{children}</div>
    <Footer />
    </>
  )
}

export default WebLayout