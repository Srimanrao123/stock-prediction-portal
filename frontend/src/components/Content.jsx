import React from 'react'
import Button from './Button'


function Content() {
  return (
    <>
    
    <div className='container'>
        <div className='p-5 text-center bg-light-dark'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='lead text-light'>The Stock Prediction Portal is a full-stack web application that empowers users to analyze and forecast stock trends using advanced machine learning algorithms. It offers a clean, responsive interface built with React on the frontend, while leveraging Django and REST Framework on the backend for API services and ML integration.</p>
            <Button text='Explore Now' class='btn-outline-info' url='/dashboard' />
        </div>
    </div>
    
    </>
  )
}

export default Content