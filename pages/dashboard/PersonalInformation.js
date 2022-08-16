import React, { useEffect, useState } from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import Link from 'next/link'
import ListInfo from '../../components/molecules/ListInfo'
import axios from '../../helper/axios'
import Cookies from 'js-cookie'
import LoadingImage from '../../components/atoms/LoadingImage'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../redux/action/profile'

export default function PersonalInformation() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile.data)
  const [isLoading, setLoading] = useState(true)
  useEffect(()=> {
    getDatauser()
  }, [])
  const getDatauser =  async() => {
    try {
      await dispatch(getProfile(Cookies.get('id')))
      setLoading(false)
    } catch (e) {
      console.log(e);
    }
  }
  if (isLoading) return <LoadingImage/>
  return (
    <MainComponent>
      <div className='d-flex flex-column gap-3'>
        <span className='fw-bold fontSize-22 color-3a'>Personal Information</span>
        <p className='text-start fontSize-16 color-7a'>We got your personal information from the sign<br/> up proccess. If you want to make changes on<br/> your information, contact our support.</p>
      </div>
      <div className='d-flex flex-column gap-4'>
        <ListInfo titleInfo='First Name' info={profile.firstName} />
        <ListInfo titleInfo='Last Name' info={profile.lastName} />
        <ListInfo titleInfo='Verified E-mail' info={profile.email} />
        <ListInfo titleInfo='Phone Number' info={profile.noTelp} linkTo={<Link href='/profile/edit-phone-number'><a className='text-decoration-none fontMid colorPrimary'>Manage</a></Link>} />
      </div>
    </MainComponent>
  )
}
