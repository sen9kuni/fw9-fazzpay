import React from 'react'

export default function LoadingImage() {
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
      <div className="spinner-border loading-size-image" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
