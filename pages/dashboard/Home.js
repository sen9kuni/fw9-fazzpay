import React, { useEffect, useState } from 'react'
import {Container, Col} from 'react-bootstrap'
import ComHeadaer from '../../components/organisms/ComHeader'
import ComMenu from '../../components/organisms/ComMenu'
import ComMenuMobile from '../../components/organisms/ComMenuMobile'
import Link from 'next/link'
import {FiPlus, FiArrowUp, FiArrowDown} from 'react-icons/fi'
import ListHistoryIncome from '../../components/molecules/ListHistoryIncome'
import ListHistoryExpense from '../../components/molecules/ListHistoryExpense'
import ComFooter from '../../components/organisms/ComFooter'
import axios from '../../helper/axios'
import Image from 'next/image'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import LoadingImage from '../../components/atoms/LoadingImage'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../redux/action/profile'
import { getHistoryHome } from '../../redux/action/authUser'

export const numberFormat = (value) =>
  new Intl.NumberFormat('id-IN', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);

// csr
export default function Home() {
  // const navigate = useRouter()
  // const [data, setData] = useState({})
  // useEffect(()=> {
  //   getDatauser()
  // }, [])
  // const getDatauser =  async() => {
  //   try {
  //     const result = await axios.get(`/user/profile/${Cookies.get('id')}`)
  //     setData(result.data.data)
  //     // console.log(result.data.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(true)
  const historyHome = useSelector((state) => state.authUser.historyHome)
  // const [isLoading, setLoading] = useState(true)
  useEffect(()=> {
    // getDatauser()
    console.log(Cookies.get('id'));
    setTimeout(() => {
      dispatch(getProfile(Cookies.get('id')))
      dispatch(getHistoryHome())
      setLoading(false)
    }, 500);
  }, [dispatch])
  // const getDatauser =  async() => {
  //   try {
  //     await dispatch(getProfile(Cookies.get('id')))
  //     setLoading(false)
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  const profile = useSelector((state) => state.profile.data)
  console.log(historyHome);
  if (isLoading) return <LoadingImage/>
  return (
    <div className='body-dashboard'>
        <ComHeadaer />
        <Container className='d-flex flex-column flex-md-row py-5 gap-3'>
          <ComMenuMobile />
          <ComMenu />
          <Col md={9} className='d-flex flex-column colorWhite gap-3'>
            <Col className='d-flex flex-row justify-content-between align-items-center balance-wrap p-4 rounded background-primary'>
              <div className="d-flex flex-column gap-1">
                <span className="fw-normal fontSize-18 color-Thrid">Balance</span>
                <span className="fs-1 fw-bold fontWhite">{numberFormat(parseInt(profile?.balance))}</span>
                <span className="fontMid fontSize-14 color-Thrid">{profile?.noTelp}</span>
              </div>
              <div className="d-flex flex-column gap-2">
                <Link href='/search-recevier'>
                  <a className='d-grid text-decoration-none'>
                    <button className="btn btn-lg btn-outline-light bg-f3 d-flex align-items-center">
                      <FiArrowUp size={25} />
                      <span className="fw-bold fontSize-18 ">Transfer</span>
                    </button>
                  </a>
                </Link>
                <Link href='#'>
                  <a className='d-grid text-decoration-none'>
                    <button className="btn btn-lg btn-outline-light bg-f3 d-flex align-items-center">
                      <FiPlus size={25} />
                      <span className="fw-bold fontSize-18 ">Top Up</span>
                    </button>
                  </a>
                </Link>
              </div>
            </Col>

            <Col className='colorSecondary d-flex flex-column flex-md-row gap-3'>
              <Col md={7} className='rounded shadow-sm p-4 bg-white'>
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-column gap-2">
                    <FiArrowDown size={28} className='colorIn' />
                    <span className="fw-normal fontSize-14">Income</span>
                    <span className="fw-bold fontSize-18">Rp2.120.000</span>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <FiArrowUp size={28} className='colorOut' />
                    <span className="fw-normal fontSize-14">Expense</span>
                    <span className="fw-bold fontSize-18">Rp1.560.000</span>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                  {/* <img className='img-fluid' src={GraphicPic} alt="graphic"/> */}
                  <Image src='/images/graphic.svg' width={341} height={268} alt='grapic money' />
                </div>
              </Col>

              <Col md={5} className='rounded shadow-sm p-3 bg-white'>
                <div className="d-flex flex-row justify-content-between p-3">
                  <span className="fw-bold fontSize-18">Transaction History</span>
                  <Link href='/history'>
                    <a className="d-grid text-decoration-none">
                      <span className='font-med fontSize-14 colorPrimary'>See all</span>
                    </a>
                  </Link> 
                </div>
                {/* <ListHistoryIncome alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
                <ListHistoryExpense alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
                <ListHistoryIncome alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
                <ListHistoryExpense alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  /> */}
                {historyHome?.map((o)=> {
                  if (o.type == 'accept') {
                    return (
                      <ListHistoryIncome typeTransfer={o.type} key={o.id} alt={o.firstName} nameUser={`${o.firstName} ${o.lastName}`} amount={numberFormat(o.amount)} image={o.image !== null ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${o?.image}` : '/images/sam.png'} />
                    )
                  } else if (o.type == 'topup') {
                    return (
                      <ListHistoryIncome typeTransfer={o.type} key={o.id} alt={o.firstName} nameUser={`${o.firstName} ${o.lastName}`} amount={numberFormat(o.amount)} image={o.image !== null ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${o?.image}` : '/images/sam.png'} />
                    )
                  } else {
                    return (
                      <ListHistoryExpense typeTransfer={o.type} key={o.id} alt={o.firstName} nameUser={`${o.firstName} ${o.lastName}`} amount={numberFormat(o.amount)} image={o.image !== null ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${o?.image}` : '/images/sam.png'} />
                    )
                  }
                })}
              </Col>
            </Col>
          </Col>
        </Container>
        <ComFooter />
      </div>
  )
}
