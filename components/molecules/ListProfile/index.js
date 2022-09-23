import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { getUserById } from '../../../redux/action/TransferValues'
import Cookies from 'js-cookie'

export default function ListProfile({id, image, alt, nameUser, phone, link}) {
  const dispatch = useDispatch()
  // const user = useSelector((state) => state?.TransferValues?.userChoice)
  const onClickProfile = (id, token) => {
    const param = {id: id, token: token}
    console.log(param);
    dispatch(getUserById(param))
  }
  // console.log(user);
  
  return (
    <Link href={link ? link : '#'}>
      <a className="text-decoration-none">
        <Col>
          <div onClick={() => onClickProfile(id, Cookies.get('token'))} className="d-flex flex-row justify-content-between align-items-center rounded searchListWrap background-dash-white shadow-sm p-3">
            <div className="d-flex flex-row gap-3">
              {/* <img className='img-fluid' src={image} alt={alt} height="70px" width="70px"/> */}
              <div className='image-frame-profile-transfer rounded-2 overflow-hidden'>
                <Image src={image} alt={alt} className='img-fluid' height={70} width={70} />
              </div>
              <div className="d-flex flex-column gap-2">
                <span className="fw-bold fontSize-18 color-4d">{nameUser}</span>
                <span className="color-7a fontSize-16">+62 {phone}</span>
              </div>
            </div>
          </div>
        </Col>
      </a>
    </Link>
  )
}
