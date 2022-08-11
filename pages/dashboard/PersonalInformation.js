import React from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import Link from 'next/link'
import ListInfo from '../../components/molecules/ListInfo'

export default function PersonalInformation() {
  return (
    <MainComponent>
      <div className='d-flex flex-column gap-3'>
        <span className='fw-bold fontSize-22 color-3a'>Personal Information</span>
        <p className='text-start fontSize-16 color-7a'>We got your personal information from the sign<br/> up proccess. If you want to make changes on<br/> your information, contact our support.</p>
      </div>
      <div className='d-flex flex-column gap-4'>
        <ListInfo titleInfo='First Name' info='Robert' />
        <ListInfo titleInfo='Last Name' info='Chandler' />
        <ListInfo titleInfo='Verified E-mail' info='pewdiepie1@gmail.com' />
        <ListInfo titleInfo='Phone Number' info='+62 813-9387-7946' linkTo={<Link href='#'><a className='text-decoration-none fontMid colorPrimary'>Manage</a></Link>} />
      </div>
    </MainComponent>
  )
}
