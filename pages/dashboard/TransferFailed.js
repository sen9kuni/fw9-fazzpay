import React from 'react'
import { FiX } from 'react-icons/fi'
import {Container, Col} from 'react-bootstrap'
import MainComponent from '../../components/organisms/MainComponent'
import ListProfile from '../../components/molecules/ListProfile'
import ListInfo from '../../components/molecules/ListInfo'
import Link from 'next/link'
import axios from '../../helper/axios'
import { getProfile, resetMsgProfile } from '../../redux/reducers/profile'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'

const numberFormat = (value) =>
  new Intl.NumberFormat('id-IN', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);

export default function TransferFailed() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile.data)
  const user = useSelector((state) => state?.TransferValues?.userChoice)
  const notes = useSelector((state) => state?.TransferValues?.notes)
  const amount = useSelector((state) => state?.TransferValues?.amount)
  React.useEffect(() => {
    dispatch(getProfile(Cookies.get('id')))
  },[])
  return (
    <MainComponent>
      <div className='d-flex flex-column mx-auto gap-4 text-center'>
        <div className='rounded-circle background-out cricle-dot text-center mx-auto d-flex align-items-center justify-content-center'>
          <FiX size={28} color='white' />
        </div>
        <span className='fw-bold fontSize-22 color-3a'>Transfer Failed</span>
        <p className='fontSize-16 color-7a'>We can&apos;t transfer your money at the moment, we recommend you to check your<br/> internet connection and try again.</p>
      </div>
      <div className='d-flex flex-column gap-3'>
        <ListInfo titleInfo='Amount' info={numberFormat(parseInt(amount))} />
        <ListInfo titleInfo='Balance Left' info={numberFormat(parseInt(parseInt(profile?.balance) - parseInt(amount)))} />
        <ListInfo titleInfo='Date & Time' info={new Date().toLocaleString()} />
        <ListInfo titleInfo='Notes' info={notes ? notes : '-'} />
      </div>
      <div className='d-flex flex-column gap-3'>
        <span className='fw-bold font-Size-18 color-3a'>Transfer To</span>
        <ListProfile id={user?.data?.id} image={user?.data?.image !== null ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${user?.data?.image}` : '/images/sam.png'} link={'#'} alt={user?.data?.firstName} nameUser={`${user?.data?.firstName} ${user?.data?.lastName}`} phone={user?.data?.noTelp} />
      </div>
      <div className="d-flex flex-row justify-content-end gap-3">
        <Link href='/home'>
          <a className="d-grid text-decoration-none" onClick={() => dispatch(resetMsgProfile())}>
            <button className="btn btn-lg fw-bold background-primary colorWhite px-4">Continue</button>
          </a>
        </Link>
      </div>
    </MainComponent>
  )
}
