import React from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import { FiSearch } from 'react-icons/fi'
import ListProfile from '../../components/molecules/ListProfile'

export default function SearchReceiver() {
  return (
    <MainComponent title='Transfer - Search Receiver'>
      <div>
              <span className="fw-bold fontSize fontSize-18 color-3a">Search Receiver</span>
            </div>

            <div className="input-group flex-nowrap rounded background-dash-3a3 p-3 search-reciver-input">
              <span className="input-group-text iconSearch">
                <FiSearch className='color-a9' size={24} />
              </span>
              <input type="email" className="form-control inputSearch" placeholder="Search receiver here"/>
            </div>
            <div className="d-flex flex-column gap-3">
              <ListProfile alt='aaaaa' nameUser='Sam' phone='89458752147' />
              <ListProfile alt='aaaaa' nameUser='Sam' phone='89458752147' />
              <ListProfile alt='aaaaa' nameUser='Sam' phone='89458752147' />
              <ListProfile alt='aaaaa' nameUser='Sam' phone='89458752147' />
              {/* {data?.result?.map(user =>{
                return(
                  <ListProfile key={user.id} image={ProfileSam} alt={user.picture} nameUser={user.fullname} phone={user.phonenumber} />
                )
              })} */}
            </div>
    </MainComponent>
  )
}
