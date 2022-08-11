import { Button } from 'react-bootstrap'
import React from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import ListHistoryIncome from '../../components/molecules/ListHistoryIncome'
import ListHistoryExpense from '../../components/molecules/ListHistoryExpense'
import Image from 'next/image'

export default function History() {
  return (
    <MainComponent title='History'>
      <span className='fw-bold font-Size-18 color-3a'>Transaction History</span>
            <div>
              <span className='color-7a font-Size-16'>This Week</span>
              <ListHistoryIncome alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
              <ListHistoryExpense alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
            </div>
            <div>
              <span className='color-7a font-Size-16'>This Month</span>
              <ListHistoryIncome alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
              <ListHistoryExpense alt='Profile Pic' nameUser='budi' typeTransfer='transfer' amount='50.000'  />
            </div>
            {/* <div>
              {history?.results?.map((o) => {
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
              })}
            </div> */}
            {/* <div className='d-flex flex-row justify-content-between'>
              <Button className='col-5 background-primary border-0 shadow-none' disabled={history?.pageInfo?.prevPage === null} onClick={onPrevPage} >Prev</Button>
              <Button className='col-5 background-primary border-0 shadow-none' disabled={history?.pageInfo?.nextPage === null} onClick={onNextPage} >Next</Button>
            </div> */}
    </MainComponent>
  )
}
