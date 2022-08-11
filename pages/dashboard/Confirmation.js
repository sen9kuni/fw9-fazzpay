import React from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import ListInfo from '../../components/molecules/ListInfo'
import ListProfile from '../../components/molecules/ListProfile'
import ModalTransfer from '../../components/organisms/ModalTransfer'

export default function Confirmation() {
  return (
    <MainComponent title='Transfer - Confirmation'>
      <div>
        <span className='fw-bold font-Size-18 color-3a'>Transfer To</span>
      </div>
      <ListProfile alt='aaaaa' nameUser='Sam' phone='89458752147' />
      <div>
        <span className='fw-bold font-Size-18 color-3a'>Details</span>
      </div>
      <div className='d-flex flex-column gap-3'>
        <ListInfo titleInfo='Amount' info='aaaa' />
        <ListInfo titleInfo='Balance Left' info='Rp20.000' />
        <ListInfo titleInfo='Date & Time' info='May 11, 2020 - 12.20' />
        <ListInfo titleInfo='Notes' info='aaaaaaa' />
      </div>

      <div className="d-flex justify-content-end">
        <ModalTransfer />
      </div>
    </MainComponent>
  )
}
