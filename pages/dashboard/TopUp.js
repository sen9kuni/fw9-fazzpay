import React from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import ListTopup from '../../components/molecules/ListTopUp'

export default function TopUp() {
  return (
    <MainComponent title="Top Up">
      <span className='fw-bold fontSize-22 color-3a'>How To Top Up</span>
      <div className='d-flex flex-column gap-4'>
        <ListTopup number={1} info='Go to the nearest ATM or you can use E-Banking.' />
        <ListTopup number={2} info='Type your security number on the ATM or E-Banking.' />
        <ListTopup number={3} info='Select “Transfer” in the menu' />
        <ListTopup number={4} info='Type the virtual account number that we provide you at the top.' />
        <ListTopup number={5} info='Type the amount of the money you want to top up.' />
        <ListTopup number={6} info='Read the summary details' />
        <ListTopup number={7} info='Press transfer / top up' />
        <ListTopup number={8} info='You can see your money in Zwallet within 3 hours.' />
      </div>
    </MainComponent>
  )
}
