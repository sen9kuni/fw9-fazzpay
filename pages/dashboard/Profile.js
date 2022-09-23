import React, { useEffect, useState } from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import ButtonProfile from '../../components/molecules/ButtonProfile'
import {  FiArrowRight, FiEdit2, FiTrash2 } from 'react-icons/fi'
import Image from 'next/image'
import axios from '../../helper/axios'
import Cookies from 'js-cookie'
import LoadingImage from '../../components/atoms/LoadingImage'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../redux/action/profile'
import Link from 'next/link'
import { store } from '../../redux/store'
import { useRouter } from 'next/router'

export default function Profile() {
  const dispatch = useDispatch()
  const navigate = useRouter()
  const profile = useSelector(() => store.getState().profile.data)
  
  const [isLoading, setLoading] = useState(true)
  useEffect(()=> {
    // getDatauser()
    setTimeout(() => {
      setLoading(false)
    }, 500);
    dispatch(getProfile(Cookies.get('id')))
  }, [dispatch])
  // const getDatauser =  async() => {
  //   try {
  //     await dispatch(getProfile(Cookies.get('id')))
  //     setLoading(false)
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  if (isLoading) return <LoadingImage/>
  return (
    <MainComponent>
      <div className="col-12 d-flex flex-column text-center gap-3">
        <div className="d-flex flex-column gap-2">
          {/* <img className="mx-auto" src={ProfilePic} alt="rofile" width="80px" height="80px" /> */}
          <div>
            <Image className='img-fluid rounded-2 overflow-hidden' height={80} width={80} src={profile?.image !== null ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${profile?.image}` : '/images/sam.png'} alt='aaaaaa' />
          </div>
          {/* <Link href={'/profile/edit-profile'}>
            <a className='text-decoration-none'> */}
          <button onClick={() => navigate.push('/profile/edit-profile')} className="btn mx-auto d-flex flex-row gap-2 align-middle align-items-center btnEditProfile">
            <FiEdit2 />
              Edit
          </button>
          {/* </a>
          </Link> */}
        </div>
        <div className="d-flex flex-column gap-2">
          <span className="fw-bold profileName fontSize-24">{profile?.firstName} {profile?.lastName}</span>
          <span className="fw-normal fontSize-16">{profile?.noTelp}</span>
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
