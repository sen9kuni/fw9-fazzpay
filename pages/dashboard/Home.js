import React from 'react'
import {Container, Col} from 'react-bootstrap'
import ComHeadaer from '../../components/organisms/ComHeader'
import ComMenu from '../../components/organisms/ComMenu'
import ComMenuMobile from '../../components/organisms/ComMenuMobile'
import Link from 'next/link'
import {FiPlus, FiArrowUp, FiArrowDown} from 'react-icons/fi'
import ListHistoryIncome from '../../components/molecules/ListHistoryIncome'
import ListHistoryExpense from '../../components/molecules/ListHistoryExpense'
import ComFooter from '../../components/organisms/ComFooter'

export default function Home() {
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
                <span className="fs-1 fw-bold fontWhite">10.000</span>
                <span className="fontMid fontSize-14 color-Thrid">+62 813-9387-7946</span>
              </div>
              <div className="d-flex flex-column gap-2">
                <Link href='#'>
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
                </div>
              </Col>

              <Col md={5} className='rounded shadow-sm p-3 bg-white'>
                <div className="d-flex flex-row justify-content-between p-3">
                  <span className="fw-bold fontSize-18">Transaction History</span>
                  <Link href='#'>
                    <a className="d-grid text-decoration-none">
                      <span className='font-med fontSize-14 colorPrimary'>See all</span>
                    </a>
                  </Link> 
                </div>
                <ListHistoryIncome alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
                <ListHistoryExpense alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
                <ListHistoryIncome alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
                <ListHistoryExpense alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
                {/* {history?.results?.map((o) => {
                  if(o.type === 'transfer' && o.sender === 'dummy') {
                    return (
                      <ListHistoryExpense image={ProfileSam} alt='profile pic' nameUser={o.receiver} typeTransfer={o.type} amount={numberFormat(o.amount)} />
                    )
                  } else if (o.type === 'transfer' && o.receiver === 'dummy') {
                    return (
                      <ListHistoryIncome image={ProfileSam} alt='profile pic' nameUser={o.sender} typeTransfer={o.type} amount={numberFormat(o.amount)} />
                    )
                  } else if (o.type === 'top up') {
                    return (
                      <ListHistoryIncome image={ProfileSam} alt='profile pic' nameUser={o.receiver} typeTransfer={o.type} amount={numberFormat(o.amount)} />
                    )
                  } else {
                    return (
                      <ListHistoryIncome image={ProfileSam} alt='profile pic' nameUser={o.receiver} typeTransfer={o.type} amount={numberFormat(o.amount)} />
                    )
                  }
                })} */}
              </Col>
            </Col>
          </Col>
        </Container>
        <ComFooter />
      </div>
  )
}
