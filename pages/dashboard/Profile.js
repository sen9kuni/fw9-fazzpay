import React, { useEffect, useState } from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import ButtonProfile from '../../components/molecules/ButtonProfile'
import {  FiArrowRight, FiEdit2 } from 'react-icons/fi'
import Image from 'next/image'
import axios from '../../helper/axios'
import Cookies from 'js-cookie'
import LoadingImage from '../../components/atoms/LoadingImage'

export default function Profile() {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(false)
  useEffect(()=> {
    getDatauser()
  }, [])
  const getDatauser =  async() => {
    setLoading(true)
    try {
      const result = await axios.get(`/user/profile/${Cookies.get('id')}`)
      setData(result.data.data)
      setLoading(false)
      console.log(result.data.data);
    } catch (e) {
      console.log(e);
    }
  }
  if (isLoading) return <LoadingImage/>
  return (
    <MainComponent>
      <div className="col-12 d-flex flex-column text-center gap-3">
        <div className="d-flex flex-column gap-2">
          {/* <img className="mx-auto" src={ProfilePic} alt="rofile" width="80px" height="80px" /> */}
          <div>
            <Image className='img-fluid rounded-2 overflow-hidden' height={80} width={80} src={data.image !== null ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${data.image}` : '/images/sam.png'} alt='aaaaaa' />
          </div>
          <button className="btn mx-auto d-flex flex-row gap-2 align-middle align-items-center btnEditProfile">
            <FiEdit2 />
              Edit
          </button>
        </div>
        <div className="d-flex flex-column gap-2">
          <span className="fw-bold profileName fontSize-24">{data.firstName} {data.lastName}</span>
          <span className="fw-normal fontSize-16">{data.noTelp}</span>
        </div>
      </div>
      <div className='d-flex flex-column gap-4 w-50 mx-auto'>
        <ButtonProfile target='/profile/personal-information' text='Personal Information' logo={<FiArrowRight size={25} className='color-7e' />}  />
        <ButtonProfile target='/profile/change-password' text='Change Password' logo={<FiArrowRight size={25} className='color-7e' />}  />
        <ButtonProfile target='/profile/change-pin-old' text='Change PIN' logo={<FiArrowRight size={25} className='color-7e' />}  />
        <ButtonProfile target='#' text='Logout' />
      </div>
    </MainComponent>
  )
}
