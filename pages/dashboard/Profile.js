import React from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import ButtonProfile from '../../components/molecules/ButtonProfile'
import {  FiArrowRight, FiEdit2 } from 'react-icons/fi'

export default function Profile() {
  return (
    <MainComponent>
      <div className="col-12 d-flex flex-column text-center gap-3">
        <div className="d-flex flex-column gap-2">
          {/* <img className="mx-auto" src={ProfilePic} alt="rofile" width="80px" height="80px" /> */}
          <button className="btn mx-auto d-flex flex-row gap-2 align-middle align-items-center btnEditProfile">
            <FiEdit2 />
              Edit
          </button>
        </div>
        <div className="d-flex flex-column gap-2">
          <span className="fw-bold profileName fontSize-24">Robert Chandler</span>
          <span className="fw-normal fontSize-16">+62 813-9387-7946 </span>
        </div>
      </div>
      <div className='d-flex flex-column gap-4 w-50 mx-auto'>
        <ButtonProfile target='#' text='Personal Information' logo={<FiArrowRight size={25} className='color-7e' />}  />
        <ButtonProfile target='#' text='Change Password' logo={<FiArrowRight size={25} className='color-7e' />}  />
        <ButtonProfile target='#' text='Change PIN' logo={<FiArrowRight size={25} className='color-7e' />}  />
        <ButtonProfile target='#' text='Logout' />
      </div>
    </MainComponent>
  )
}
