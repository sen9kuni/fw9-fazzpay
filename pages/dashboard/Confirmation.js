import React, { useEffect, useState } from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import ListInfo from '../../components/molecules/ListInfo'
import ListProfile from '../../components/molecules/ListProfile'
import ModalTransfer from '../../components/organisms/ModalTransfer'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import axios from '../../helper/axios'
import { useRouter } from 'next/router'

export const numberFormat = (value) =>
  new Intl.NumberFormat('id-IN', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);

export default function Confirmation() {
  const [data, setData] = useState({})
  useEffect(()=> {
    getDatauser()
  }, [])
  const getDatauser =  async() => {
    try {
      const result = await axios.get(`/user/profile/${Cookies.get('id')}`)
      setData(result.data.data)
      // console.log(result.data.data);
    } catch (e) {
      console.log(e);
    }
  }

  const user = useSelector((state) => state?.TransferValues?.userChoice)
  const idUser = useSelector((state) => state?.TransferValues?.idUser)
  const notes = useSelector((state) => state?.TransferValues?.notes)
  const amount = useSelector((state) => state?.TransferValues?.amount)
  return (
    <MainComponent title='Transfer - Confirmation'>
      <div>
        <span className='fw-bold font-Size-18 color-3a'>Transfer To</span>
      </div>
      <ListProfile id={user?.data?.id} image={user?.data?.image !== null ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${user?.data?.image}` : '/images/sam.png'} link={'#'} alt={user?.data?.firstName} nameUser={`${user?.data?.firstName} ${user?.data?.lastName}`} phone={user?.data?.noTelp} />
      <div>
        <span className='fw-bold font-Size-18 color-3a'>Details</span>
      </div>
      <div className='d-flex flex-column gap-3'>
        <ListInfo titleInfo='Amount' info={numberFormat(parseInt(amount))} />
        <ListInfo titleInfo='Balance Left' info={numberFormat(parseInt(parseInt(data?.balance) - parseInt(amount)))} />
        <ListInfo titleInfo='Date & Time' info={new Date().toLocaleString()} />
        <ListInfo titleInfo='Notes' info={notes} />
      </div>

      <div className="d-flex justify-content-end">
        <ModalTransfer />
      </div>
    </MainComponent>
  )
}
