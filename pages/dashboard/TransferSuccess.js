import React from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import ListProfile from '../../components/molecules/ListProfile'
import ListInfo from '../../components/molecules/ListInfo'
import { FiCheck, FiDownload, FiShare2 } from 'react-icons/fi'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../helper/axios'
import { getProfile, resetMsgProfile } from '../../redux/reducers/profile'
import Cookies from 'js-cookie'

const numberFormat = (value) =>
  new Intl.NumberFormat('id-IN', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);

export default function TransferSuccess() {
  const dispatch = useDispatch()
  const [data, setData] = React.useState({})
  
  const user = useSelector((state) => state?.TransferValues?.userChoice)
  const idUser = useSelector((state) => state?.TransferValues?.idUser)
  const notes = useSelector((state) => state?.TransferValues?.notes)
  const amount = useSelector((state) => state?.TransferValues?.amount)
  const profile = useSelector((state) => state.profile.data)
  React.useEffect(() => {
    dispatch(getProfile(Cookies.get('id')))
  },[])
  return (
    <MainComponent>
      <div className='d-flex flex-column mx-auto gap-4'>
        <div className='rounded-circle background-in cricle-dot text-center mx-auto d-flex align-items-center justify-content-center'>
          <FiCheck size={28} color='white' />
        </div>
        <span className='fw-bold fontSize-22 color-3a'>Transfer Success</span>
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
      <div className="d-flex flex-row justify-content-center justify-content-md-end gap-3">
        <button className="btn background-dash-primary-trans color-3a"><FiShare2 size={24} /></button>
        <button className="btn btn-lg background-dash-primary-trans d-flex align-items-center flex-row gap-3 fw-bold colorPrimary"><FiDownload size={22} />Download PDF</button>
        <Link href='/home'>
          <a className="d-grid text-decoration-none" onClick={() => dispatch(resetMsgProfile())}>
            <button className="btn btn-lg fw-bold background-primary colorWhite px-4">Continue</button>
          </a>
        </Link>
      </div>
    </MainComponent>
  )
}
