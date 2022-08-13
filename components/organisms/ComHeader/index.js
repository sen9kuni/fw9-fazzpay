import React, { useEffect, useState } from 'react'
import { Row, Col, Dropdown } from 'react-bootstrap'
import {FiBell, FiArrowDown, FiArrowUp} from 'react-icons/fi'
import Link from "next/link"
import Image from 'next/image'
import Cookies from 'js-cookie'
import axios from '../../../helper/axios'
import { useRouter } from 'next/router'

export default function ComHeadaer() {
  const navigate = useRouter()
  const [data, setData] = useState({})
  useEffect(()=> {
    getDatauser()
    // checkpin()
  }, [])
  const getDatauser =  async() => {
    try {
      const result = await axios.get(`/user/profile/${Cookies.get('id')}`)
      setData(result.data.data)
      console.log(result.data.data);
    } catch (e) {
      console.log(e);
    }
  }
  // const checkpin = async () => {
  //   try {
  //     const result2 = await axios.get('/user/pin')
  //     console.log(result2.data.msg);
  //   } catch (e) {
  //     console.log(e.response.data.msg);
  //     window.alert(e.response.data.msg)
  //     navigate.push('/auth/create-pin')
  //   }
    
  // }
  return (
    <>
    <Row className='d-flex flex-column flex-md-row align-items-md-center mw-100 m-0 shadow-sm round-bott bg-white'>
        <Col md={6} className='d-md-flex'>
          <div className="d-flex justify-content-start">
            <Link href='/home'>
              <a className="text-decoration-none">
                <span className="fw-bold fs-3 colorPrimary">FazzPay</span>
              </a>
            </Link>
          </div>
        </Col>
        <Col md={6}>
          <div className='d-flex p-3 p-md-0 justify-content-md-end align-items-center justify-content-between'>
            <div className="d-flex flex-row min-w-profile-nav gap-3 align-items-center">
              <Link href='/profile'>
                <a className="text-decoration-none">
                  <div className='image-frame-profile-header rounded-2 overflow-hidden'>
                    <Image src={data.image !== null ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${data.image}` : '/images/sam.png'} alt='aaaaaa' height={60} width={60} />
                  </div>
                </a>
                {/* <img className='img-fluid' src={ProfilePic} alt="profile pic"/> */}
              </Link>
              <div className="d-flex flex-column px-2">
                <span className="fw-bold textProfileName">{data.firstName} {data.lastName}</span>
                <span className="fw-normal textProfileNumber">{data.noTelp}</span>
              </div>
            </div>

            <Dropdown>
              <Dropdown.Toggle>
                <FiBell size={24} className='colorSecondary' />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div className="d-flex flex-column gap-3 p-3">
                  <span>Today</span>
                  <div className="d-flex flex-row justify-content-between p-3 align-items-center listHomeWarp shadow-sm">
                    <div className="d-flex flex-row gap-3">
                      <FiArrowDown className="colorIn" size={24} />
                      <div className="d-flex flex-column">
                        <span className="colorSecondaryTrans fontSize-14">Transfered from Joshua Lee</span>
                        <span className="fw-bold colorSecondary fontSize-18">Rp220.000</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between p-3 align-items-center listHomeWarp shadow-sm">
                    <div className="d-flex flex-row gap-3">
                      <FiArrowUp className="colorOut" size={24}/>
                      <div className="d-flex flex-column">
                        <span className="colorSecondaryTrans fontSize-14">Netflix subscription</span>
                        <span className="fw-bold colorSecondary fontSize-18">Rp149.000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column gap-3 mt-3 p-3">
                  <span>This Week</span>
                  <div className="d-flex flex-row justify-content-between p-3 align-items-center listHomeWarp shadow-sm">
                    <div className="d-flex flex-row gap-3">
                      <FiArrowUp className="colorOut" size={24}/>
                      <div className="d-flex flex-column">
                        <span className="colorSecondaryTrans fontSize-14">Transfer to Jessica Lee</span>
                        <span className="fw-bold colorSecondary fontSize-18">Rp100.000</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between p-3 align-items-center listHomeWarp shadow-sm">
                    <div className="d-flex flex-row gap-3">
                      <FiArrowDown className="colorIn" size={24}/>
                      <div className="d-flex flex-column">
                        <span className="colorSecondaryTrans fontSize-14">Top up from BNI E-Banking</span>
                        <span className="fw-bold colorSecondary fontSize-18">Rp300.000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>

        </Col>
      </Row>
    </>
  )
}
